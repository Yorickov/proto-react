import React from 'react';
import api from '../lib/api';
import * as actions from '../actions';
import Lot from './Lot';
import { StoreContext } from '../application';

const LotConnected = (props) => (
  <StoreContext.Consumer>
    {(store) => {
       const dispatch = store.dispatch;

       const dispatchToProps = {
        favorite: (id) => async () => {
          await api.post(`/lots/${id}/favorite`);
          dispatch(actions.favoriteLot(id));
        },
        unfavorite:  (id) => async () => {
          await api.post(`/lots/${id}/unfavorite`);
          dispatch(actions.unfavoriteLot(id));
        },
      }

      return <Lot {...props} {...dispatchToProps} />;
    }}
  </StoreContext.Consumer>
);

export default LotConnected;
