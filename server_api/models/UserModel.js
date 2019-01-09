const mongoose = require('../db');
const UserSchema = require('./../schemas/UserSchema');

// Create a `User` Model instance on the current mongoose connection.
const User = mongoose.model('users', UserSchema );

const addUser = (userObject) => {
  return User.create(userObject);
}

const getAllUsers = () => {
  // return entire collection, sorted
  return User.find().sort({ fname: -1 });
}

const updateUser = (updatedUserObject) => {
  const { id } = userObject;
  return User.findByIdAndUpdate(id, updatedUserObject);
}

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
}

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  deleteUser
};















/* const collectionName = 'userData';

const createNewUserDocument = (userNotes) => {
  const collection = models.dbConnection.db().collection(collectionName);
  return collection.insertOne(userNotes);
};

const getNotes = () => {
  const collection = models.dbConnection.db().collection(collectionName);
  if (!ObjectID.isValid(id)) return new Error('Invalid MongoDB ID.');
  else return collection.findOne(ObjectID(id));
}

const updateNotes = (msg) => {
  const collection = models.dbConnection.db().collection(collectionName);
  if (!ObjectID.isValid(id)) return new Error('Invalid MongoDB ID.');
  return collection.insertOne(msg);
};


 module.exports = { createNewUserDocument, getNotes, updateNotes }; */