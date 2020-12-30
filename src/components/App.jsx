import React from 'react';
import Header from './Header.jsx';
import ClockContainer from './ClockContainer.jsx';
import LotsContainer from './LotsContainer.jsx';
import Router from '../router/Router.jsx';

const App = () => (
  <div className="app">
    <Header />
    <Router />
    <ClockContainer />
    <LotsContainer />
  </div>
);

export default App;
