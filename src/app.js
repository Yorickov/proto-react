import React from 'react';
import ReactDOM from 'react-dom';

import LogoImg from './images/logo.png';
import stream from './lib/utils';
import api from './lib/api';

const Logo = () => (
  React.createElement('img', { className: 'logo', src: LogoImg })
);

const Header = () => (
  React.createElement('header', { className: 'header' },
    React.createElement(Logo))
);

const Loading = () => (
  React.createElement('div', { className: 'loading' }, 'Loading...')
);

const Clock = ({ time }) => {
  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return React.createElement('div', { className: 'clock' },
    React.createElement('span', { className: 'value' }, time.toLocaleTimeString()),
    React.createElement('span', { className: isDay ? 'icon day' : 'icon night' }));
};

const Lot = ({ lot, key }) => (
  React.createElement('article', { className: 'lot', key },
    React.createElement('div', { className: 'price' }, lot.price),
    React.createElement('h1', {}, lot.name),
    React.createElement('p', {}, lot.description))
);

const Lots = ({ lots }) => {
  if (lots === null) {
    return React.createElement(Loading);
  }

  return React.createElement('div', { className: 'lots' },
    lots.map((lot) => React.createElement(Lot, { lot, key: lot.id })));
};

const App = (state) => (
  React.createElement('div', { className: 'app' },
    React.createElement(Header),
    React.createElement(Clock, { time: state.time }),
    React.createElement(Lots, { lots: state.lots }))
);

const renderView = (state) => {
  ReactDOM.render(
    React.createElement(App, state),
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
