import Pet from './models/Pet.js';

const petController = {};

petController.savePet = async (req, res, next) => {
  try {
    const petData = req.body;
    const newPet = new Pet(petData);

    //Saves newPet to MongoDB
    const savedPet = await newPet.save();

    res.locals.savedPet = savedPet;
    return next();
  } catch (error) {
    return next({
      log: `Error in petController.savePet: ${error}`,
      status: 500,
      message: 'Error saving pet to database',
    });
  }
};

petController.getFavorites = async (req, res, next) => {
  try {
    //find saved pet in MongoDB
    const favorites = await Pet.find({});
    res.locals.favorites = favorites;
    return next();
  } catch (error) {
    return next({
      log: `Error in petController.getFavorites: ${error}`,
      status: 500,
      message: 'Error retrieving favorites',
    });
  }
};

export default petController;
