import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Router from '../lib/router/Router.jsx';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Content />
    </div>
  </Router>
);

export default App;
