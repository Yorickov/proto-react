export default class Store {
  constructor (initialState) {
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  changeState(diff) {
    this.state = {
      ...this.state,
      ...(typeof diff === 'function' ? diff(this.state) : diff),
    };
  }
}
