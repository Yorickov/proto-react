import Lots from './Lots.jsx';
import { connect } from '../lib/utils';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
});

export default connect(mapStateToProps)(Lots);
