export const lotsLoadingPending = () => ({
  type: 'LOTS_LOADING_PENDING',
});

export const lotsLoadingSuccess = (lots) => ({
  type: 'LOTS_LOADING_SUCCESS',
  payload: { lots },
});

export const lotsLoadingError = (error) => ({
  type: 'LOTS_LOADING_ERROR',
  payload: { error },
});

export const changeLotPrice = (id, price) => ({
  type: 'CHANGE_LOT_PRICE',
  payload: { id, price },
});

export const favoriteLot = (id) => ({
  type: 'FAVORITE_LOT',
  payload: { id },
});

export const unfavoriteLot = (id) => ({
  type: 'UNFAVORITE_LOT',
  payload: { id },
});
