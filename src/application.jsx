import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import stream from './lib/utils';
import api from './lib/api';

const renderView = (state) => {
  ReactDOM.render(
    <App state={state} />,
    document.getElementById('root'),
  );
};

export default async () => {
  let state = {
    time: new Date(),
    lots: null,
  };
  renderView(state);

  setInterval(() => {
    state = {
      ...state,
      time: new Date(),
    };
    renderView(state);
  }, 1000);

  const lots = await api.get('/lots');
  state = {
    ...state,
    lots,
  };
  renderView(state);

  const onPrice = (data) => {
    state = {
      ...state,
      lots: state.lots.map((lot) => (
        lot.id === data.id ? ({ ...lot, price: data.price }) : lot
      )),
    };
    renderView(state);
  };

  lots.forEach((lot) => {
    stream.subscribe(`price-${lot.id}`, onPrice);
  });
};
