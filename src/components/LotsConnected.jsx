import React from 'react';
import Lots from './Lots';

const LotsConnected = ({ store }) => {
  const state = store.getState();
  const lots = state.auction.lots;

  return <Lots lots={lots} store={store} />;
};

export default LotsConnected;
