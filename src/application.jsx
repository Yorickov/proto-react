import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import stream from './lib/utils';
import api from './lib/api';
import App from './components/App.jsx';
import appReducer from './reducers';
import * as actions from './actions';

export default async () => {
  const functionalActionSupport = ({ dispatch, getState }) => (
    (next) => (
      (action) => {
        if (typeof action === 'function') {
          return action(dispatch, getState);
        }
        return next(action);
      }));

  const store = createStore(
    appReducer,
    applyMiddleware(functionalActionSupport),
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
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
