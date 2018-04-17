import categories from '../mock-data/categories';

export const GET_ALL_CATEGORIES_REQUEST = 'GET_ALL_CATEGORIES_REQUEST';
export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const GET_ALL_CATEGORIES_FAILURE = 'GET_ALL_CATEGORIES_FAILURE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const UNSELECT_CATEGORY = 'UNSELECT_CATEGORY';

export const getAllCategoriesRequest = () => ({
  type:GET_ALL_CATEGORIES_REQUEST
});

export const getAllCategoriesSuccess = data => ({
  type:GET_ALL_CATEGORIES_SUCCESS,
  data: data
});

export const getShoppingItemsFailure = err => ({
  type:GET_ALL_CATEGORIES_FAILURE,
  error: err
});

export const getAllCategories = () => dispatch => {
  dispatch(getAllCategoriesRequest());
  dispatch(getAllCategoriesSuccess(categories));
};

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

export const unselectCategory = category => ({
  type: UNSELECT_CATEGORY,
  category
});