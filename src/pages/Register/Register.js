import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const handleRegisterSubmit = e =>{

        e.preventDefault();
    }
    return (
        <div className='register py-5 mb-5'>
            <Container>
                <h2 className="pt-5 pb-3">Please Register Here!</h2>
            <form onSubmit={handleRegisterSubmit}>
                <input placeholder="Your-Name"  />
                <input type='email' placeholder="Your-Email"  />
                <input type='password' placeholder="Type Password" />
                <input type='password' placeholder="Re-type Password" />
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