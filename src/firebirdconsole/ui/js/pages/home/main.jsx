import React from 'react';
import ReactDOM from 'react-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { ApplicationContainer } from '/components/business/appbase';

import {ApplicationPage} from '/common_lib';
import {list_pipelines} from '/apis';

/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      current_user: current user
 *      csrf_token:   the csrf token
 *      set_alert:    a function to set alert
 */

class HomeApplicationPage extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col>
                        <h1>Home Page</h1>
                    </Col>
                </Row>
            </>
        )
    }
}

$(async function() {
    const page = new ApplicationPage();

    const pipelines = await list_pipelines();
    console.log(pipelines);

    ReactDOM.render(
        <ApplicationContainer
            current_user={page.current_user}
            csrf_token={page.csrf_token}
            init_menu_key={page.init_menu_key}
            app_context={page.app_context}
        >
            <HomeApplicationPage />
        </ApplicationContainer>,
        document.getElementById('app')
    );
});