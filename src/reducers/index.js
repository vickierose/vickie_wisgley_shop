import { combineReducers } from 'redux';
import shop from './shop';
import categories from './categories';
const reducers = {
  shop,
  categories
};

const rootReducer = combineReducers({...reducers});
export default rootReducer;
