import './fs-components-styles.css';

function Card() {
  // const name = dog.name;
  // const breed = dog.breeds.primary;
  // const age = dog.age;
  // const gender = dog.gender;
  // const description = dog.description;
  // const distance = dog.distance;
  // const city = dog.contact.address.city;
  // const state = dog.contact.address.state;
  // const photoUrl = dog.photos[0].medium;

  // for testing
  const animalObj = {
    name: 'Kittie',
    breed: 'cavapoo',
    url: 'https://cdn2.thecatapi.com/images/g7.jpg',
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
}

export default Card;
