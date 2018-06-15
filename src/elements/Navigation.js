import React, { Component } from 'react';
import {Menu, Icon, Responsive} from 'semantic-ui-react';

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
        <Menu.Item as={Nav} to="/" name='Home'><Icon name="home"/><Responsive minWidth={768}>Home</Responsive></Menu.Item>
        <Menu.Item as={Nav} to="/shop" name='Shop' ><Icon name="shopping bag"/><Responsive minWidth={768}>Shop</Responsive></Menu.Item>
        <Menu.Item as={Nav} to="/delivery" name='Delivery and Payments' ><Icon name="bicycle"/><Responsive minWidth={768}>Delivery and Payments</Responsive></Menu.Item>
        <Menu.Item as={Nav} to="/contacts" name='Contacts' ><Icon name="address card"/><Responsive minWidth={768}>Contacts</Responsive></Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item><Icon name="shopping cart"/></Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}