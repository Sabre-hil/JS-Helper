import { combineReducers } from 'redux';
import authReducer from './authReducer';
import comsReducer from './comsReducer';
import loadReducer from './loadReducer';
import postReducers from './postReducer';
import qestionReducer from './qestionReducer';
import qestionCategoryReducer from './qestionCategoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  qestions: qestionReducer,
  posts: postReducers,
  coms: comsReducer,
  load: loadReducer,
  qestionCategory: qestionCategoryReducer,

});

export default rootReducer;
