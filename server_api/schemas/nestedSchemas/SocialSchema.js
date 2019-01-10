const mongoose = require('../../db');

// Schema constructor
const Schema = mongoose.Schema;

const PersonalSchema = new Schema(
  {
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    twitter: { type: String, default: '' },
    blog: { type: String, default: '' },
  },
  { _id : false }
);

// Export the Schema to be used for Model Schema creation.
module.exports = PersonalSchema;

// email: { type: String, default: '' },