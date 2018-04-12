import { combineReducers } from 'redux';
import shop from './shop';
const reducers = {
  shop
};

const rootReducer = combineReducers({...reducers});
export default rootReducer;
