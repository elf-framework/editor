import BaseHandler from "./handler/BaseHandler";
import { MagicHandler } from "./MagicHandler";

class RouteHandler extends BaseHandler {
  initialize() {
    console.log(this);
  }
}

export class Router extends MagicHandler {
  constructor() {
    super();

    this.routes = {};

    this.runHandlers("initialize");
  }

  initializeHandler() {
    return [new RouteHandler(this)];
  }
}
