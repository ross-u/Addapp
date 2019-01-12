// controller.js
const UserModel = require('../models/UserModel');
const ContactModel = require('../models/ContactModel');

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


const addContacts = async (ctx) => {
  const { id, contactsIdArray } = ctx.request.body;
  try {
    await UserModel.addContacts(id, contactsIdArray);
    const myProfile = await UserModel.getMyProfile(id);
    const myFriendsArray = await UserModel.getUsersFriends(myProfile);
    myFriendsArray.push(myProfile[0]);
    
    ctx.body = myFriendsArray;
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const getMyProfile = async (ctx) => {
  const { id } = ctx.params;
  try {
    ctx.body = await UserModel.getMyProfile(id);
    ctx.status = 200;
  } catch (err) {
    ctx.status = 500;
    console.error(err);
  }
};

const getUsersFriends = async (ctx) => {
  const { id } = ctx.params;
  try {
    const myProfile = await UserModel.getMyProfile(id);
    
    ctx.body = await UserModel.getUsersFriends(myProfile);
    ctx.body.push(myProfile[0]);
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
  addContacts,
  getMyProfile,
  getUsersFriends,
  deleteUser,

  addContact,
  getAllContacts,
  updateContact,
  deleteContact
};