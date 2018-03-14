import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);
export default Nav;