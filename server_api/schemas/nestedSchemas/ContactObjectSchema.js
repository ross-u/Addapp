const mongoose = require('../../db');

// Schema constructor
const Schema = mongoose.Schema;

const ContactObjectSchema = new Schema(
  {
    friendContact_id: Schema.Types.ObjectId,
  },
  { _id : false }
);

// Export the Schema to be used for Model Schema creation.
module.exports = ContactObjectSchema;