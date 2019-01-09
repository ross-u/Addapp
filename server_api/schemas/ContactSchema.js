const mongoose = require('./../db');
const NoteBoxSchema = require('./NoteBoxSchema');
const LocationSchema = require('./nestedSchemas/LocationSchema');


// Schema constructor
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    personal: {
      fName: { type: String, default: '' },
      lName: { type: String, default: '' },
      photo: { type: String, default: '' },
      age: { type: Number, min: 18, max: 110, default: 18 },
      birthday: { type: Number, default: 0000000000000 },
      birthplace: LocationSchema,
      location: LocationSchema,
      otherNotes: [NoteBoxSchema]
    },
    work: {
      linkedIn: { type: String, default: '' },
      occupation: { type: String, default: '' },
      otherNotes: [NoteBoxSchema]
    },
    notes: [NoteBoxSchema],
    metadata: {
      updated_at : { type: Date, default: Date.now },
      user_id : Schema.Types.ObjectId
    }
  }
);

// Export the Schema to be used for Model Schema creation.
module.exports = ContactSchema;












// { type: String, default: '' }
// { type: Number, default: 0 }
// { type: String, default: Date.now }
// Boolean

// {
//   personal: {
//     fName: { type: String, default: '' },
//     lName: { type: String, default: '' },
//     photo: { type: String, default: '' },
//     age: { type: Number, min: 18, max: 110, default: 18 },
//     birthday: { type: Number, default: 0000000000000 },
//     birthplace: {
//       country: { type: String, default: '' },
//       place: { type: String, default: '' },
//       lng: { type: Number, default: 0 },
//       lat: { type: Number, default: 0 }
//     },
//     location: {
//       country: { type: String, default: '' },
//       place: { type: String, default: '' },
//       lng: { type: Number, default: 0 },
//       lat: { type: Number, default: 0 }
//     },
//     otherNotes: [NoteBoxSchema]
//     /* otherNotes: [
//       {
//         noteBoxHeadline: { type: String, default: '' },
//         noteBoxNotes: [
//           {
//             noteTxt: { type: String, default: '' },
//             noteImgLink: { type: String, default: '' }
//           }
//         ]
//       }
//     ] */
//   },
//   work: {
//     linkedIn: { type: String, default: '' },
//     occupation: { type: String, default: '' },
//     otherNotes: [NoteBoxSchema]
//   },

//   notes: [NoteBoxSchema],
//   updated_at : { type: Date, default: Date.now },
// }