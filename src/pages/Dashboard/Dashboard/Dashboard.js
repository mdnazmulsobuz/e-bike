import React from 'react';

import {  Col, Row } from 'react-bootstrap';
 
const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col md={3}>
                    sidebar
                </Col>
                <Col md={9}>
                    container
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;