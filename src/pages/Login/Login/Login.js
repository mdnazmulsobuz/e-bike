import React, { useState } from 'react';
import { Container, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Login.css';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const {user, loginUser, isLoading, authError} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    
    return (
        <div  className='login py-5 mb-5'>
            <Container>
            <h2 className="pt-5 pb-3">Please Login Here!</h2>
            <form onSubmit={handleLoginSubmit}>
                <input 
                    type='email' 
                    placeholder="Your-Email"
                    name="email"
                    onChange={handleOnChange}  />
                <input 
                    type='password' 
                    name='password'
                    onChange={handleOnChange}
                    placeholder="Your-Password"  />
                <Button type='submit'>Login</Button>
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant= 'success'> Login Successfully Done.</Alert>}
                {authError && <Alert variant= 'danger'> {authError}</Alert>}
            </form>
            <NavLink
                style={{textDecoration: 'none'}}
                to="/register"><h5 style={{color: '#000'}} className="pt-3">New User? Register Here.</h5>
            </NavLink>
                
        </Container>
        </div>
    );
};

export default Login;