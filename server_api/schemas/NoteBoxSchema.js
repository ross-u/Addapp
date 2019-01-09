const mongoose = require('./../db');
const NoteSchema = require('./nestedSchemas/NoteSchema');


// Schema constructor
const Schema = mongoose.Schema;

const NoteBoxSchema = new Schema(
  {
    "noteBoxHeadline": { type: String, default: '' },
    "noteBoxNotes": [NoteSchema]
  }, { _id : false });


// // Create a model instance on the current mongoose connection.
// const NoteBox = mongoose.model('contacts', NoteBoxSchema );

// Export the Schema to be used for Model Schema creation.
module.exports = NoteBoxSchema;

// {
//   "noteBoxHeadline": { type: String, default: '' },
//   "noteBoxNotes": [NoteSchema]
// }