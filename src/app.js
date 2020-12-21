import LogoImg from './images/logo.png';
import stream from './lib/utils';
import render from './lib/render';
import api from './lib/api';

const Logo = () => (
  {
    type: 'img',
    props: {
      className: 'logo',
      src: LogoImg,
    },
  }
);

const Header = () => (
  {
    type: 'header',
    props: {
      className: 'header',
      children: [
        {
          type: Logo,
          props: {},
        },
      ],
    },
  }
);

export const Loading = () => (
  {
    type: 'div',
    props: {
      className: 'loading',
      children: [
        'Loading...',
      ],
    },
  }
);

const Clock = ({ time }) => {
  const isDay = time.getHours() >= 7 && time.getHours() <= 21;

  return {
    type: 'div',
    props: {
      className: 'clock',
      children: [
        {
          type: 'span',
          props: {
            className: 'value',
            children: [
              time.toLocaleTimeString(),
            ],
          },
        },
        {
          type: 'span',
          props: {
            className: isDay ? 'icon day' : 'icon night',
          },
        },
      ],
    },
  };
};

const Lot = ({ lot }) => (
  {
    type: 'article',
    key: lot.id,
    props: {
      className: 'lot',
      children: [
        {
          type: 'div',
          props: {
            className: 'price',
            children: [
              lot.price,
            ],
          },
        },
        {
          type: 'h1',
          props: {
            children: [
              lot.name,
            ],
          },
        },
        {
          type: 'p',
          props: {
            children: [
              lot.description,
            ],
          },
        },
      ],
    },
  }
);

const Lots = ({ lots }) => {
  if (lots === null) {
    return {
      type: Loading,
      props: {},
    };
  }

  return {
    type: 'div',
    props: {
      className: 'lots',
      children: lots.map((lot) => ({
        type: Lot,
        props: { lot },
      })),
    },
  };
};

const App = (state) => (
  {
    type: 'div',
    props: {
      className: 'app',
      children: [
        {
          type: Header,
          props: {},
        },
        {
          type: Clock,
          props: { time: state.time },
        },
        {
          type: Lots,
          props: { lots: state.lots },
        },
      ],
    },
  }
);

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
