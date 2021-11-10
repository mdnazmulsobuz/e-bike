import React from 'react';
import { Col, Row } from 'react-bootstrap';
import delivery from '../../../images/1.svg'
import shipping from '../../../images/2.svg'
import support from '../../../images/3.svg'

const TrustInfo = () => {
    return (
        <div className='container trustinfo'>
            <Row>
                <Col className="card col-lg-4 col-md-3 co-sm-6 col-12 m-2">
                    <div className="row g-2">
                    <div className="col-md-4">
                    <img src={delivery} className="img-fluid pt-5 w-50" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Free Same Day Delivery*</h5>
                        <p className="card-text">Product any fault within 07 days for an immediately exchange.</p>
                    </div>
                    </div>
                    </div>
                </Col>
                <Col className="card col-lg-4 col-md-3 co-sm-6 col-12 m-2">
                    <div className="row g-2">
                    <div className="col-md-4">
                    <img src={shipping} className="img-fluid pt-5 w-50" alt="" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">International Shipping</h5>
                        <p className="card-text">Free worldwide shipping on all Area order above $100</p>
                    </div>
                    </div>
                    </div>
                </Col>
                <Col className="card col-lg-4 col-md-3 co-sm-6 col-12 m-2">
                    <div className="row g-2">
                    <div className="col-md-4">
                    <img src={support} className="img-fluid pt-5 w-50" alt="" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">24/7 Friendly Support</h5>
                        <p className="card-text">Our Support Team Always Ready For You to 7 days a week</p>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default TrustInfo;