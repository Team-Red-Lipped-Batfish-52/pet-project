import React, { useEffect, useState } from 'react';
import Filtering from './Filtering';
import './fs-components-styles.css';

// this component displays filtering functionality in the left side
// and search bar (streach goal will be to implement autocomplete functionality)
// display flex in css
function SearchNavigation({ props }) {
  const [dogs, updateDogs] = useState([]);
  return (
    <div className='fs-search-nav'>
      <Filtering props={props} />
      <input type='search' placeholder='Type your zip code...'></input>
    </div>
  );
}

export default SearchNavigation;
