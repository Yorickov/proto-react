import React from 'react';
import Logo from './Logo.jsx';
import Nav from './Nav.jsx';
import Content from './Content.jsx';
import Router from '../lib/router/Router.jsx';

const Header = () => (
  <header className="header">
    <Logo />
    <Router>
      <Nav />
      <Content />
    </Router>
  </header>
);

export default Header;
