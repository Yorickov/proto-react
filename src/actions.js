import { createAction } from '@reduxjs/toolkit';

export const lotsLoadingPending = createAction('LOTS_LOADING_PENDING');

export const lotsLoadingSuccess = createAction('LOTS_LOADING_SUCCESS',
  (lots) => ({ payload: { lots } }));

export const lotsLoadingError = createAction('LOTS_LOADING_ERROR',
  (error) => ({ payload: { error } }));

export const loadLotsAsync = () => (
  async (dispatch, _getState, { api }) => {
    dispatch(lotsLoadingPending());
    try {
      const lots = await api.get('/lots');
      dispatch(lotsLoadingSuccess(lots));
    } catch (e) {
      dispatch(lotsLoadingError(e.message));
    }
  });

export const changeLotPrice = createAction('CHANGE_LOT_PRICE',
  (id, price) => ({ payload: { id, price } }));

export const subscribeToLotPrice = (id) => (
  (dispatch, _getState, { stream }) => (
    stream.subscribe(`price-${id}`, (data) => {
      dispatch(changeLotPrice(data.id, data.price));
    })));

export const favoriteLot = createAction('FAVORITE_LOT',
  (id) => ({ payload: { id } }));

export const unfavoriteLot = createAction('UNFAVORITE_LOT',
  (id) => ({ payload: { id } }));

export const favoriteLotAsync = (id) => (
  async (dispatch, _getState, { api }) => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(favoriteLot(id));
  });

export const unfavoriteLotAsync = (id) => (
  async (dispatch, _getState, { api }) => {
    await api.post(`/lots/${id}/unfavorite`);
    dispatch(unfavoriteLot(id));
  });
