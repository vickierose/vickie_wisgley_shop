import {
  GET_SHOPPING_ITEMS_REQUEST,
  GET_SHOPPING_ITEMS_SUCCESS,
  GET_SHOPPING_ITEMS_FAILURE
} from '../actions/shop'

function shop (state={}, action) {
  switch (action.type) {
    case GET_SHOPPING_ITEMS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_SHOPPING_ITEMS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null
      }
    case GET_SHOPPING_ITEMS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default shop;