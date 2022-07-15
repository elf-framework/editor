import { createHandlerInstance } from "./functions/registElement";

export class MagicHandler {
  #handlerCache = {};

  constructor() {
    this.handlers = this.initializeHandler();
  }

  initializeHandler(localHandlers = {}) {
    return createHandlerInstance(this, localHandlers);
  }

  loadHandlerCache(func) {
    if (!this.#handlerCache[func]) {
      this.#handlerCache[func] = this.handlers.filter((h) => h[func]);
    }

    return this.#handlerCache[func];
  }

  async runHandlers(func = "run", ...args) {
    await Promise.all(
      this.loadHandlerCache(func).map(async (h) => {
        await h[func](...args);
      })
    );
  }
}
