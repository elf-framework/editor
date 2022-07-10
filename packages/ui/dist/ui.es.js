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
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { UIElement, classnames, createElementJsx, CLICK, IF, PREVENT, STOP, isFunction, isString, OBSERVER, PARAMS, Dom, POINTEROVER, POINTERLEAVE, POINTERENTER, isNumber, FOCUSIN, FOCUSOUT, isUndefined, SCROLL, SUBSCRIBE_SELF, DEBOUNCE, FRAME, POINTERSTART, POINTERMOVE, POINTEREND } from "@elf-framework/sapa";
import { parse, format, RGBtoHSL, RGBtoHSV, checkHueColor, HSVtoHSL, HSVtoRGB } from "@elf-framework/color";
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
const cssProperties$k = {
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
    const {
      type,
      size,
      disabled,
      shape,
      destructive = false,
      style = {}
    } = this.props;
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
      style: __spreadValues({}, propertyMap(style, cssProperties$k))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({}, styleObject), {
      onClick: this.props.onClick
    }), /* @__PURE__ */ createElementJsx("span", null, this.props.content || ""));
  }
}
const cssProperties$j = {
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
    const { disabled, style = {}, content, onClick, href } = this.props;
    const styleObject = {
      class: classnames(["elf--link-button"]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style, cssProperties$j))
    };
    return /* @__PURE__ */ createElementJsx("a", __spreadProps(__spreadValues({}, styleObject), {
      onClick,
      href: href || "#"
    }), /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$i = {
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
      style = {}
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
      style: __spreadValues({}, propertyMap(style, cssProperties$i))
    };
    return /* @__PURE__ */ createElementJsx("button", __spreadProps(__spreadValues({
      type: "button"
    }, styleObject), {
      onClick: this.props.onClick
    }), icon || content || "");
  }
}
const cssProperties$h = {
  borderColor: "--elf--radio-border-color",
  backgroundColor: "--elf--radio-background",
  disabledColor: "--elf--radio-disabled-color",
  color: "--elf--radio-color",
  fontSize: "--elf--radio-font-size",
  fontWeight: "--elf--radio-font-weight",
  height: "--elf--radio-height",
  padding: "--elf--radio-padding",
  borderRadius: "--elf--radio-border-radius"
};
class Radio extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      content,
      name,
      checked = false,
      onChange
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--radio",
        {
          disabled
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$h))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("label", null, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      ref: "$input",
      type: "radio"
    }, {
      value,
      name,
      disabled: disabled ? "disabled" : void 0,
      checked: checked ? "checked" : void 0
    }), {
      onChange: (e) => onChange == null ? void 0 : onChange(e, value)
    })), content));
  }
}
class RadioGroup extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      name,
      value,
      onChange,
      content,
      contentChildren
    } = this.props;
    const styleObject = {
      class: classnames(["elf--radio-group"]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style, cssProperties$h))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), contentChildren.map((it, index) => {
      return /* @__PURE__ */ createElementJsx(Radio, {
        ref: `$${index}`,
        name,
        value: it.props.value,
        onChange: (e, v) => {
          this.setState({ value: v }, false);
          onChange(e, v);
        },
        checked: it.props.value === value,
        disabled
      }, it.props.content);
    }));
  }
  get value() {
    return this.state.value || this.props.value;
  }
  set value(value) {
    this.setState({ value });
  }
}
const cssProperties$g = {
  borderColor: "--elf--checkbox-border-color",
  backgroundColor: "--elf--checkbox-background",
  disabledColor: "--elf--checkbox-disabled-color",
  color: "--elf--checkbox-color",
  fontSize: "--elf--checkbox-font-size",
  fontWeight: "--elf--checkbox-font-weight",
  height: "--elf--checkbox-height",
  padding: "--elf--checkbox-padding",
  borderRadius: "--elf--checkbox-border-radius"
};
class Checkbox extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      content,
      name,
      checked = false,
      onChange
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--checkbox",
        {
          disabled
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$g))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("label", null, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      ref: "$input",
      type: "checkbox"
    }, {
      value,
      name,
      disabled: disabled ? "disabled" : void 0,
      checked: checked ? "checked" : void 0
    }), {
      onChange: (e) => onChange == null ? void 0 : onChange(e, value)
    })), content));
  }
  get checked() {
    return this.refs.$input.checked();
  }
  get value() {
    return this.props.value;
  }
}
class CheckboxGroup extends UIElement {
  initState() {
    return {
      value: this.props.value || []
    };
  }
  template() {
    const { disabled, style = {}, value, options = [], onChange } = this.props;
    const styleObject = {
      class: classnames(["elf--check-group"]),
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style, cssProperties$g))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), options.map((it, index) => {
      return /* @__PURE__ */ createElementJsx(Checkbox, {
        ref: `$${index}`,
        value: it.value,
        onChange: (e) => {
          onChange(e, this.getValues());
        },
        checked: value.includes(it.value),
        disabled
      }, it.label);
    }));
  }
  getValues() {
    const values = [];
    this.eachChildren((it) => {
      if (it.checked) {
        values.push(it.value);
      }
    });
    return values;
  }
  get disabled() {
    return this.props.disabled;
  }
  get value() {
    return this.getValues();
  }
  set value(values = []) {
    this.setState({ values });
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
const cssProperties$f = {
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
  directionLeft: "--elf--menu-direction-left",
  itemPadding: "--elf--menu-item-padding"
};
class Menu extends UIElement {
  initState() {
    return {
      intersectionLeft: 0
    };
  }
  template() {
    let {
      style = {},
      type = "menu",
      x = 0,
      y = 0,
      direction = "left",
      items = [],
      rootClose,
      autoPosition = false
    } = this.props;
    let itemStyle = __spreadValues({}, style);
    if (x !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { left: x });
    if (y !== 0)
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { top: y });
    if (autoPosition) {
      const index = items.findIndex((it) => {
        return it.selectable && it.selected;
      });
      itemStyle = __spreadProps(__spreadValues({}, itemStyle), { top: -1 * (index * 24 + 8) });
    }
    const styleObject = {
      "data-direction": direction,
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu"
      }),
      style: __spreadValues({}, propertyMap(itemStyle, cssProperties$f))
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
function ArrowIcon() {
  return /* @__PURE__ */ createElementJsx("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ createElementJsx("path", {
    d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
  }));
}
class OptionMenu extends UIElement {
  template() {
    const {
      icon,
      content,
      items,
      menuStyle = {},
      disabled = void 0,
      autoPosition = false
    } = this.props;
    const { isOpen } = this.state;
    const showMenu = isOpen && items;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--option-menu",
      disabled
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "content",
      onClick: () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    }, icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--option-menu-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "text"
    }, content), /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }, /* @__PURE__ */ createElementJsx(ArrowIcon, null))), showMenu ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-area"
    }, /* @__PURE__ */ createElementJsx(Menu, {
      autoPosition,
      rootClose: () => {
        this.close();
      },
      style: menuStyle,
      items
    })) : void 0);
  }
  close() {
    this.setState({
      isOpen: false
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");
    if ($menu)
      return false;
    return true;
  }
  checkNotInMenu(e) {
    const $menu = Dom.create(e.target).closest("elf--option-menu");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")]() {
    this.close();
  }
}
class OptionStrip extends UIElement {
  initState() {
    return {
      value: this.props.value
    };
  }
  template() {
    const {
      disabled,
      style = {},
      selectedValue,
      options = [],
      onChange
    } = this.props;
    const styleObject = {
      class: "elf--option-strip",
      disabled: disabled ? "disabled" : void 0,
      style: __spreadValues({}, propertyMap(style, {}))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), options.map((it) => {
      return /* @__PURE__ */ createElementJsx("button", {
        type: "button",
        class: classnames("elf--option-strip-item", {
          selected: selectedValue === it.value
        }),
        onClick: () => onChange == null ? void 0 : onChange(it.value)
      }, it.icon);
    }));
  }
}
const cssProperties$e = {
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
    const { visible = false, style = {}, center } = this.props;
    return {
      visible,
      style,
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
    const { style = {}, visible, center } = this.state;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible,
        center
      }),
      style: __spreadValues({}, propertyMap(style, cssProperties$e))
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
    const {
      title = "",
      icon,
      selected,
      disabled,
      opened,
      items,
      direction,
      menuStyle
    } = this.props;
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
    const {
      title = "",
      icon,
      disabled,
      items = [],
      opened = false,
      direction = "left",
      menuStyle
    } = this.state;
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
    }, /* @__PURE__ */ createElementJsx(ArrowIcon, null)) : void 0), opened && !disabled ? /* @__PURE__ */ createElementJsx("div", {
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
  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }
  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")]() {
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
const cssProperties$d = makeStyleMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true
});
class Tools extends UIElement {
  template() {
    const { style = {} } = this.props;
    const styleObject = {
      class: classnames("elf--tools"),
      style: __spreadValues({}, propertyMap(style, cssProperties$d))
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
    const { items, style } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolbar-item"
    }, /* @__PURE__ */ createElementJsx(Tools, {
      ref: "$tools",
      items,
      style
    }));
  }
}
const cssProperties$c = makeStyleMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true
});
class Toolbar extends UIElement {
  template() {
    const { style = {}, align, items = [] } = this.props;
    const styleObject = {
      class: classnames("elf--toolbar", {
        [align]: true
      }),
      style: __spreadValues({}, propertyMap(style, cssProperties$c))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadProps(__spreadValues({}, styleObject), {
      onContextMenu: (e) => e.preventDefault()
    }), makeToolbarItem(items));
  }
}
const cssProperties$b = {
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
    const {
      style = {},
      icon,
      content,
      tools,
      direction = "top-left"
    } = this.props;
    const styleObject = {
      class: classnames("elf--notification", `elf--notification-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style, cssProperties$b))
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
    }, tools || []));
  }
}
const cssProperties$a = makeStyleMap("--elf--visual-bell", {
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
    const { style = {}, content, direction = "bottom" } = this.props;
    const styleObject = {
      class: classnames("elf--visual-bell", `elf--visual-bell-direction-${direction}`),
      style: __spreadValues({}, propertyMap(style, cssProperties$a))
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
const cssProperties$9 = makeStyleMap("--elf--tooltip", {
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
    const {
      style = {},
      message = "",
      content,
      position = "bottom"
    } = this.props;
    const { show } = this.state;
    const styleObject = {
      class: classnames("elf--tooltip", `elf--tooltip-position-${position}`),
      style: __spreadValues({}, propertyMap(style, cssProperties$9))
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
  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }
  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")]() {
    this.toggle();
  }
}
const cssProperties$8 = {
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
    const {
      style = {},
      content,
      theme,
      title = "",
      tools = [],
      mode,
      footer
    } = this.props;
    const styleObject = {
      class: classnames("elf--panel", `elf--panel-mode-${mode}`),
      "data-theme": theme,
      style: __spreadValues({}, propertyMap(style, cssProperties$8))
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
const cssProperties$7 = makeStyleMap("--elf--tabstrip", {
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
    const { style = {} } = this.props;
    const { items = [] } = this.state;
    const styleObject = {
      class: classnames("elf--tabstrip"),
      style: __spreadValues({}, propertyMap(style, cssProperties$7))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({
      class: "elf--tabstrip"
    }, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tabstrip-content"
    }, items.map((it) => {
      return /* @__PURE__ */ createElementJsx("div", {
        class: classnames("elf--tabstrip-item", {
          selected: !!it.selected
        }),
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
    const { style = {}, content, wrap = false } = this.props;
    const styleObject = {
      class: classnames("elf--layout", {
        stack: this.props.stack,
        wrap
      }),
      style: __spreadValues({}, propertyMap(style, {
        backgroundColor: "--elf--layout-background-color",
        gap: "--elf--layout-gap"
      }))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), content);
  }
}
class Flex extends UIElement {
  template() {
    const { style = {}, content, stack, wrap = false } = this.props;
    const styleObject = {
      class: classnames("elf--flex", {
        stack,
        wrap
      }),
      style: __spreadValues({}, propertyMap(style, {}))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), content);
  }
}
class VBox extends Flex {
  template() {
    const { style = {}, content } = this.props;
    return /* @__PURE__ */ createElementJsx(Flex, {
      stack: true,
      style
    }, content);
  }
}
function makeTemplates(arr) {
  if (typeof arr === "number") {
    arr = Array.from({ length: arr }, () => 1);
  } else if (Array.isArray(arr) === false) {
    arr = [arr];
  }
  return arr.map((it) => isNumber(it) ? `${it}fr` : it).join(" ");
}
class Grid extends UIElement {
  template() {
    const {
      style = {},
      columns = [1],
      rows = [1],
      gap,
      columnGap,
      rowGap,
      content
    } = this.props;
    const styleObject = {
      class: "elf--grid",
      style: __spreadValues({
        gridTemplateColumns: makeTemplates(columns),
        gridTemplateRows: makeTemplates(rows),
        gap,
        columnGap,
        rowGap
      }, propertyMap(style, {}))
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), content);
  }
}
const cssProperties$6 = makeStyleMap("--elf--input-editor", {
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
    const {
      style = {},
      type = "text",
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
    return {
      style,
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
    const { icon, tools } = this.props;
    const {
      style = {},
      type = "text",
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-editor",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$6))
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
      placeholder: placeholder || "",
      value: value || ""
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-editor-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadValues(__spreadValues({
      ref: "$input"
    }, properties), inputEvents)))), tools ? tools : void 0);
  }
  onMounted() {
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
function ColorView({ color }) {
  const parsedColor = parse(color);
  const { r, g, b } = parsedColor;
  return /* @__PURE__ */ createElementJsx("div", {
    class: "elf--color-view"
  }, /* @__PURE__ */ createElementJsx("div", {
    class: "elf--color-view-color",
    style: { backgroundColor: format({ r, g, b }, "rgb") }
  }), /* @__PURE__ */ createElementJsx("div", {
    class: "elf--color-view-opacity-pattern"
  }, /* @__PURE__ */ createElementJsx("div", {
    class: "elf--color-view-opacity",
    style: { backgroundColor: format(parsedColor, "rgb") }
  })));
}
const cssProperties$5 = makeStyleMap("--elf--input-paint", {
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
class InputPaint extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "keyup", (e) => {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          this.increaseOpacity(e);
          break;
        case "ArrowDown":
          this.decreaseOpacity(e);
          break;
      }
    });
  }
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    const parsedColor = parse(value);
    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      parsedColor,
      disabled,
      hasOpacity
    };
  }
  template() {
    const { icon, hideColorView = false } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled,
      parsedColor
    } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$5))
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
    const { r, g, b } = parsedColor;
    const properties = {
      disabled,
      placeholder: placeholder || "",
      value: format({ r, g, b }, "hex")
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), hideColorView ? void 0 : /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-paint-icon"
    }, /* @__PURE__ */ createElementJsx(ColorView, {
      color: value
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadValues(__spreadValues({
      class: "color"
    }, properties), inputEvents)))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "opacity",
      value: `${parsedColor.a * 100}%`,
      onKeyUp: this.keyup
    })));
  }
  updateOpacity(num) {
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        a: this.state.parsedColor.a + num
      })
    });
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
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
  [CLICK("$el .elf--input-paint-icon")](e) {
    var _a, _b;
    (_b = (_a = this.props).onClickColorView) == null ? void 0 : _b.call(_a, e);
  }
  [FOCUSIN("$el input")](e) {
    this.setState({
      focused: true
    });
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$el input")](e) {
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
const cssProperties$4 = makeStyleMap("--elf--input-paint", {
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
class HexColorEditor extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "keydownColor", (e) => {
      const startIndex = Math.floor(e.target.selectionStart / 2) * 2;
      let type = "";
      if (startIndex < 2) {
        type = "r";
      } else if (startIndex < 4) {
        type = "g";
      } else {
        type = "b";
      }
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          this.increaseColor(type);
          e.target.setSelectionRange(startIndex, startIndex + 2);
          break;
        case "ArrowDown":
          e.preventDefault();
          this.decreaseColor(type);
          e.target.setSelectionRange(startIndex, startIndex + 2);
          break;
      }
    });
    __publicField(this, "keyupColor", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown")
        ;
      else {
        if (e.target.value.length === 3 || e.target.value.length === 6) {
          const color = parse("#" + e.target.value);
          if (color.type === "hex") {
            if (this.isInvalidColor(color) === false) {
              this.updateFullColor(color);
            }
          }
        }
      }
    });
    __publicField(this, "keydown", (e) => {
      e.preventDefault();
      e.stopPropagation();
      switch (e.key) {
        case "ArrowUp":
          this.increaseOpacity(e);
          e.target.select();
          break;
        case "ArrowDown":
          this.decreaseOpacity(e);
          e.target.select();
          break;
      }
    });
  }
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    const parsedColor = parse(value);
    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      parsedColor,
      disabled,
      hasOpacity
    };
  }
  template() {
    const { icon, value } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      placeholder,
      disabled
    } = this.state;
    const { r, g, b, a } = parse(value);
    const styleObject = {
      class: classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid: this.isInvalidColor({ r, g, b, a })
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$4))
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
      placeholder: placeholder || "",
      value: format({ r, g, b }, "hex").replace("#", "")
    };
    this.setState({
      parsedColor: {
        r,
        g,
        b,
        a
      }
    }, false);
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues(__spreadValues({
      class: "color",
      type: "text",
      "data-type": "hex",
      maxlength: 6
    }, properties), inputEvents), {
      onKeyDown: this.keydownColor,
      onKeyUp: this.keyupColor
    })))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "opacity",
      value: `${Math.round(a * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(num) {
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100))
      })
    }, false);
    this.runCallback(this.props.onChange);
  }
  updateFullColor(parsedColor) {
    this.setState({
      parsedColor
    }, false);
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    const lastValue = Math.max(0, Math.min(255, this.state.parsedColor[type] + num));
    if (this.state.parsedColor[type] === lastValue) {
      return;
    }
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        [type]: Math.max(0, Math.min(255, this.state.parsedColor[type] + num))
      })
    }, false);
    this.runCallback(this.props.onChange);
  }
  increaseColor(type) {
    this.updateColor(type, 1);
  }
  decreaseColor(type) {
    this.updateColor(type, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  isInvalidColor(color) {
    return isNaN(color.r) || isNaN(color.g) || isNaN(color.b) || isNaN(color.a) || isUndefined(color.r) || isUndefined(color.g) || isUndefined(color.b) || isUndefined(color.a);
  }
  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        const $el = this.$el.$("input[data-type='hex']");
        $el.focus();
        $el.select();
      }, 10);
    }
  }
  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(this.value, this);
    }
  }
  [CLICK("$el .elf--input-paint-icon")](e) {
    var _a, _b;
    (_b = (_a = this.props).onClickColorView) == null ? void 0 : _b.call(_a, e);
  }
  [FOCUSIN("$el input")](e) {
    this.setState({
      focused: true
    });
    e.target.select();
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$el input")](e) {
    this.setState({
      focused: false
    });
    this.runCallback(this.props.onBlur, e);
  }
  get value() {
    const { parsedColor } = this.state;
    const { r, g, b, a } = parsedColor;
    return format({ r, g, b, a }, "hex");
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const cssProperties$3 = makeStyleMap("--elf--input-paint", {
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
class RGBColorEditor extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "keydownColor", (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          this.increaseColor(e.target.getAttribute("data-type"));
          e.target.select();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.decreaseColor(e.target.getAttribute("data-type"));
          e.target.select();
          break;
      }
    });
    __publicField(this, "keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          this.increaseOpacity(e);
          e.target.select();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.decreaseOpacity(e);
          e.target.select();
          break;
        case "Tab":
          e.preventDefault();
          var $el = this.$el.$("input[data-type='r']");
          $el.focus();
          $el.select();
          break;
      }
    });
  }
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      disabled,
      hasOpacity
    };
  }
  template() {
    const { icon, value } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      placeholder,
      disabled
    } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$3))
    };
    const { r, g, b, a } = parse(value);
    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255
    };
    this.setState({
      parsedColor: { r, g, b, a }
    }, false);
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx(Grid, {
      columns: 3
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      "data-type": "r",
      tabIndex: 1,
      value: r
    }, properties), {
      onKeyDown: this.keydownColor
    }))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      "data-type": "g",
      tabIndex: 2,
      value: g
    }, properties), {
      onKeyDown: this.keydownColor
    }))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      "data-type": "b",
      tabIndex: 3,
      value: b
    }, properties), {
      onKeyDown: this.keydownColor
    }))))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      type: "text",
      tabIndex: 4,
      class: "opacity",
      value: `${Math.round(a * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(num) {
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100))
      })
    }, false);
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        [type]: Math.max(0, Math.min(255, this.state.parsedColor[type] + num))
      })
    }, false);
    this.runCallback(this.props.onChange);
  }
  increaseColor(type) {
    this.updateColor(type, 1);
  }
  decreaseColor(type) {
    this.updateColor(type, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        const $el = this.$el.$("input[data-type='r']");
        $el.focus();
        $el.select();
      }, 10);
    }
  }
  runCallback(callback) {
    if (isFunction(callback)) {
      callback(this.value, this);
    }
  }
  [CLICK("$el .elf--input-paint-icon")](e) {
    var _a, _b;
    (_b = (_a = this.props).onClickColorView) == null ? void 0 : _b.call(_a, e);
  }
  [FOCUSIN("$el input")](e) {
    this.setState({
      focused: true
    });
    e.target.select();
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$el input")](e) {
    this.setState({
      focused: false
    });
    this.runCallback(this.props.onBlur, e);
  }
  get value() {
    const { parsedColor } = this.state;
    const { r, g, b, a } = parsedColor;
    return format({ r, g, b, a }, "rgb");
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const cssProperties$2 = makeStyleMap("--elf--input-editor", {
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
class TextAreaEditor extends UIElement {
  initState() {
    const {
      style = {},
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
    return {
      style,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled
    };
  }
  template() {
    const { icon } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.state;
    const styleObject = {
      class: classnames([
        "elf--input-editor",
        "multiline",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties$2))
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
  onMounted() {
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
const cssProperties$1 = makeStyleMap("--elf--virtual-scroll", {
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
class VirtualScroll extends UIElement {
  initState() {
    return {
      scrollHeight: 32
    };
  }
  template() {
    const { style = {}, itemHeight = 32, items = [] } = this.props;
    const totalCount = items.length;
    const styleObject = {
      class: classnames("elf--virtual-scroll", this.props.class),
      style: __spreadProps(__spreadValues({}, propertyMap(style, cssProperties$1)), {
        "--elf--virtual-scroll-item-width": this.state.width ? `${this.state.width}px` : "100%",
        "--elf--virtual-scroll-item-height": `${itemHeight}px`,
        "--elf--virtual-scroll-item-count": totalCount,
        "--elf--virtual-scroll-panel-height": `${totalCount * itemHeight}px`
      })
    };
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--virtual-scroll-panel"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--virtual-scroll-content-area",
      "data-scrolling": this.state.scrolling ? "true" : "false"
    }, this.makeItemView())));
  }
  refreshSize() {
    var _a;
    const rect = (_a = this.$el) == null ? void 0 : _a.offsetRect();
    if (rect) {
      this.setState({
        width: rect.width,
        height: rect.height
      }, false);
    }
  }
  onMounted() {
    window.setTimeout(() => {
      const rect = this.$el.offsetRect();
      this.setState({
        width: rect.width,
        height: rect.height
      });
    }, 20);
  }
  filterItems(items, startIndex, endIndex) {
    return items.filter((it, index) => {
      return index >= startIndex && index <= endIndex;
    });
  }
  makeItemView() {
    const { itemHeight, items, overscanRowCount = 10 } = this.props;
    const { width, height, isRenderingItems } = this.state;
    if (!isRenderingItems) {
      if (!width)
        return [];
      const scrollHeight = items.length * itemHeight;
      const itemCount = Math.floor(height / itemHeight);
      const totalCount = items.length;
      this.setState({
        scrollHeight,
        itemCount
      }, false);
      const startIndex = Math.max(Math.floor((this.state.scrollTop || 0) / 32) - overscanRowCount, 0);
      const endIndex = Math.min(Math.floor(startIndex + itemCount + 2 * overscanRowCount), totalCount - 1);
      this.state.renderItems = this.filterItems(items, startIndex, endIndex);
    }
    return this.state.renderItems.map((item, index) => {
      var _a, _b;
      return (_b = (_a = this.props).itemRenderer) == null ? void 0 : _b.call(_a, item, item.index * itemHeight, index, items, this);
    });
  }
  checkScrollTop() {
    const { scrollTop, height, scrollHeight } = this.state;
    this.setState({
      scrollTop: this.$el.scrollTop
    }, false);
    if (scrollTop > scrollHeight - height) {
      this.setState({
        scrolling: false
      });
      return false;
    }
    return true;
  }
  [SCROLL("$el") + IF("checkScrollTop")]() {
    this.trigger("reloadItems");
  }
  [SUBSCRIBE_SELF("checkScrolling") + DEBOUNCE(100)]() {
    this.setState({
      scrolling: false
    });
  }
  [SUBSCRIBE_SELF("reloadItems") + FRAME]() {
    this.setState({
      scrolling: true
    });
    this.trigger("checkScrolling");
  }
  refresh() {
    this.setState({
      isRenderingItems: false
    }, false);
    this.render();
  }
  refreshItems() {
    this.setState({
      isRenderingItems: true
    }, false);
    this.render();
  }
  scrollIntoView(index) {
    const { itemHeight } = this.props;
    const scrollTop = index * itemHeight;
    this.$el.scrollTop = scrollTop;
    this.setState({
      scrollTop: this.$el.scrollTop
    }, false);
    this.refreshItems();
  }
}
class Layer extends UIElement {
  template() {
    const {
      top,
      id,
      topLevel,
      group,
      selected,
      icon,
      content,
      lock,
      visible,
      lockIcon,
      lockOpenIcon,
      visibleIcon,
      isComponent = false,
      number = 10
    } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--virtual-scroll-item elf--layer",
      style: {
        "--elf--virtual-scroll-item-top": `${top}px`
      },
      "data-id": id,
      "data-number": number
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "container",
      "data-top-level": topLevel ? "true" : void 0,
      "data-hidden": !visible ? "true" : void 0,
      "data-component": isComponent ? "true" : void 0,
      "data-selected": selected ? "true" : void 0
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "group"
    }, group), icon && /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon), /* @__PURE__ */ createElementJsx("div", {
      class: "text",
      ref: "$text"
    }, content), /* @__PURE__ */ createElementJsx("div", {
      class: "tools"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "lock"
    }, lock ? lockIcon : lockOpenIcon), /* @__PURE__ */ createElementJsx("div", {
      class: "visible"
    }, visibleIcon))));
  }
}
const cssProperties = makeStyleMap("--elf--input-paint", {
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
class HSLColorEditor extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "keydownColor", (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          this.increaseColor(e.target.getAttribute("data-type"));
          e.target.select();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.decreaseColor(e.target.getAttribute("data-type"));
          e.target.select();
          break;
      }
    });
    __publicField(this, "keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault();
          this.increaseOpacity(e);
          e.target.select();
          break;
        case "ArrowDown":
          e.preventDefault();
          this.decreaseOpacity(e);
          e.target.select();
          break;
        case "Tab":
          e.preventDefault();
          const $el = this.$el.$("input[data-type='h']");
          $el.focus();
          $el.select();
          break;
      }
    });
  }
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      disabled,
      hasOpacity
    };
  }
  template() {
    const { icon, value } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      placeholder,
      disabled
    } = this.state;
    const { r, g, b, a } = parse(value);
    const { h, s, l } = RGBtoHSL(r, g, b);
    const styleObject = {
      class: classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]),
      style: __spreadValues({}, propertyMap(style, cssProperties))
    };
    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255
    };
    this.setState({
      parsedColor: {
        h,
        s,
        l,
        a
      }
    }, false);
    return /* @__PURE__ */ createElementJsx("div", __spreadValues({}, styleObject), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx(Grid, {
      columns: 3
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      type: "text",
      tabIndex: 1,
      "data-type": "h",
      value: h
    }, properties), {
      onKeyDown: this.keydownColor
    }))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      type: "text",
      tabIndex: 2,
      "data-type": "s",
      value: s
    }, properties), {
      onKeyDown: this.keydownColor
    }))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", __spreadProps(__spreadValues({
      class: "color",
      type: "text",
      tabIndex: 3,
      "data-type": "l",
      value: l
    }, properties), {
      onKeyDown: this.keydownColor
    }))))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      type: "text",
      tabIndex: 4,
      class: "opacity",
      value: `${Math.round(a * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(num) {
    this.setState({
      parsedColor: __spreadProps(__spreadValues({}, this.state.parsedColor), {
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100))
      })
    });
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    const data = {};
    if (type === "h") {
      data[type] = Math.max(0, Math.min(360, this.state.parsedColor[type] + num));
    } else if (type === "s") {
      data[type] = Math.max(0, Math.min(100, this.state.parsedColor[type] + num));
    } else if (type === "l") {
      data[type] = Math.max(0, Math.min(100, this.state.parsedColor[type] + num));
    }
    this.setState({
      parsedColor: __spreadValues(__spreadValues({}, this.state.parsedColor), data)
    }, false);
    this.runCallback(this.props.onChange);
  }
  increaseColor(type) {
    this.updateColor(type, 1);
  }
  decreaseColor(type) {
    this.updateColor(type, -1);
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        const $el = this.$el.$("input[data-type='h']");
        $el.focus();
        $el.select();
      }, 10);
    }
  }
  runCallback(callback) {
    if (isFunction(callback)) {
      callback(this.value, this);
    }
  }
  [CLICK("$el .elf--input-paint-icon")](e) {
    var _a, _b;
    (_b = (_a = this.props).onClickColorView) == null ? void 0 : _b.call(_a, e);
  }
  [FOCUSIN("$el input")](e) {
    this.setState({
      focused: true
    });
    e.target.select();
    this.runCallback(this.props.onFocus, e);
  }
  [FOCUSOUT("$el input")](e) {
    this.setState({
      focused: false
    });
    this.runCallback(this.props.onBlur, e);
  }
  get value() {
    const { parsedColor } = this.state;
    const { h, s, l, a } = parsedColor;
    return format({ h, s, l, a }, "hsl");
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const COLOR_TYPES = ["hex", "rgb", "hsl"];
function EyeDropper(props) {
  return /* @__PURE__ */ createElementJsx("div", {
    class: "eye-dropper"
  }, /* @__PURE__ */ createElementJsx(Button, {
    onClick: async () => {
      const eyeDropper = new window.EyeDropper();
      try {
        const result = await eyeDropper.open();
        isFunction(props.onChange) && props.onChange(result.sRGBHex);
      } catch (e) {
        console.warn(e);
      }
    }
  }, /* @__PURE__ */ createElementJsx("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ createElementJsx("path", {
    d: "M13.4473 0.6C12.6473 -0.2 11.4473 -0.2 10.6473 0.6L7.84725 3.4L7.04725 2.7C6.64725 2.3 6.04725 2.3 5.64725 2.7C5.24725 3.1 5.24725 3.7 5.64725 4.1L6.34725 4.8L0.547255 10.6C0.147255 11 -0.452745 12.5 0.547255 13.5C1.54725 14.5 3.04725 13.9 3.44725 13.5L9.24725 7.7L9.94725 8.4C10.3473 8.8 10.9473 8.8 11.3473 8.4C11.7473 8 11.7473 7.4 11.3473 7L10.6473 6.3L13.4473 3.5C14.2473 2.6 14.2473 1.4 13.4473 0.6ZM2.54725 12.5H1.54725V11.5L7.34725 5.7L8.34725 6.7C8.24725 6.7 2.54725 12.5 2.54725 12.5Z",
    fill: "black",
    "fill-opacity": "0.8"
  }))));
}
class BaseSlide extends UIElement {
  template() {
    const { value, containerClass, slideClass } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: `${containerClass} slide-view`
    }, /* @__PURE__ */ createElementJsx("div", {
      class: `${slideClass} slide-bg`
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "drag-pointer",
      style: {
        "--drag-point-left": value
      }
    })));
  }
  [POINTERSTART("$el .slide-bg")]() {
    this.setState({
      clicked: true,
      rect: this.$el.$(".slide-bg").rect()
    }, false);
  }
  checkClicked() {
    return this.state.clicked;
  }
  [POINTERMOVE("document") + IF("checkClicked")](e) {
    const { onChange } = this.props;
    const { x, width } = this.state.rect;
    const minX = x;
    const maxX = minX + width;
    const targetX = Math.min(Math.max(minX, e.clientX), maxX);
    const value = (targetX - minX) / width;
    if (isFunction(onChange)) {
      onChange(value);
    }
  }
  [POINTEREND("document") + IF("checkClicked")]() {
    this.setState({
      clicked: false
    }, false);
  }
}
class HueSlide extends UIElement {
  template() {
    const { value, onChange } = this.props;
    return /* @__PURE__ */ createElementJsx(BaseSlide, {
      value,
      containerClass: "hue-slide",
      slideClass: "hue-slide-bg",
      onChange
    });
  }
}
class OpacitySlide extends UIElement {
  template() {
    const { value, onChange } = this.props;
    return /* @__PURE__ */ createElementJsx(BaseSlide, {
      value,
      containerClass: "opacity-slide",
      slideClass: "opacity-slide-bg",
      onChange
    });
  }
}
class ColorInput extends UIElement {
  initState() {
    const { type } = this.props;
    return { type };
  }
  makeTypedColorInput() {
    const { r, g, b, a, onChange } = this.props;
    const { type } = this.state;
    const { h, s, l } = RGBtoHSL(r, g, b);
    switch (type) {
      case "hex":
        return /* @__PURE__ */ createElementJsx("div", null, /* @__PURE__ */ createElementJsx(HexColorEditor, {
          autoFocus: true,
          value: format({ r, g, b, a }, "hex"),
          onChange
        }));
      case "rgb":
        return /* @__PURE__ */ createElementJsx("div", null, /* @__PURE__ */ createElementJsx(RGBColorEditor, {
          autoFocus: true,
          value: format({ r, g, b, a }, "rgb"),
          onChange
        }));
      case "hsl":
        return /* @__PURE__ */ createElementJsx("div", null, /* @__PURE__ */ createElementJsx(HSLColorEditor, {
          autoFocus: true,
          value: format({ h, s, l, a }, "hsl"),
          onChange
        }));
    }
    return void 0;
  }
  template() {
    const { type } = this.state;
    const input = this.makeTypedColorInput();
    return /* @__PURE__ */ createElementJsx("div", {
      class: "color-input"
    }, /* @__PURE__ */ createElementJsx(OptionMenu, {
      autoPosition: true,
      menuStyle: {
        width: 80,
        itemPadding: "10px"
      },
      items: COLOR_TYPES.map((it) => {
        return {
          title: it.toUpperCase(),
          selectable: true,
          closable: true,
          selected: type === it,
          onClick: () => {
            this.setState({
              type: it
            });
          }
        };
      })
    }, type.toUpperCase()), input);
  }
}
class ColorMixer extends UIElement {
  constructor() {
    super(...arguments);
    __publicField(this, "updateOpacity", (a) => {
      this.setState({
        a
      });
      this.changeColor();
    });
    __publicField(this, "updateHueColor", (h) => {
      h = h * 360;
      const { s, v, a } = this.state;
      const { r, g, b } = HSVtoRGB(h, s, v);
      this.setState({
        color: format({ r, g, b }, "rgb"),
        r,
        g,
        b,
        a,
        hueColor: checkHueColor(h / 360),
        h,
        s,
        v
      });
      this.changeColor();
    });
    __publicField(this, "updateColor", (color) => {
      const parsedColor = parse(color);
      const { r, g, b, a } = parsedColor;
      const { h, s, v } = RGBtoHSV(r, g, b);
      this.setState({
        color: format({ r, g, b }, "rgb"),
        r,
        g,
        b,
        a,
        hueColor: checkHueColor(h / 360),
        h,
        s,
        v
      });
      this.changeColor();
    });
  }
  initState() {
    const { color } = this.props;
    const parsedColor = parse(color);
    const { r, g, b, a } = parsedColor;
    const { h, s, v } = RGBtoHSV(r, g, b);
    return {
      type: parsedColor.type,
      color: format({ r, g, b }, "rgb"),
      width: 240,
      height: 240,
      r,
      g,
      b,
      a,
      hueColor: checkHueColor(h),
      h,
      s,
      v
    };
  }
  template() {
    const { type, h, s, v, width, height, r, g, b, a, hueColor, color } = this.state;
    const x = width * s;
    const y = height * (1 - v);
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-mixer"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-area",
      style: {
        backgroundColor: hueColor
      }
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "saturation"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "value"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "drag-pointer",
      style: {
        backgroundColor: color,
        left: x,
        top: y
      }
    })))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-slide-area"
    }, window.EyeDropper ? /* @__PURE__ */ createElementJsx(EyeDropper, {
      onChange: this.updateColor
    }) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "slide"
    }, /* @__PURE__ */ createElementJsx(HueSlide, {
      value: h / 360,
      onChange: this.updateHueColor
    }), /* @__PURE__ */ createElementJsx(OpacitySlide, {
      r,
      g,
      b,
      value: a,
      onChange: this.updateOpacity
    }))), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-input-area"
    }, /* @__PURE__ */ createElementJsx(ColorInput, __spreadProps(__spreadValues({}, {
      type,
      h,
      s,
      v,
      r,
      g,
      b,
      a
    }), {
      onChange: this.updateColor
    }))));
  }
  formatedColor() {
    const { type, r, g, b, h, s, v, a } = this.state;
    let color = "";
    switch (type) {
      case "hex":
      case "rgb":
        color = format({ r, g, b, a }, type);
        break;
      case "hsl":
        var { h: hslH, s: hslS, l: hslL } = HSVtoHSL(h, s, v);
        color = format({ h: hslH, s: hslS, l: hslL, a }, type);
        break;
      case "hsv":
        color = format({ h, s, v, a }, type);
        break;
    }
    return color;
  }
  changeColor() {
    const { onChange } = this.props;
    let color = this.formatedColor();
    if (isFunction(onChange)) {
      onChange(color);
    }
  }
  lastChangeColor() {
    const { onLastChange } = this.props;
    let color = this.formatedColor();
    if (isFunction(onLastChange)) {
      onLastChange(color);
    }
  }
  async openEyeDropper() {
    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      this.updateColor(result.sRGBHex);
    } catch (e) {
      console.warn(e);
    }
  }
  [POINTERSTART("$el .elf--color-area")](e) {
    this.setState({
      clicked: true,
      rect: this.$el.$(".elf--color-area").rect(),
      clientX: e.clientX,
      clientY: e.clientY
    }, false);
  }
  checkClicked() {
    return this.state.clicked;
  }
  [POINTERMOVE("document") + IF("checkClicked")](e) {
    const { x, y, width, height } = this.state.rect;
    const minX = x;
    const maxX = minX + width;
    const minY = y;
    const maxY = minY + height;
    const targetX = Math.min(Math.max(minX, e.clientX), maxX);
    const targetY = Math.min(Math.max(minY, e.clientY), maxY);
    const s = (targetX - minX) / width;
    const v = 1 - (targetY - minY) / height;
    this.updateSaturationValue(s, v);
  }
  [POINTEREND("document") + IF("checkClicked")](e) {
    this.setState({
      clicked: false
    }, false);
    if (this.state.clientX === e.clientX && this.state.clientY === e.clientY) {
      return;
    }
    this.lastChangeColor();
  }
  updateSaturationValue(s, v) {
    const { r, g, b } = HSVtoRGB(this.state.h, s, v);
    this.setState({
      r,
      g,
      b,
      s,
      v,
      color: format({ r, g, b }, "rgb")
    });
    this.changeColor();
  }
}
class ColorGrid extends UIElement {
  initState() {
    return {
      selectedValue: this.props.selectedValue
    };
  }
  makeItems() {
    const { items } = this.props;
    const { selectedValue } = this.state;
    return items.map((it) => {
      return {
        title: it.title,
        selectable: true,
        closable: true,
        selected: it.value === selectedValue,
        onClick: () => {
          this.setState({
            selectedValue: it.value
          });
        }
      };
    });
  }
  template() {
    const { items } = this.props;
    const { selectedValue } = this.state;
    const colorItem = items.find((it) => it.value === selectedValue) || items[0] || { title: "" };
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-grid"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-grid-header"
    }, /* @__PURE__ */ createElementJsx(OptionMenu, {
      items: this.makeItems()
    }, colorItem.title)), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-grid-list"
    }, colorItem.colors.map((color) => /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-grid-item",
      onClick: () => this.selectColor(color)
    }, /* @__PURE__ */ createElementJsx(ColorView, {
      color
    })))));
  }
  selectColor(color) {
    this.setState({ selectedColor: color }, false);
    this.props.onSelect && this.props.onSelect(color);
  }
}
export { Button, Checkbox, CheckboxGroup, ColorGrid, ColorMixer, ColorView, Dialog, Flex, Grid, HexColorEditor, IconButton, InputEditor, InputPaint, Layer, Layout, LinkButton, Menu, Notification, OptionMenu, OptionStrip, Panel, RGBColorEditor, Radio, RadioGroup, TabStrip, TextAreaEditor, Toolbar, ToolbarItem, Tools, ToolsCustomItem, ToolsMenuItem, Tooltip, VBox, VirtualScroll, VisualBell };
