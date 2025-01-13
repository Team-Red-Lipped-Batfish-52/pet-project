import './fs-components-styles.css';
// import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ dog, isFavorite, onToggleFavorite }) => {
  // Add null check before displaying
  if (!dog) {
    return (
      <div className='fs-card'>
        <p>No dog data available</p>
      </div>
    );
  }

  // Safely access properties with optional chaining and fallbacks
  const name = dog.name || 'Name not available';
  const breed = dog.breeds?.primary || 'Breed not available';
  const age = dog.age || 'Age not available';
  const gender = dog.gender || 'Gender not available';
  const city = dog.contact?.address?.city || 'City not available';
  const state = dog.contact?.address?.state || 'State not available';

  // laying out props to use them in the card
  // const id = dog.id;
  // const description = dog.description;
  // const distance = dog.distance;

  // Multiple fallbacks for photo URL
  const photoUrl =
    dog.primary_photo_cropped?.small ||
    dog.photos?.[0]?.medium ||
    'https://g.petango.com/shared/Photo-Not-Available-dog.gif'; // Default image, if none available

  return (
    <div className='fs-card'>
      <svg
        className={`heart ${isFavorite ? 'favorite' : ''}`}
        viewBox='0 0 32 29.6'
        onClick={(e) => {
          e.stopPropagation(); // Prevent card click event
          onToggleFavorite();
        }}
      >
        <path
          d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
        />
      </svg>
      <img src={photoUrl} alt={name} />
      <p>{name}</p>
      <p>Breed: {breed}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
};

// Add PropTypes validation
Card.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string,
    breeds: PropTypes.shape({
      primary: PropTypes.string,
    }),
    age: PropTypes.string,
    gender: PropTypes.string,
    contact: PropTypes.shape({
      address: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string,
      }),
    }),
    primary_photo_cropped: PropTypes.shape({
      small: PropTypes.string,
    }),
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        medium: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Card;
