import Logo from './images/logo.png';

 export default () => {
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

  const header = `
    <header class="header">
      <img class="logo" src=${Logo}>
    </header>
  `;

  const clock = `
    <div class="clock">
      ${state.time.toLocaleTimeString()}
    </div>
  `;

  const lots = state.lots.map((lot) => (
    `
    <article class="lot">
      <div class="price">${lot.price}</div>
      <h1>${lot.name}</h1>
      <p>${lot.description}</p>
    </article>
    `));

  const lotsContainer = `
    <div class="lots">
      ${lots.join('')}
    </div>
  `;

  return `
    <div class="app">
      ${[header, clock, lotsContainer].join('')}
    </div>
  `;
};
