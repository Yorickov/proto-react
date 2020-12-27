import api from '../lib/api';
import * as actions from '../actions';
import Lot from './Lot.jsx';
import { connect } from '../lib/utils';

const mapStateToProps = (dispatch) => ({
  favorite: (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.favoriteLot(id));
  },
  unfavorite: (id) => async () => {
    await api.post(`/lots/${id}/unfavorite`);
    dispatch(actions.unfavoriteLot(id));
  },
});

export default connect(null, mapStateToProps)(Lot);
