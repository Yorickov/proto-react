import { combineReducers } from 'redux';
import { SET_TIME, SET_LOTS, CHANGE_LOT_PRICE, FAVORITE_LOT, UNFAVORITE_LOT } from './actions';

const clockInitialState = {
  time: new Date(),
};

const clockReducer = (state = clockInitialState, { type, payload }) => {
  switch(type) {
    case SET_TIME:
      return {
        ...state,
        payload: { time: payload.time },
      };

    default:
      return state;
  }
};

const auctionInitialState = {
  lots: null,
};

const auctionReducer = (state = auctionInitialState, { type, payload }) => {
  switch(type) {
    case SET_LOTS:
      return {
        ...state,
        lots: payload.lots,
      };

    case CHANGE_LOT_PRICE:
      const newLots = state.lots.map((lot) => (
        lot.id === payload.id ? ({ ...lot, price: payload.price }) : lot
      ));
      return {
        ...state,
        lots: newLots,
      };

    case FAVORITE_LOT:
      const newFavLots = state.lots.map((lot) => (
        lot.id === payload.id ? ({ ...lot, favorite: true }) : lot
      ));
      return {
        ...state,
        lots: newFavLots,
      };

    case UNFAVORITE_LOT:
      const newUnfavLots = state.lots.map((lot) => (
        lot.id === payload.id ? ({ ...lot, favorite: false }) : lot
      ));
      return {
        ...state,
        lots: newUnfavLots,
      };

    default:
      return state;
  }
};

export default combineReducers({
  clock: clockReducer,
  auction: auctionReducer,
});
