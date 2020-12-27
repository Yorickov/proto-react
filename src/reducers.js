import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const clockReducer = createReducer({ time: new Date() }, {
  [actions.setTime]: (state, { payload }) => ({
    ...state,
    time: payload.time,
  }),
});

const auctionReducer = createReducer({ lots: null }, {
  [actions.setLots]: (state, { payload }) => ({
    ...state,
    lots: payload.lots,
  }),
  [actions.changeLotPrice]: (state, { payload }) => {
    // const newLots = state.lots.map((lot) => (
    //   lot.id === payload.id ? ({ ...lot, price: payload.price }) : lot
    // ));
    // return {
    //   ...state,
    //   lots: newLots,
    // };
    const lot = state.lots.find((l) => l.id === payload.id);
    lot.price = payload.price;
  },
  [actions.favoriteLot]: (state, { payload }) => {
    // const newLots = state.lots.map((lot) => (
    //   lot.id === payload.id ? ({ ...lot, favorite: true }) : lot
    // ));
    // return {
    //   ...state,
    //   lots: newLots,
    // };
    const lot = state.lots.find((l) => l.id === payload.id);
    lot.favorite = true;
  },
  [actions.unfavoriteLot]: (state, { payload }) => {
    // const newLots = state.lots.map((lot) => (
    //   lot.id === payload.id ? ({ ...lot, favorite: false }) : lot
    // ));
    // return {
    //   ...state,
    //   lots: newLots,
    // };
    const lot = state.lots.find((l) => l.id === payload.id);
    lot.favorite = false;
  },
});

export default combineReducers({
  clock: clockReducer,
  auction: auctionReducer,
});
