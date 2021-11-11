import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';



const PlaceOrder = () => {
    const {user} = useAuth();
    return (
        <div>
            <Header></Header>
            <h2>Place Order Here.</h2>
            <h2>{user.displayName}</h2> 
            <h3> {user.email}</h3>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;