import {combineReducers} from 'redux';
import verticalListReducer from './VerticalListReducer/verticalListReducer';

export default combineReducers({
  verticalListReducer: verticalListReducer
});
