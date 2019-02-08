const mongoose = require('./../../db');

const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    noteTxt: { type: String, default: '' },
    noteImgLink: { type: String, default: '' }
  }, { _id : false });


module.exports = NoteSchema;
