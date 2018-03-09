import React, { Component } from 'react';
import './App.scss';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="wrapper">
          <div className="main">
            <p>Hola!</p>
          </div>
        </div>
    );
  }
};