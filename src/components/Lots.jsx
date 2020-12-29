import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.jsx';
import Lot from './Lot.jsx';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
  loaded: state.auction.lots !== null,
});

const lotsMapDispatchToProps = {
  load: () => async (dispatch, _getState, { api }) => {
    const lots = await api.get('/lots');
    dispatch(actions.setLots(lots));
  },
};

const Lots = ({ lots, loaded, load }) => {
  React.useEffect(() => {
    if (!loaded) {
      load();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loading />;
  }

  return (
    <div className="lots">
      {lots.map((lot) => <Lot lot={lot} key={lot.id} />)}
    </div>
  );
};

export default connect(mapStateToProps, lotsMapDispatchToProps)(Lots);
