import LogoImg from './images/logo.png';
import { render, stream, createNode } from './lib/utils';
import api from './lib/api';

const Logo = () => (
  createNode('img', ['logo'], null, { src: `${LogoImg}` })
);

const Header = () => {
  const node = createNode('header', ['header']);
  node.append(Logo());
  return node;
};

export const Loading = () => (
  createNode('div', ['loading'], 'Loading...')
);

const Clock = ({ time }) => {
  const node = createNode('div', ['clock']);
  const value = createNode('span', ['value'], time.toLocaleTimeString());

  const iconClasses = (time.getHours() >= 7 && time.getHours() <= 21)
    ? ['icon', 'day'] : ['icon', 'night'];
  const icon = createNode('span', iconClasses);

  node.append(value, icon);
  return node;
};

const Lot = ({ lot }) => {
  const node = createNode('article', ['lot']);
  const price = createNode('div', ['price'], lot.price);
  const name = createNode('h1', [], lot.name);
  const description = createNode('p', [], lot.description);

  node.append(price, name, description);
  return node;
};

const Lots = ({ lots }) => {
  if (lots === null) {
    return Loading();
  }

  const node = createNode('div', ['lots']);
  lots.forEach((lot) => {
    node.append(Lot({ lot }));
  });

  return node;
};

const App = (state) => {
  const node = createNode('div', ['app']);
  node.append(
    Header(),
    Clock({ time: state.time }),
    Lots({ lots: state.lots }),
  );

  return node;
};

const renderView = (state) => {
  render(
    App(state),
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
