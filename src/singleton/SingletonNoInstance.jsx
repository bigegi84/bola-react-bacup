class SingletonDefaultExportInstance {
  constructor() {
    this._type = 'SingletonDefaultExportInstance';
  }

  singletonMethod() {
    return 'singletonMethod';
  }

  static staticMethod() {
    return 'staticMethod';
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}

export default new SingletonDefaultExportInstance();