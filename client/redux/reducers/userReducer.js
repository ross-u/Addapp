import { combineReducers } from 'redux';

const meStore = {
  _id: "5c37b33210774810473a5361"
}

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

const me = (state = meStore, action) => {
  switch (action.type) {
    case 'STORE_MY_ID':
      return action.id;

    case 'STORE_MY_PROFILE':
      return Object.assign({}, action.myProfile);

    default:
      return state;
  }
};

const meJSONString = (state = '', action) => {
  switch (action.type) {
    case 'STORE_MY_PROFILE_AS_JSON_STRING':
      return action.JSONString;

    default:
      return state;
  }
};

const reducers = combineReducers({
  contacts,
  me,
  offlineContacts,
  meJSONString
});

export default reducers;