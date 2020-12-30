import React from 'react';
import Logo from './Logo.jsx';
import Router from './router/Router.jsx';

const Header = () => (
  <header className="header">
    <Logo />
    <Router />
  </header>
);

export default Header;
