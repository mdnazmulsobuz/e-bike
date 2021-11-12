import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Dashboard.css';
import {GiHamburgerMenu} from 'react-ic'
 
const Dashboard = () => {
    return (
        <div>
            <header> <GiHamburgerMenu /></header>
            <Navbar></Navbar>
        </div>
    );
};

export default Dashboard;