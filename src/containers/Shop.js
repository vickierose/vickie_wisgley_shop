import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Shop from '../pages/Shop';
import {addItem} from '../actions/cart';
import {getAllCategories, selectCategory, unselectCategory} from '../actions/categories'

const mapStateToProps = state => ({
  shop: state.shop,
  categories: state.categories,
  cart: state.cart
});
const mapDispatchToProps = dispatch => ({
  getAllCategories() {
    return dispatch(getAllCategories())
  },
  selectCategory(category) {
    return dispatch(selectCategory(category))
  },
  unselectCategory(category) {
    return dispatch(unselectCategory(category))
  },
  addItemToCart(item){
    return dispatch(addItem(item))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));