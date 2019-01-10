const mongoose = require('../db');
const UserSchema = require('../schemas/UserSchema');

// Create a `User` Model instance on the current mongoose connection.
const User = mongoose.model('users', UserSchema );

const addUser = (userObject) => {
  return User.create(userObject);
};

const getAllUsers = () => {
  // return entire collection, sorted
  return User.find({});
};

const updateUser = (updatedUserObject) => {
  const { id } = userObject;
  return User.findByIdAndUpdate(id, updatedUserObject);
};

const addUsersContacts = (id, friendContact_id) => {
  const permissionsArr = new Array(17).fill(true);
  const newContact = { friendContact_id: friendContact_id, permissions: permissionsArr };

  return User.updateMany(
    { _id: id },
    { $push: { contacts: { $each: [newContact]} } }
  );
};

const getUsersFriends = (usersContactsRaw) => {

  const idAndPermisionsArr = usersContactsRaw[0].contacts;
  const friendsIdArr = idAndPermisionsArr.map( contact => contact.friendContact_id);
  console.log('FRIENDS IDS ARRAY',friendsIdArr);

  return User.find({
    '_id': { $in : friendsIdArr} 
  });
}

const getContactsArray = (id) => {
  return User.find( { _id: id }, { contacts: 1 } );
};


const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  addUsersContacts,
  getContactsArray,
  getUsersFriends,
  deleteUser
};