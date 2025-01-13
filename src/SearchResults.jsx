import Card from './Card';
import './fs-components-styles.css';
import PropTypes from 'prop-types';

const SearchResults = ({ dogs, favorites, onToggleFavorite }) => {
  console.log('Dogs in SearchResults:', dogs); // verify data

  // in case dogs is still not resolved
  // if (!dogs) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className='fs-search-results'>
      {dogs.map((dog) => (
        <Card
          dog={dog}
          key={dog.id}
          isFavorite={favorites.has(dog.id)}
          onToggleFavorite={() => onToggleFavorite(dog.id)}
        />
      ))}
    </div>
  );
};

// Add PropTypes validation
SearchResults.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
