import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = ({reviews}) => {
    const {name, email, review, rate} = reviews;
    return (
        <div className='container col-md-3 co-sm-6 col-12 my-3'>
        <CardGroup>
            <Card>
                <Card.Body>
                   <Card.Text>
                        {review}
                    </Card.Text>
                   <Card.Text>
                        <Rating 
                        initialRating = {rate}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {email}
                    </Card.Text>
                </Card.Footer>
            </Card>
        </CardGroup>
    </div>
    );
};

export default Review;