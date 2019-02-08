const mongoose = require('./../../db');

const Schema = mongoose.Schema;

const LocationSchema = new Schema(
  {
    country: { type: String, default: '' },
    place: { type: String, default: '' },
    lng: { type: Number, default: 0 },
    lat: { type: Number, default: 0 }
  }, { _id : false });

module.exports = LocationSchema;
