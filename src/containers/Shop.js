import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Shop from '../pages/Shop';
// import {getShoppingItems} from '../actions/shop';
import {getAllCategories, selectCategory, unselectCategory} from '../actions/categories'

const mapStateToProps = state => ({
  shop: state.shop,
  categories: state.categories,
});
const mapDispatchToProps = dispatch => ({
  // getShoppingItems() {
  //   return dispatch(getShoppingItems())
  // },
  getAllCategories() {
    return dispatch(getAllCategories())
  },
  selectCategory(category) {
    return dispatch(selectCategory(category))
  },
  unselectCategory(category) {
    return dispatch(unselectCategory(category))
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));