var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { UIElement, classnames, createElementJsx, CLICK, IF, PREVENT, STOP, isFunction, isString, Dom, POINTEROVER, POINTERLEAVE } from "@elf/sapa";
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
    styleObj[mapper[key] || key] = styleMap(key, styles[key]);
  });
  return styleObj;
}
class Button extends UIElement {
  template() {
    const { type, size, disabled, shape, style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        },
        {
          "elf--button-lg": size === "large",
          "elf--button-sm": size === "small"
        },
        {
          "elf--button-shape-circle": shape === "circle",
          "elf--button-shape-round": shape === "round"
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
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({}, styleObject), {
      onClick: this.props.onClick
    }), /* @__PURE__ */ createElementJsx("span", null, this.props.content || ""));
  }
}
class IconButton extends UIElement {
  template() {
    const {
      type,
      icon,
      content = "",
      size,
      disabled,
      shape,
      style: style2 = {}
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--icon-button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        },
        {
          "elf--icon-button-lg": size === "large",
          "elf--icon-button-sm": size === "small"
        },
        {
          "elf--icon-button-shape-circle": shape === "circle",
          "elf--icon-button-shape-round": shape === "round"
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style2, {
        borderColor: "--elf--icon-button-border-color",
        backgroundColor: "--elf--icon-button-background",
        disabledColor: "--elf--icon-button-disabled-color",
        color: "--elf--icon-button-color",
        fontSize: "--elf--icon-button-font-size",
        fontWeight: "--elf--icon-button-font-weight",
        height: "--elf--icon-button-height",
        padding: "--elf--icon-button-padding",
        borderRadius: "--elf--icon-button-border-radius"
      }))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({
      type: "button"
    }, styleObject), {
      onClick: this.props.onClick
    }), icon || content || "");
  }
}
const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function makeMenuItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    if (isString(it) && it === "-") {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        ref
      });
    } else if (it.type === MenuItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, __spreadValues({
        ref
      }, it));
    } else if (it.type === MenuItemType.GROUP) {
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
function DividerMenuItem({ dashed = false }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "divider",
    dashed
  });
}
function CustomMenuItem({ render }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "custom"
  }, render == null ? void 0 : render(this));
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
    const { type = MenuItemType.ITEM, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }
  [CLICK("$el") + IF("checkClickable") + PREVENT + STOP](e) {
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
    const { style: style2 = {}, type = "menu", x = 0, y = 0, direction = "left" } = this.props;
    let itemStyle = __spreadValues({}, style2);
    if (x !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { left: x + "px" });
    if (y !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { top: y + "px" });
    const styleObject = {
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu",
        "left": direction === "left",
        "center": direction === "center",
        "right": direction === "right"
      }),
      style: __spreadValues({}, propertyMap(itemStyle, {
        left: "--elf--menu-left",
        top: "--elf--menu-top",
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
        directionLeft: "--elf--menu-direction-left"
      }))
    };
    return /* @__PURE__ */ createElementJsx("menu", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeMenuItem(this.props.items || []));
  }
}
class Dialog extends UIElement {
  initState() {
    const { visible = false, style: style2 = {}, center } = this.props;
    return {
      visible,
      style: style2,
      center
    };
  }
  close() {
    const { onClose } = this.props;
    if (isFunction(onClose)) {
      onClose(this);
    }
  }
  ok() {
    const { onOk } = this.props;
    if (isFunction(onOk)) {
      onOk(this);
    }
  }
  cancel() {
    const { onCancel } = this.props;
    if (isFunction(onCancel)) {
      onCancel(this);
    }
  }
  makeDefaultTools() {
    const { footer, cancelText = "Cancel", okText = "OK" } = this.props;
    if (!footer) {
      return [
        /* @__PURE__ */ createElementJsx(Button, {
          onClick: () => this.cancel()
        }, cancelText),
        /* @__PURE__ */ createElementJsx(Button, {
          type: "primary",
          onClick: () => this.ok()
        }, okText)
      ];
    }
    return "";
  }
  template() {
    const { style: style2 = {}, visible, center } = this.state;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible,
        center
      }),
      style: __spreadValues({}, propertyMap(style2, {
        position: "--elf--dialog-position",
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
    }, this.props.content || ""), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content-tools"
    }, this.props.footer ? this.props.footer : this.makeDefaultTools())));
  }
  [CLICK("$close")]() {
    this.close();
  }
}
const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function makeToolsItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type}-${index}`;
    if (it.type === ToolsItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(ToolsCustomItem, __spreadValues({
        ref
      }, it));
    }
    if (it.type === ToolsItemType.MENU) {
      return /* @__PURE__ */ createElementJsx(ToolsMenuItem, __spreadValues({
        ref
      }, it));
    }
    return /* @__PURE__ */ createElementJsx(ToolsItem, __spreadValues({
      ref
    }, it));
  });
}
class ToolsItem extends UIElement {
  initialize() {
    super.initialize();
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => {
          this.refresh();
        });
      });
    }
  }
  initState() {
    const { title = "", icon, selected } = this.props;
    return {
      title,
      icon,
      selected
    };
  }
  template() {
    const { title = "", icon } = this.state;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.selected ? true : void 0
      }),
      onClick: this.props.onClick
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, icon ? /* @__PURE__ */ createElementJsx("span", {
      class: "icon"
    }, icon) : title ? /* @__PURE__ */ createElementJsx("span", {
      class: "menu-title"
    }, title) : void 0));
  }
  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected
    });
  }
  get selected() {
    if (isFunction(this.state.selected)) {
      return this.state.selected();
    }
    return this.state.selected;
  }
  set selected(value) {
    this.setSelected(value);
  }
}
class ToolsCustomItem extends ToolsItem {
  template() {
    var _a, _b;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tools-item custom"
    }, (_b = (_a = this.props).render) == null ? void 0 : _b.call(_a));
  }
}
class ToolsMenuItem extends ToolsItem {
  initState() {
    const { title = "", icon, selected, opened, items, direction } = this.props;
    return {
      title,
      icon,
      selected,
      opened,
      items,
      direction
    };
  }
  template() {
    const { title = "", icon, items = [], opened = false, direction = "left" } = this.state;
    const hasItems = items.length > 0;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.selected ? true : void 0,
        "has-items": hasItems
      })
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, icon ? /* @__PURE__ */ createElementJsx("span", {
      class: "icon"
    }, icon) : title ? /* @__PURE__ */ createElementJsx("span", {
      class: "menu-title"
    }, title) : void 0, hasItems ? /* @__PURE__ */ createElementJsx("span", {
      class: classnames("arrow", { opened })
    }, /* @__PURE__ */ createElementJsx("svg", {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ createElementJsx("path", {
      d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
    }))) : void 0), opened ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx(Menu, {
      ref: "$menu",
      items,
      direction,
      style: {
        top: "calc(100% + 5px)"
      }
    })) : void 0);
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }
  open() {
    this.setState({
      opened: true
    });
  }
  close() {
    this.setState({
      opened: false
    });
  }
  toggle() {
    this.setState({
      opened: !this.state.opened
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");
    if ($menu)
      return false;
    return true;
  }
  checkTriggerClick() {
    const { trigger = "click" } = this.props;
    return trigger === "click";
  }
  checkTriggerOver() {
    return this.props.trigger === "hover";
  }
  [POINTEROVER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }
  checkNotInMenu(e) {
    const $menu = Dom.create(e.target).closest("elf--tools-item");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [POINTERLEAVE("$el") + IF("checkTriggerOver")](e) {
    this.close();
  }
  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")](e) {
    this.close();
  }
  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")](e) {
    if (Dom.create(e.target).hasClass("arrow")) {
      this.toggle();
      if (this.state.opened) {
        this.runCallback(this.props.onOpen, e);
      } else {
        this.runCallback(this.props.onClose, e);
      }
    } else {
      this.close();
      this.runCallback(this.props.onClick, e);
    }
  }
}
class Tools extends UIElement {
  template() {
    const { style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames("elf--tools"),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--tools-background",
        color: "--elf--tools-color",
        height: "--elf--tools-height"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolsItem(this.props.items));
  }
}
function makeToolbarItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    return /* @__PURE__ */ createElementJsx(ToolbarItem, __spreadValues({
      ref
    }, it));
  });
}
class ToolbarItem extends UIElement {
  template() {
    const { items, style: style2 } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolbar-item"
    }, /* @__PURE__ */ createElementJsx(Tools, {
      ref: "$tools",
      items,
      style: style2
    }));
  }
}
class Toolbar extends UIElement {
  template() {
    const { style: style2 = {}, align, items = [] } = this.props;
    const styleObject = {
      class: classnames("elf--toolbar", {
        [align]: true
      }),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--toolbar-background",
        color: "--elf--toolbar-color",
        height: "--elf--toolbar-height",
        align: "--elf--toolbar-align"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolbarItem(items));
  }
}
export { Button, Dialog, IconButton, Menu, Toolbar, ToolbarItem, Tools, ToolsCustomItem, ToolsMenuItem };
