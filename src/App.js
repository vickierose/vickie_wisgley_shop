import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import './App.scss';

import Home from './pages/Home';
import Shop from './containers/Shop';
import PaymentDeliveryDetails from './pages/PaymentDeliveryDetails';
import Contacts from './pages/Contacts';
import Navigation from './elements/Navigation';
import Logo from './elements/Logo';
import Footer from './elements/Footer';

import {getShoppingItems} from './actions/shop';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getShoppingItems();
    // this.props.getAllCategories();
  }

  render() {
    return (
      <Router>
        <Grid className="wrapper">
          <Grid.Column>
          <Logo />
          <Navigation />
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