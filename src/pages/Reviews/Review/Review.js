import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = ({reviews}) => {
    const {name, email, review, rate} = reviews;
    return (
        <div className='container col-md-3 co-sm-6 col-12 my-3'>
            <div className='review-info p-3'>
            <p>{review}</p>
            <p><Rating 
                initialRating = {rate}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly>
                </Rating>
            </p>
            <h5>{name}</h5>
            <h6>{email}</h6>      
            </div>      
    </div>
    );
};

export default Review;