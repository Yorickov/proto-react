export const SET_TIME = 'SET_TIME';
export const SET_LOTS = 'SET_LOTS';
export const CHANGE_LOT_PRICE = 'CHANGE_LOT_PRICE';

export const setTime = (time) => ({
    type: SET_TIME,
    time,
  });

export const setLots = (lots) => ({
  type: SET_LOTS,
  lots,
});

export const changeLotPrice = (id, price) => ({
  type: CHANGE_LOT_PRICE,
  id,
  price,
});
