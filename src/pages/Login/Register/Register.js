import React, { useState } from 'react';
import { Container, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();
    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e =>{
        if(registerData.password !== registerData.password1){
            alert('Password did not match!')
            return
        }
        registerUser(registerData.email, registerData.password, registerData.name, history)
        e.preventDefault();
    }
    return (
        <div>
            <div className='register pb-5 mb-5'>
            <Container>
                <h2 className="pt-5 pb-3">Please Register Here!</h2>
            {!isLoading && <form onSubmit={handleRegisterSubmit}>
                <input 
                    placeholder="Your-Name"
                    onBlur={handleOnBlur} 
                    name='name' />
                <input 
                    type='email' 
                    placeholder="Your-Email" 
                    onBlur={handleOnBlur}
                    name='email' />
                <input 
                    type='password' 
                    placeholder="Type Password"
                    onBlur={handleOnBlur} 
                    name='password'/>
                <input 
                    type='password' 
                    placeholder="Re-type Password"
                    name='password1'
                    onBlur={handleOnBlur} />
                <Button  className='mb-4' type='submit'>Register</Button> <br />
                {isLoading && <Spinner animation="grow" />}
                {user?.email && <Alert variant= 'success'> Registration Successfully Done.</Alert>}
                {authError && <Alert variant= 'danger'> {authError}</Alert>}
            </form>}
            
            <NavLink
                style={{textDecoration: 'none'}}
                to="/Login"><h5 style={{color: '#000'}} className="pt-3">Already Registered? Login Here.</h5>
            </NavLink>
            </Container>
        </div>
        </div>
    );
};
export default Register;