const mongoose = require('mongoose');

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
      zipcode: String
    },
  },
  // Add any other fields you want to store
  savedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pet', petSchema);
