import { createAction } from '@reduxjs/toolkit';

export const setTime = createAction('SET_TIME',
  (time) => ({ payload: { time } }));

export const setLots = createAction('SET_LOTS',
  (lots) => ({ payload: { lots } }));

export const changeLotPrice = createAction('CHANGE_LOT_PRICE',
  (id, price) => ({ payload: { id, price } }));

export const favoriteLot = createAction('FAVORITE_LOT',
  (id) => ({ payload: { id } }));

export const unfavoriteLot = createAction('UNFAVORITE_LOT',
  (id) => ({ payload: { id } }));
