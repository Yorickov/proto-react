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

export const VDom = {
  createElement: (type, config, ...children) => {
    const key = config ? (config.key || null) : null;
    const props = config || {};

    if (children.length === 1) {
      [props.children] = children;
    } else {
      props.children = children;
    }

    return {
      type,
      key,
      props,
    };
  },
};
