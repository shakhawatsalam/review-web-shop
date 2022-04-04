import React from 'react';
import { Link } from 'react-router-dom';
import UserReviews from '../../hooks/UserReviews';
import Cart from '../Cart/Cart';

const Home = () => {
  const [reviews, setReviews] = UserReviews();
  return (
    <div>
      <div className='flex items-center max-w-7xl  mx-auto justify-between min-h-[85vh]'>
        <div className='grid-rows-6'>
          <h1 className='text-7xl font-bold'>Your next graphics cards</h1>
          <h1 className='text-6xl text-blue-600 font-bold'>Your best cards</h1>
          <p className='mt-10 text-2xl'>A graphics card is an expansion card for your PC that is responsible for rendering images to the display</p>
          <button className='bg-blue-300 p-4 mt-10 rounded font-semibold'>Live demo</button>
        </div>
        <div className='w-[800px]'>
          <img src="https://www.startech.com.bd/image/cache/catalog/graphics-card/asus/asus-geforce-gt-730-2gb-gddr5-graphics-card/asus-geforce-gt-730-2gb-gddr5-graphics-card-01-500x500.jpg" alt="" />

        </div>
      </div>
      <h3 className='text-center text-5xl mb-10'>Customer Reviews</h3>
      <div className="reviews max-w-7xl  mx-auto grid gap-2 grid-cols-3">
        
        {
          reviews.slice(0,3).map((review) =>
            <Cart
              review={review}
              key={review.id}
            ></Cart>
          )
        }
         
      </div>
      <div className='flex justify-center bg-blue-500 max-w-sm  mx-auto rounded h-[30px] mb-10'><Link className='font-bold mt-1' to='reviews'>See All Reviews</Link></div>
     

    </div>
  );
};

export default Home; 