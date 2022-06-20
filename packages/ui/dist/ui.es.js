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
import { UIElement, classnames, createElementJsx, CLICK, IF, PREVENT, STOP, isFunction, isString, OBSERVER, PARAMS, Dom as Dom$1, POINTEROVER, POINTERLEAVE, POINTERENTER, FOCUSIN, FOCUSOUT } from "@elf-framework/sapa";
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
  borderLeftWidth: true,
  gap: true
};
function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
function propertyMap(styles, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    styleObj[mapper[key] || key] = styleMap(key, styles[key]);
  });
  return styleObj;
}
const cssProperties$d = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius"
};
class Button extends UIElement {
  template() {
    const { type, size, disabled, shape, destructive = false, style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline"
        },
        destructive ? "destructive" : "",
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
      style: __spreadValues({}, propertyMap(style2, cssProperties$d))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({}, styleObject), {
      onClick: this.props.onClick
    }), /* @__PURE__ */ createElementJsx("span", null, this.props.content || ""));
  }
}
const cssProperties$c = {
  borderColor: "--elf--link-button-border-color",
  backgroundColor: "--elf--link-button-background",
  disabledColor: "--elf--link-button-disabled-color",
  color: "--elf--link-button-color",
  fontSize: "--elf--link-button-font-size",
  fontWeight: "--elf--link-button-font-weight",
  padding: "--elf--link-button-padding"
};
class LinkButton extends UIElement {
  template() {
    const { disabled, style: style2 = {}, content, onClick, href } = this.props;
    const styleObject = {
      class: classnames([
        "elf--link-button"
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style2, cssProperties$c))
    };
    return /* @__PURE__ */ createElementJsx("a", __spreadProps(__spreadValues({}, styleObject), {
      onClick,
      href: href || "#"
    }), /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$b = {
  borderColor: "--elf--icon-button-border-color",
  backgroundColor: "--elf--icon-button-background",
  disabledColor: "--elf--icon-button-disabled-color",
  color: "--elf--icon-button-color",
  fontSize: "--elf--icon-button-font-size",
  fontWeight: "--elf--icon-button-font-weight",
  height: "--elf--icon-button-height",
  padding: "--elf--icon-button-padding",
  borderRadius: "--elf--icon-button-border-radius"
};
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
      style: __spreadValues({}, propertyMap(style2, cssProperties$b))
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
function makeMenuItem(items = [], rootClose) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    if (isString(it) && it === "-") {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        ref,
        rootClose
      });
    } else if (isFunction(it)) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, {
        ref: `custom${index}`,
        render: it,
        rootClose
      });
    } else if (it.type === MenuItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    } else if (it.type === MenuItemType.GROUP) {
      return /* @__PURE__ */ createElementJsx(GroupMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    } else if (it.type === MenuItemType.DIVIDER) {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, __spreadProps(__spreadValues({
        ref
      }, it), {
        rootClose
      }));
    }
    return /* @__PURE__ */ createElementJsx(MenuItem, __spreadProps(__spreadValues({
      ref
    }, it), {
      rootClose
    }));
  });
}
function DividerMenuItem({ dashed = false }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "divider",
    dashed
  });
}
function CustomMenuItem({ render, rootClose }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "custom"
  }, render == null ? void 0 : render({ rootClose }));
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
      disabled = false,
      selectable,
      selected,
      selectedIcon = "\u2713",
      closable = true,
      rootClose
    } = this.props;
    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selectable,
      selected,
      selectedIcon,
      disabled,
      closable,
      rootClose
    };
  }
  template() {
    const {
      title = "",
      shortcut,
      icon = "\u25B6",
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
      disabled,
      rootClose
    } = this.state;
    const hasItems = items.length > 0;
    return /* @__PURE__ */ createElementJsx("li", {
      class: classnames({
        hover
      }),
      disabled: disabled ? true : void 0
    }, selectable ? /* @__PURE__ */ createElementJsx("span", {
      class: "selected-icon"
    }, selected ? selectedIcon : void 0) : null, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-title"
    }, title) : void 0, shortcut ? /* @__PURE__ */ createElementJsx("div", {
      class: "shortcut"
    }, shortcut) : void 0, icon && hasItems ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, items.length > 0 ? /* @__PURE__ */ createElementJsx(Menu, {
      items,
      rootClose
    }) : void 0);
  }
  checkClickable() {
    if (this.state.disabled) {
      return false;
    }
    const { type = MenuItemType.ITEM, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }
  [CLICK("$el") + IF("checkClickable") + PREVENT + STOP](e) {
    var _a, _b;
    const { selectable = false, onClick, closable = true } = this.props;
    if (selectable) {
      this.setSelected(!this.selected);
    }
    if (isFunction(onClick)) {
      onClick(e, this);
    }
    if (closable) {
      (_b = (_a = this.props).rootClose) == null ? void 0 : _b.call(_a);
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
const cssProperties$a = {
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
};
class Menu extends UIElement {
  initState() {
    return {
      intersectionLeft: 0
    };
  }
  template() {
    let { style: style2 = {}, type = "menu", x = 0, y = 0, direction = "left", items = [], rootClose } = this.props;
    let itemStyle = __spreadValues({}, style2);
    if (x !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { left: x });
    if (y !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { top: y });
    const styleObject = {
      "data-direction": direction,
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu"
      }),
      style: __spreadValues({}, propertyMap(itemStyle, cssProperties$a))
    };
    return /* @__PURE__ */ createElementJsx("menu", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeMenuItem(items, rootClose));
  }
  [OBSERVER("intersection") + PARAMS({
    root: document.body
  })](intersects = []) {
    const item = intersects.find((it) => it.isIntersecting && it.intersectionRatio < 1);
    if (item) {
      const { left: bLeft, right: bRight } = item.boundingClientRect;
      const { left: iLeft, right: iRight } = item.intersectionRect;
      let direction = "left";
      if (iRight != bRight && iLeft != bLeft) {
        direction = "center";
      } else if (iRight != bRight) {
        direction = "right";
      }
      this.$el.attr("data-direction", direction);
    }
  }
}
const cssProperties$9 = {
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
};
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
      style: __spreadValues({}, propertyMap(style2, cssProperties$9))
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
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;
const convertStyleKey = (key) => {
  if (styleKeys[key]) {
    return styleKeys[key];
  }
  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
  styleKeys[key] = upperKey;
  return upperKey;
};
function makeStyleMap(prefix, obj) {
  Object.keys(obj).forEach((key) => {
    prefix + "-" + convertStyleKey(key);
  });
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
    const { title = "", icon, selected, disabled, opened, items, direction, menuStyle } = this.props;
    return {
      title,
      icon,
      selected,
      opened,
      items,
      direction,
      disabled,
      menuStyle,
      rootClose: this.close.bind(this)
    };
  }
  template() {
    const { title = "", icon, disabled, items = [], opened = false, direction = "left", rect, menuStyle } = this.state;
    const hasItems = items.length > 0;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.selected ? true : void 0,
        "has-items": hasItems
      }),
      disabled
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
    }))) : void 0), opened && !disabled ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx(Menu, {
      ref: "$menu",
      items,
      direction,
      rootClose: this.state.rootClose,
      style: __spreadProps(__spreadValues({}, menuStyle || {}), {
        top: "calc(100% + 5px)"
      })
    })) : void 0);
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }
  open() {
    this.setState({
      rect: this.$el.rect(),
      opened: true
    });
  }
  close() {
    this.setState({
      opened: false
    });
  }
  toggle() {
    if (!this.state.opened) {
      this.setState({
        rect: this.$el.rect()
      }, false);
    }
    this.setState({
      opened: !this.state.opened
    });
  }
  checkClickable(e) {
    const $menu = Dom$1.create(e.target).closest("menu-area");
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
    const $menu = Dom$1.create(e.target).closest("elf--tools-item");
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
    if (Dom$1.create(e.target).hasClass("arrow")) {
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
const cssProperties$8 = makeStyleMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true
});
class Tools extends UIElement {
  template() {
    const { style: style2 = {} } = this.props;
    const styleObject = {
      class: classnames("elf--tools"),
      style: __spreadValues({}, propertyMap(style2, cssProperties$8))
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
const cssProperties$7 = makeStyleMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true
});
class Toolbar extends UIElement {
  template() {
    const { style: style2 = {}, align, items = [] } = this.props;
    const styleObject = {
      class: classnames("elf--toolbar", {
        [align]: true
      }),
      style: __spreadValues({}, propertyMap(style2, cssProperties$7))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolbarItem(items));
  }
}
const cssProperties$6 = {
  backgroundColor: "--elf--notification-background",
  color: "--elf--notification-color",
  height: "--elf--notification-height",
  hoverColor: "--elf--notification-hover-color",
  borderColor: "--elf--notification-border-color",
  boxShadow: "--elf--notification-box-shadow",
  toolsBorderColor: "--elf--notification-tools-border-color",
  toolsBorderRadius: "--elf--notification-tools-border-radius"
};
class Notification extends UIElement {
  template() {
    const { style: style2 = {}, icon, content, direction = "top-left" } = this.props;
    const styleObject = {
      class: classnames("elf--notification", `elf--notification-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style2, cssProperties$6))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-text"
    }, content)), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--notification-tools"
    }, this.props.tools || []));
  }
}
const cssProperties$5 = makeStyleMap("--elf--visual-bell", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true
});
class VisualBell extends UIElement {
  template() {
    const { style: style2 = {}, content, direction = "bottom" } = this.props;
    const styleObject = {
      class: classnames("elf--visual-bell", `elf--visual-bell-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style2, cssProperties$5))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({
      class: "elf--visual-bell"
    }, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-text"
    }, content)), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--visual-bell-tools"
    }, this.props.tools || []));
  }
}
const cssProperties$4 = makeStyleMap("--elf--tooltip", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
  delay: true
});
class Tooltip extends UIElement {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      show: this.props.show || false
    };
  }
  template() {
    const { style: style2 = {}, message = "", content, position = "bottom" } = this.props;
    const { show } = this.state;
    const styleObject = {
      class: classnames("elf--tooltip", `elf--tooltip-position-${position}`),
      style: __spreadValues({}, propertyMap(style2, cssProperties$4))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({
      class: "elf--tooltip"
    }, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tooltip-content"
    }, content), show || this.props.show ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tooltip-message"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolltip-message-content"
    }, message)) : void 0);
  }
  open() {
    this.setState({
      show: true
    });
  }
  close() {
    this.setState({
      show: false
    });
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");
    if ($menu)
      return false;
    return true;
  }
  checkTriggerClick() {
    return this.state.trigger === "click";
  }
  checkTriggerOver() {
    return this.state.trigger === "hover";
  }
  [POINTERENTER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }
  checkNotInTooltip(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [POINTERLEAVE("$el") + IF("checkTriggerOver")](e) {
    this.close();
  }
  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")](e) {
    this.toggle();
  }
}
const cssProperties$3 = {
  backgroundColor: "--elf--panel-background",
  color: "--elf--panel-color",
  height: "--elf--panel-height",
  hoverColor: "--elf--panel-hover-color",
  borderColor: "--elf--panel-border-color",
  boxShadow: "--elf--panel-box-shadow",
  padding: "--elf--panel-padding",
  borderRadius: "--elf--panel-border-radius"
};
class Panel extends UIElement {
  template() {
    const { style: style2 = {}, content, theme, title = "", tools = [], mode, footer } = this.props;
    const styleObject = {
      class: classnames("elf--panel", `elf--panel-mode-${mode}`),
      "data-theme": theme,
      style: __spreadValues({}, propertyMap(style2, cssProperties$3))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), title ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title-text"
    }, title), tools ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-title-tools"
    }, tools || []) : void 0) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-content"
    }, content), footer ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--panel-footer"
    }, footer) : void 0);
  }
}
const cssProperties$2 = makeStyleMap("--elf--tabstrip", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
  hgap: true,
  vgap: true,
  delay: true
});
class TabStrip extends UIElement {
  initState() {
    return {
      items: this.props.items || []
    };
  }
  template() {
    var _a;
    const { style: style2 = {} } = this.props;
    const { items = [] } = this.state;
    const styleObject = {
      class: classnames("elf--tabstrip"),
      style: __spreadValues({}, propertyMap(style2, cssProperties$2))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({
      class: "elf--tabstrip"
    }, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tabstrip-content"
    }, items.map((it) => {
      return /* @__PURE__ */ createElementJsx("div", {
        class: classnames("elf--tabstrip-item", { selected: !!it.selected }),
        onClick: (e) => this.setSelectedValue(e, it.value)
      }, it.title);
    })), ((_a = this.props.tools) == null ? void 0 : _a.length) ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tabstrip-tools"
    }, this.props.tools.map((it) => {
      return /* @__PURE__ */ createElementJsx("div", {
        class: "elf--tabstrip-tool"
      }, it);
    })) : void 0);
  }
  get selectedValue() {
    var _a;
    return (_a = this.state.items.find((it) => it.selected)) == null ? void 0 : _a.value;
  }
  setSelectedValue(e, selectedValue) {
    const oldSelectedValue = this.selectedValue;
    this.setState({
      items: this.state.items.map((it) => {
        it.selected = it.value === selectedValue;
        return it;
      })
    });
    if (oldSelectedValue !== selectedValue) {
      this.props.onChange && this.props.onChange(e, this);
    }
  }
}
class Layout extends UIElement {
  template() {
    const { style: style2 = {}, content, wrap = false } = this.props;
    const styleObject = {
      class: classnames("elf--layout", {
        "stack": this.props.stack,
        "wrap": wrap
      }),
      style: __spreadValues({}, propertyMap(style2, {
        backgroundColor: "--elf--layout-background-color",
        gap: "--elf--layout-gap"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), content);
  }
}
class Grid extends UIElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--grid"
    }, this.props.content);
  }
}
const cssProperties$1 = makeStyleMap("--elf--input-editor", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  placeholderColor: true,
  emptyColor: true
});
class InputEditor extends UIElement {
  initState() {
    const { style: style2 = {}, type = "text", autoFocus = false, focused, hover = false, value, placeholder, disabled } = this.props;
    return {
      style: style2,
      type,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled
    };
  }
  template() {
    const { icon } = this.props;
    const { style: style2 = {}, type = "text", focused = false, hover = false, value, placeholder, disabled } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-editor",
        {
          "focused": focused,
          "hover": hover,
          "disabled": disabled,
          "icon": icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style2, cssProperties$1))
    };
    const inputEvents = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    };
    const properties = {
      type,
      disabled,
      placeholder,
      value
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-editor-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadValues(__spreadValues({
      ref: "$input"
    }, properties), inputEvents)))));
  }
  afterRender() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        this.refs.$input.focus();
        this.refs.$input.select();
      }, 10);
    }
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }
  [FOCUSIN("$input")](e) {
    this.setState({
      focused: true
    });
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$input")](e) {
    this.setState({
      focused: false
    });
    this.runCallback(this.props.onBlur, e);
  }
  get value() {
    return this.refs.$input.value;
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const cssProperties = makeStyleMap("--elf--input-editor", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  placeholderColor: true,
  emptyColor: true,
  height: true
});
class TextAreaEditor extends UIElement {
  initState() {
    const { style: style2 = {}, autoFocus = false, focused, hover = false, value, placeholder, disabled } = this.props;
    return {
      style: style2,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled
    };
  }
  template() {
    const { icon } = this.props;
    const { style: style2 = {}, focused = false, hover = false, value, placeholder, disabled } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-editor",
        "multiline",
        {
          "focused": focused,
          "hover": hover,
          "disabled": disabled,
          "icon": icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style2, cssProperties))
    };
    const inputEvents = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy
    };
    const properties = {
      disabled,
      placeholder,
      value
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("textarea", __spreadValues(__spreadValues({
      ref: "$input"
    }, properties), inputEvents), value))));
  }
  afterRender() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        this.refs.$input.focus();
        this.refs.$input.select();
      }, 10);
    }
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }
  [FOCUSIN("$input")](e) {
    this.setState({
      focused: true
    });
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$input")](e) {
    this.setState({
      focused: false
    });
    this.runCallback(this.props.onBlur, e);
  }
  get value() {
    return this.refs.$input.value;
  }
  set value(v) {
    this.refs.$input.value = v;
  }
}
export { Button, Dialog, Grid, IconButton, InputEditor, Layout, LinkButton, Menu, Notification, Panel, TabStrip, TextAreaEditor, Toolbar, ToolbarItem, Tools, ToolsCustomItem, ToolsMenuItem, Tooltip, VisualBell };
