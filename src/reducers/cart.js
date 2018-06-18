import {
  ADD_ITEM,
  REMOVE_ITEM
} from '../actions/cart';

function cart(state=[], action){
  switch(action.type) {
    case ADD_ITEM:
      return [...state, action.item];
    case REMOVE_ITEM:
      return [];
    default:
      return state;
  }
};

export default cart;
