var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { UIElement } from "@elf-framework/sapa";
class Route extends UIElement {
}
class Switch extends UIElement {
}
class Router extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "matchRoute", (route) => {
      const { target } = this.props;
      return route.props.path === target;
    });
  }
  template() {
    return this.getLastRoute();
  }
  isForceRender(props) {
    return props.forceUpdate && this.props.target !== props.target;
  }
  getLastRoute() {
    const switchObject = this.findSwitch();
    const route = switchObject.find(this.matchRoute);
    if (!route)
      return "";
    return route.props.content[0];
  }
  findSwitch() {
    return this.props.content.find((it) => it.Component === Switch);
  }
}
export { Route, Router, Switch };
