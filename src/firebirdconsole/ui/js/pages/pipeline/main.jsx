import React from 'react';
import ReactDOM from 'react-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import { ApplicationContainer } from '/components/business/appbase';

import {ApplicationPage, setStateAsync} from '/common_lib';
import {get_pipeline, stop_executor} from '/apis';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';

import {DlgBoxAgent, DialogBoxStackProvider} from '/components/generic/dialogbox';

import './main.scss';

/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      current_user: current user
 *      csrf_token:   the csrf token
 *      set_alert:    a function to set alert
 */

class PipelineApplicationPage extends React.Component {
    state = {
        diagramDirection: "lr"
    }

    node_to_html = node => <div>
        <Row><Col><h2>{node.title}</h2></Col></Row>
        <Row><Col><pre>ID: {node.id}</pre></Col></Row>
        <Row><Col><h2>Description</h2></Col></Row>
        <Row><Col><p>{node.description}</p></Col></Row>
        <Row><Col><h2>Ports</h2></Col></Row>
        <Row><Col>
            <BootstrapTable
                keyField="id"
                data={node.ports}
                filter={ filterFactory() }
                bordered={false}
                bootstrap4
                columns={[
                    {
                        dataField: "id",
                        text: "Port ID",
                    },
                    {
                        dataField: "type",
                        text: "Port Type",
                    },
                    {
                        dataField: "connectedPorts",
                        text: "Connected Ports",
                        isDummyField: true,
                        formatter: (cell, row) => row.connected_ports.join(',')
                    },
                ]}
                classes="table-sm executor-table"
                headerClasses="executor-table-header"
            >
            </BootstrapTable>
        </Col></Row>
        
    </div>

    renderWithDialog = dbsRef => {
        return (
            <>
                <Row>
                    <Col>
                        <h1>Pipeline -- {this.props.pipeline.info.title}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <pre>ID: {this.props.pipeline.info.id}</pre>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Description</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.pipeline.info.description}
                    </Col>
                </Row>

                <Row><Col>
                    <Stack direction="horizontal" gap={3}>
                        <h2>Diagram</h2>
                        <Form style={{width: "300px"}}>
                            <Form.Group as={Row} controlId="direction">
                                <Form.Label column sm="4">Direction</Form.Label>
                                <Col sm="8">
                                    <Form.Select
                                        onChange={event => {
                                            setStateAsync(this, {diagramDirection:event.target.value})
                                        }}
                                        value={this.state.diagramDirection}
                                    >
                                        <option value="lr">Left to right</option>
                                        <option value="tb">Top to bottom</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Stack>
                </Col></Row>

                <Row><Col>
                    { <div 
                        dangerouslySetInnerHTML={{ __html: this.state.diagramDirection==='lr'?this.props.svg_lr: this.props.svg_tb}} 
                        className='svg-wrapper-div'
                        onClick={event => {
                            const nodeId = event.target.parentNode.parentNode.parentNode.getElementsByTagName("title")[0].textContent;
                            event.stopPropagation();
                            event.preventDefault();

                            const node = _.find(this.props.pipeline.info.nodes, {'id': nodeId});

                            dbsRef.current.openDialog({
                                title: node.title,
                                size: "md",
                                content: this.node_to_html(node)
                            });
                        }}
                    /> }
                </Col></Row>

                <Row><Col><h2>Executors</h2></Col></Row>
                <BootstrapTable
                    keyField="info.id"
                    data={this.props.pipeline.executors}
                    filter={ filterFactory() }
                    bordered={false}
                    bootstrap4
                    columns={[
                        {
                            dataField: "tools",
                            text: "",
                            isDummyField: true,
                            formatter: (cell, row) => <>
                                {!row.stop && <Button 
                                    variant="primary" 
                                    size="sm"
                                    onClick={async event => {
                                        await stop_executor(this.props.pipeline.info.id, row.info.id, this.props.csrf_token);
                                    }}
                                >Stop</Button>}
                                </>,
                                headerStyle: {
                                    width: "80px"
                                }
                        },
                        {
                            dataField: "info.id",
                            text: "Executor ID",
                            headerStyle: {
                                width: "320px"
                            }
                        },
                        {
                            dataField: "info.docker_host_name",
                            text: "Docker Host Name",
                        },
                        {
                            dataField: "info.docker_container_name",
                            text: "Docker Container Name",
                        },
                        {
                            dataField: "info.pid",
                            text: "PID",
                            headerStyle: {
                                width: "120px"
                            },
                            style: {
                                fontFamily: "monospace",
                                textAlign: "center",
                            }
                        },
                        {
                            dataField: "info.start_time",
                            text: "Start Time (UTC)",
                            headerStyle: {
                                width: "200px"
                            },
                            style: {
                                fontFamily: "monospace",
                                textAlign: "center",
                            }
                        },
                        {
                            dataField: "info.worker_count",
                            text: "Worker Count",
                            headerStyle: {
                                width: "120px"
                            },
                            style: {
                                fontFamily: "monospace",
                                textAlign: "center",
                            }
                        },
                        {
                            dataField: "stop",
                            text: "Status",
                            isDummyField: true,
                            formatter: (cell, row) => row.stop?"Shutdown in Progress":"Running",
                            headerStyle: {
                                width: "250px"
                            },
                            style: {
                                fontFamily: "monospace",
                            }
                        },
                    ]}
                    classes="table-sm executor-table"
                    headerClasses="executor-table-header"
                >
                </BootstrapTable>
            </>
        )

    }

    render() {
        return <DialogBoxStackProvider.Consumer>
            {this.renderWithDialog}
        </DialogBoxStackProvider.Consumer>
    }
}

$(async function() {
    const page = new ApplicationPage();

    const pipeline = await get_pipeline(page.app_context.pipeline_id);

    ReactDOM.render(
        <ApplicationContainer
            current_user={page.current_user}
            csrf_token={page.csrf_token}
            init_menu_key={page.init_menu_key}
            app_context={page.app_context}
        >
            <PipelineApplicationPage 
                pipeline={pipeline.pipeline} 
                svg_lr={pipeline.svg_lr}
                svg_tb={pipeline.svg_tb}
            />
        </ApplicationContainer>,
        document.getElementById('app')
    );
});
