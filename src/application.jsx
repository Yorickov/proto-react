import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { stream, StoreContext } from './lib/utils';
import api from './lib/api';
import App from './components/App.jsx';
import appReducer from './reducers';
import * as actions from './actions';

export default async () => {
  const store = createStore(appReducer);

  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
    document.getElementById('root'),
  );

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
