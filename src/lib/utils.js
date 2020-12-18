export const render = (vdom, domRoot) => {
  domRoot.innerHTML = '';
  domRoot.append(vdom);
};

export const loading = () => (`
  <div class="loading">
    "Loading..."
  </div>
`);
