import React from 'react';
import Clock from './Clock';
import { StoreContext } from '../application';

const ClockConnected = () => (
  <StoreContext.Consumer>
    {(store) => {
      const state = store.getState();
      const time = state.clock.time;

      return <Clock time={time} />;
    }}
  </StoreContext.Consumer>
);

export default ClockConnected;
