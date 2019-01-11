  import { combineReducers } from 'redux';

    const contactsStore = [];
    const meStore = {
      _id: "5c37b33210774810473a5361"
    }

  // users Reducer
  const contacts = (state = contactsStore, action) => {
    switch(action.type) {
      case 'STORE_CONTACTS':
      // console.log('STORE_CONTACTS', action.contacts);
        return [...action.contacts];

      default:
        return [];
    }
  }

  const me = ( state = meStore, action ) => {
    switch(action.type) {
      case 'STORE_MY_ID':
        return action.id;

      case 'STORE_MY_PROFILE':
        return Object.assign({}, action.myProfile);

      default:
        return state;
    }
  }

  const meJSONString = ( state = '', action ) => {
    switch(action.type) {
      case 'STORE_MY_PROFILE_AS_JSON_STRING':
        return action.JSONString;

      default:
        return state;
    }
  }

const reducers = combineReducers({
  contacts,
  me,
  meJSONString
});

export default reducers;