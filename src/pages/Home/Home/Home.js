import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../../Shop/Products/Product';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import TrustInfo from '../TrustInfo/TrustInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Product></Product>
            <TrustInfo></TrustInfo>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;