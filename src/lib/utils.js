export default {
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
