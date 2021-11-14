import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://floating-earth-16094.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data =>setReviews(data));
    }, [])
    return (
        <div className='container py-5'>
            <h2>Latest Reviews</h2>
            <div className='row'>   
               
                {
                    reviews.length === 0 ? 
                    <Spinner animation="border" variant="primary" />
                    : 
                    reviews.slice(0,8).map(r =><Review
                    key={r._id}
                    reviews={r}
                    ></Review>)
                }
            
            </div>
            <Link to='/allreview'><button className='btn btn-success'>Load More</button></Link>
        </div>
    );
};

export default Reviews;