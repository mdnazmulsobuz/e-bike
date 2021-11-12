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
                    <Button variant='light'><Nav.Link as={Link} to='/'>Home</Nav.Link></Button>
                    <Button variant='light'><Nav.Link as={Link} to={`${url}/addproduct`}>Add Product</Nav.Link></Button>
                    <Button variant='light'><Nav.Link as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link></Button>
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
        <Route path={path}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/:makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
        </div>

        </div>
    );
};

export default Dashboard;


