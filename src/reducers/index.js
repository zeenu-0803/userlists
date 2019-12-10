import { combineReducers } from 'redux';

import userListReducer from './userListReducer';

export default combineReducers({
    userLists: userListReducer
  })