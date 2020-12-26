import React from 'react';
import Lots from './Lots';
import { StoreContext } from '../application';

const LotsConnected = () => (
  <StoreContext.Consumer>
    {(store) => {
      const state = store.getState();
      const lots = state.auction.lots;

      return <Lots lots={lots} />;
    }}
  </StoreContext.Consumer>
);

export default LotsConnected;
