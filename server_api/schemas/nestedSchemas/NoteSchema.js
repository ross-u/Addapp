const mongoose = require('./../../db');

// Schema constructor
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    noteTxt: { type: String, default: '' },
    noteImgLink: { type: String, default: '' }
  }, { _id : false });


// Export the Schema to be used for Model Schema creation.
module.exports = NoteSchema;

/* {
  "noteTxt": { type: String, default: '' },
  "noteImgLink": { type: String, default: '' }
} */