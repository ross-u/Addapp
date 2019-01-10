  import { combineReducers } from 'redux';

  let defaultState = {
    contacts: [],
    me: "5c37b33210774810473a5361"
  }

  // users Reducer
  const contacts = (state = defaultState.contacts, action) => {
    switch(action.type) {
      case 'STORE_CONTACTS':
      // console.log('STORE_CONTACTS', action.contacts);
        return [...action.contacts];

      default:
        return [];
    }
  }

  const me = ( state = defaultState.me, action ) => {
    switch(action.type) {
      case 'STORE_MY_ID':
        return state + action.id;

      default:
        return state;
    }
  }

const reducers = combineReducers({
  contacts,
  me
});

export default reducers;