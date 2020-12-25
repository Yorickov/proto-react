export const SET_TIME = 'SET_TIME';
export const SET_LOTS = 'SET_LOTS';
export const CHANGE_LOT_PRICE = 'CHANGE_LOT_PRICE';
export const FAVORITE_LOT = 'FAVORITE_LOT'
export const UNFAVORITE_LOT = 'UNFAVORITE_LOT'

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

export const favoriteLot = (id) => ({
  type: FAVORITE_LOT,
  id,
});

export const unfavoriteLot = (id) => ({
  type: UNFAVORITE_LOT,
  id,
});
