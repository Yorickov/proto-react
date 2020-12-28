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
  load: () => async (dispatch, _getState, { api, stream }) => {
    const lots = await api.get('/lots');
    dispatch(actions.setLots(lots));

    lots.forEach((lot) => {
      stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
        dispatch(actions.changeLotPrice(id, price));
      });
    });
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
