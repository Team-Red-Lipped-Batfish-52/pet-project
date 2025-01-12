import './fs-components-styles.css';
// import React from 'react';
// import PropTypes from 'prop-types';

const Card = ({ props, key }) => {
  // const id = props.id;
  // const name = props.name;
  // const breed = props.breeds.primary;
  // const age = props.age;
  // const gender = props.gender;
  // const description = props.description;
  // const distance = props.distance;
  // const city = props.contact.address.city;
  // const state = props.contact.address.state;
  // const photoUrl = props.photos[0].medium;
  // console.log(id);
  // console.log(name);
  // console.log(breed);
  // console.log(age);
  // console.log(gender);
  // console.log(description);
  // console.log(distance);
  // console.log(city);
  // console.log(state);
  // console.log(photoUrl);

  console.log(props);
  console.log(key);
  // for testing
  const animalObj = {
    name: 'Kittie',
    breed: 'cavapoo',
    photoUrl: 'https://cdn2.thecatapi.com/images/g7.jpg',
    width: 534,
    height: 800,
  };
  // const url = 'https://cdn2.thecatapi.com/images/gt.jpg';

  // const props = url;

  return (
    <div className='fs-card'>
      <img src={animalObj.url} width='234' height='600' alt='' />
      <p>{animalObj.name}</p>
      <p>{animalObj.breed}</p>
    </div>
  );
};

export default Card;
