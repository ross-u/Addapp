const mongoose = require('../../db');
const LocationSchema = require('./LocationSchema');

const Schema = mongoose.Schema;

const PersonalSchema = new Schema(
  {
    fName: { type: String, default: '' },
    lName: { type: String, default: '' },
    age: { type: Number, min: 18, max: 110, default: 18 },
    occupation: { type: String, default: '' },
    birthday: { type: String, default: '' },
    nationality: { type: String, default: '' },
    birthplace: LocationSchema,
    currentLocation: LocationSchema,
  },
  { _id : false }
);

module.exports = PersonalSchema;
