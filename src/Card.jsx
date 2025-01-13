import './fs-components-styles.css';
// import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ dog }) => {
  // Add null check before destructuring
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

  // const name = dog.name;
  // const breed = dog.breeds.primary;
  // const age = dog.age;
  // const gender = dog.gender;
  // const city = dog.contact.address.city;
  // const state = dog.contact.address.state;
  // const photoUrl = dog.primary_photo_cropped.small;

  // Multiple fallbacks for photo URL
  const photoUrl =
    dog.primary_photo_cropped?.small ||
    dog.photos?.[0]?.medium ||
    'https://g.petango.com/shared/Photo-Not-Available-dog.gif'; // Add a default image URL

  return (
    <div className='fs-card'>
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
