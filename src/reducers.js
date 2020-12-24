export default (state, action, params) => {
  switch(action) {
    case 'setTime':
      return {
        ...state,
        time: params.time,
      }

    case 'setLots':
      return {
        ...state,
        lots: params.lots,
      };

    case 'changeLotPrice':
      return {
        ...state,
        lots: state.lots.map((lot) => (
          lot.id === params.id ? ({ ...lot, price: params.price }) : lot
        )),
      };

    default:
      return state;
  }
};
