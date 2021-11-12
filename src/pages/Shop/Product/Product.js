import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({products}) => {
    const {title, img, description, price, _id} = products;
    return (
        <div className='container col-lg-4 col-md-4 co-sm-6 col-12 my-3'>
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} alt= 'product-image' />
                <Card.Body>
                <Card.Title className='text-success'>{title}</Card.Title>
                <Card.Title className='text-primary'> ${price}.00</Card.Title>
                <Card.Text> {description} </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/placeorder/${_id}`}><button className='btn btn-primary px-4 my-2'>BUY NOW</button> 
                    </Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    </div>
    );
};

export default Product;