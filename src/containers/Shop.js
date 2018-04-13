import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Shop from '../pages/Shop';
import {getShoppingItems} from '../actions/shop';

const mapStateToProps = state => ({shop: state.shop});
const mapDispatchToProps = dispatch => ({
  getShoppingItems() {
    return dispatch(getShoppingItems())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));