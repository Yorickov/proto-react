import update from 'immutability-helper';

const auctionReducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOTS_LOADING_PENDING':
      return {
        ...state,
        lots: [],
        loading: true,
        loaded: false,
        error: null,
      };

    case 'LOTS_LOADING_SUCCESS':
      return {
        ...state,
        lots: payload.lots,
        loading: false,
        loaded: true,
        error: null,
      };

    case 'LOTS_LOADING_ERROR':
      return {
        ...state,
        lots: [],
        loading: false,
        loaded: false,
        error: payload.error,
      };

    case 'CHANGE_LOT_PRICE':
      const priceIdx = state.lots.findIndex((l) => l.id === payload.id);
      return {
        ...state,
        lots: update(state.lots, { [priceIdx]: { price: { $set: payload.price } } }),
      };

    case 'FAVORITE_LOT':
      const favIdx = state.lots.findIndex((l) => l.id === payload.id);
      return {
        ...state,
        lots: update(state.lots, { [favIdx]: { favorite: { $set: true } } }),
      };

    case 'UNFAVORITE_LOT':
      const unfavIdx = state.lots.findIndex((l) => l.id === payload.id);
      return {
        ...state,
        lots: update(state.lots, { [unfavIdx]: { favorite: { $set: false } } }),
      };

    default:
      return state;
  }
};

export default auctionReducer;
