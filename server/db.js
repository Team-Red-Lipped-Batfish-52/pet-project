import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize dotenv only once - remove the duplicate import and config
dotenv.config();

// Add connection status tracking
let isConnected = false;

console.log(process.env.MONGODB_URI);

// Log environment status
console.log('Environment variables loaded:', {
  MONGODB_URI: process.env.MONGODB_URI ? 'URI is set' : 'URI is not set',
  NODE_ENV: process.env.NODE_ENV,
});

const uri = process.env.MONGODB_URI;

// Verify URI exists before attempting connection
if (!uri) {
  console.error('MONGODB_URI environment variable is not set');
  process.exit(1);
}

// Create a connection function that ensures we have a database connection
const connectDB = async () => {
  if (isConnected) {
    console.log('Using existing database connection');
    return mongoose.connection;
  }

  console.log('Attempting database connection...');

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Set up connection event handlers
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
      isConnected = false;
    });

    return conn.connection;
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Export both the connection function and mongoose instance
export default connectDB;