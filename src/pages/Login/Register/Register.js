import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState();
    const {registerUser} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e =>{
        if(registerData.password !== registerData.password1){
            alert('Password did not match!')
            return
        }
        registerUser(registerData.email, registerData.password)
        e.preventDefault();
    }
    return (
        <div className='register py-5 mb-5'>
            <Container>
                <h2 className="pt-5 pb-3">Please Register Here!</h2>
            <form onSubmit={handleRegisterSubmit}>
                <input 
                    placeholder="Your-Name"
                    onChange={handleOnChange} 
                    name='name' />
                <input 
                    type='email' 
                    placeholder="Your-Email" 
                    onChange={handleOnChange}
                    name='email' />
                <input 
                    type='password' 
                    placeholder="Type Password"
                    onChange={handleOnChange} 
                    name='password'/>
                <input 
                    type='password' 
                    placeholder="Re-type Password"
                    name='password1'
                    onChange={handleOnChange} />
                <Button type='submit'>Register</Button>
            </form>
            <NavLink
                style={{textDecoration: 'none'}}
                to="/Login"><h5 style={{color: '#000'}} className="pt-3">Already Registered? Login Here.</h5>
            </NavLink>
            </Container>
        </div>
    );
};
export default Register;