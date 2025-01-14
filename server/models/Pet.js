import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  id: Number,
  name: String,
  breeds: {
    primary: String,
    secondary: String,
    mixed: Boolean,
    unknown: Boolean,
  },
  age: String,
  gender: String,
  description: String,
  distance: Number,
  contact: {
    address: {
      city: String,
      state: String,
      zipcode: String,
    },
  },

  savedAt: { type: Date, default: Date.now },
  
});
//specify which collection to save to - dogInfo1
export default mongoose.model('Pet', petSchema, 'dogInfo1');
