import express from 'express';
import db from './db.js';
import petController from './petController.js';

const app = express();
const port = 3000;
app.use(express.json());

// Your existing routes
app.post('/favorites', petController.savePet, (req, res) => {
  return res.status(200).json(res.locals.savedPet);
});

app.get('/favorites', petController.getFavorites, (req, res) => {
  return res.status(200).json(res.locals.favorites);
});

app.post('/test', async (req, res) => {
  try {
    const database = mongoose.connection.db;
    const collection = database.collection('pets');
    
    // Sample pet data matching your API structure
    const testPet = {
      id: 12345,
      name: "Test Dog",
      breeds: {
        primary: "Golden Retriever",
        secondary: null,
        mixed: false,
        unknown: false
      },
      age: "Young",
      gender: "Male",
      description: "A test pet entry",
      distance: 50,
      contact: {
        address: {
          city: "Test City",
          state: "TS"
        }
      }
    };

    const result = await collection.insertOne(testPet);
    res.json({ 
      message: 'Test pet added successfully', 
      insertedId: result.insertedId,
      pet: testPet 
    });
  } catch (error) {
    console.error('Test route error:', error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});