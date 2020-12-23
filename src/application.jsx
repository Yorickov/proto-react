import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import stream from './lib/utils';
import api from './lib/api';
import Store from './lib/Store';

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
    store.changeState({ time: new Date() });
  }, 1000);

  const lots = await api.get('/lots');
  store.changeState({ lots });

  const onPrice = (data) => {
    store.changeState((state) => ({
      lots: state.lots.map((lot) => (
        lot.id === data.id ? ({ ...lot, price: data.price }) : lot
      )),
    }));
  };

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, onPrice);
  });
};
