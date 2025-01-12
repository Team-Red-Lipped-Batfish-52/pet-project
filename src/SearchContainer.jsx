import React, { useState, useEffect } from 'react';
import { SearchNavigation } from './SearchNavigation';
import { SearchResults } from './SearchNavigation';
import './fs-components-styles.css';
import { dogResults } from './results.js';

// this component simply acts as a container
export const SearchContainer = () => {
  const initialDogs = dogResults.animals;

  const [dogs, updateDogs] = useState(initialDogs);

  return (
    <div>
      <SearchNavigation props={dogs} />
      <SearchResults props={dogs} />
    </div>
  );
};

export default SearchContainer;
