export const setTime = (state, { time }) => ({
  ...state,
  time,
});

export const setLots = (state, { lots }) => ({
  ...state,
  lots,
});

export const changeLotPrice = (state, { id, price }) => ({
  ...state,
  lots: state.lots.map((lot) => (
    lot.id === id ? ({ ...lot, price }) : lot
  )),
});
