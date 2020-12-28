import React, { Component } from 'react';
import Clock from './Clock.jsx';

class ClockContainer extends Component {
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
    return <Clock time={this.state.time} />;
  }
}

export default ClockContainer;
