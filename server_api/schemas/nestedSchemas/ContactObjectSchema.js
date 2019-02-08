const mongoose = require('../../db');

const Schema = mongoose.Schema;

const ContactObjectSchema = new Schema(
  {
    friendContact_id: Schema.Types.ObjectId,
  },
  { _id : false }
);

module.exports = ContactObjectSchema;