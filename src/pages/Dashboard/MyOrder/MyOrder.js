import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Product from '../../Shop/Product/Product';

const MyOrder = () => {
    const {user } = useAuth();
    const [orders, setOrders] = useState([]);
    
    useEffect( () =>{
        fetch(`http://localhost:5000/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[user.email]);

    const handleDelete = id => {
        const confirmation = window.confirm("Are you sure to delete!!");
        const url = `http://localhost:5000/orders/${id}`;
        if (confirmation){
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
        })
    }
    }
    return (
        <div className='container py-5 my-5'> 
            <h2 className='text-primary'>Order Summary</h2>
            <h4 className='text-success'>Total Order:{orders.length}</h4> 
            <Row>
                <Col md={3}></Col>
                <Col md={9}>
                <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order)=>( 
                            
                            <tr key ={order._id}>
                                <td> {order._id}</td>
                                <td> <img src={order.img} alt="" /></td>
                                <td className='text-success fs-5'>{order.name}</td>
                                <td className='text-danger'>{order.status}</td>
                                <td>
                                    <button onClick={ ()=> handleDelete(order._id)} className=' btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
                </Col>
            </Row>
        </div>
    );
};

export default MyOrder;