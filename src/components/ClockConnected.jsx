import Clock from './Clock.jsx';
import { connect } from '../lib/utils';

const mapStateToProps = (state) => ({
  time: state.clock.time,
});

export default connect(mapStateToProps)(Clock);
