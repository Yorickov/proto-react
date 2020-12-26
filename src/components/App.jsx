import React from 'react';
import Header from './Header';
import ClockConnected from './ClockConnected';
import LotsConnected from './LotsConnected';

const App = ({ store }) => (
  <div className="app">
    <Header />
    <ClockConnected store={store} />
    <LotsConnected store={store} />
  </div>
);

export default App;
