import express from 'express';
import mongoose from 'mongoose';
// import db from './db.js';
import petController from './petController.js';
import connectDB from './db.js';

import Pet from './models/Pet.js'; //Imported Pet

const app = express();
const port = 3000;
app.use(express.json());

//Route to Middlware to save pet to MongoDB. 
app.post('/favorites', petController.savePet, (req, res) => {
  return res.status(200).json(res.locals.savedPet);
});

//Route to Middleware to get pet from saved/favorites in MongoDB
app.get('/favorites', petController.getFavorites, (req, res) => {
  return res.status(200).json(res.locals.favorites);
});

//Added a health check
app.get('/health', (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({ status: 'ok', database: dbStatus });
});


//Testing used in Postman to check if MongoDB was connected.
// app.post('/test', async (req, res) => {
//   try {
//     const database = mongoose.connection.db;
//     const collection = database.collection('pets');

//     // Sample pet data matching your API structure, added importing Pet
//     const testPet = new Pet({
//       id: 12345,
//       name: 'Test Dog',
//       breeds: {
//         primary: 'Golden Retriever',
//         secondary: null,
//         mixed: false,
//         unknown: false,
//       },
//       age: 'Young',
//       gender: 'Male',
//       description: 'A test pet entry',
//       distance: 50,
//       contact: {
//         address: {
//           city: 'Test City',
//           state: 'TS',
//         },
//       },
//     });
//     const result = await collection.insertOne(testPet);

//     res.json({
//       message: 'Test pet added successfully',
//       insertedId: result.insertedId,
//       pet: testPet,
//     });
//   } catch (error) {
//     console.error('Test route error:', error);
//     res.status(500).json({ error: error.message });
//   }
// });

//global error handler 
app.use((err, req, res, next)=> {
  console.error(err)
  //check for mongoose validation error
  if(err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'ValifationError',
      details: err.errors,
    });
  }
  //check for Cast Errors (invalid objectId)
  if(err.name === 'CastError'){
    return res.status(400).json({
      error: 'Invalid ID format',
      details: err.message,
    });
  }
  //Handle other types of errors
  res.status(500).json({
    error: 'Internal Server Error',
    details: err.message || 'An unknown error occured.',
  });
});

// Wrap server startup in async function
const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
