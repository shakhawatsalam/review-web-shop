import React from 'react';

const Cart = ({review}) => {
    return (
        <div>
            <div className=''>
                <div className='bg-blue-500 w-[300px] lg:w-[400px] h-[450px] p-5 rounded-2xl mb-5 shadow-slate-800'>
                    <h1 className='text-center text-2xl font-medium mt-11'>Excellent Quality!</h1>
                    <h3 className='text-center text-xl font-normal mt-3 mb-5'>rating</h3>
                    <p className='text-center'>{ review.comment}</p>
                    <div className='w-[80px] h-[80px] rounded-xl mx-auto mt-5'>
                        <img className='h-full w-full rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h1 className='text-center font-medium text-base'>{ review.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;