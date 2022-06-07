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
import { UIElement, createElementJsx, BIND, CLICK, IF, isFunction, classnames } from "@elf/sapa";
var style = "";
function propertyMap(styles, mapper) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key]] = styles[key];
  });
  return styleObj;
}
class Button extends UIElement {
  template() {
    return /* @__PURE__ */ createElementJsx("button", {
      class: "elf--button"
    }, this.props.content || "");
  }
  [BIND("$el")]() {
    const { type, disabled, style: style2 = {} } = this.props;
    return {
      class: [
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        }
      ],
      disabled: disabled ? "disabled" : null,
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
      selected
    } = this.props;
    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selected
    };
  }
  template() {
    const { title = "", shortcut, icon, items = [] } = this.state;
    return /* @__PURE__ */ createElementJsx("li", null, title ? /* @__PURE__ */ createElementJsx("div", {
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
    const { onClick, onSelect } = this.props;
    if (isFunction(onSelect)) {
      this.setSelected(!this.selected);
      onSelect(e, this);
    } else if (isFunction(onClick)) {
      onClick(e, this);
    }
  }
  [BIND("$el")]() {
    return {
      class: classnames({
        hover: this.state.hover,
        selected: this.state.selected
      })
    };
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
export { Button, Menu };
