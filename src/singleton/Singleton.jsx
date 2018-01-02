class Singleton {
  constructor() {
    this.type='';
    this.hai='';
  }
  singletonMethod() {
    return 'singletonMethod';
  }
  static staticMethod() {
    return 'staticMethod';
  }
}
export default new Singleton();