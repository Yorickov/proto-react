import Lots from './Lots';
import { connect } from '../lib/utils';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
});

const LotsConnected = connect(mapStateToProps, null, Lots);

export default LotsConnected;
