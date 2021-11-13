import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import paypal from '../../../images/paypal.png'
import stripe from '../../../images/stripe.png'

const Pay = () => {
    return (
        <div className="container py-5">
            <h2> Availble Payment Gateway!</h2>
            <Row>
                <Col md={3}></Col>
                <Col md={9}>
                <CardGroup>
                    <Card className="m-2">
                        <Card.Img className="img-fluid h-50" variant="top" src={paypal} />
                        <Card.Title>PayPal</Card.Title>
                        <Button>Pay Now</Button>
                    </Card>
                    <Card className="m-2">
                        <Card.Img className="img-fluid h-50" variant="top" src={stripe} />
                        <Card.Title>Stripe</Card.Title>
                        <Button>Pay Now</Button>
                    </Card>
                    </CardGroup>
                </Col>
            </Row>
        </div>
    );
};

export default Pay;