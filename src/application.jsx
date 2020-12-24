import React from 'react';
import ReactDOM from 'react-dom';
import stream from './lib/utils';
import api from './lib/api';
import Store from './Store';
import App from './components/App';
import appReducer from './reducers';
import { SET_TIME, SET_LOTS, CHANGE_LOT_PRICE } from './reducers';

const renderView = (state) => {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById('root'),
  );
};

export default async () => {
  const store = new Store(appReducer);

  store.subscribe(() => {
    renderView(store.getState())
  });
  renderView(store.getState());

  setInterval(() => {
    store.dispatch({
      type: SET_TIME,
      time: new Date(),
    });
  }, 1000);

  const lots = await api.get('/lots');
  store.dispatch({
    type: SET_LOTS,
    lots,
  });

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
      store.dispatch({
        type: CHANGE_LOT_PRICE,
        id,
        price,
      });
    });
  });
};
