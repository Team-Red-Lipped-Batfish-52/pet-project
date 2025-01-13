import React, { useState } from 'react';
import { searchPets } from '../utils/petfinderApi';

// ZipSearch component handles ZIP code input and search functionality
const ZipSearch = ({ onSearchResults }) => {
  const [zipCode, setZipCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ZIP code validation
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(/^\d{5}(-\d{4})?$/);

    if (zipCode.length === 5 && isValidZip) {
      setError('Please enter a valid 5-digit ZIP code');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Make the API call to PetFinder
      const searchResults = await searchPets(zipCode);

      // Pass the results to the parent component
      onSearchResults({
        pets: searchResults.animals,
        pagination: searchResults.pagination,
        zipCode: zipCode,
      });
    } catch (err) {
      setError('Failed to fetch pets. Please try again.');
      console.error('Search errror:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='mb-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Enter ZIP code'
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${error ? 'border-red-500' : 'border-gray-300'}`}
            maxLength='5'
            value={zipCode}
            onChange={(e) => {
              setError(null);
              setZipCode(e.target.value);
            }}
            disabled={isLoading}
          />
          <button
            type='submit'
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 
              ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } 
              text-white px-6 py-2 rounded-md transition-colors`}
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && <div className='text-red-500 text-sm mt-2'>{error}</div>}
    </div>
  );
};

export default ZipSearch;