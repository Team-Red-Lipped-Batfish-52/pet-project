// import { useState } from 'react';
import Card from './Card';
import './fs-components-styles.css';

const SearchResults = (props) => {
  // const [dogs, updateDogs] = useState(props);

  // random list of 10 pictures
  // const listOfPics = 'https://api.thecatapi.com/v1/images/search?limit=10';

  // fetchPetfinder();

  // loop through displaying a list of 20 cards default in a grid
  // user is allowed to change number of cards displayed
  // use display grid to display this grid of cards
  // stretch goal is to implement responsive functionality

  // Key should be coming from our data
  return (
    <div className='fs-search-results'>
      {props.map((dog) => (
        <Card props={dog} key={dog.id} />
      ))}
    </div>
  );
};

export default SearchResults;
