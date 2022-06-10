var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { UIElement, classnames, createElementJsx, CLICK, IF, isFunction, BIND } from "@elf/sapa";
var style = "";
const NumberStyleKeys = {
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  maxWidth: true,
  maxHeight: true,
  minWidth: true,
  minHeight: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true
};
function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
function propertyMap(styles, mapper) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key]] = styleMap(key, styles[key]);
  });
  return styleObj;
}
class Button extends UIElement {
  template() {
    const { type, disabled, style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style2, {
        borderColor: "--elf--button-border-color",
        backgroundColor: "--elf--button-background",
        disabledColor: "--elf--button-disabled-color",
        color: "--elf--button-color",
        fontSize: "--elf--button-font-size",
        fontWeight: "--elf--button-font-weight",
        height: "--elf--button-height",
        padding: "--elf--button-padding",
        borderRadius: "--elf--button-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadValues({}, styleObject), this.props.content || "");
  }
  [CLICK("$el")](e) {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e);
    }
  }
}
function makeMenuItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type}${index}`;
    if (it.type === MenuItemType.GROUP) {
      return /* @__PURE__ */ createElementJsx(GroupMenuItem, __spreadValues({
        ref
      }, it));
    } else if (it.type === MenuItemType.DIVIDER) {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, __spreadValues({
        ref
      }, it));
    }
    return /* @__PURE__ */ createElementJsx(MenuItem, __spreadValues({
      ref
    }, it));
  });
}
const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item"
};
function DividerMenuItem({ dashed = false }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "divider",
    dashed
  });
}
function GroupMenuItem({ title = "" }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "section-title"
  }, title);
}
class MenuItem extends UIElement {
  initState() {
    const {
      title = "",
      hover = false,
      shortcut,
      icon,
      items = [],
      selectable,
      selected,
      selectedIcon = "\u2713"
    } = this.props;
    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selectable,
      selected,
      selectedIcon
    };
  }
  template() {
    const {
      title = "",
      shortcut,
      icon,
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon
    } = this.state;
    return /* @__PURE__ */ createElementJsx("li", {
      class: classnames({
        hover
      })
    }, selectable ? /* @__PURE__ */ createElementJsx("span", {
      class: "selected-icon"
    }, selected ? selectedIcon : void 0) : null, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-title"
    }, title) : void 0, shortcut ? /* @__PURE__ */ createElementJsx("div", {
      class: "shortcut"
    }, shortcut) : void 0, icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, items.length > 0 ? /* @__PURE__ */ createElementJsx(Menu, {
      items
    }) : void 0);
  }
  checkClickable() {
    const { type, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }
  [CLICK("$el") + IF("checkClickable")](e) {
    const { selectable = false, onClick } = this.props;
    if (selectable) {
      this.setSelected(!this.selected);
    }
    if (isFunction(onClick)) {
      onClick(e, this);
    }
  }
  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected
    });
  }
  get selected() {
    return this.state.selected;
  }
}
class Menu extends UIElement {
  template() {
    return /* @__PURE__ */ createElementJsx("menu", {
      class: "elf--menu"
    }, makeMenuItem(this.props.items || []));
  }
  [BIND("$el")]() {
    const { style: style2 = {} } = this.props;
    return {
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--menu-background",
        color: "--elf--menu-color",
        fontSize: "--elf--menu-font-size",
        fontWeight: "--elf--menu-font-weight",
        height: "--elf--menu-height",
        padding: "--elf--menu-padding",
        borderRadius: "--elf--menu-border-radius",
        borderColor: "--elf--menu-border-color",
        boxShadow: "--elf--menu-box-shadow",
        width: "--elf--menu-width",
        maxWidth: "--elf--menu-max-width",
        sectionTitleColor: "--elf--menu-section-title-color",
        sectionTitleBackgroundColor: "--elf--menu-section-title-background-color",
        dividerColor: "--elf--menu-divider-color",
        left: "--elf--menu-direction-left"
      }))
    };
  }
}
class Dialog extends UIElement {
  initState() {
    const { visible = false, style: style2 = {} } = this.props;
    return {
      visible,
      style: style2
    };
  }
  template() {
    const { style: style2 = {}, visible } = this.state;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible
      }),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--dialog-background",
        color: "--elf--dialog-color",
        fontSize: "--elf--dialog-font-size",
        fontWeight: "--elf--dialog-font-weight",
        height: "--elf--dialog-height",
        padding: "--elf--dialog-padding",
        borderRadius: "--elf--dialog-border-radius",
        borderColor: "--elf--dialog-border-color",
        boxShadow: "--elf--dialog-box-shadow",
        width: "--elf--dialog-width"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-text"
    }, "Dialog"), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-tools",
      ref: "$tools"
    }, this.props.tools || void 0), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-close",
      ref: "$close"
    }, "\xD7")), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-text"
    }, "Hello, I'm a dialog"), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content-tools"
    }, /* @__PURE__ */ createElementJsx("button", {
      class: "elf--button"
    }, "Action"), /* @__PURE__ */ createElementJsx("button", {
      class: "elf--button"
    }, "Dismiss"))));
  }
  [CLICK("$close")]() {
    const { onClose } = this.props;
    if (isFunction(onClose)) {
      onClose(this);
    }
  }
}
export { Button, Dialog, Menu };
