import React from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" className='fs-5 fw-normal' >
                <Container>
                <Navbar.Brand as={Link} to="/"><img src="/logo.png" width="200" height="60" alt="logo"/></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                        <Nav.Link as={Link} to="/allreview">Review</Nav.Link>
                        {
                            user?.email ? 
                               <>
                               <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                               <Button className="btn-dark" onClick={logOut}>Logout</Button>
                               </>
                            :
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;