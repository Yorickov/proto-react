import React from 'react';
import Clock from './Clock';
import { StoreContext } from '../application';

const ClockConnected = () => (
  <StoreContext.Consumer>
    {(store) => {
      const state = store.getState();
      const stateToProps = {
        time: state.clock.time,
      };

      return <Clock {...stateToProps} />;
    }}
  </StoreContext.Consumer>
);

export default ClockConnected;
