import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
    axios.post('https://floating-earth-16094.herokuapp.com/products', data)
    .then(res=>{
        if(res.data.insertedId){
        alert('Product Added Successfully')
        reset();
        }
    })
    
  }
    return (
        <div className='py-5 m-3'>
            <h2>Add Product Here!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true})} placeholder='Product Title' />
                <input type="number" {...register("price")} placeholder='Product Price' />
                <input {...register("img")}  placeholder='Product Image'/>
                <textarea {...register("description")} placeholder='Product Description' />
                <Button type="submit">Submit</Button> 
            </form>
        </div>
    );
};

export default AddProduct;