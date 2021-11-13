import React, { useState } from 'react';
import {  Button } from 'react-bootstrap';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('false');

    const handleOnBlur = e =>{
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e =>{
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                setSuccess(true);
                alert('User Added as Admin Successfully');
            }else{!user && success(false);
                alert('Yor are put inavalid user.')
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
            </form>
            
        </div>
    );
};

export default MakeAdmin;