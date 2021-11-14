import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://floating-earth-16094.herokuapp.com/products')
        .then(res=>res.json())
        .then(data =>setProducts(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <div className='container py-5'>
            <div className='row'>   
                {
                    products.length === 0 ? 
                    <Spinner animation="border" variant="primary" />
                    : 
                    products.map(p =><Product
                    key={p._id}
                    products={p}
                    ></Product>)
                }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Products;