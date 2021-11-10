import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container error'>
            <Link to='/'> 
                <img src={error} alt='' />
            </Link>
        </div>
    );
};

export default NotFound;