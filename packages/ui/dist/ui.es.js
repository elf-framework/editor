var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { AFTER, UIElement, useState, useCallback, classnames, createElementJsx, potal, Dom, POINTERENTER, IF, POINTERLEAVE, CLICK, useEffect, isFunction, PREVENT, STOP, OBSERVER, PARAMS, isString, POINTEROVER, isNumber, FOCUSIN, FOCUSOUT, isUndefined, SCROLL, SUBSCRIBE_SELF, DEBOUNCE, FRAME, POINTERSTART, POINTERMOVE, POINTEREND, debounce, SUBSCRIBE_ALL } from "@elf-framework/sapa";
import { parse, format, RGBtoHSL, RGBtoHSV, checkHueColor, HSVtoHSL, HSVtoRGB } from "@elf-framework/color";
const style$1 = "";
const ADD_BODY_FIRST_MOUSEMOVE = "add/body/first/mousemove";
const ADD_BODY_MOUSEMOVE = "add/body/mousemove";
const ADD_BODY_MOUSEUP = "add/body/mouseup";
const BODY_MOVE_EVENT = "body/move/event";
const FIRSTMOVE = (method = "move") => {
  return AFTER(`bodyMouseFirstMove ${method}`);
};
const MOVE = (method = "move") => {
  return AFTER(`bodyMouseMove ${method}`);
};
const END = (method = "end") => {
  return AFTER(`bodyMouseUp ${method}`);
};
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
const cssProperties$w = {
  borderColor: "--elf--alert-border-color",
  backgroundColor: "--elf--alert-background-color",
  selectedBackgroundColor: "--elf--alert-selected-background-color",
  disabledColor: "--elf--alert-disabled-color",
  color: "--elf--alert-color",
  fontSize: "--elf--alert-font-size",
  fontWeight: "--elf--alert-font-weight",
  height: "--elf--alert-height",
  padding: "--elf--alert-padding",
  borderRadius: "--elf--alert-border-radius"
};
class Alert extends UIElement {
  template() {
    const {
      variant = "default",
      title = "",
      content = "",
      style: style2 = {},
      closable = false,
      weak = false,
      delay = 0,
      ...extrProps
    } = this.props;
    const [localDelay, setLocalDelay] = useState(delay);
    const [hide, setHide] = useState(false);
    this.state.hideCallback = useCallback(
      (hideDelay = 0) => {
        setLocalDelay(hideDelay);
      },
      [setLocalDelay]
    );
    const styleObject = {
      class: classnames([
        "elf--alert",
        { [variant]: true, weak },
        { hide, closable }
      ]),
      style: {
        ...propertyMap(style2, cssProperties$w),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1
        }
      },
      ...extrProps
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault(),
      onTransitionEnd: () => {
        this.props.onHide && this.props.onHide();
        this.destroy(true);
      }
    }, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--alert-title"
    }, title) : null, content ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--alert-content"
    }, content) : null, closable ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--alert-close",
      onClick: () => {
        setHide(true);
        if (localDelay === 0) {
          this.props.onHide && this.props.onHide();
          this.destroy(true);
        }
      }
    }, "\xD7") : null);
  }
  hide(hideDelay = 0) {
    var _a;
    (_a = this.state) == null ? void 0 : _a.hideCallback(hideDelay);
  }
}
function alert({
  content = void 0,
  delay = 0,
  title = void 0,
  closable = false,
  options = {},
  style: style2 = {}
}) {
  return potal(
    /* @__PURE__ */ createElementJsx(Alert, {
      title,
      delay,
      closable,
      style: style2
    }, content),
    options
  );
}
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;
const ComponentPropsToStylePropsMap = {
  alignContent: "alignContent",
  alignItems: "alignItems",
  alignSelf: "alignSelf",
  area: "gridArea",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  backgroundColor: "backgroundColor",
  backgroundImage: "backgroundImage",
  basis: "flexBasis",
  border: "border",
  borderRadius: "borderRadius",
  bottom: "bottom",
  boxShadow: "boxShadow",
  color: "color",
  column: "gridColumn",
  columnEnd: "gridColumnEnd",
  columnGap: "columnGap",
  columnSpan: "gridColumn",
  columnStart: "gridColumnStart",
  direction: "flexDirection",
  display: "display",
  flex: "flex",
  fontFamily: "fontFamily",
  fontSize: "fontSize",
  fontStyle: "fontStyle",
  fontWeight: "fontWeight",
  gap: "gap",
  grow: "flexGrow",
  height: "height",
  justifyContent: "justifyContent",
  left: "left",
  letterSpacing: "letterSpacing",
  lineHeight: "lineHeight",
  margin: "margin",
  marginBlock: "marginBlock",
  marginBlockEnd: "marginBlockEnd",
  marginBlockStart: "marginBlockStart",
  marginBottom: "marginBlockEnd",
  marginInline: "marginInline",
  marginInlineEnd: "marginInlineEnd",
  marginInlineStart: "marginInlineStart",
  marginLeft: "marginInlineStart",
  marginRight: "marginInlineEnd",
  marginTop: "marginBlockStart",
  maxHeight: "maxHeight",
  maxWidth: "maxWidth",
  minHeight: "minHeight",
  minWidth: "minWidth",
  objectFit: "objectFit",
  objectPosition: "objectPosition",
  opacity: "opacity",
  order: "order",
  overflow: "overflow",
  padding: "padding",
  paddingBlock: "paddingBlock",
  paddingBlockEnd: "paddingBlockEnd",
  paddingBlockStart: "paddingBlockStart",
  paddingBottom: "paddingBlockEnd",
  paddingInline: "paddingInline",
  paddingInlineEnd: "paddingInlineEnd",
  paddingInlineStart: "paddingInlineStart",
  paddingLeft: "paddingInlineStart",
  paddingRight: "paddingInlineEnd",
  paddingTop: "paddingBlockStart",
  position: "position",
  resize: "resize",
  right: "right",
  row: "gridRow",
  rowEnd: "gridRowEnd",
  rowGap: "rowGap",
  rowSpan: "gridRow",
  rowStart: "gridRowStart",
  shrink: "flexShrink",
  templateAreas: "gridTemplateAreas",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows",
  textAlign: "textAlign",
  textDecoration: "textDecoration",
  textTransform: "textTransform",
  top: "top",
  transform: "transform",
  transformOrigin: "transformOrigin",
  width: "width",
  whiteSpace: "whiteSpace",
  wrap: "flexWrap"
};
const convertStyleKey = (key) => {
  if (styleKeys[key]) {
    return styleKeys[key];
  }
  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
  styleKeys[key] = upperKey;
  return upperKey;
};
function makeStyleMap(prefix, obj = {}) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });
  return newObj;
}
function convertPropertyToStyleKey(properties) {
  const style2 = {};
  const noneStyle = {};
  Object.keys(properties).forEach((key) => {
    if (ComponentPropsToStylePropsMap[key]) {
      style2[ComponentPropsToStylePropsMap[key]] = properties[key];
    } else {
      noneStyle[key] = properties[key];
    }
  });
  return { style: style2, noneStyle };
}
const cssProperties$v = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  selectedBackgroundColor: "--elf--button-selected-background-color",
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
      variant = "default",
      size,
      disabled,
      selected,
      shape,
      quiet = false,
      outline = false,
      style: style2 = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;
    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);
    const styleObject = {
      class: classnames([
        "elf--button",
        {
          selected,
          outline,
          quiet,
          [variant]: true,
          [size]: true,
          [shape]: true
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: propertyMap(
        {
          ...style2,
          ...styleProperties
        },
        cssProperties$v
      )
    };
    return /* @__PURE__ */ createElementJsx("button", {
      ...styleObject,
      onClick
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$u = makeStyleMap("--elf--button-group", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true
});
class ButtonGroup extends UIElement {
  template() {
    const { disabled, style: style2 = {}, content, ...extraStyle } = this.props;
    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);
    const styleObject = {
      class: classnames(["elf--button-group"]),
      disabled: disabled ? "disabled" : void 0,
      style: propertyMap(
        {
          ...style2,
          ...styleProperties
        },
        cssProperties$u
      )
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
}
const cssProperties$t = makeStyleMap("--elf--tooltip", {
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
  delay: true,
  contentPadding: true,
  maxWidth: true
});
const TooltipPlacement = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right"
};
class Tooltip extends UIElement {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      delay: 1e3,
      show: this.props.show || false
    };
  }
  template() {
    const {
      style: style2 = {},
      message = "",
      content,
      placement = "bottom",
      animated = false,
      hideArrow = false,
      variant = "default",
      icon
    } = this.props;
    const { show } = this.state;
    const styleObject = {
      class: classnames("elf--tooltip", {
        [placement]: true,
        animated,
        [variant]: true
      }),
      style: {
        ...propertyMap(style2, cssProperties$t)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "content"
    }, content), show || this.props.show ? /* @__PURE__ */ createElementJsx("div", {
      class: "message"
    }, hideArrow ? void 0 : /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "message-content"
    }, /* @__PURE__ */ createElementJsx("div", null, message))) : void 0);
  }
  open() {
    this.setState({
      show: true
    });
  }
  close() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, this.props.hideDelay);
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip-content");
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
  [CLICK("$el") + IF("checkTriggerClick")]() {
    this.toggle();
  }
}
const cssProperties$s = makeStyleMap("--elf--action-group", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true
});
class ActionGroup extends UIElement {
  template() {
    const {
      direction = "horizontal",
      quiet = false,
      compact = false,
      justified = false,
      collapsed = false,
      moreIcon = null,
      boundary = 50,
      style: style2 = {},
      content,
      onMoreClick,
      ...extraStyle
    } = this.props;
    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [rootRect, setRootRect] = useState(null);
    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);
    useEffect(() => {
      if (!collapsed)
        return;
      const list = [];
      let totalWidth = 0;
      const localRect = this.$el.rect();
      this.$el.children().forEach((child, index) => {
        if (child.hasClass("hidden-tools"))
          return;
        const rect = child.rect();
        let isVisible = rect.right + boundary < localRect.right;
        if (isVisible) {
          totalWidth += rect.width;
          if (totalWidth + boundary > localRect.width) {
            totalWidth = localRect.width - boundary;
            isVisible = false;
          }
        }
        list[index] = isVisible;
      });
      setVisibilityTargetList(list);
    }, [collapsed, rootRect]);
    useEffect(() => {
      let resizeObserver;
      if (collapsed) {
        resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            setRootRect(Dom.create(entry.target).rect());
          });
        });
        resizeObserver.observe(this.$el.el);
      }
      return () => {
        resizeObserver == null ? void 0 : resizeObserver.disconnect();
      };
    }, [collapsed]);
    const styleObject = {
      class: classnames("elf--action-group", {
        [direction]: true,
        quiet,
        compact,
        collapsed,
        justified
      }),
      style: propertyMap(
        {
          ...style2,
          ...styleProperties
        },
        cssProperties$s
      )
    };
    const items = collapsed ? content.filter((item, index) => {
      return visibleTargetList[index];
    }) : content;
    const hiddenItems = collapsed ? content.filter((item, index) => {
      return !visibleTargetList[index];
    }) : [];
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, items, hiddenItems.length ? /* @__PURE__ */ createElementJsx(Tooltip, {
      message: hiddenItems,
      trigger: "click",
      hideArrow: true,
      position: TooltipPlacement.BOTTOM_LEFT,
      style: { contentPadding: "0px" }
    }, /* @__PURE__ */ createElementJsx(Button, null, moreIcon)) : void 0);
  }
}
const cssProperties$r = {
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
      class: classnames(["elf--link-button"]),
      disabled: disabled ? "disabled" : void 0,
      style: {
        ...propertyMap(style2, cssProperties$r)
      }
    };
    return /* @__PURE__ */ createElementJsx("a", {
      ...styleObject,
      onClick,
      href: href || "#"
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$q = {
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
      style: {
        ...propertyMap(style2, cssProperties$q)
      }
    };
    return /* @__PURE__ */ createElementJsx("button", {
      type: "button",
      ...styleObject,
      onClick: this.props.onClick
    }, icon || content || "");
  }
}
const cssProperties$p = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius"
};
class ToggleButton extends UIElement {
  template() {
    const {
      type,
      size,
      disabled,
      shape,
      destructive = false,
      style: style2 = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;
    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);
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
          "large": size === "large",
          "small": size === "small"
        },
        {
          "elf--button-shape-circle": shape === "circle",
          "elf--button-shape-round": shape === "round"
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: propertyMap(
        {
          ...style2,
          ...styleProperties
        },
        cssProperties$p
      )
    };
    return /* @__PURE__ */ createElementJsx("button", {
      ...styleObject,
      onClick
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$o = {
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$o)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("label", null, /* @__PURE__ */ createElementJsx("input", {
      ref: "$input",
      type: "radio",
      ...{
        value,
        name,
        disabled: disabled ? "disabled" : void 0,
        checked: checked ? "checked" : void 0
      },
      onChange: (e) => onChange == null ? void 0 : onChange(e, value)
    }), content));
  }
}
class RadioGroup extends UIElement {
  template() {
    const { disabled, style: style2 = {}, name, value, onChange, content } = this.props;
    const styleObject = {
      class: classnames(["elf--radio-group"]),
      disabled: disabled ? "disabled" : void 0,
      style: {
        ...propertyMap(style2, cssProperties$o)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content.map((it, index) => {
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
const cssProperties$n = {
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
      style: style2 = {},
      value,
      content,
      name,
      checked = false,
      onChange,
      indeterminate = false,
      variant = "default",
      size = "medium"
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--checkbox",
        {
          disabled,
          [variant]: true,
          [size]: true
        }
      ]),
      style: {
        ...propertyMap(style2, cssProperties$n)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("label", null, /* @__PURE__ */ createElementJsx("input", {
      ref: "$input",
      type: "checkbox",
      ...{
        indeterminate,
        value,
        name,
        disabled: disabled ? "disabled" : void 0,
        checked: checked ? "checked" : void 0
      },
      onChange: (e) => onChange == null ? void 0 : onChange(e, value)
    }), content));
  }
  get checked() {
    return this.refs.$input.checked;
  }
  get value() {
    return this.props.value;
  }
}
const cssProperties$m = {
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
class CheckboxGroup extends UIElement {
  initState() {
    return {
      value: this.props.value || []
    };
  }
  template() {
    const {
      disabled,
      style: style2 = {},
      value = [],
      options = [],
      onChange,
      direction = "horizontal",
      size = "medium",
      variant = "default"
    } = this.props;
    const styleObject = {
      class: classnames([
        "elf--checkbox-group",
        {
          [direction]: true
        }
      ]),
      disabled: disabled ? "disabled" : void 0,
      style: {
        ...propertyMap(style2, cssProperties$m)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, options.map((it, index) => {
      return /* @__PURE__ */ createElementJsx(Checkbox, {
        ref: `checkbox-${index}`,
        value: it.value,
        onChange: (e) => {
          onChange(e, this.getValues());
        },
        checked: value == null ? void 0 : value.includes(it.value),
        disabled,
        indeterminate: it.indeterminate,
        size,
        variant
      }, it.label);
    }));
  }
  getValues() {
    const values = [];
    Object.keys(this.children).forEach((key) => {
      const child = this.children[key];
      if (child.checked) {
        values.push(child.value);
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
const cssProperties$l = {
  color: "--elf--divider-color",
  margin: "--elf--divider-margin"
};
class Divider extends UIElement {
  template() {
    const {
      style: style2 = {},
      variant = "default",
      size = "small",
      margin = "10px 0",
      orientation = "horizontal"
    } = this.props;
    const styleObject = {
      class: classnames("elf--divider", {
        [size]: true,
        [variant]: true,
        [orientation]: true
      }),
      style: {
        ...propertyMap(
          {
            ...style2,
            margin
          },
          cssProperties$l
        )
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      className: "elf--divider-inner"
    }));
  }
}
const MenuItemType = {
  DIVIDER: "divider",
  SECTION: "section",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
  LINK: "link"
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
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, {
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.LINK) {
      return /* @__PURE__ */ createElementJsx(LinkMenuItem, {
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.SECTION) {
      return /* @__PURE__ */ createElementJsx(SectionMenuItem, {
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.DIVIDER) {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        ref,
        ...it,
        rootClose
      });
    }
    return /* @__PURE__ */ createElementJsx(MenuItem, {
      ref,
      ...it,
      rootClose
    });
  });
}
function DividerMenuItem({ dashed = false }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "elf--divider",
    dashed
  });
}
function CustomMenuItem({ render, rootClose }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "custom"
  }, render == null ? void 0 : render({ rootClose }));
}
function LinkMenuItem({ rootClose, title, link }) {
  return /* @__PURE__ */ createElementJsx("li", {
    class: "link"
  }, /* @__PURE__ */ createElementJsx("a", {
    href: link,
    onClick: rootClose
  }, title));
}
function SectionMenuItem({ title = "" }) {
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
      rootClose,
      description
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
      rootClose,
      description
    };
  }
  template() {
    const {
      title = "",
      shortcut,
      icon,
      expandIcon = "\u25B6",
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
      disabled,
      rootClose,
      description,
      show = false
    } = this.state;
    const hasItems = items.length > 0;
    const selectedValue = isFunction(selected) ? selected() : selected;
    return /* @__PURE__ */ createElementJsx("li", {
      class: classnames({
        hover
      }),
      disabled: disabled ? true : void 0
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "menu-item-content"
    }, selectable ? /* @__PURE__ */ createElementJsx("span", {
      class: "selected-icon"
    }, selectedValue ? selectedIcon : void 0) : null, icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-title"
    }, title) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "value-area"
    }, shortcut ? /* @__PURE__ */ createElementJsx("div", {
      class: "shortcut"
    }, shortcut) : void 0, hasItems ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, expandIcon) : void 0)), description ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-item-description"
    }, description) : void 0, items.length > 0 || show ? /* @__PURE__ */ createElementJsx(Menu, {
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
const cssProperties$k = {
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
      style: style2 = {},
      type = "menu",
      x = 0,
      y = 0,
      direction = "left",
      items = [],
      rootClose,
      autoPosition = false,
      compact = false
    } = this.props;
    let itemStyle = { ...style2 };
    if (x !== 0)
      itemStyle = { ...itemStyle, left: x };
    if (y !== 0)
      itemStyle = { ...itemStyle, top: y };
    if (autoPosition) {
      const index = items.findIndex((it) => {
        return it.selectable && it.selected;
      });
      itemStyle = { ...itemStyle, top: -1 * (index * 24 + 8) };
    }
    const styleObject = {
      "data-direction": direction,
      class: classnames("elf--menu", {
        [type]: true,
        compact
      }),
      style: {
        ...propertyMap(itemStyle, cssProperties$k)
      }
    };
    return /* @__PURE__ */ createElementJsx("menu", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, makeMenuItem(items, rootClose));
  }
  [OBSERVER("intersection") + PARAMS({
    root: document.body
  })](intersects = []) {
    const item = intersects.find(
      (it) => it.isIntersecting && it.intersectionRatio < 1
    );
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
      type: "dropdown",
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
      style: style2 = {},
      selectedValue,
      options = [],
      onChange
    } = this.props;
    const styleObject = {
      class: "elf--option-strip",
      disabled: disabled ? "disabled" : void 0,
      style: {
        ...propertyMap(style2, {})
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, options.map((it) => {
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
const cssProperties$j = {
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
    const {
      footer,
      cancelText = "Cancel",
      okText = "OK",
      okProps = {},
      cancelProps = {}
    } = this.props;
    if (!footer) {
      return [
        /* @__PURE__ */ createElementJsx(Button, {
          ...cancelProps,
          onClick: () => this.cancel()
        }, cancelText),
        /* @__PURE__ */ createElementJsx(Button, {
          variant: "primary",
          ...okProps,
          onClick: () => this.ok()
        }, okText)
      ];
    }
    return "";
  }
  template() {
    const { style: style2 = {}, visible, center } = this.state;
    const { noBorder } = this.props;
    const styleObject = {
      class: classnames("elf--dialog", {
        visible,
        center,
        "no-border": noBorder
      }),
      style: {
        ...propertyMap(style2, cssProperties$j)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-text"
    }, "Dialog"), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-tools",
      ref: "$tools"
    }, this.props.tools || void 0), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-title-close",
      ref: "$close",
      onClick: () => this.close()
    }, "\xD7")), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-text"
    }, this.props.content || ""), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--dialog-content-tools"
    }, this.props.footer ? this.props.footer : this.makeDefaultTools())));
  }
}
class Flex extends UIElement {
  template() {
    const {
      style: style2 = {},
      class: className = "",
      content,
      stack,
      wrap = false
    } = this.props;
    const styleObject = {
      class: classnames("elf--flex", className, {
        stack,
        wrap
      }),
      style: {
        ...propertyMap(style2, {})
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
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
    const { title = "", icon, selected, selectedType } = this.props;
    return {
      title,
      icon,
      selected,
      selectedType
    };
  }
  template() {
    const { title = "", icon } = this.state;
    const { style: style2 = {} } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tools-item", {
        selected: this.state.selected ? true : void 0
      }),
      "data-selected-type": this.state.selectedType,
      onClick: this.props.onClick,
      style: style2
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, /* @__PURE__ */ createElementJsx(Flex, {
      style: { gap: 10 }
    }, [
      icon ? /* @__PURE__ */ createElementJsx("span", {
        class: "icon"
      }, isFunction(icon) ? icon() : icon) : void 0,
      title ? /* @__PURE__ */ createElementJsx("span", {
        class: "menu-title"
      }, isFunction(title) ? title() : title) : void 0
    ].filter(Boolean))));
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
      direction,
      menuStyle,
      noArrow = false
    } = this.props;
    return {
      title,
      icon,
      selected,
      opened,
      direction,
      disabled,
      menuStyle,
      noArrow,
      rootClose: this.close.bind(this)
    };
  }
  template() {
    const {
      title = "",
      icon,
      disabled,
      selected,
      opened = false,
      direction = "left",
      menuStyle,
      noArrow = false
    } = this.state;
    const { style: style2 = {}, items, class: className } = this.props;
    const hasItems = items.length > 0;
    const isSelected = selected ? isFunction(selected) ? selected() : selected : void 0;
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames(
        "elf--tools-item",
        {
          selected: isSelected,
          "has-items": hasItems
        },
        className
      ),
      disabled,
      style: style2
    }, /* @__PURE__ */ createElementJsx("button", {
      type: "button"
    }, /* @__PURE__ */ createElementJsx(Flex, {
      style: { columnGap: 4 }
    }, [
      icon ? /* @__PURE__ */ createElementJsx("span", {
        class: "icon"
      }, isFunction(icon) ? icon() : icon) : void 0,
      title ? /* @__PURE__ */ createElementJsx("span", {
        class: "menu-title"
      }, isFunction(title) ? title() : title) : void 0
    ].filter(Boolean)), hasItems && !noArrow ? /* @__PURE__ */ createElementJsx("span", {
      class: classnames("arrow", { opened })
    }, /* @__PURE__ */ createElementJsx(ArrowIcon, null)) : void 0), opened && !disabled ? /* @__PURE__ */ createElementJsx("div", {
      class: "menu-area",
      style: { backgroundColor: "yellow" }
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "background",
      "data-direction": direction
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "arrow"
    }), /* @__PURE__ */ createElementJsx(Menu, {
      ref: "$menu",
      items,
      direction,
      rootClose: this.state.rootClose,
      style: {
        ...menuStyle || {},
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
    if (!this.state.opened) {
      this.setState({
        rect: this.$el.rect(),
        opened: true
      });
    }
  }
  close() {
    if (this.state.opened) {
      this.setState({
        opened: false
      });
    }
  }
  toggle() {
    if (!this.state.opened) {
      this.setState(
        {
          rect: this.$el.rect()
        },
        false
      );
      this.open();
    } else {
      this.close();
    }
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");
    if ($menu)
      return false;
    return true;
  }
  checkTriggerClick() {
    const { trigger = "click", onClick } = this.props;
    return trigger === "click" || trigger === "hover" && isFunction(onClick);
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
    if (Dom.create(e.target).hasClass("arrow") && !this.state.noArrow || this.state.noArrow) {
      this.toggle();
      if (this.state.opened) {
        this.runCallback(this.props.onOpen, e);
      } else {
        this.runCallback(this.props.onClose, e);
      }
      this.runCallback(this.props.onClick, e);
    } else {
      this.close();
      this.runCallback(this.props.onClick, e);
    }
  }
}
const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom"
};
function makeToolsItem(items = [], options = {}) {
  return items.map((it, index) => {
    const ref = `${it.type}-${index}`;
    let visibility = options.emphasized ? options.visibleTargetList[index] ? "visible" : "hidden" : "visible";
    if (options.visibility) {
      visibility = "visible";
    }
    if (it.type === ToolsItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(ToolsCustomItem, {
        ref,
        ...it,
        style: { visibility }
      });
    }
    if (it.type === ToolsItemType.MENU) {
      return /* @__PURE__ */ createElementJsx(ToolsMenuItem, {
        ref,
        ...it,
        style: { visibility }
      });
    }
    return /* @__PURE__ */ createElementJsx(ToolsItem, {
      ref,
      ...it,
      style: { visibility }
    });
  });
}
function makeHiddenToolsItem(items = [], options = {}) {
  return items.filter((it, index) => {
    let visibility = options.emphasized ? options.visibleTargetList[index] ? "visible" : "hidden" : "visible";
    if (options.visibility) {
      visibility = "visible";
    }
    return visibility === "hidden";
  });
}
const cssProperties$i = makeStyleMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true
});
class Tools extends UIElement {
  template() {
    const {
      style: style2 = {},
      vertical = false,
      emphasized = false,
      moreIcon
    } = this.props;
    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [lastLeft, setLastLeft] = useState(0);
    const [visibility, setVisibility] = useState(true);
    const [rootRect, setRootRect] = useState(null);
    useEffect(() => {
      let observer, resizeObserver;
      if (emphasized) {
        const options = {
          root: this.parent.parent.$el.el,
          threshold: 1
        };
        observer = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.intersectionRatio < 1) {
              setVisibility(false);
            } else {
              setVisibility(true);
            }
            setRootRect(e.intersectionRect);
          });
        }, options);
        observer.observe(this.$el.el);
        resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            setRootRect(Dom.create(entry.target).rect());
          });
        });
        resizeObserver.observe(this.parent.parent.$el.el);
      }
      return () => {
        observer == null ? void 0 : observer.disconnect();
        resizeObserver == null ? void 0 : resizeObserver.disconnect();
      };
    }, [emphasized]);
    useEffect(() => {
      if (emphasized && !visibility) {
        const list = [];
        let totalWidth = 0;
        const localRect = this.$el.rect();
        this.$el.children().forEach((child, index) => {
          if (child.hasClass("hidden-tools"))
            return;
          const rect = child.rect();
          let isVisible = rect.right + 50 < rootRect.right;
          if (isVisible) {
            totalWidth += rect.width;
            if (totalWidth + 50 > rootRect.width) {
              totalWidth = rootRect.width - 50;
              isVisible = false;
            }
          }
          list[index] = isVisible;
        });
        setVisibilityTargetList(list);
        setLastLeft(localRect.width - (localRect.right - rootRect.right) - 50);
      }
    }, [emphasized, visibility, rootRect]);
    const styleObject = {
      class: classnames("elf--tools", {
        vertical,
        emphasized
      }),
      style: {
        ...propertyMap(style2, cssProperties$i)
      }
    };
    const items = makeToolsItem(this.props.items, {
      visibleTargetList,
      rootRect,
      visibility,
      emphasized
    });
    const hiddenItems = makeHiddenToolsItem(this.props.items, {
      visibleTargetList,
      rootRect,
      visibility,
      emphasized
    });
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, items, hiddenItems.length ? /* @__PURE__ */ createElementJsx(ToolsMenuItem, {
      class: "hidden-tools",
      items: hiddenItems,
      icon: moreIcon,
      direction: "right",
      noArrow: true,
      style: {
        position: "absolute",
        height: "100%",
        left: lastLeft
      }
    }) : void 0);
  }
}
function makeToolbarItem(items = [], options = {}) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    return /* @__PURE__ */ createElementJsx(ToolbarItem, {
      ref,
      ...it,
      ...options
    });
  });
}
class ToolbarItem extends UIElement {
  template() {
    const { items, style: style2, emphasized, moreIcon } = this.props;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolbar-item"
    }, /* @__PURE__ */ createElementJsx(Tools, {
      items,
      style: style2,
      emphasized,
      moreIcon
    }));
  }
}
const cssProperties$h = makeStyleMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true
});
class Toolbar extends UIElement {
  template() {
    const {
      style: style2 = {},
      align = "space-between",
      type = "default",
      rounded = false,
      emphasized = false,
      items = [],
      class: className
    } = this.props;
    const styleObject = {
      id: "toolbar-" + this.id,
      class: classnames(
        "elf--toolbar",
        {
          [align]: true,
          rounded,
          emphasized,
          [type]: true
        },
        className
      ),
      style: {
        ...propertyMap(style2, cssProperties$h)
      }
    };
    if (Object.keys(styleObject.style).length === 0) {
      delete styleObject.style;
    }
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, makeToolbarItem(items, {
      emphasized,
      toolbarId: "toolbar-" + this.id
    }));
  }
}
const cssProperties$g = {
  backgroundColor: "--elf--notification-background",
  color: "--elf--notification-color",
  width: "--elf--notification-width",
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
      style: style2 = {},
      icon,
      content,
      tools,
      direction = "top-left"
    } = this.props;
    const styleObject = {
      class: classnames(
        "elf--notification",
        `elf--notification-direction-${direction}`
      ),
      style: {
        ...propertyMap(style2, cssProperties$g)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, icon ? /* @__PURE__ */ createElementJsx("div", {
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
const cssProperties$f = makeStyleMap("--elf--toast", {
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
class Toast extends UIElement {
  template() {
    const {
      style: style2 = {},
      content,
      delay = 0,
      icon,
      direction = "bottom",
      closable,
      variant = void 0
    } = this.props;
    const [localDelay, setLocalDelay] = useState(delay);
    const [hide, setHide] = useState(false);
    this.state.hideCallback = useCallback(
      (hideDelay = 0) => {
        setLocalDelay(hideDelay);
      },
      [setLocalDelay]
    );
    const styleObject = {
      class: classnames("elf--toast", {
        hide,
        [direction]: true,
        [variant]: true
      }),
      style: {
        ...propertyMap(style2, cssProperties$f),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1
        }
      }
    };
    useEffect(() => {
      if (localDelay > 0) {
        if (!hide) {
          this.props.onShow && this.props.onShow();
        }
        setTimeout(() => {
          if (!hide) {
            setHide(true);
          }
        }, localDelay);
      }
    }, [localDelay, hide]);
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault(),
      onTransitionEnd: () => {
        this.props.onHide && this.props.onHide();
        this.destroy(true);
      }
    }, icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "content"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toast-text"
    }, content)), /* @__PURE__ */ createElementJsx("div", {
      class: "tools"
    }, this.props.tools || []), closable ? /* @__PURE__ */ createElementJsx("div", {
      class: "close",
      onClick: () => this.hide()
    }, "\xD7") : void 0);
  }
  hide(hideDelay = 0) {
    var _a;
    (_a = this.state) == null ? void 0 : _a.hideCallback(hideDelay);
  }
}
function bell({
  content = "",
  delay = 0,
  direction = "bottom",
  cloasable = false,
  onClose,
  tools = [],
  options = {},
  style: style2 = {}
}) {
  return potal(
    /* @__PURE__ */ createElementJsx(Toast, {
      delay,
      direction,
      tools,
      style: style2,
      cloasable,
      onClose
    }, content),
    options
  );
}
const cssProperties$e = makeStyleMap("--elf--popover", {
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
  delay: true,
  contentPadding: true
});
class Popover extends UIElement {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      delay: 1e3,
      show: this.props.show || false
    };
  }
  template() {
    const {
      style: style2 = {},
      body = "",
      content,
      placement = "bottom",
      showTip = false,
      animated = false
    } = this.props;
    const { show } = this.state;
    const styleObject = {
      class: classnames("elf--popover", { [placement]: true, animated }),
      style: {
        ...propertyMap(style2, cssProperties$e)
      }
    };
    const isPopoverShow = show || this.props.show;
    const isShowTip = isPopoverShow && showTip;
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--popover-content"
    }, content, isShowTip ? /* @__PURE__ */ createElementJsx("div", {
      class: "tip"
    }) : void 0), isPopoverShow ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--popover-message"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--toolltip-message-content"
    }, body), /* @__PURE__ */ createElementJsx("div", {
      class: "event-panel"
    })) : void 0);
  }
  open() {
    this.setState({
      show: true
    });
  }
  close() {
    setTimeout(() => {
      this.setState({
        show: false
      });
    }, this.props.hideDelay);
  }
  toggle() {
    this.setState({
      show: !this.state.show
    });
  }
  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--popover-content");
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
  checkNotInpopover(e) {
    const $menu = Dom.create(e.target).closest("elf--popover");
    if (!$menu)
      return true;
    return this.$el.is($menu) === false;
  }
  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }
  [CLICK("$el") + IF("checkTriggerClick")]() {
    this.toggle();
  }
}
const cssProperties$d = {
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
      style: style2 = {},
      content,
      theme,
      title = "",
      tools = [],
      mode = "default",
      footer
    } = this.props;
    const styleObject = {
      class: classnames("elf--panel", { [mode]: true }),
      "data-theme": theme,
      style: {
        ...propertyMap(style2, cssProperties$d)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, title ? /* @__PURE__ */ createElementJsx("div", {
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
const cssProperties$c = makeStyleMap("--elf--tabstrip", {
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
  template() {
    var _a;
    const { style: style2 = {}, items = [], fitted, align = "left" } = this.props;
    const styleObject = {
      class: classnames("elf--tabstrip", {
        "is-fitted": fitted
      }),
      style: {
        ...propertyMap(style2, cssProperties$c)
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--tabstrip-content", {
        [`align-${align}`]: true
      })
    }, items.map((it) => {
      const isSelected = !!it.selected;
      const isDisabled = !!it.disabled;
      const selectedStyle = it.selectedStyle || {};
      const style22 = it.style || {};
      return /* @__PURE__ */ createElementJsx("div", {
        class: classnames("elf--tabstrip-item", {
          selected: isSelected,
          disabled: isDisabled
        }),
        style: isSelected ? selectedStyle : style22
      }, /* @__PURE__ */ createElementJsx("div", {
        onClick: it.onClick
      }, it.title));
    })), ((_a = this.props.tools) == null ? void 0 : _a.length) ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tabstrip-tools"
    }, this.props.tools.map((it) => {
      return /* @__PURE__ */ createElementJsx("div", {
        class: "elf--tabstrip-tool"
      }, it);
    })) : void 0);
  }
}
const cssProperties$b = makeStyleMap("--elf--tab", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true
});
function TabItem({ selected, content }) {
  return /* @__PURE__ */ createElementJsx("div", {
    class: classnames("elf--tab-content-item", {
      selected
    })
  }, content);
}
class Tab extends UIElement {
  initState() {
    return {
      activeKey: this.props.activeKey
    };
  }
  changeActiveKey(key) {
    const { onChange } = this.props;
    this.setState({ activeKey: key });
    if (isFunction(onChange)) {
      onChange(key);
    }
  }
  template() {
    const { style: style2 = {}, content, full, fitted, align = "left" } = this.props;
    const { activeKey } = this.state;
    const styleObject = {
      class: classnames("elf--tab", {
        full
      }),
      style: propertyMap(style2, cssProperties$b)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tab-header"
    }, /* @__PURE__ */ createElementJsx(TabStrip, {
      fitted,
      align,
      items: content.map((it) => {
        const { title, key, onClick, disabled, style: style22, selectedStyle } = it.props;
        return {
          title,
          style: style22,
          disabled,
          selectedStyle,
          selected: key === activeKey,
          onClick: () => {
            this.changeActiveKey(key);
            onClick && onClick();
          }
        };
      })
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tab-body"
    }, content.map((it) => {
      const { key, content: content2, disabled } = it.props;
      const selected = key === activeKey;
      return /* @__PURE__ */ createElementJsx(TabItem, {
        key,
        selected,
        disabled
      }, content2);
    })));
  }
}
class Layout extends UIElement {
  template() {
    const { style: style2 = {}, content, wrap = false } = this.props;
    const styleObject = {
      class: classnames("elf--layout", {
        stack: this.props.stack,
        wrap
      }),
      style: {
        ...propertyMap(style2, {
          backgroundColor: "--elf--layout-background-color",
          gap: "--elf--layout-gap"
        })
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
}
class VBox extends Flex {
  template() {
    const { style: style2 = {}, content } = this.props;
    return /* @__PURE__ */ createElementJsx(Flex, {
      stack: true,
      style: style2
    }, content);
  }
}
function makeTemplates(arr) {
  if (typeof arr === "number") {
    arr = Array.from({ length: arr }, () => 1);
  } else if (Array.isArray(arr) === false) {
    arr = [arr];
  }
  if (arr.length === 0) {
    return void 0;
  }
  return arr.map((it) => isNumber(it) ? `${it}fr` : it).join(" ");
}
class Grid extends UIElement {
  template() {
    const {
      class: className = "",
      style: style2 = {},
      columns = [],
      rows = [],
      gap,
      columnGap,
      rowGap,
      content,
      ...extraStyle
    } = this.props;
    const { style: styleProperties, noneStyle } = convertPropertyToStyleKey(extraStyle);
    const styleObject = {
      class: classnames("elf--grid", className),
      style: {
        gridTemplateColumns: makeTemplates(columns),
        gridTemplateRows: makeTemplates(rows),
        gap,
        columnGap,
        rowGap,
        ...propertyMap({ ...style2, ...styleProperties }, {})
      },
      ...noneStyle
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
}
const cssProperties$a = makeStyleMap("--elf--input-editor", {
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
      style: style2 = {},
      type = "text",
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
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
    const { icon, tools } = this.props;
    const {
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$a)
      }
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
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, icon ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-editor-icon"
    }, icon) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      ref: "$input",
      ...properties,
      ...inputEvents
    }))), tools ? tools : void 0);
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
const cssProperties$9 = makeStyleMap("--elf--input-paint", {
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
      style: style2 = {},
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
      style: style2,
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$9)
      }
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
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, hideColorView ? void 0 : /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-paint-icon"
    }, /* @__PURE__ */ createElementJsx(ColorView, {
      color: value
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      ref: "$input",
      ...properties,
      ...inputEvents
    }))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "opacity",
      value: `${parsedColor.a * 100}%`,
      onKeyUp: this.keyup
    })));
  }
  updateOpacity(num) {
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: this.state.parsedColor.a + num
      }
    });
  }
  increaseOpacity() {
    this.updateOpacity(0.01);
  }
  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }
  onMounted() {
    super.onMounted();
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
    return this.refs.$input.value;
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
const cssProperties$8 = makeStyleMap("--elf--input-paint", {
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
      style: style2 = {},
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
      style: style2,
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$8)
      }
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
    this.setState(
      {
        parsedColor: {
          r,
          g,
          b,
          a
        }
      },
      false
    );
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      type: "text",
      "data-type": "hex",
      maxlength: 6,
      ...properties,
      ...inputEvents,
      onKeyDown: this.keydownColor,
      onKeyUp: this.keyupColor
    }))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-opacity"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "opacity",
      value: `${Math.round(a * 100 * 100) / 100}%`,
      onKeyDown: this.keydown
    })));
  }
  updateOpacity(num) {
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          a: Math.max(
            0,
            Math.min(
              1,
              Math.round((this.state.parsedColor.a + num) * 100) / 100
            )
          )
        }
      },
      false
    );
    this.runCallback(this.props.onChange);
  }
  updateFullColor(parsedColor) {
    this.setState(
      {
        parsedColor
      },
      false
    );
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    const lastValue = Math.max(
      0,
      Math.min(255, this.state.parsedColor[type] + num)
    );
    if (this.state.parsedColor[type] === lastValue) {
      return;
    }
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          [type]: Math.max(
            0,
            Math.min(255, this.state.parsedColor[type] + num)
          )
        }
      },
      false
    );
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
const cssProperties$7 = makeStyleMap("--elf--input-paint", {
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
      style: style2 = {},
      autoFocus = false,
      focused,
      hover = false,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    return {
      style: style2,
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$7)
      }
    };
    const { r, g, b, a } = parse(value);
    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255
    };
    this.setState(
      {
        parsedColor: { r, g, b, a }
      },
      false
    );
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx(Grid, {
      columns: 3
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      "data-type": "r",
      tabIndex: 1,
      value: r,
      ...properties,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      "data-type": "g",
      tabIndex: 2,
      value: g,
      ...properties,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      "data-type": "b",
      tabIndex: 3,
      value: b,
      ...properties,
      onKeyDown: this.keydownColor
    })))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
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
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          a: Math.max(
            0,
            Math.min(
              1,
              Math.round((this.state.parsedColor.a + num) * 100) / 100
            )
          )
        }
      },
      false
    );
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          [type]: Math.max(
            0,
            Math.min(255, this.state.parsedColor[type] + num)
          )
        }
      },
      false
    );
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
class TextAreaEditor extends UIElement {
  initState() {
    const {
      style: style2 = {},
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
    return {
      style: style2,
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$6)
      }
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
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("textarea", {
      ref: "$input",
      ...properties,
      ...inputEvents
    }, value))));
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
const cssProperties$5 = makeStyleMap("--elf--virtual-scroll", {
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
    const { style: style2 = {}, itemHeight = 32, items = [] } = this.props;
    const totalCount = items.length;
    const styleObject = {
      class: classnames("elf--virtual-scroll", this.props.class),
      style: {
        ...propertyMap(style2, cssProperties$5),
        "--elf--virtual-scroll-item-width": "100%",
        "--elf--virtual-scroll-item-height": `${itemHeight}px`,
        "--elf--virtual-scroll-item-count": totalCount,
        "--elf--virtual-scroll-panel-height": `${totalCount * itemHeight}px`
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
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
      this.setState(
        {
          width: rect.width,
          height: rect.height
        },
        false
      );
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
      this.setState(
        {
          scrollHeight,
          itemCount
        },
        false
      );
      const startIndex = Math.max(
        Math.floor((this.state.scrollTop || 0) / 32) - overscanRowCount,
        0
      );
      const endIndex = Math.min(
        Math.floor(startIndex + itemCount + 2 * overscanRowCount),
        totalCount - 1
      );
      this.state.renderItems = this.filterItems(items, startIndex, endIndex);
    }
    return this.state.renderItems.map((item, index) => {
      var _a, _b;
      return (_b = (_a = this.props).itemRenderer) == null ? void 0 : _b.call(
        _a,
        item,
        item.index * itemHeight,
        index,
        items,
        this
      );
    });
  }
  checkScrollTop() {
    const { scrollTop, height, scrollHeight } = this.state;
    this.setState(
      {
        scrollTop: this.$el.scrollTop
      },
      false
    );
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
    this.setState(
      {
        isRenderingItems: false
      },
      false
    );
    this.render();
  }
  refreshItems() {
    this.setState(
      {
        isRenderingItems: true
      },
      false
    );
    this.render();
  }
  scrollIntoView(index) {
    const { itemHeight } = this.props;
    const scrollTop = index * itemHeight;
    this.$el.scrollTop = scrollTop;
    this.setState(
      {
        scrollTop: this.$el.scrollTop
      },
      false
    );
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
      number = 10,
      onClick,
      onDoubleClick,
      onContextMenu,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseEnter,
      onMouseLeave
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
      ref: "$text",
      ...{
        onClick,
        onDoubleClick,
        onContextMenu,
        onMouseDown,
        onMouseUp,
        onMouseMove,
        onMouseEnter,
        onMouseLeave
      }
    }, content), /* @__PURE__ */ createElementJsx("div", {
      class: "tools"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "lock"
    }, lock ? lockIcon : lockOpenIcon), /* @__PURE__ */ createElementJsx("div", {
      class: "visible"
    }, visibleIcon))));
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
      style: style2 = {},
      autoFocus = false,
      focused,
      hover = false,
      placeholder,
      disabled,
      hasOpacity = true
    } = this.props;
    return {
      style: style2,
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
      style: style2 = {},
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
      style: {
        ...propertyMap(style2, cssProperties$4)
      }
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
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-area"
    }, /* @__PURE__ */ createElementJsx(Grid, {
      columns: 3
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      type: "text",
      tabIndex: 1,
      "data-type": "h",
      value: h,
      ...properties,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      type: "text",
      tabIndex: 2,
      "data-type": "s",
      value: s,
      ...properties,
      onKeyDown: this.keydownColor
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "elf--input-item"
    }, /* @__PURE__ */ createElementJsx("input", {
      class: "color",
      type: "text",
      tabIndex: 3,
      "data-type": "l",
      value: l,
      ...properties,
      onKeyDown: this.keydownColor
    })))), this.state.hasOpacity && /* @__PURE__ */ createElementJsx("div", {
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
      parsedColor: {
        ...this.state.parsedColor,
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100))
      }
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
      parsedColor: {
        ...this.state.parsedColor,
        ...data
      }
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
function EyeDropper(props) {
  return /* @__PURE__ */ createElementJsx("div", {
    class: "eye-dropper"
  }, /* @__PURE__ */ createElementJsx(Button, {
    size: "large",
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
    this.setState(
      {
        clicked: true,
        rect: this.$el.$(".slide-bg").rect()
      },
      false
    );
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
    this.setState(
      {
        clicked: false
      },
      false
    );
  }
}
function HueSlide({ value, onChange }) {
  return /* @__PURE__ */ createElementJsx(BaseSlide, {
    value,
    containerClass: "hue-slide",
    slideClass: "hue-slide-bg",
    onChange
  });
}
function OpacitySlide({ value, onChange }) {
  return /* @__PURE__ */ createElementJsx(BaseSlide, {
    value,
    containerClass: "opacity-slide",
    slideClass: "opacity-slide-bg",
    onChange
  });
}
const cssProperties$3 = {
  height: "--elf--color-mixer-height",
  width: "--elf--color-mixer-width"
};
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
    const { color = "red", width = 240, height = 240 } = this.props;
    const parsedColor = parse(color);
    const { r, g, b, a } = parsedColor;
    const { h, s, v } = RGBtoHSV(r, g, b);
    return {
      type: parsedColor.type,
      color: format({ r, g, b }, "rgb"),
      width,
      height,
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
    const {
      hideSlide = false,
      hideInput = false,
      shadow,
      style: style2 = {},
      disabled
    } = this.props;
    const x = width * s;
    const y = height * (1 - v);
    const styleObject = {
      class: classnames("elf--color-mixer", {
        shadow,
        disabled
      }),
      style: {
        ...propertyMap(
          {
            ...style2,
            width,
            height
          },
          cssProperties$3
        )
      }
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
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
    })))), hideSlide === false ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-slide-area"
    }, window.EyeDropper ? /* @__PURE__ */ createElementJsx(EyeDropper, {
      onChange: this.updateColor
    }) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "slide"
    }, /* @__PURE__ */ createElementJsx(HueSlide, {
      value: h / 360,
      onChange: this.updateHueColor,
      disabled
    }), /* @__PURE__ */ createElementJsx(OpacitySlide, {
      r,
      g,
      b,
      value: a,
      disabled,
      onChange: this.updateOpacity
    }))) : void 0, hideInput === false ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--color-input-area"
    }, /* @__PURE__ */ createElementJsx(ColorInput, {
      ...{
        type,
        h,
        s,
        v,
        r,
        g,
        b,
        a,
        disabled
      },
      onChange: this.updateColor
    })) : void 0);
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
    this.setState(
      {
        clicked: true,
        rect: this.$el.$(".elf--color-area").rect(),
        clientX: e.clientX,
        clientY: e.clientY
      },
      false
    );
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
    this.setState(
      {
        clicked: false
      },
      false
    );
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
class View extends UIElement {
  template() {
    const {
      as = "div",
      id,
      class: className = "",
      style: style2 = {},
      content,
      ...extraStyle
    } = this.props;
    const { style: styleProperties, noneStyle } = convertPropertyToStyleKey(extraStyle);
    const styleObject = {
      class: classnames(className),
      id,
      style: propertyMap({ ...style2, ...styleProperties }, {}),
      ...noneStyle
    };
    Object.keys(styleObject).forEach((key) => {
      if (styleObject[key] === void 0) {
        delete styleObject[key];
      }
    });
    return createElementJsx(as, styleObject, content);
  }
}
const style = {
  boxSizing: "border-box"
};
function TextInputItem({ item: { value } }) {
  return /* @__PURE__ */ createElementJsx(InputEditor, {
    type: "text",
    value,
    width: "100%",
    display: "block",
    style
  });
}
function TitleItem({ item: { value, key } }) {
  return /* @__PURE__ */ createElementJsx(View, {
    as: "div",
    key
  }, value);
}
function GridItem({
  item: { gap, rowGap, columnGap, style: style2, columns = [], items = [] },
  root
}) {
  return /* @__PURE__ */ createElementJsx(Grid, {
    columns,
    gap,
    rowGap,
    columnGap,
    style: style2
  }, items.map((item, index) => root.makeEditorItem(item, index)));
}
const ButtonItem$1 = "";
function ButtonItem({ item }) {
  return /* @__PURE__ */ createElementJsx(Button, {
    onClick: item.onClick
  }, item.title);
}
function ColorItem({ item: { value, autoFocus } }) {
  return /* @__PURE__ */ createElementJsx(InputPaint, {
    value,
    autoFocus
  });
}
function ToggleButtonItem({ item }) {
  return /* @__PURE__ */ createElementJsx(IconButton, {
    onChange: item.onChange
  }, item.icon);
}
const cssProperties$2 = makeStyleMap("--elf--data-editor", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true
});
const predefinedPlugins = {
  title: TitleItem,
  text: TextInputItem,
  grid: GridItem,
  button: ButtonItem,
  color: ColorItem,
  "toggle-button": ToggleButtonItem
};
class DataEditor extends UIElement {
  initState() {
    const { data = () => ({}), items = () => [], plugins = {} } = this.props;
    const currentData = data();
    return {
      plugins: {
        ...predefinedPlugins,
        ...plugins
      },
      data: currentData,
      items: items(currentData)
    };
  }
  makeEditorItem(item, index) {
    const { plugins } = this.state;
    if (typeof item === "string") {
      const TitleItem2 = plugins["title"];
      return /* @__PURE__ */ createElementJsx(TitleItem2, {
        key: index,
        item: { value: item }
      });
    } else {
      const TypedItem = plugins[item.type];
      if (TypedItem) {
        return /* @__PURE__ */ createElementJsx(TypedItem, {
          key: item.key || index,
          item,
          root: this
        });
      }
    }
    return void 0;
  }
  template() {
    const { style: style2 = {} } = this.props;
    const { items } = this.state;
    const styleObject = {
      class: classnames("elf--data-editor"),
      style: propertyMap(style2, cssProperties$2)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, items.map((item, index) => {
      const isString2 = typeof item === "string";
      return /* @__PURE__ */ createElementJsx("div", {
        class: classnames("elf--data-editor-item", { string: isString2 })
      }, item.title ? /* @__PURE__ */ createElementJsx("div", {
        class: "title"
      }, item.title) : null, /* @__PURE__ */ createElementJsx("div", {
        class: "editor"
      }, this.makeEditorItem(item, index)));
    }));
  }
}
const EMPTY_POS = { x: 0, y: 0 };
const DEFAULT_POS = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER };
const MOVE_CHECK_MS = 0;
function getDist(startPos, endPos) {
  return Math.sqrt(
    Math.pow(endPos.x - startPos.x, 2) + Math.pow(endPos.y - startPos.y, 2)
  );
}
class EventPanel extends UIElement {
  initialize() {
    super.initialize();
    this.__initBodyMoves();
  }
  __initBodyMoves() {
    this.__firstMove = /* @__PURE__ */ new Set();
    this.__moves = /* @__PURE__ */ new Set();
    this.__ends = /* @__PURE__ */ new Set();
    this.__modifyBodyMoveSecond(MOVE_CHECK_MS);
  }
  __modifyBodyMoveSecond(ms = MOVE_CHECK_MS) {
    const callback = ms === 0 ? this.__loopBodyMoves.bind(this) : debounce(this.__loopBodyMoves.bind(this), ms);
    this.__funcBodyMoves = callback;
  }
  __loopBodyMoves() {
    var pos = this.pos;
    var e = this.$store.get(BODY_MOVE_EVENT);
    var lastPos = this.lastPos || DEFAULT_POS;
    var isNotEqualLastPos = !(lastPos.x === pos.x && lastPos.y === pos.y);
    if (isNotEqualLastPos && this.__firstMove.size) {
      let i = 0;
      this.__firstMove.forEach((v) => {
        const dist = getDist(pos, v.xy);
        if (Math.abs(dist) > 0) {
          var dx = pos.x - v.xy.x;
          var dy = pos.y - v.xy.y;
          v.func.call(v.context, dx, dy, "move", e.pressure);
          i++;
        }
      });
      if (i > 0) {
        this.__firstMove.clear();
      }
    }
    if (isNotEqualLastPos && this.__moves.size) {
      this.__moves.forEach((v) => {
        const dist = getDist(pos, v.xy);
        if (Math.abs(dist) > 0.5) {
          var dx = pos.x - v.xy.x;
          var dy = pos.y - v.xy.y;
          v.func.call(v.context, dx, dy, "move", e.pressure);
        }
      });
      this.lastPos = pos;
    }
    window.requestAnimationFrame(this.__funcBodyMoves);
  }
  __removeBodyMoves() {
    var pos = this.lastPos;
    var e = this.$store.get(BODY_MOVE_EVENT);
    if (pos) {
      this.__ends.forEach((v) => {
        v.func.call(
          v.context,
          pos.x - v.xy.x,
          pos.y - v.xy.y,
          "end",
          e.pressure
        );
      });
    }
    this.__firstMove.clear();
    this.__moves.clear();
    this.__ends.clear();
  }
  [SUBSCRIBE_ALL(ADD_BODY_FIRST_MOUSEMOVE)](func, context, xy) {
    this.__firstMove.add({ func, context, xy });
  }
  [SUBSCRIBE_ALL(ADD_BODY_MOUSEMOVE)](func, context, xy) {
    this.__moves.add({ func, context, xy });
  }
  [SUBSCRIBE_ALL(ADD_BODY_MOUSEUP)](func, context, xy) {
    this.__ends.add({ func, context, xy });
  }
  [POINTERSTART()](e) {
    var newPos = e.xy || EMPTY_POS;
    this.$store.init(BODY_MOVE_EVENT, e);
    this.pos = newPos;
  }
  [POINTERMOVE()](e) {
    var newPos = e.xy || EMPTY_POS;
    this.$store.init(BODY_MOVE_EVENT, e);
    this.pos = newPos;
    if (!this.__requestId) {
      this.__requestId = window.requestAnimationFrame(this.__funcBodyMoves);
    }
  }
  [POINTEREND()](e) {
    this.$store.set(BODY_MOVE_EVENT, e);
    this.__removeBodyMoves();
    window.cancelAnimationFrame(this.__requestId);
    this.__requestId = null;
  }
}
class EventControlPanel extends UIElement {
  bodyMouseFirstMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_FIRST_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }
  bodyMouseMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }
  bodyMouseUp(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEUP, this[methodName], this, e.xy);
    }
  }
}
class AppResizeBar extends UIElement {
  template() {
    const styleObject = {
      class: "elf--app-layout-resize-bar"
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    });
  }
  [POINTERSTART()](e) {
    this.startXY = e.xy;
  }
  isMoved(e) {
    if (!this.startXY)
      return false;
    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;
    if (diffX !== 0 || diffY !== 0) {
      return true;
    }
    return false;
  }
  [POINTERMOVE("document") + IF("isMoved")](e) {
    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;
    if (isFunction(this.props.onResize)) {
      this.props.onResize(diffX, diffY);
    }
  }
  [POINTEREND("document") + IF("isMoved")](e) {
    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;
    if (isFunction(this.props.onResizeEnd)) {
      this.props.onResizeEnd(diffX, diffY);
    }
    this.startXY = void 0;
  }
}
function AppLayoutItem({
  direction,
  content,
  width = "auto",
  height = "auto",
  maxWidth = 500,
  minWidth = 0,
  maxHeight = 500,
  minHeight = 0,
  resizable = false,
  style: style2,
  onResize,
  onResizeEnd
}) {
  const [initWidth, setWidth] = useState(width);
  const [initHeight, setHeight] = useState(height);
  const [itemWidth, setLastWidth] = useState(initWidth);
  const [itemHeight, setLastHeight] = useState(initHeight);
  const setSize = useCallback(
    (size) => {
      if (direction === "left" || direction === "right") {
        const lastWidth = Math.min(Math.max(minWidth, size), maxWidth);
        setLastWidth(lastWidth);
        if (itemWidth != lastWidth) {
          isFunction(onResize) && onResize(lastWidth, itemHeight);
        }
      } else if (direction === "top" || direction === "bottom") {
        const lastHeight = Math.min(Math.max(minHeight, size), maxHeight);
        setLastHeight(lastHeight);
        if (itemHeight != lastHeight) {
          isFunction(onResize) && onResize(itemWidth, lastHeight);
        }
      }
    },
    [itemWidth, itemHeight]
  );
  const onResizeCallback = useCallback(
    (diffX, diffY) => {
      if (direction === "left" || direction === "right") {
        setSize(direction === "left" ? initWidth + diffX : initWidth - diffX);
      } else {
        setSize(direction === "top" ? initHeight + diffY : initHeight - diffY);
      }
    },
    [direction, initWidth, initHeight, setSize]
  );
  const onResizeEndCallback = useCallback(() => {
    setWidth(itemWidth);
    setHeight(itemHeight);
    isFunction(onResizeEnd) && onResizeEnd(itemWidth, itemHeight);
  }, [itemWidth, itemHeight, setWidth, setHeight]);
  return /* @__PURE__ */ createElementJsx("div", {
    class: "elf--app-layout-item",
    "data-direction": direction,
    "data-resizable": resizable,
    style: { ...style2, width: itemWidth, height: itemHeight }
  }, content, resizable ? /* @__PURE__ */ createElementJsx(AppResizeBar, {
    onResize: onResizeCallback,
    onResizeEnd: onResizeEndCallback
  }) : void 0);
}
const cssProperties$1 = makeStyleMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true
});
class AppLayout extends UIElement {
  getItem(direction) {
    return this.props.content.find((it) => it.props.direction === direction);
  }
  template() {
    const { style: style2 = {} } = this.props;
    const styleObject = {
      class: "elf--app-layout",
      style: propertyMap(style2, cssProperties$1)
    };
    const topLayoutItem = this.getItem("top");
    const bottomLayoutItem = this.getItem("bottom");
    const leftLayoutItem = this.getItem("left");
    const rightLayoutItem = this.getItem("right");
    const centerLayoutItem = this.getItem("center");
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, topLayoutItem ? topLayoutItem : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--app-layout-body"
    }, leftLayoutItem ? leftLayoutItem : void 0, centerLayoutItem ? centerLayoutItem : void 0, rightLayoutItem ? rightLayoutItem : void 0), bottomLayoutItem ? bottomLayoutItem : void 0);
  }
}
const cssProperties = {
  color: "--elf--help-text-color"
};
class HelpText extends UIElement {
  template() {
    const {
      variant = "default",
      size = "medium",
      content = "",
      icon,
      style: style2 = {},
      disabled = false,
      ...extrProps
    } = this.props;
    const styleObject = {
      class: classnames("elf--help-text", {
        [variant]: true,
        [size]: true,
        disabled
      }),
      style: {
        ...propertyMap(style2, cssProperties)
      },
      ...extrProps
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, icon && /* @__PURE__ */ createElementJsx("span", {
      class: "icon"
    }, icon), content ? /* @__PURE__ */ createElementJsx("div", {
      class: "content"
    }, content) : null);
  }
}
export {
  ADD_BODY_FIRST_MOUSEMOVE,
  ADD_BODY_MOUSEMOVE,
  ADD_BODY_MOUSEUP,
  ActionGroup,
  Alert,
  AppLayout,
  AppLayoutItem,
  AppResizeBar,
  BODY_MOVE_EVENT,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  ColorGrid,
  ColorMixer,
  ColorView,
  DataEditor,
  Dialog,
  Divider,
  END,
  EventControlPanel,
  EventPanel,
  FIRSTMOVE,
  Flex,
  Grid,
  HelpText,
  HexColorEditor,
  IconButton,
  InputEditor,
  InputPaint,
  Layer,
  Layout,
  LinkButton,
  MOVE,
  Menu,
  Notification,
  OptionMenu,
  OptionStrip,
  Panel,
  Popover,
  RGBColorEditor,
  Radio,
  RadioGroup,
  Tab,
  TabItem,
  TabStrip,
  TextAreaEditor,
  Toast,
  ToggleButton,
  Toolbar,
  ToolbarItem,
  Tools,
  Tooltip,
  TooltipPlacement,
  VBox,
  View,
  VirtualScroll,
  alert,
  bell
};
