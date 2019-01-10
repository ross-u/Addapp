const mongoose = require('../db');
const PersonalSchema = require('./nestedSchemas/PersonalSchema');
const SocialSchema = require('./nestedSchemas/SocialSchema');
const NetworkingSchema = require('./nestedSchemas/NetworkingSchema');
const ContactObjectSchema = require('./nestedSchemas/ContactObjectSchema');


// Schema constructor
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    photo: { type: String, default: '' },
    personal: PersonalSchema,
    social: SocialSchema,
    networking: NetworkingSchema,
    contacts: [ContactObjectSchema]
  }
);

// Export the Schema to be used for Model Schema creation.
module.exports = UserSchema;