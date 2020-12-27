import Clock from './Clock';
import { connect } from '../lib/utils';

const mapStateToProps = (state) => ({
  time: state.clock.time,
});

const ClockConnected = connect(mapStateToProps, null, Clock);

export default ClockConnected;
