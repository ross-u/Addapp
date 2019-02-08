const mongoose = require('../db');
const PersonalSchema = require('./nestedSchemas/PersonalSchema');
const SocialSchema = require('./nestedSchemas/SocialSchema');
const NetworkingSchema = require('./nestedSchemas/NetworkingSchema');
const ContactObjectSchema = require('./nestedSchemas/ContactObjectSchema');

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

module.exports = UserSchema;