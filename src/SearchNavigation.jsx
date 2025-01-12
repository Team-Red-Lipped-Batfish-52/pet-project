// import React, { useEffect, useState } from 'react';
import Filtering from './Filtering';
import SearchBar from './SearchBar';
import './fs-components-styles.css';

// this component displays filtering functionality in the left side
// and search bar (streach goal will be to implement autocomplete functionality)
// display flex in css
function SearchNavigation() {
  // const [dogs, setDogs] = useState([]);
  return (
    <div className='fs-search-nav'>
      <Filtering />
      <SearchBar />
    </div>
  );
}

export default SearchNavigation;
