import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer bg-dark text-white pt-3 pb-1'>      
            <Container>
                <Row>
                    <Col md={6}>
                        <p>&copy; Copyright-2021 | All Rights Reserved | e-Bike.shop</p>
                    </Col>
                    <Col md={6}>
                        Facebook | Twitter | Instagram | Pinterest
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Footer;