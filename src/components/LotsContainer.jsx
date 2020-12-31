import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.jsx';
import Lots from './Lots.jsx';
import AlertError from './AlertError.jsx';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
  loading: state.auction.loading,
  loaded: state.auction.loaded,
  error: state.auction.error,
});

const mapDispatchToProps = {
  load: actions.loadLotsAsync,
  unload: actions.lotsClear,
};

const LotsContainer = ({
  lots, loading, loaded, error, load, unload,
}) => {
  useEffect(() => {
    if (!loaded && !loading && error === null) {
      load();
    }
  }, [loaded, loading, error]);

  useEffect(() => {
    if (loaded || error !== null) {
      return unload;
    }
  }, [loaded, error]);

  if (error !== null) {
    return <AlertError message={error} retry={load} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!loaded) {
    return null;
  }

  return <Lots lots={lots} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LotsContainer);
