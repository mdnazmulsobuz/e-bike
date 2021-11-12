import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='sidenav active'>
            <img src= './logo.png'  alt='' />
            <ul>
                <li>
                    <Link to='/addproducts'>Add Product</Link>
                </li>
                <li>
                    <Link to='/makeadmin'>Make Admin</Link>
                </li>
                <li>
                    <Link to='/makeadmin'>Make Admin</Link>
                </li>
                <li>
                    <Link to='/makeadmin'>Make Admin</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;