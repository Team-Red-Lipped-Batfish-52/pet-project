import React from 'react';
import DogImage1 from '../assets/pexels-gilberto-reyes-259461-825947.jpg';
import DogImage2 from '../assets/pexels-lucasandrade-4681107.jpg';
import DogImage3 from '../assets/pexels-valeriya-1805164.jpg';

const FeatureCard = ({ title, description, imageLabel, imageSrc }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-md'>
      <div className='bg-gray-200 h-48 flex items-center justify-center'>
        <img src={imageSrc} alt={imageLabel} className='h-full object-cover' />
      </div>
      <div className='p-4 bg-white'>
        <h4 className='font-medium'>{title}</h4>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

// InfoSection component displays project information and feature highlights
const InfoSection = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-8 mb-12'>
      <h3 className='text-2xl font-semibold mb-4'>About Pet Project</h3>
      <p className='text-gray-700 mb-6'>
        The Pet Project mission is to connect loving homes with pets in need of
        adoption. Our platform provides a seamless experience to finding your
        perfect companion from local shelters and rescue organizations. Start
        your search today and discover the joy that a new pet brings into your
        life and home!
      </p>
      <div className='grid grid-cols-3 gap-6'>
        {/* Feature Cards */}
        <FeatureCard
          title='Local Shelters'
          description='Find pets near you'
          imageLabel='Dog Image 1'
          imageSrc={DogImage1}
        />
        <FeatureCard
          title='Easy Search'
          description='Filter by location'
          imageLabel='Dog Image 2'
          imageSrc={DogImage2}
        />
        <FeatureCard
          title='Save Favorites'
          description='Track potential matches'
          imageLabel='Dog Image 3'
          imageSrc={DogImage3}
        />
      </div>
    </div>
  );
};

export default InfoSection;
