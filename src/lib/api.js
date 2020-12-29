export default {
  get(url) {
    switch (url) {
      case '/lots':
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.25) {
              resolve([
                {
                  id: 1,
                  name: 'Apple',
                  description: 'Apple description',
                  price: 16,
                  favorite: true,
                },
                {
                  id: 2,
                  name: 'Orange',
                  description: 'Orange description',
                  price: 41,
                  favorite: false,
                },
              ]);
            } else {
              reject(new Error('Connection error'));
            }
          }, 1000);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
  post(url) {
    if (/^\/lots\/(\d+)\/favorite$/.exec(url)) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 500);
      });
    }
    if (/^\/lots\/(\d+)\/unfavorite$/.exec(url)) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 500);
      });
    }
    return Promise.reject(new Error('Unknown address'));
  },
};
