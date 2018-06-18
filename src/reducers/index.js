import { combineReducers } from 'redux';
import shop from './shop';
import categories from './categories';
import cart from './cart';
const reducers = {
  shop,
  categories,
  cart
};

const rootReducer = combineReducers({...reducers});
export default rootReducer;
