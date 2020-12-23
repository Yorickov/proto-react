export default class Store {
  constructor (initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // unsubscribe
    return () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }
  }

  changeState(diff) {
    this.state = {
      ...this.state,
      ...(typeof diff === 'function' ? diff(this.state) : diff),
    };

    this.listeners.forEach((listener) => listener());
  }
}
