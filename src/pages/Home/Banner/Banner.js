import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg';
import banner1 from '../../../images/banner1.jpg';


const Banner = () => {
    return (
        <>
        <Carousel className='mb-5'>
            <Carousel.Item interval={1000}>
                <img className="d-block h-50 w-100" src={banner} alt="First slide"/>
                <Carousel.Caption>
                    <h2 className="text-dark fs-1 ">Live Life To The Fullest <br />
                    with e-Bike</h2>
                        <Link to="/shop"> <Button className="px-4">BUY NOW</Button></Link>  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block h-50 w-100" src={banner1} alt="First slide"/>
                <Carousel.Caption>
                    <h2 className="fs-1 ">Live Life To The Fullest <br /> with e-Bike</h2>
                    <Link to="/shop"> <Button className="px-4">BUY NOW</Button></Link> 
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Banner;