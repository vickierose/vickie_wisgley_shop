import React from 'react';
import {Menu} from 'semantic-ui-react';
import Nav from './NavHelper';

import './Footer.scss';

const currentYear = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <div className="disclaimer">
    &copy; Vickie Wisgley {currentYear}
    </div>
    <Menu secondary >
        <Menu.Item as={Nav} to="/" name='Home'></Menu.Item>
        <Menu.Item as={Nav} to="/shop" name='Shop' ></Menu.Item>
        <Menu.Item as={Nav} to="/delivery" name='Delivery and Payments' ></Menu.Item>
        <Menu.Item as={Nav} to="/contacts" name='Contacts' ></Menu.Item>
      </Menu>
  </div>
);

export default Footer;