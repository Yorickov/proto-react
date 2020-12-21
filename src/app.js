import LogoImg from './images/logo.png';
import { stream, VDom } from './lib/utils';
import render from './lib/render';
import api from './lib/api';

const Logo = () => (
  VDom.createElement('img', { className: 'logo', src: LogoImg })
);

const Header = () => (
  VDom.createElement('header', { className: 'header' },
    VDom.createElement(Logo))
);

const Loading = () => (
  VDom.createElement('div', { className: 'loading' }, 'Loading...')
);

const Clock = ({ time }) => {
  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return VDom.createElement('div', { className: 'clock' },
    VDom.createElement('span', { className: 'value' }, time.toLocaleTimeString()),
    VDom.createElement('span', { className: isDay ? 'icon day' : 'icon night' }));
};

const Lot = ({ lot, key }) => (
  VDom.createElement('article', { className: 'lot', key },
    VDom.createElement('div', { className: 'price' }, lot.price),
    VDom.createElement('h1', {}, lot.name),
    VDom.createElement('p', {}, lot.description))
);

const Lots = ({ lots }) => {
  if (lots === null) {
    return VDom.createElement(Loading);
  }

  return VDom.createElement('div', { className: 'lots' },
    lots.map((lot) => VDom.createElement(Lot, { lot, key: lot.id })));
};

const App = (state) => (
  VDom.createElement('div', { className: 'app' },
    VDom.createElement(Header),
    VDom.createElement(Clock, { time: state.time }),
    VDom.createElement(Lots, { lots: state.lots }))
);

const renderView = (state) => {
  render(
    VDom.createElement(App, state),
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
