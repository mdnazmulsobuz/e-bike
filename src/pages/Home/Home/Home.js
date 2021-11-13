import React from 'react';
import Reviews from '../../Reviews/Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Products from '../../Shop/Products/Products';
import Banner from '../Banner/Banner';
import TrustInfo from '../TrustInfo/TrustInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <TrustInfo></TrustInfo>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;