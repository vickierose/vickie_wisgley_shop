import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor (props){
    super(props);
  }
  render() {

    return (
      <div className="navigation">
      <Menu pointing secondary>
        <Menu.Item children={<NavLink to="/">Home</NavLink>}></Menu.Item>
        <Menu.Item children={<NavLink to="/delivery">Payments and Delivery</NavLink>}></Menu.Item>
      </Menu>
      </div>
    )
  }
}