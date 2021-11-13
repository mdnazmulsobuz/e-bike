import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import logo from '../../../images/logo.png';
import './Dashboard.css';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {logOut} = useAuth();
    return (
        <div className='dashboard'>
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <div><Navbar.Toggle aria-controls="offcanvasNavbar" /> DASHBOARD</div>
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-start ">
                    
                    <Link to='/home'><Button variant="light" className='w-100 my-2'>Home</Button></Link>
                    <Link to={`${url}`}><Button variant="light" className='w-100 my-2'>Dashboard</Button></Link>
                    <Link to={`${url}/makeadmin`}><Button variant="light" className='w-100 my-2'>Make Admin</Button></Link>
                    <Link to={`${url}/addproduct`}><Button variant="light" className='w-100 my-2'>Add Product</Button></Link>
                    <Button variant='light' onClick={logOut}>Logout</Button>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Navbar.Brand><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Brand></Navbar.Brand>
                
            </Container>
        </Navbar>
        <div>
        <Switch>
            <Route exact path={path}>
                <h2>May Dashboard</h2>
            </Route>
            <Route path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
            </Route>
      </Switch>
        </div>

        </div>
    );
};

export default Dashboard;


