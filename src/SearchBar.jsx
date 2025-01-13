// import { useState } from 'react';

import { useState } from 'react';

function SearchBar({ location, handleSearch }) {
  // let dogLocation;
  const [newLocation, setNewLocation] = useState('');

  return (
    <div className='fs-search-bar'>
      <p>See below results for dogs available within 100 miles of {location}</p>
      <div className='fs-search-wrapper'>
        <input
          type='search'
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          placeholder='Type your zip code, city or state'
        ></input>
        <button className='fs-button' onClick={() => handleSearch(newLocation)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
