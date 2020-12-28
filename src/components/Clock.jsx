import React, { Component } from 'react';

class Clock extends Component {
  state = { time: new Date() };

  tick = () => {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.timeInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const { time } = this.state;

    const isDay = time.getHours() >= 7 && time.getHours() <= 21;

    return (
      <div className="clock">
        <span className="value">{time.toLocaleTimeString()}</span>
        <span className={isDay ? 'icon day' : 'icon night'} />
      </div>
    );
  }
}

export default Clock;
