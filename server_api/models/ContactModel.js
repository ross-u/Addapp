const mongoose = require('../db');
const ContactSchema = require('./../schemas/ContactSchema');

// Create a `Contact` Model instance on the current mongoose connection.
const Contact = mongoose.model('contacts', ContactSchema );

const addContact = (ContactObject) => {
  return Contact.create(ContactObject);
}

const getAllContacts = () => {
  return Contact.find({});
}

const updateContact = (updatedContactObject) => {
  const { id } = ContactObject;
  return Contact.findByIdAndUpdate(id, updatedContactObject);
}

const deleteContact = (id) => {
  return Contact.findByIdAndDelete(id);
}

module.exports = {
  addContact,
  getAllContacts,
  updateContact,
  deleteContact
};
