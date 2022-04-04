import React from 'react';

const Cart = ({ review }) => {
    const { name, picture, comment, ratings, comment1 } = review;
    return (
        <div>
            <div className=''>
                <div className='bg-blue-500 w-[300px] lg:w-[400px] h-[450px] p-5 rounded-2xl mb-5 shadow-slate-800'>
                    <h1 className='text-center text-2xl font-medium mt-11'>{comment1}</h1>
                    <h3 className='text-center text-xl font-normal mt-3 mb-5'>Rating : "{ratings}"</h3>
                    <p className='text-center'>{comment}</p>
                    <div className='w-[80px] h-[80px] rounded-xl mx-auto mt-5'>
                        <img className='h-full w-full rounded-full' src={picture} alt="" />
                        <h1 className='text-center font-medium text-base'>{name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;