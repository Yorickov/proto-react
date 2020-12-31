import update from 'immutability-helper';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './actions';

const auctionInitialState = {
  lots: [],
  loading: false,
  loaded: false,
  error: null,
};

const auctionReducer = createReducer(auctionInitialState, {
  [actions.lotsClear]: (state) => ({
    ...state,
    lots: [],
    loading: false,
    loaded: false,
    error: null,
  }),
  [actions.lotsLoadingPending]: (state) => ({
    ...state,
    lots: [],
    loading: true,
    loaded: false,
    error: null,
  }),
  [actions.lotsLoadingSuccess]: (state, { payload }) => ({
    ...state,
    lots: payload.lots,
    loading: false,
    loaded: true,
    error: null,
  }),
  [actions.lotsLoadingError]: (state, { payload }) => ({
    ...state,
    lots: [],
    loading: false,
    loaded: false,
    error: payload.error,
  }),
  [actions.changeLotPrice]: (state, { payload }) => {
    const index = state.lots.findIndex((l) => l.id === payload.id);
    const newLots = update(state.lots, { [index]: { price: { $set: payload.price } } });
    return {
      ...state,
      lots: newLots,
    };
    // const lot = state.lots.find((l) => l.id === payload.id);
    // lot.price = payload.price;
  },
  [actions.favoriteLot]: (state, { payload }) => {
    const index = state.lots.findIndex((l) => l.id === payload.id);
    const newLots = update(state.lots, { [index]: { favorite: { $set: true } } });
    return {
      ...state,
      lots: newLots,
    };
    // const lot = state.lots.find((l) => l.id === payload.id);
    // lot.favorite = true;
  },
  [actions.unfavoriteLot]: (state, { payload }) => {
    const index = state.lots.findIndex((l) => l.id === payload.id);
    const newLots = update(state.lots, { [index]: { favorite: { $set: false } } });
    return {
      ...state,
      lots: newLots,
    };
    // const lot = state.lots.find((l) => l.id === payload.id);
    // lot.favorite = false;
  },
});

export default combineReducers({
  auction: auctionReducer,
});
