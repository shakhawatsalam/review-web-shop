import React from 'react';

const Blogs = () => {
  return (
    <div className='flex justify-center flex-col items-center max-w-7xl  mx-auto'>
      <h1 className='text-5xl mb-5 mt-5 font-bold'>what is context api?</h1>
      <p className='text-4xl'>The context API is provided by React to solve the issue of sharing state between multiple components within an app. It's manage state globally.Using Context Api We can avoid Props Drilling. It's help's us to save our time and keeps Our code Clean.</p>
      <h1 className='text-5xl mb-5 mt-5 font-bold'>what is semantic tag?</h1>
      <p className='text-4xl'>Semantic tag Gives meaning to the tag. That Browser And the developer can easily Understand. Examples of non-semantic elements: div, span ..the examples of Semantic Elements is : from, table, and article tags.</p>
      <h1 className='text-5xl mb-5 mt-5 font-bold'>Comparison between Inline vs Block</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Inline</th>
            <th>Inline-Block</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='w-[300px] border-2 mr-5 text-lg font-semibold'>Inline elements can begin within a line of the HTML element and it never starts a new line for the HTML.</td>
            <td className='w-[300px] border-2 text-lg font-semibold'>Blocks cannot begin within a line os the HTML element and it always starts the new line of the HTML</td>

          </tr>
          <tr>
            <td className='w-[300px] border-2 mr-5 text-lg font-semibold'>The Width is defined only till the tags of inline extends.</td>
            <td className='w-[300px] border-2 text-lg font-semibold'>The width is more than inline and estended till the parant element extends</td>

          </tr>
          <tr>
            <td className='w-[300px] border-2 mr-5 text-lg font-semibold'>Inline element can break among the lines.</td>
            <td className='w-[300px] border-2 text-lg font-semibold'>Block Element cannot break among the lines.</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Blogs;