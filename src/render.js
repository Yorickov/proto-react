export default (vdom, domRoot) => {
  domRoot.innerHTML = '';
  domRoot.append(vdom);
};
