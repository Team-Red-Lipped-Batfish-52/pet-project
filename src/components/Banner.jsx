import React from 'react';

// Banner component can persist across different pages
const Banner = () => {
  return (
    <header className='bg-blue-600 text-white py-4 shadow-lg'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold'>Pet Project</h1>
      </div>
    </header>
  );
};

export default Banner;
