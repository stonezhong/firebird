import React from 'react';
import ReactDOM from 'react-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ApplicationContainer } from '/components/business/appbase';

import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, Comparator } from 'react-bootstrap-table2-filter';

import {ApplicationPage} from '/common_lib';
import {list_pipelines} from '/apis';

import './main.scss';

/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      console_uri_base: console_uri_base
 *      current_user: current user
 *      csrf_token:   the csrf token
 *      set_alert:    a function to set alert
 */

class HomeApplicationPage extends React.Component {

    state = {
        pipelines: this.props.pipelines
    };

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h1>Pipelines</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BootstrapTable
                            keyField="info.id"
                            data={this.state.pipelines}
                            filter={ filterFactory() }
                            bordered={false}
                            bootstrap4
                            columns={[
                                {
                                    dataField: "info.id",
                                    text: "ID",
                                    isDummyField: true,
                                    formatter: (cellContent, pipeline) => <a href={`pipelines/${pipeline.info.id}`} target="_blank">{pipeline.info.id}</a>,
                                    headerStyle: {
                                        width: "350px",
                                    },
                                },
                                {
                                    dataField: "namespace_name",
                                    text: "Namespace",
                                    headerStyle: {
                                        width: "200px",
                                    },
                                },
                                {
                                    dataField: "image_name",
                                    text: "Image",
                                    headerStyle: {
                                        width: "350px",
                                    },
                                },
                                {
                                    dataField: "module",
                                    text: "Module",
                                    headerStyle: {
                                        width: "350px",
                                    },
                                },
                                {
                                    dataField: "is_running",
                                    text: "Running",
                                    isDummyField: true,
                                    formatter: (cellContent, pipeline) => pipeline.is_running?"Yes":"No",
                                    headerStyle: {
                                        width: "80px",
                                    },
                                },
                                {
                                    dataField: "info.description",
                                    text: "Description",
                                },
                            ]}
                            classes="table-sm pipeline-table"
                            headerClasses="pipeline-table-header"
                        >
                        </BootstrapTable>
                    </Col>
                </Row>
            </>
        )
    }
}

$(async function() {
    const page = new ApplicationPage();

    const pipelines = await list_pipelines(page.console_uri_base);

    ReactDOM.render(
        <ApplicationContainer
            console_uri_base={page.console_uri_base}
            current_user={page.current_user}
            csrf_token={page.csrf_token}
            init_menu_key={page.init_menu_key}
            app_context={page.app_context}
        >
            <HomeApplicationPage pipelines={pipelines.pipelines}/>
        </ApplicationContainer>,
        document.getElementById('app')
    );
});