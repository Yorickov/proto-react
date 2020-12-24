import React from 'react';
import ReactDOM from 'react-dom';
import stream from './lib/utils';
import api from './lib/api';
import Store from './Store';
import App from './components/App';
import appReducer from './reducers';

const renderView = (state) => {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById('root'),
  );
};

export default async () => {
  const initialState = {
    time: new Date(),
    lots: null,
  };
  const store = new Store(initialState);

  store.subscribe(() => {
    renderView(store.getState())
  });
  renderView(store.getState());

  setInterval(() => {
    store.setState((state) => appReducer(state, 'setTime', { time: new Date() }));
  }, 1000);

  const lots = await api.get('/lots');
  store.setState((state) => appReducer(state, 'setLots', { lots }));

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
      store.setState((state) => appReducer(state, 'changeLotPrice', { id, price }));
    });
  });
};