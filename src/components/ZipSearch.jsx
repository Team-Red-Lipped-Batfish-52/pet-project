import React, { useState } from 'react';
import { searchPets } from '../utils/petfinderApi';
import { Link, useNavigate } from 'react-router-dom';

// ZipSearch component handles ZIP code input and search functionality
const ZipSearch = ({ newLocation, setNewLocation }) => {
  const navigate = useNavigate();

  return (
    <div className='w-full max-w-md mx-auto'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Enter ZIP code'
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
          /* ${error} ? 'border-red-500' : 'border-gray-300'}`*/
          maxLength='5'
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          /*disabled={isLoading}*/
        />
        <button
          type='submit'
          className={`absolute right-2 top-1/2 transform -translate-y-1/2`}
          /* ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } 
              text-white px-6 py-2 rounded-md transition-colors`}
          disabled={isLoading} */
          onClick={() => navigate('search-page', { state: { newLocation } })}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default ZipSearch;
