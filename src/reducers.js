import { combineReducers } from 'redux';
import { SET_TIME, SET_LOTS, CHANGE_LOT_PRICE, FAVORITE_LOT, UNFAVORITE_LOT } from './actions';

const clockInitialState = {
  time: new Date(),
};

const clockReducer = (state = clockInitialState, action) => {
  switch(action.type) {
    case SET_TIME:
      return {
        ...state,
        time: action.time,
      };

    default:
      return state;
  }
};

const auctionInitialState = {
  lots: null,
};

const auctionReducer = (state = auctionInitialState, action) => {
  switch(action.type) {
    case SET_LOTS:
      return {
        ...state,
        lots: action.lots,
      };

    case CHANGE_LOT_PRICE:
      return {
        ...state,
        lots: state.lots.map((lot) => (
          lot.id === action.id ? ({ ...lot, price: action.price }) : lot
        )),
      };

    case FAVORITE_LOT:
      return {
        ...state,
        lots: state.lots.map((lot) => (
          lot.id === action.id ? ({ ...lot, favorite: true }) : lot
        )),
      };

    case UNFAVORITE_LOT:
      return {
        ...state,
        lots: state.lots.map((lot) => (
          lot.id === action.id ? ({ ...lot, favorite: false }) : lot
        )),
      };

    default:
      return state;
  }
};

export default combineReducers({
  clock: clockReducer,
  auction: auctionReducer,
});
