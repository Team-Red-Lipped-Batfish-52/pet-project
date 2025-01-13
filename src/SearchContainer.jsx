// import React, { useState, useEffect } from 'react';
import { useState } from 'react';
import SearchNavigation from './SearchNavigation.jsx';
import SearchResults from './SearchResults.jsx';
import './fs-components-styles.css';
import { dogResults } from './results.js';
import fetchPetFinder from './fetching';

// this component simply acts as the main container for the searching and displaying of our results
// which is done in subcomponents
export const SearchContainer = () => {
  // initially we're hardcoding an array of 20 elements (dogs)
  // each element (dog) on the array is an object with properties related to the dog
  const initialDogs = dogResults.animals;
  // console.log(initialDogs);

  const [location, setLocation] = useState('');
  const [dogs, updateDogs] = useState(initialDogs);
  // updateDogs();
  // how do I make reference to the zipcode the user typed into this component?
  // updateDogs(fetchPetFinder(location));

  // updateDogs(() => initialDogs);

  // function handleSearch(location) {
  //   setLocation(location);
  //   updateDogs(fetchPetFinder(location));
  // }

  async function handleSearch(location) {
    setLocation(location);
    try {
      const newDogs = await fetchPetFinder(location); // Wait for Promise to resolve
      updateDogs(newDogs); // Update state with the resolved data
    } catch (error) {
      console.error('Error fetching dogs:', error);
      // Optionally handle the error state
    }
  }

  // place fetching function here so that we may pass it as props to lower components

  return (
    <>
      <SearchNavigation handleSearch={handleSearch} location={location} />
      <SearchResults dogs={dogs} />
    </>
  );
};

export default SearchContainer;
