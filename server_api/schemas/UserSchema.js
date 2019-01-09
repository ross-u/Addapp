const mongoose = require('../db');
const LocationSchema = require('./nestedSchemas/LocationSchema');


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
    contactsDocument: { type: String, default: '' }
    // contactsDocument: Schema.Types.ObjectId
  }
);

// Export the Schema to be used for Model Schema creation.
module.exports = UserSchema;