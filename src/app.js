import LogoImg from './images/logo.png';

const state = {
  time: new Date(),
  lots: [
    {
      id: 1,
      name: 'Apple',
      description: 'Apple description',
      price: 16
    },
    {
      id: 2,
      name: 'Orange',
      description: 'Orange description',
      price: 41
    }
  ]
}

const Logo = () => (`
  <img class="logo" src=${LogoImg}></img>
`);

const Header = () => (`
  <header class="header">
    ${Logo()}
  </header>
`);

const Clock = ({ time }) => (`
  <div class="clock">
    ${time.toLocaleTimeString()}
  </div>
`);

const Lot = ({ lot }) => (`
  <article class="lot">
    <div class="price">${lot.price}</div>
    <h1>${lot.name}</h1>
    <p>${lot.description}</p>
  </article>
`);

const Lots = ({ lots }) => (`
  <div class="lots">
    ${lots.map((lot) => Lot({ lot })).join('')}
  </div>
`);

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

export default App.bind(null, state);
