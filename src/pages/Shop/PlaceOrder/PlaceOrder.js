import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const histroy = useHistory();
    const redirect_uri = '/shop';
    const {productId} = useParams();
    const [orderItem, setOrderItem] = useState({});
    const onSubmit = data => {
    const orderData ={
        name: orderItem.title,
        price: orderItem.price,
        user: data.name,
        email: data.email,
        city: data.city,
        phone: data.phone,
        
        }
        axios.post('http://localhost:5000/orders', orderData)
        .then(res =>{
            if(res.data.insertedId){
                alert('Order Submitted. Sucessfully Added On My Order.');
                histroy.push(redirect_uri);
            }
        })
    };
  
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res=>res.json())
        .then(data =>setOrderItem(data));
    }, [productId]);

    return (
        <div>
            <Header></Header>
            <div className='container py-5 my-5 package-form'>
            <Row>
                <Col>
                    <h5 className='mb-3'>Shipping/Billing Address</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}
                        <input placeholder='Address' defaultValue="" {...register("address")} />
                        <input placeholder='City' defaultValue="" {...register("city")} />
                        <input placeholder='Phone Number'defaultValue="" {...register("phone")} />
                        <Button type="submit">Place Order</Button> 
                    </form>
                </Col>
                <Col>
                    <div >
                        <Card>
                            <Card.Img variant="top" src={orderItem.img} alt="orderIteam-image" />
                            <Card.Body>
                            <Card.Title className='text-success'>{orderItem.title}</Card.Title>
                            <Card.Title>Prie: ${orderItem.price}.00</Card.Title>
                            <Card.Text>{orderItem.description}</Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                </Col>
            </Row>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;