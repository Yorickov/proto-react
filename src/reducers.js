import { combineReducers } from 'redux';
import { SET_TIME, SET_LOTS, CHANGE_LOT_PRICE } from './actions';

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

    default:
      return state;
  }
};

export default combineReducers({
  clock: clockReducer,
  auction: auctionReducer,
});
