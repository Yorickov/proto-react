import React from 'react';
import api from '../lib/api';
import * as actions from '../actions';
import Lot from './Lot';

const LotConnected = ({ lot, store }) => {
  const dispatch = store.dispatch;

  const favorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.favoriteLot(id));
  };

  const unfavorite = (id) => async () => {
    await api.post(`/lots/${id}/unfavorite`);
    dispatch(actions.unfavoriteLot(id));
  };

  return <Lot lot={lot} favorite={favorite} unfavorite={unfavorite} />;
};

export default LotConnected;
