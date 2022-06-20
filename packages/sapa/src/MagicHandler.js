import {
  createHandlerInstance,
} from "./functions/registElement";

export class MagicHandler {

  constructor() {
    this.handlers = this.initializeHandler();
  }

  initializeHandler(localHandlers = {}) {
    return createHandlerInstance(this, localHandlers);
  }  

  async runHandlers(func = "run", ...args) {
    await Promise.all(
      this.handlers
        .filter((h) => h[func])
        .map(async (h) => {
          await h[func](...args);
        })
    );
  }
}
