import React from 'react';
import Clock from './Clock';

const ClockConnected = ({ store }) => {
  const state = store.getState();
  const time = state.clock.time;

  return <Clock time={time} />;
};

export default ClockConnected;
