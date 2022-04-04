import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-center p-10'>
                <Link className='mr-4 font-semibold' to="/">HOME</Link>
                <Link className='mr-4 font-semibold' to="reviews">REVIEWS</Link>
                <Link className='mr-4 font-semibold' to="dashboard">DASHBOARD</Link>
                <Link className='mr-4 font-semibold' to="blogs">BLOGS</Link>
                <Link className='mr-4 font-semibold' to="about">ABOUT</Link>
            </div>
        </div>
    );
};

export default Navbar;




