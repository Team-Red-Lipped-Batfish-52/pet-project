import React, { useEffect, useState } from 'react';
import Card from './Card';
import './fs-components-styles.css';
// import fetchPetfinder from './fetching';

const SearchResults = ({ dogs }) => {
  // random list of 10 pictures
  // const listOfPics = 'https://api.thecatapi.com/v1/images/search?limit=10';

  // fetchPetfinder();

  // loop through displaying a list of 20 cards default in a grid
  // user is allowed to change number of cards displayed
  // use display grid to display this grid of cards
  // stretch goal is to implement responsive functionality

  return (
    <div className='fs-search-results'>
      {dogs.map((item) => (
        <Card dog={item} key={item.data} />
      ))}
    </div>
  );
};

export default SearchResults;
