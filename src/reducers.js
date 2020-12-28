import update from 'immutability-helper';
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
  clock: clockReducer,
  auction: auctionReducer,
});
