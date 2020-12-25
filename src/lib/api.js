export default {
  get(url) {
    switch (url) {
      case '/lots':
        return new Promise((resolve) => {
          setTimeout(() => {
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
          }, 1000);
        });
      default:
        return Promise.reject(new Error('Unknown address'));
    }
  },
};
