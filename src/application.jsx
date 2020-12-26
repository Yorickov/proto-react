import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import stream from './lib/utils';
import api from './lib/api';
import App from './components/App';
import appReducer from './reducers';
import * as actions from './actions';

const renderView = (store) => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root'),
  );
};

export default async () => {
  const store = createStore(appReducer);

  store.subscribe(() => {
    renderView(store)
  });
  renderView(store);

  setInterval(() => {
    store.dispatch(actions.setTime(new Date()));
  }, 1000);

  const lots = await api.get('/lots');
  store.dispatch(actions.setLots(lots));

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
      store.dispatch(actions.changeLotPrice(id, price));
    });
  });
};
