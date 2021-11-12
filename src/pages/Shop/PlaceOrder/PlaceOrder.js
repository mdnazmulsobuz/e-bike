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
            <h4>{user.displayName}</h4>
            <h5>{user.email}</h5>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;