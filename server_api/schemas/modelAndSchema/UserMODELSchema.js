const mongoose = require('../../db');
const LocationSchema = require('./LocationSchema');


// Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fName: { type: String, default: '' },
    lName: { type: String, default: '' },
    email: { type: String, default: '' },
    photo: { type: String, default: '' },
    age: { type: Number, min: 18, max: 110, default: 18 },
    location: LocationSchema,
    currentLocation: LocationSchema,
    contactsDocument: Schema.Types.ObjectId
  }
);

// Create a model instance on the current mongoose connection.
const User = mongoose.model('users', UserSchema );

// Export the Model to be used for querying the database.
module.exports = User;