import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            
            <div className='flex justify-center p-10'>
                <CustomLink className='mr-4 font-bold' to="/">HOME</CustomLink>
                <CustomLink className='mr-4 font-bold' to="reviews">REVIEWS</CustomLink>
                <CustomLink className='mr-4 font-bold' to="dashboard">DASHBOARD</CustomLink>
                <CustomLink className='mr-4 font-bold' to="blogs">BLOGS</CustomLink>
                <CustomLink className='mr-4 font-bold' to="about">ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;




