const mongoose = require('../db');
const UserSchema = require('../schemas/UserSchema');

const User = mongoose.model('users', UserSchema );

const addUser = (userObject) => {
  return User.create(userObject);
};

const getAllUsers = () => {
  return User.find({});
};

const updateUser = (updatedUserObject) => {
  const { id } = userObject;
  return User.findByIdAndUpdate(id, updatedUserObject);
};

const addContacts = async (id, contactsIdArray) => {
  return User.update(
    { _id: id },
    { $push: { contacts: { $each: [...contactsIdArray]} } }
  );
};

const removeContacts = async (id, contactsIdArray) => {
  return User.update(
    { _id: id },
    { $pull: { contacts: { $in: [...contactsIdArray]} } }
  );
};

const getMyProfile = (id) => {
  return User.find( { _id: id } );
};

const getUsersFriends = (myProfileRaw) => {  
  // get the `contacts` array from the profile
  const contactsArray = myProfileRaw[0].contacts;
  const idArray = contactsArray.map( contact => contact.friendContact_id);

  return User.find({
    '_id': { $in : idArray} 
  });
}

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  addContacts,
  removeContacts,
  getMyProfile,
  getUsersFriends,
  deleteUser
};