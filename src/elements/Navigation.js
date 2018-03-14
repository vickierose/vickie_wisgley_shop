import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';

import Nav from './NavHelper';

import './Navigation.scss';

export default class Navigation extends Component {
  constructor (props){
    super(props);
  }
  render() {

    return (
      <div className="navigation">
      <Menu pointing secondary >
        <Menu.Item as={Nav} to="/" name='Home'></Menu.Item>
        <Menu.Item as={Nav} to="/shop" name='Shop' ></Menu.Item>
        <Menu.Item as={Nav} to="/delivery" name='Delivery and Payments' ></Menu.Item>
        <Menu.Item as={Nav} to="/contacts" name='Contacts' ></Menu.Item>
      </Menu>
      </div>
    )
  }
}