import React from 'react';
import Header from './Header';
import Clock from './Clock';
import Lots from './Lots';

const App = ({ state, favorite, unfavorite }) => (
  <div className="app">
    <Header />
    <Clock time={state.clock.time} />
    <Lots
      lots={state.auction.lots}
      favorite={favorite}
      unfavorite={unfavorite}
    />
  </div>
);

export default App;
