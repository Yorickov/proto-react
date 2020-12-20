export const render = (vdom, domRoot) => {
  domRoot.innerHTML = '';
  domRoot.append(vdom);
};

export const stream = {
  subscribe(channel, listener) {
    const match = channel.match(/price-(\d+)/);

    if (match) {
      setInterval(() => {
        listener({
          id: parseInt(match[1], 10),
          price: Math.round((Math.random() * 10 + 30)),
        });
      }, 500);
    }
  },
};

export const createNode = (tag, classes = [], textContent = null, attrs = {}) => {
  const node = document.createElement(tag);
  node.classList.add(...classes);
  if (textContent) {
    node.innerText = textContent;
  }
  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      node.setAttribute(key, attrs[key]);
    });
  }
  return node;
};
