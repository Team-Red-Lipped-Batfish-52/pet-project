import React, { useCallback } from 'react';
import Layout from '../components/Layout';
import ZipSearch from '../components/ZipSearch';
import InfoSection from '../components/InfoSection';

// LandingPage serves as main page of the application
const LandingPage = () => {
  const handleSearchResults = useCallback((results) => {
    // Store the results in localStorage for Fabiano's search results page
    localStorage.setItem('petSearchResults', JSON.stringify(results));

    // Need to add navigation logic once search results page is connected
    // For now, we'll log the results
    console.log('Search Results:', results);

    // Navigate to the search results page (we'll need to update this path)
    window.location.href = './search-results';
  }, []);

  return (
    <Layout>
      <div className='text-center mb-12'>
        <h2 className='text-4xl text-black font-bold mb-4'>
          Find Your Perfect Pet
        </h2>
        <p className='text-xl text-gray-600 mb-8'>
          Enter your ZIP code to discover adoptable pets near you
        </p>

        {/* ZIP Search component */}
        <ZipSearch onSearch={handleSearchResults} />

        {/* Info Section component */}
        <InfoSection />
      </div>
    </Layout>
  );
};

export default LandingPage;
