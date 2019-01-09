// controller.js
const UserModel = require('./../models/UserModel');
const ContactModel = require('./../models/ContactModel');

// USERS COLLECTION MODEL

const addUser = async (ctx) => {
  try {
    await UserModel.addUser(ctx.request.body);
    ctx.status = 201;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const getAllUsers = async (ctx) => {
  try {
    ctx.body = await UserModel.getAllUsers();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const updateUser = async (ctx) => {
  try {
    await UserModel.updateUser(ctx.request.body);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const deleteUser = async (ctx) => {
  const { id } = ctx.params;
  try {
    await UserModel.deleteUser(id);
    ctx.status = 202;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

// CONTACTS COLLECTION MODEL

const addContact = async (ctx) => {
  try {
    await ContactModel.addContact(ctx.request.body);
    ctx.status = 201;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const getAllContacts = async (ctx) => {
  try {
    ctx.body = await ContactModel.getAllContacts();
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const updateContact = async (ctx) => {
  try {
    await ContactModel.updateContact(ctx.request.body);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const deleteContact = async (ctx) => {
  const { id } = ctx.params;
  try {
    await ContactModel.deleteContact(id);
    ctx.status = 202;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};


module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser,

  addContact,
  getAllContacts,
  updateContact,
  deleteContact
};