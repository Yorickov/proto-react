import React from 'react';
import ReactDOM from 'react-dom';
import stream from './lib/utils';
import api from './lib/api';
import Store from './Store';
import App from './components/App';
import { setTime, setLots, changeLotPrice } from './reducers';

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
    store.setState((state) => setTime(state, { time: new Date() }));
  }, 1000);

  const lots = await api.get('/lots');
  store.setState((state) => setLots(state, { lots }));

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, ({ id, price }) => {
      store.setState((state) => changeLotPrice(state, { id, price }));
    });
  });
};
