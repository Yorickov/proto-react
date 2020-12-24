export default class Store {
  constructor (reducer, initialState) {
    this.reducer = reducer;
    // this.state = initialState;
    this.state = reducer(initialState, { type: null });
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

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  dispatch (action) {
    this.state = this.reducer(this.state, action)
    this.publish();
  }
}
