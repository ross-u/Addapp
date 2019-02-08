const mongoose = require('../../db');

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

module.exports = PersonalSchema;
