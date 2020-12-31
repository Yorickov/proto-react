import React from 'react';

export default {
  subscribe(channel, listener) {
    const match = channel.match(/price-(\d+)/);

    if (match) {
      const interval = setInterval(() => {
        listener({
          id: parseInt(match[1], 10),
          price: Math.round((Math.random() * 10 + 30)),
        });
      }, 500);
      return () => clearInterval(interval);
    }
  },
};

export const RouterContext = React.createContext();

export const matchPath = (location, path) => {
  const pattern = path.replace(/:[^/]+/i, (m) => `(?<${m.slice(1)}>[\\w-]+)`);
  const regexp = new RegExp(`^${pattern}$`);
  // return regexp.exec(location);
  return location.match(regexp);
};
