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

export const combineReducers = (reducers) => (
  (state = {}, action) => {
    const result = {};
    Object.entries(reducers).forEach(([key, reducer]) => {
      result[key] = reducer(state[key], action)
    });
    return result;
  });
