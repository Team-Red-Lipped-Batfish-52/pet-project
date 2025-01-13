// import React, { useEffect, useState } from 'react';

import SearchBar from './SearchBar';
import './fs-components-styles.css';

// this component displays filtering functionality in the left side
// and search bar (streach goal will be to implement autocomplete functionality)
// display flex in css
function SearchNavigation({ handleSearch, location }) {
  // const [dogs, setDogs] = useState([]);
  return (
    <div className='fs-search-nav'>
      <SearchBar handleSearch={handleSearch} location={location} />
    </div>
  );
}

export default SearchNavigation;
