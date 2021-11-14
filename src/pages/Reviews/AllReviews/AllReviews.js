import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Review from '../Review/Review';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://floating-earth-16094.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data =>setReviews(data));
    }, [])
    return (
        <div>
            <Header></Header>
        <div className='container py-5'>
            <h2>All Reviews</h2>
            <div className='row'>   
                {
                    reviews.length === 0 ? 
                    <Spinner animation="border" variant="primary" />
                    : 
                    reviews.map(r =><Review
                    key={r._id}
                    reviews={r}
                    ></Review>)
                }
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AllReviews;