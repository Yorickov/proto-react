import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Content />
    </div>
  </Router>
);

export default App;
