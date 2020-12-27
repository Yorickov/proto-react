import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  time: state.clock.time,
});

const Clock = ({ time }) => {
  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return (
    <div className="clock">
      <span className="value">{time.toLocaleTimeString()}</span>
      <span className={isDay ? 'icon day' : 'icon night'} />
    </div>
  );
};

export default connect(mapStateToProps)(Clock);
