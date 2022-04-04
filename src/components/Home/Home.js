import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='flex items-center max-w-7xl  mx-auto justify-between min-h-[85vh]'>
        <div className='grid-rows-6'>
          <h1 className='text-7xl font-bold'>Your next phone</h1>
          <h1 className='text-6xl text-blue-600 font-bold'>Your best phone</h1>
          <p className='mt-10 text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iure vel quibusdam provident soluta labore atque, odit nemo reiciendis reprehenderit.</p>
          <button className='bg-blue-300 p-4 mt-10 rounded font-semibold'>Live demo</button>
        </div>
        <div className='w-[800px]'>
          <img src="https://www.startech.com.bd/image/cache/catalog/graphics-card/asus/asus-geforce-gt-730-2gb-gddr5-graphics-card/asus-geforce-gt-730-2gb-gddr5-graphics-card-01-500x500.jpg" alt="" />

        </div>
      </div>
      <h3 className='text-center text-5xl mb-10'>Customer Reviews</h3>
      <div className='flex justify-center bg-blue-500 max-w-sm  mx-auto rounded'><Link to='reviews'>See All Reviews</Link></div>
      
    </div>
  );
};

export default Home; 