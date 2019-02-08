const mongoose = require('./../db');
const NoteSchema = require('./nestedSchemas/NoteSchema');

const Schema = mongoose.Schema;

const NoteBoxSchema = new Schema(
  {
    "noteBoxHeadline": { type: String, default: '' },
    "noteBoxNotes": [NoteSchema]
  }, { _id : false });


module.exports = NoteBoxSchema;