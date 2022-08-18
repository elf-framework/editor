import { UIElement } from "@elf-framework/sapa";

export class Route extends UIElement {}

export class Switch extends UIElement {}

export class Router extends UIElement {
  matchRoute = (route) => {
    const { target } = this.props;
    return route.props.path === target;
  };

  template() {
    return this.getLastRoute();
  }

  isForceRender(props) {
    return props.forceUpdate && this.props.target !== props.target;
  }

  getLastRoute() {
    const switchObject = this.findSwitch();

    const route = switchObject.find(this.matchRoute);

    if (!route) return "";

    return route.props.content[0];
  }

  findSwitch() {
    return this.props.content.find((it) => it.Component === Switch);
  }
}
