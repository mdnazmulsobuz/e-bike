import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='container col-md-3 co-sm-6 col-12 my-3'>
        <CardGroup>
            <Card>
                <Card.Body>
                   <Card.Text>
                        Rating area 5
                    </Card.Text>
                   <Card.Text>
                        "Review Area"
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>
                        User Name
                    </Card.Title>
                    <Card.Text>
                        User Email @
                    </Card.Text>
                </Card.Footer>
            </Card>
        </CardGroup>
    </div>
    );
};

export default Review;