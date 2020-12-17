import app from './app';

export default () => {
  const domRoot = document.getElementById('container');
  domRoot.innerHTML = app();
};
