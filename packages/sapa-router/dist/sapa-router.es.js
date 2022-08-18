var c = Object.defineProperty;
var i = (e, r, t) => r in e ? c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var o = (e, r, t) => (i(e, typeof r != "symbol" ? r + "" : r, t), t);
import { UIElement as n } from "@elf-framework/sapa";
class u extends n {
}
class h extends n {
}
class d extends n {
  constructor() {
    super(...arguments);
    o(this, "matchRoute", (t) => {
      const { target: s } = this.props;
      return t.props.path === s;
    });
  }
  template() {
    return this.getLastRoute();
  }
  isForceRender(t) {
    return t.forceUpdate && this.props.target !== t.target;
  }
  getLastRoute() {
    const s = this.findSwitch().find(this.matchRoute);
    return s ? s.props.content[0] : "";
  }
  findSwitch() {
    return this.props.content.find((t) => t.Component === h);
  }
}
export {
  u as Route,
  d as Router,
  h as Switch
};
