import { combineReducers } from 'redux';

import userReducer from './User';
import modalReducer from './Modal';

export default combineReducers({
  user: userReducer,
  modal: modalReducer,
});
