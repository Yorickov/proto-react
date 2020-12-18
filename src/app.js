import LogoImg from './images/logo.png';
import { render, loading } from './lib/utils.js';
import api from './lib/api.js';

const Logo = () => (`
  <img class="logo" src=${LogoImg}></img>
`);

const Header = () => (`
  <header class="header">
    ${Logo()}
  </header>
`);

const Clock = ({ time }) => {
  const className = (time.getHours() >= 7 && time.getHours() <= 21)
    ? 'icon day' : 'icon night';

  return `
    <div class="clock">
      <span class="value">
        ${time.toLocaleTimeString()}
      </span>
      <span class="${className}"></span>
    </div>
  `
};

const Lot = ({ lot }) => (`
  <article class="lot">
    <div class="price">${lot.price}</div>
    <h1>${lot.name}</h1>
    <p>${lot.description}</p>
  </article>
`);

const Lots = ({ lots }) => {
  if (lots === null) {
    return loading();
  }

  return `
    <div class="lots">
      ${lots.map((lot) => Lot({ lot })).join('')}
    </div>
  `;
};

const App = (state) => {
  const node = document.createElement('div');
  node.className = 'app';
  node.innerHTML = [
    Header(),
    Clock({ time: state.time }),
    Lots({ lots: state.lots })
  ].join('');

  return node;
};

const renderView = (state) => {
  render(
    App(state),
    document.getElementById('root')
  )
};

export default () => {
  let state = {
    time: new Date(),
    lots: null,
  }

  renderView(state);

  setInterval(() => {
    state = {
      ...state,
      time: new Date(),
    }

    renderView(state);
  }, 1000);

  api.get('/lots').then((lots) => {
    state = {
      ...state,
      lots,
    }

    renderView(state);
  });
};
