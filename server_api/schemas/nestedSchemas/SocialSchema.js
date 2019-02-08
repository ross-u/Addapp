const mongoose = require('../../db');

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

module.exports = PersonalSchema;