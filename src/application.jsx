import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import stream from './lib/utils';
import api from './lib/api';
import App from './components/App.jsx';
import appReducer from './reducers';
import * as actions from './actions';

export default async () => {
  const store = configureStore({
    reducer: appReducer,
    middleware: [thunk.withExtraArgument({ api }), ...getDefaultMiddleware({ thunk: false })],
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

  const lots = await api.get('/lots');
  store.dispatch(actions.setLots(lots));

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
      store.dispatch(actions.changeLotPrice(id, price));
    });
  });
};
