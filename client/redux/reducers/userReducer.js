  import { combineReducers } from 'redux';

  // users Reducer
  const users = (state = ['Uros', 'John'], action) => {
    switch(action.type) {
      case 'GET_USERS':
        return state ;

      default:
        return state;
    }
  }

const reducers = combineReducers({
  users
});

export default reducers;