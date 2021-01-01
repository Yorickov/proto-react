export const hashHistory = () => (
  {
    get location() {
      return window.location.hash.slice(1) || '/';
    },

    push(location) {
      window.location.hash = location;
    },

    createHref(path) {
      return `#${path}`;
    },

    listen(listener) {
      const hashListener = () => {
        listener(window.location.hash.slice(1));
      };
      window.addEventListener('hashchange', hashListener, false);
      return () => {
        window.removeEventListener('hashchange', hashListener);
      };
    },
  }
);

export const browserHistory = () => (
  {
    get location() {
      const { state } = window.history;
      return state ? state.location : window.location.pathname;
    },

    push(location) {
      const state = { location };
      window.history.pushState(state, '', location);
      window.dispatchEvent(new PopStateEvent('popstate', { state }));
    },

    createHref(path) {
      return path;
    },

    listen(listener) {
      const stateListener = (event) => {
        const { state } = event;
        listener(state ? state.location : window.location.pathname);
      };
      window.addEventListener('popstate', stateListener, false);

      return () => {
        window.removeEventListener('popstate', stateListener);
      };
    },
  }
);
