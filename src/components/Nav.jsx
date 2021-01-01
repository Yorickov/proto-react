import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/lots">Lots</NavLink></li>
      <li><NavLink to="/help" exact>Help</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
