import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import './App.scss';

import Home from './pages/Home';
import Shop from './containers/Shop';
import PaymentDeliveryDetails from './pages/PaymentDeliveryDetails';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Navigation from './elements/Navigation';
import Logo from './elements/Logo';
import Footer from './elements/Footer';

import {getShoppingItems} from './actions/shop';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartOpened: false
    }

    this.openCartModal = this.openCartModal.bind(this);
    this.closeCartModal = this.closeCartModal.bind(this);
  }

  componentDidMount() {
    this.props.getShoppingItems();
    // this.props.getAllCategories();
  }

  openCartModal(){
    this.setState({cartOpened:true});
  }

  closeCartModal(){
    this.setState({cartOpened:false});
  }

  render() {
    return (
      <React.Fragment>
      <Router>
        <Grid className="wrapper">
          <Grid.Column>
            <Logo />
            <Navigation openCart={this.openCartModal}/>
            <div className="main">
              <Route exact path='/' component={Home} />
              <Route path='/shop' component={Shop} />
              <Route path='/delivery' component={PaymentDeliveryDetails} />
              <Route path='/contacts' component={Contacts} />
            </div>
            <Footer />
          </Grid.Column>
        </Grid>
      </Router>
      <Cart cartOpened={this.state.cartOpened} closeCartModal={this.closeCartModal}/>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => ({
  shop: state.shop
});
const mapDispatchToProps = dispatch => ({
  getShoppingItems() {
    return dispatch(getShoppingItems())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);