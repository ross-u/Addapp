const mongoose = require('./../../db');

// Schema constructor
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
  {
    country: { type: String, default: '' },
    place: { type: String, default: '' },
    lng: { type: Number, default: 0 },
    lat: { type: Number, default: 0 }
  }, { _id : false });

// // Create a model instance on the current mongoose connection.
// const Location = mongoose.model('contacts', LocationSchema );

// Export the Schema to be used for Model Schema creation.
module.exports = LocationSchema;



/* location: {
  country: { type: String, default: '' },
  place: { type: String, default: '' },
  lng: { type: Number, default: 0 },
  lat: { type: Number, default: 0 }
} */