import React, { useEffect, useReducer } from 'react';
import Loading from './Loading.jsx';
import Lots from './Lots.jsx';
import AlertError from './AlertError.jsx';
import stream from '../lib/utils';
import api from '../lib/api';
import auctionReducer from '../reducers';
import * as actions from '../actions';

const LotsContainer = () => {
  const [state, dispatch] = useReducer(auctionReducer, {
    lots: [],
    loading: false,
    loaded: false,
    error: null,
  });

  const { loading, loaded, error } = state;

  useEffect(async () => {
    if (!loaded && !loading && error === null) {
      dispatch(actions.lotsLoadingPending());
      try {
        const lots = await api.get('/lots');
        dispatch(actions.lotsLoadingSuccess(lots));
      } catch (e) {
        dispatch(actions.lotsLoadingError(e.message));
      }
    }
  }, [loaded, loading, error]);

  if (error !== null) {
    return <AlertError message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!loaded) {
    return null;
  }

  const subscribe = (id) => (
    stream.subscribe(`price-${id}`, (data) => {
      dispatch(actions.changeLotPrice(data.id, data.price));
    }));

  const favorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.favoriteLot(id));
  };

  const unfavorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.unfavoriteLot(id));
  };

  return (
    <Lots
      lots={state.lots}
      subscribe={subscribe}
      favorite={favorite}
      unfavorite={unfavorite}
    />
  );
};

export default LotsContainer;
