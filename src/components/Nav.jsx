import React from 'react';
import Link from '../lib/router/Link.jsx';

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/lots">Lots</Link></li>
      <li><Link to="/help">Help</Link></li>
    </ul>
  </nav>
);

export default Nav;
