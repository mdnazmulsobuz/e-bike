import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        const confirmation = window.confirm("Are you sure to detlete products!!");
        if(confirmation){
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            }
        })
    }
    };

    return (
        <div className='container py-5 my-5'> 
            <h2 className='text-primary'>Manage All Products</h2>
            <h4 className='text-success'>Total Products:{products.length}</h4>
            <Row>
                <Col md={3}></Col>
                <Col md={9}>
                <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">Product Image</th> 
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>  
                        <th scope="col">Cancle</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=>(
                            <tr key ={product._id}>
                                <td><img src={product.img} alt="" /></td>
                                <td className='text-success fs-5'>{product.title}</td>
                                <td>{product.price}</td>
                                
                                <td>
                                    <button onClick={ ()=> handleDelete(product._id)} className=' btn btn-danger'>Remove</button>
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

export default ManageProducts;