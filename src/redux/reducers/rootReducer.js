import {combineReducers} from 'redux';
import ErrorReducer from './errorreducer';

export default combineReducers({
  error: ErrorReducer
});
