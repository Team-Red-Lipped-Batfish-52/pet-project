import React, { useState } from 'react';
import Layout from '../components/Layout';
import ZipSearch from '../components/ZipSearch';
import InfoSection from '../components/InfoSection';

// LandingPage serves as main page of the application
const LandingPage = () => {
  const [newLocation, setNewLocation] = useState('');

  // useEffect(() => {
  //   if (!dogLocation) {
  //     setDogLocation(newLocation);
  //   }
  // }, []); // Empty dependency array means this runs once on mount

  return (
    <Layout newLocation={newLocation} setNewLocation={setNewLocation}>
      <div className='text-center mb-12'>
        <h2 className='text-4xl text-black font-bold mb-4'>
          Find Your Perfect Pet
        </h2>
        <p className='text-xl text-gray-600 mb-8'>
          Enter your ZIP code to discover adoptable pets near you
        </p>
        {/* ZIP Search component */}
        <ZipSearch newLocation={newLocation} setNewLocation={setNewLocation} />
        {/* Info Section component */}
        <InfoSection />
      </div>
    </Layout>
  );
};

export default LandingPage;
