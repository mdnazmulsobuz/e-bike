import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
// import useAuth from '../../../hooks/useAuth';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('false');
    // const {token} = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization' : `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                setEmail('');
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <div className='py-5 my-5'>
            <h2>Make me admin.</h2>
            <form onSubmit={handleAdminSubmit}>
                <input 
                    type='email' 
                    placeholder="Your-Email"
                    name="email"
                    onBlur={handleOnBlur}  />
                <Button className='mb-4' type='submit'>Make Admin</Button>
                {success && <Alert severity="success"> Admin add Successfully</Alert>}
            </form>
            
        </div>
    );
};

export default MakeAdmin;