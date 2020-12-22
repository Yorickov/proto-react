import React from 'react';
import Header from './Header';
import Clock from './Clock';
import Lots from './Lots';

const App = ({ state }) => (
  <div className="app">
    <Header />
    <Clock time={state.time} />
    <Lots lots={state.lots} />
  </div>
);

export default App;
