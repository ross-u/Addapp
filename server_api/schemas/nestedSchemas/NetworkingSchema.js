const mongoose = require('../../db');

// Schema constructor
const Schema = mongoose.Schema;

const PersonalSchema = new Schema(
  {
    linkedIn: { type: String, default: '' },
    github: { type: String, default: '' },
    cv: { type: String, default: '' },
    website: { type: String, default: '' },
  },
  { _id : false }
);

// Export the Schema to be used for Model Schema creation.
module.exports = PersonalSchema;

// email: { type: String, default: '' },