import React from 'react';
import api from '../lib/api';
import * as actions from '../actions';
import Header from './Header';
import Clock from './Clock';
import Lots from './Lots';

const App = ({ store }) => {
  const state = store.getState();
  const dispatch = store.dispatch;

  const time = state.clock.time
  const lots = state.auction.lots

  const favorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.favoriteLot(id));
  };

  const unfavorite = (id) => async () => {
    await api.post(`/lots/${id}/unfavorite`);
    dispatch(actions.unfavoriteLot(id));
  };

  return (
    <div className="app">
      <Header />
      <Clock time={time} />
      <Lots
        lots={lots}
        favorite={favorite}
        unfavorite={unfavorite}
      />
    </div>
  );
};

export default App;
