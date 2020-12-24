import React from 'react';
import Header from './Header';
import Clock from './Clock';
import Lots from './Lots';

const App = ({ state }) => (
  <div className="app">
    <Header />
    <Clock time={state.clock.time} />
    <Lots lots={state.auction.lots} />
  </div>
);

export default App;
