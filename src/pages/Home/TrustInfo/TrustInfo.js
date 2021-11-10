import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import delivery from '../../../images/1.svg'
import shipping from '../../../images/2.svg'
import support from '../../../images/3.svg'
import './TrustInfo.css';

const TrustInfo = () => {
    return (
        <div className=' py-5 trust-section'>
            <Container>
            <Row className="my-5">
                <Col className="col-md-4 co-sm-6 col-12 trustinfo">
                    <div className="row ">
                    <div className="col-md-4">
                    <img src={delivery} className="img-fluid pt-2 w-50" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <h5 >Free Same Day Delivery*</h5>
                        <p >Product any fault within 07 days for an immediately exchange.</p>
                    </div>
                    </div>
                </Col>
                <Col className=" col-md-4 co-sm-6 col-12 trustinfo">
                    <div className="row ">
                    <div className="col-md-4">
                    <img src={shipping} className="img-fluid pt-2 w-50" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5 >International Shipping</h5>
                        <p >Free worldwide shipping on all Area order above $100</p>
                    </div>
                    </div>
                </Col>
                <Col className="col-md-4 co-sm-6 col-12 trustinfo ">
                    <div className="row ">
                    <div className="col-md-4">
                    <img src={support} className="img-fluid pt-2 w-50" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h5 >24/7 Friendly Support</h5>
                        <p >Our Support Team Always Ready For You to 7 days a week</p>
                    </div>
                    </div>  
                </Col>
            </Row>
            </Container>
            
        </div>
    );
};

export default TrustInfo;