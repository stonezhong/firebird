import React from 'react';
import ReactDOM from 'react-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ApplicationContainer } from '/components/business/appbase';

import {ApplicationPage} from '/common_lib';
import {get_pipeline} from '/apis';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';

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

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h1>Pipeline -- {this.props.pipeline.info.id}</h1>
                    </Col>
                </Row>

                <Row><Col><h2>Diagram</h2></Col></Row>
                <Row><Col>{ <div dangerouslySetInnerHTML={{ __html: this.props.svg }} /> }</Col></Row>

                <Row><Col><h2>Executors</h2></Col></Row>
                <BootstrapTable
                    keyField="info.id"
                    data={this.props.pipeline.executors}
                    filter={ filterFactory() }
                    bordered={false}
                    bootstrap4
                    columns={[
                        {
                            dataField: "info.id",
                            text: "Executor ID",
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
                        },
                        {
                            dataField: "info.start_time",
                            text: "Start Time (UTC)",
                        },
                        {
                            dataField: "info.worker_count",
                            text: "Worker Count",
                        },
                    ]}
                    classes="table-sm executor-table"
                    headerClasses="executor-table-header"
                >
                </BootstrapTable>
            </>
        )
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
            <PipelineApplicationPage pipeline={pipeline.pipeline} svg={pipeline.svg}/>
        </ApplicationContainer>,
        document.getElementById('app')
    );
});