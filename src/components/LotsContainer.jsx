import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.jsx';
import Lots from './Lots.jsx';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
  loaded: state.auction.lots !== null,
});

const mapDispatchToProps = {
  load: actions.loadLotsAsync,
};

const LotsContainer = ({ lots, loaded, load }) => {
  React.useEffect(() => {
    if (!loaded) {
      load();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loading />;
  }

  return <Lots lots={lots} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LotsContainer);
