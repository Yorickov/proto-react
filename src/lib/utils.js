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
