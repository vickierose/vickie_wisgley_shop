import {
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
  SELECT_CATEGORY,
  UNSELECT_CATEGORY
} from '../actions/categories';

function categories (state={}, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        all: action.data,
        error: null
      };
    case GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        all: null
      }
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: [category]
      }
    default:
      return state
  }
};

export default categories;
