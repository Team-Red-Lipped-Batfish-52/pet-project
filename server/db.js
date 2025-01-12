import mongoose from 'mongoose';
//import 'dotenv/config'; // If using dotenv

const uri = process.env.MONGODB_URI || "mongodb+srv://esheagren1995:2ZI*iUgkxD3dFhgo@petproject1.e8mxe.mongodb.net/?retryWrites=true&w=majority&appName=PetProject1";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

export default mongoose.connection; 