import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.scss';

import Home from './pages/Home';
import PaymentDeliveryDetails from './pages/PaymentDeliveryDetails';
import Navigation from './pages/Navigation';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navigation />
          <div className="main">
            <Route exact path='/' component={Home} />
            <Route path='/delivery' component={PaymentDeliveryDetails} />
          </div>
        </div>
      </Router>
    );
  }
};