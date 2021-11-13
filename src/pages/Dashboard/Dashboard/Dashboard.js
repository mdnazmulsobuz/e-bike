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
import DashboradHome from '../DashboardHome/DashboradHome';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import MyOrder from '../MyOrder/MyOrder';
import MyReview from '../MyReview/MyReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin, logOut} = useAuth();
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
                    {admin &&
                        <>
                            <Link to={`${url}/makeadmin`}><Button variant="light" className='w-100 my-2'>Make Admin</Button></Link>
                            <Link to={`${url}/manageorders`}><Button variant="light" className='w-100 my-2'>Manage Orders</Button></Link>
                            <Link to={`${url}/addproduct`}><Button variant="light" className='w-100 my-2'>Add Product</Button></Link>
                            <Link to={`${url}/manageproducts`}><Button variant="light" className='w-100 my-2'>Manage Products</Button></Link>
                        </>
                    }
                    {!admin && 
                        <>
                            <Link to={`${url}/pay`}><Button variant="light" className='w-100 my-2'>Pay Now</Button></Link>
                            <Link to={`${url}/myorder`}><Button variant="light" className='w-100 my-2'>My Order</Button></Link>
                            <Link to={`${url}/myreview`}><Button variant="light" className='w-100 my-2'>My Review</Button></Link>
                        </>
                    }
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
                <DashboradHome></DashboradHome>
            </Route>
            <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageorders`}>
                <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
            </AdminRoute>
            <Route path={`${path}/pay`}>
                <Pay></Pay>
            </Route>
            <Route path={`${path}/myorder`}>
                <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/myreview`}>
                <MyReview></MyReview>
            </Route>
      </Switch>
        </div>

        </div>
    );
};

export default Dashboard;


