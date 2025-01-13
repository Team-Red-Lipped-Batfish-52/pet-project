import React, { useState } from 'react';

// UserProfile component manages saved pets and displays them
const UserProfile = () => {
  const [savedPets, setSavedPets] = useState([
    { id: 1, name: 'Fluffy', type: 'Dog' },
    { id: 2, name: 'Spot', type: 'Dog' },
    { id: 3, name: 'Cooper', type: 'Dog' },
  ]);

  return (
    <div className='bg-pink-200 rounded-lg p-6 w-64 sticky top-4'>
      <div className='mb-4'>
        <h2 className='text-xl font-bold mb-2'>Saved Pets</h2>
        <div className='text-md text gray-600'>Your Favorites</div>
      </div>

      <div className='space-y-2'>
        {savedPets.map((pet) => (
          <div
            key={pet.id}
            className='bg-white rounded-md p-3 shadow-sm hover:shadow-md transition-shadow'
          >
            <div className='font-medium'>{pet.name}</div>
            <div className='text-sm text-gray-500'>{pet.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
