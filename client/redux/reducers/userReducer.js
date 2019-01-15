import { combineReducers } from 'redux';

const myemptyProfile = {}


const contacts = (state = [], action) => {
  switch (action.type) {
    case 'STORE_ALL_CONTACTS':
    console.log('Contacts stored in Redux');
      return [...action.contacts];

    case 'STORE_NEW_CONTACT':
      return [...state, action.newContact];

    default:
      return state;
  }
};

// users Reducer
const offlineContacts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT_ID_TO_OFFLINE_LIST':
    console.log('in Reducer ADD_CONTACT_ID_TO_OFFLINE_LIST');
      let contactObject = {
        friendContact_id: action.newContactId
      };
      return [...state, contactObject];

    case 'RESET_OFFLINE_LIST':
      return [];

    default:
      return state;
  }
};

const myID = (state = '', action) => {
  switch (action.type) {
    case 'STORE_MY_ID':
      return action.id;

    default:
      return state;
  }
};

const myProfile = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_MY_PROFILE':
      return Object.assign({}, action.myProfile);

    default:
      return state;
  }
};

const friendsProfileInView = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_FRIENDS_PROFILE':
      return Object.assign({}, action.profile);

    default:
      return state;
  }
};

const myProfileJSONString = (state = '', action) => {
  switch (action.type) {
    case 'STORE_MY_PROFILE_AS_JSON_STRING':
      return action.JSONString;

    default:
      return state;
  }
};

const friendsProfileInViewJSONString = (state = '', action) => {
  switch (action.type) {
    case 'STORE_FRIENDS_PROFILE_AS_JSON_STRING':
      return action.JSONString;

    default:
      return state;
  }
};


const reducers = combineReducers({
  contacts,
  myID,
  myProfile,
  friendsProfileInView,
  offlineContacts,
  myProfileJSONString,
  friendsProfileInViewJSONString
});

export default reducers;