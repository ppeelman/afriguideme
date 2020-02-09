export class Singleton {
  private static _instance: any;

  constructor() {
    if (Singleton._instance) {
      return Singleton._instance;
    }
    Singleton._instance = this;
  }
}
