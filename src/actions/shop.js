import shopItems from '../mock-data/shop-items';

export const GET_SHOPPING_ITEMS_REQUEST = 'GET_SHOPPING_ITEMS_REQUEST';
export const GET_SHOPPING_ITEMS_SUCCESS = 'GET_SHOPPING_ITEMS_SUCCESS';
export const GET_SHOPPING_ITEMS_FAILURE = 'GET_SHOPPING_ITEMS_FAILURE';

export const getShoppingItemsRequest = () => ({
  type:GET_SHOPPING_ITEMS_REQUEST
});

export const getShoppingItemsSuccess = data => ({
  type:GET_SHOPPING_ITEMS_SUCCESS,
  data: data
});

export const getShoppingItemsFailure = err => ({
  type:GET_SHOPPING_ITEMS_SUCCESS,
  error: err
});

export const getShoppingItems = () => dispatch => {
  dispath(getShoppingItemsRequest());
  dispatch(getShoppingItemsSuccess(shopItems));
}