export const SET_TIME = 'SET_TIME';
export const SET_LOTS = 'SET_LOTS';
export const CHANGE_LOT_PRICE = 'CHANGE_LOT_PRICE';

export default (state, action) => {
  switch(action.type) {
    case SET_TIME:
      return {
        ...state,
        time: action.time,
      }

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
