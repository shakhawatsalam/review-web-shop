import React from 'react';
import UserReviews from '../../hooks/UserReviews';
import Cart from '../Cart/Cart';

const Reviews = () => {
    const [reviews] = UserReviews();
    return (
        <div>
            <h1 className='text-3xl text-center mb-6 font-extrabold'>All reviews</h1>
            <div className="reviews max-w-7xl  mx-auto grid gap-2 grid-cols-3">
             {
          reviews.map((review) =>
            <Cart
                  review={review}
                  key={review.id}
            ></Cart>
          )
        }
        </div>
        </div>
    );
};

export default Reviews;