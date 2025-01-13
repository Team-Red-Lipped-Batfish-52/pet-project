import { useState, useEffect } from 'react';
import SearchNavigation from './SearchNavigation.jsx';
import SearchResults from './SearchResults.jsx';
import './fs-components-styles.css';
import { dogResults } from './results.js';
import fetchPetFinder from './fetching';
import UserProfile from './components/UserProfile.jsx';
import { useLocation } from 'react-router';

// this component simply acts as the main container for the search navigation and displaying of our results
export const SearchContainer = () => {
  const location = useLocation();
  // location.state is sent from ZipSearch
  // const newLocation = location.state?.newLocation;
  const newLocation = location.state.newLocation;

  // initially we're hardcoding an array of 20 elements (dogs)
  // each element (dog) in the array is an object with dog properties
  const initialDogs = dogResults.animals;

  const [dogLocation, setDogLocation] = useState('');
  const [dogs, updateDogs] = useState([]);
  const [favorites, setFavorites] = useState(new Set()); // Use Set for O(1) lookups

  const toggleFavorite = (dogId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(dogId)) {
        newFavorites.delete(dogId);
      } else {
        newFavorites.add(dogId);
      }
      return newFavorites;
    });
  };

  // hardcoding initial results
  useEffect(() => {
    const initializeData = async () => {
      try {
        if (newLocation) {
          setDogLocation(newLocation);
          const newDogs = await fetchPetFinder(newLocation);
          updateDogs(newDogs);
        } else {
          setDogLocation('06905');
          updateDogs(initialDogs);
        }
      } catch (error) {
        console.log('Error fetching dogs:', error);
      }
    };
    initializeData();
  }, []);

  // handleSearch is passed down as props and it's activated once the user pushes the search button
  async function handleSearch(location) {
    try {
      // sends a fetch request to the dog API based on the location parameter
      const newDogs = await fetchPetFinder(location); // Wait for Promise to resolve
      updateDogs(newDogs); // Update state with the resolved data
      setDogLocation(location); // update location
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  }

  return (
    <>
      <UserProfile />
      <SearchNavigation handleSearch={handleSearch} location={dogLocation} />
      <SearchResults
        dogs={dogs}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default SearchContainer;
