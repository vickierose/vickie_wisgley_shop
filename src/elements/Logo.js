import React from 'react';
import { NavLink } from 'react-router-dom';

import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <NavLink to='/'>
      <h1>Vickie Wisgley</h1>
      <h2>handmde studio</h2>
    </NavLink>
  </div>
);

export default Logo;