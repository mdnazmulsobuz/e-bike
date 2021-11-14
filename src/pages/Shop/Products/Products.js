import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://floating-earth-16094.herokuapp.com/products')
        .then(res=>res.json())
        .then(data =>setProducts(data));
    }, [])
    return (
        <div className='container py-5'>
            <h2>Top Rates</h2>
            <div className='row'>   
                {
                    products.length === 0 ? 
                    <Spinner animation="border" variant="primary" />
                    : 
                    products.slice(0,6).map(p =><Product
                    key={p._id}
                    products={p}
                    ></Product>)
                }
            </div>
            <Link to='/shop'><button className='btn btn-success'>All Products</button></Link>
        </div>
    );
};

export default Products;