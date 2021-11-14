import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = (data) =>{
        axios.post('https://floating-earth-16094.herokuapp.com/reviews', data)
    .then(res=>{
        if(res.data.insertedId){
        alert('Review Added Successfully')
        reset();
        }
    })
    }

    return (
        <div className='py-5'>
            <h2>Your Feedbak!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input type="number" {...register("rate", {required: true, min: 1, max: 5})} 
                placeholder='Rate Me: (1-5)' />
                {errors.rate && "Not More than - (1-5)"}
                <textarea {...register("review")} placeholder='Type your feedbak.' />
                <Button type="submit">Submit</Button> 
            </form>   
        </div>
    );
};

export default MyReview;