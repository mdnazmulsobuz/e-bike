import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const DashboradHome = () => {
    const {user} = useAuth();
    return (
        <>
          <Container className='py-5 my-5'>
            <Row>
                <h2 className='mb-3'>User Profile: </h2>
                <Col md={3}></Col>
                <Col md={9}>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Name:</th>
                    <th>{user.displayName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>E-mail: </td>
                    <td>{user.email}</td>
                    </tr>
                    <tr>
                    <td>Role: </td>
                    <td>{user.role}</td>
                    </tr>
                    <tr>
                    <td>Phone: </td>
                    <td>{user.phone}</td>
                    </tr>
                    <tr>
                    <td>Order Amount: </td>
                    <td>${}.00</td>
                    </tr>
                </tbody>
            </Table>

                </Col>
            </Row>
        </Container>
        </>
    );
};

export default DashboradHome;