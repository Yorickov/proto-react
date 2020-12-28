import React, { useState, useEffect } from 'react';
import Clock from './Clock.jsx';

const ClockContainer = () => {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const timeInterval = setInterval(tick, 1000);
    return () => clearInterval(timeInterval);
  }, [setTime]);

  return <Clock time={time} />;
};

export default ClockContainer;
