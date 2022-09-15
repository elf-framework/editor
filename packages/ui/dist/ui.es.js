var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _idMap, _items, _parentList, _initialize, initialize_fn, _traverse, traverse_fn;
import { isFunction, useMagicMethod, POINTERSTART, isUndefined, isArray, AFTER, UIElement, useState, useCallback, classnames, createElementJsx, potal, isString, useMemo, Dom, POINTERENTER, IF, POINTERLEAVE, CLICK, FOCUS, useEffect, PREVENT, STOP, OBSERVER, PARAMS, POINTEROVER, isNumber, FOCUSIN, FOCUSOUT, SCROLL, SUBSCRIBE_SELF, DEBOUNCE, FRAME, POINTERMOVE, POINTEREND, debounce, SUBSCRIBE_ALL } from "@elf-framework/sapa";
import { parse, format, RGBtoHSL, RGBtoHSV, checkHueColor, HSVtoHSL, HSVtoRGB } from "@elf-framework/color";
const style$1 = "";
function usePointerStart(...args) {
  let [selector, downAction, moveAction, upAction] = args;
  if (isFunction(selector)) {
    [downAction, moveAction, upAction] = args;
    selector = null;
  }
  return useMagicMethod(POINTERSTART(selector), (evt) => {
    if (isFunction(downAction)) {
      const ret = downAction(evt);
      if (!isUndefined(ret)) {
        return ret;
      }
    }
    const move = (e) => {
      if (isFunction(moveAction)) {
        moveAction(e);
      }
    };
    const end = (e) => {
      if (isFunction(upAction))
        upAction(e);
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
    };
    if (isFunction(moveAction)) {
      document.addEventListener("mousemove", move);
    }
    if (isFunction(upAction) || isFunction(moveAction)) {
      document.addEventListener("mouseup", end);
    }
  });
}
class BaseTreeViewProvider {
  get items() {
  }
  get ids() {
  }
  has(id) {
  }
  get(id) {
  }
  set(id, obj) {
  }
  remove(id) {
  }
  setParent(targetId, parentId) {
  }
  removeParent(targetId) {
  }
  appendChild(parentId, obj) {
  }
  getParentId(childId) {
  }
  deleteInfo(childObj) {
  }
  removeChild(parentId, childId) {
  }
  insertChild(targetParentId, targetIndex, currentObject) {
  }
  findIndex(list = [], id) {
  }
  insertItem(targetId, currentId, type = "before") {
  }
  insertBefore(targetId, currentId) {
  }
  insertAfter(targetId, currentId) {
  }
  insertLast(parentId, childId) {
  }
}
class TreeViewProvider extends BaseTreeViewProvider {
  constructor(items = []) {
    super();
    __privateAdd(this, _initialize);
    __privateAdd(this, _traverse);
    __privateAdd(this, _idMap, {});
    __privateAdd(this, _items, []);
    __privateAdd(this, _parentList, {});
    __privateSet(this, _items, items);
    __privateMethod(this, _initialize, initialize_fn).call(this);
  }
  get items() {
    return __privateGet(this, _items);
  }
  get ids() {
    return Object.keys(__privateGet(this, _idMap));
  }
  has(id) {
    return Boolean(__privateGet(this, _idMap)[id]);
  }
  get(id) {
    return __privateGet(this, _idMap)[id];
  }
  set(id, obj) {
    const target = this.get(id);
    if (target) {
      Object.assign(target, obj);
    } else {
      __privateGet(this, _idMap)[id] = obj;
    }
  }
  remove(id) {
    const obj = __privateGet(this, _idMap)[id];
    delete __privateGet(this, _idMap)[id];
    return obj;
  }
  setParent(targetId, parentId) {
    __privateGet(this, _parentList)[targetId] = parentId;
  }
  removeParent(targetId) {
    delete __privateGet(this, _parentList)[targetId];
  }
  appendChild(parentId, obj) {
    const parent = this.get(parentId);
    if (!parent)
      return;
    if (!obj.id)
      throw new Error("obj.id is required.");
    if (isArray(parent.children)) {
      parent.children.push(obj);
    } else {
      parent.children = [obj];
    }
    this.set(obj.id, obj);
    this.setParent(obj.id, parentId);
    return obj;
  }
  getParentId(childId) {
    return __privateGet(this, _parentList)[childId];
  }
  deleteInfo(childObj) {
    if (childObj) {
      this.remove(childObj.id);
      this.removeParent(childObj.id);
      return childObj;
    }
  }
  removeChild(parentId, childId) {
    var _a;
    const parent = this.get(parentId);
    const index = this.findIndex(parent.children, childId);
    if (index < 0) {
      return;
    }
    let childObj;
    if (parent) {
      [childObj] = parent.children.splice(index, 1);
      if (((_a = parent.children) == null ? void 0 : _a.length) === 0) {
        delete parent.children;
      }
    } else {
      [childObj] = __privateGet(this, _items).splice(index, 1);
    }
    return this.deleteInfo(childObj);
  }
  insertChild(targetParentId, targetIndex, currentObject) {
    const targetParent = this.get(targetParentId);
    this.set(currentObject.id, currentObject);
    if (targetParent) {
      targetParent.children.splice(targetIndex, 0, currentObject);
      this.setParent(currentObject.id, targetParentId);
    } else {
      __privateGet(this, _items).splice(targetIndex, 0, currentObject);
      this.removeParent(currentObject.id);
    }
  }
  findIndex(list = __privateGet(this, _items), id) {
    return list.findIndex((it) => it.id === id);
  }
  insertItem(targetId, currentId, type = "before") {
    const targetParentId = this.getParentId(targetId);
    const targetParent = this.get(targetParentId);
    const targetIndex = this.findIndex(targetParent == null ? void 0 : targetParent.children, targetId);
    const currentParentId = this.getParentId(currentId);
    const currentObject = this.removeChild(currentParentId, currentId);
    this.insertChild(
      targetParentId,
      type === "before" ? targetIndex : targetIndex + 1,
      currentObject
    );
  }
  insertBefore(targetId, currentId) {
    return this.insertItem(targetId, currentId, "before");
  }
  insertAfter(targetId, currentId) {
    return this.insertItem(targetId, currentId, "after");
  }
  insertLast(parentId, childId) {
    const lastParentId = this.getParentId(childId);
    const childObj = this.removeChild(lastParentId, childId);
    if (childObj) {
      this.appendChild(parentId, childObj);
    }
  }
}
_idMap = new WeakMap();
_items = new WeakMap();
_parentList = new WeakMap();
_initialize = new WeakSet();
initialize_fn = function() {
  __privateMethod(this, _traverse, traverse_fn).call(this, __privateGet(this, _items));
};
_traverse = new WeakSet();
traverse_fn = function(items = [], parentId) {
  items.forEach((it) => {
    var _a;
    if (__privateGet(this, _idMap)[it.id])
      throw new Error("id is duplicated.");
    __privateGet(this, _idMap)[it.id] = it;
    __privateGet(this, _parentList)[it.id] = parentId;
    if ((_a = it.children) == null ? void 0 : _a.length) {
      __privateMethod(this, _traverse, traverse_fn).call(this, it.children, it.id);
    }
  });
};
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
const _components = {};
function registerComponent(key, Component) {
  if (key && Component) {
    if (_components[key]) {
      console.warn(
        `Component ${key} is already registered. Rename key string for  `,
        Component
      );
    } else {
      _components[key] = Component;
    }
  }
  return Component;
}
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
function convertNumberStyleValue(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
function propertyMap(styles = {}, mapper = {}) {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] !== "undefined") {
      styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
    }
  });
  return Object.keys(styleObj).length ? styleObj : void 0;
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
function makeCssVariablePrefixMap(prefix, obj = {}) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });
  return newObj;
}
function splitStyleKeyAndNoneStyleKey(properties) {
  const style2 = {};
  const noneStyle = {};
  Object.keys(properties).forEach((key) => {
    const value = properties[key];
    const styleKey = ComponentPropsToStylePropsMap[key];
    if (styleKey) {
      style2[styleKey] = value;
    } else {
      noneStyle[key] = value;
    }
  });
  return { style: style2, noneStyle };
}
const cssProperties$H = makeCssVariablePrefixMap("--elf--alert", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true
});
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
      icon,
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
        ...propertyMap(style2, cssProperties$H),
        ...{
          transition: `opacity ${localDelay}ms ease-in-out`,
          opacity: hide ? 0 : 1
        }
      },
      ...extrProps
    };
    const titleIcon = title && icon ? icon : void 0;
    const contentIcon = content && icon && !title ? icon : void 0;
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault(),
      onTransitionEnd: () => {
        this.props.onHide && this.props.onHide();
        this.destroy(true);
      }
    }, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--alert-title"
    }, titleIcon, " ", title) : null, content ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--alert-content"
    }, contentIcon, " ", content) : null, closable ? /* @__PURE__ */ createElementJsx("div", {
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
registerComponent("Alert", Alert);
registerComponent("alert", Alert);
const cssProperties$G = makeCssVariablePrefixMap("--elf--button", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true
});
class Button extends UIElement {
  template() {
    const {
      variant = "default",
      size = "medium",
      disabled,
      selected,
      shape = "round",
      quiet = false,
      outline = false,
      style: style2 = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;
    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);
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
        cssProperties$G
      )
    };
    return /* @__PURE__ */ createElementJsx("button", {
      ...styleObject,
      onClick
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
registerComponent("button", Button);
registerComponent("btn", Button);
registerComponent("Button", Button);
const cssProperties$F = makeCssVariablePrefixMap("--elf--button-group", {
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
    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);
    const styleObject = {
      class: classnames(["elf--button-group"]),
      disabled: disabled ? "disabled" : void 0,
      style: propertyMap(
        {
          ...style2,
          ...styleProperties
        },
        cssProperties$F
      )
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
}
registerComponent("button-group", ButtonGroup);
registerComponent("btn-group", ButtonGroup);
registerComponent("ButtonGroup", ButtonGroup);
const cssProperties$E = makeCssVariablePrefixMap("--elf--tooltip", {
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
  maxWidth: true,
  position: true
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
    const trigger = this.props.trigger || "hover";
    return {
      trigger: isString(trigger) ? [trigger] : trigger,
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
      position = "relative",
      icon
    } = this.props;
    const { show } = this.state;
    const localClass = useMemo(() => {
      return classnames("elf--tooltip", {
        [placement]: true,
        animated,
        [variant]: true,
        [position]: true
      });
    }, [placement, animated, variant, position]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$E)
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
  show() {
    this.open();
  }
  hide() {
    this.close();
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
    return this.state.trigger.includes("click");
  }
  checkTriggerOver() {
    return this.state.trigger.includes("hover");
  }
  checkTriggerFocus() {
    return this.state.trigger.includes("focus");
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
  [FOCUS("$el") + IF("checkTriggerFocus")]() {
    this.open();
  }
  remove() {
    this.$el.remove();
  }
}
function tooltip({
  content,
  message = "",
  delay = 0,
  position = "fixed",
  placement = "top",
  options = {},
  style: style2
}) {
  return potal(
    /* @__PURE__ */ createElementJsx(Tooltip, {
      delay,
      position,
      placement,
      message,
      style: style2,
      show: true
    }, content || /* @__PURE__ */ createElementJsx("span", null, "\xA0")),
    options
  );
}
const cssProperties$D = makeCssVariablePrefixMap("--elf--action-group", {
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
      ...extraStyle
    } = this.props;
    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [rootRect, setRootRect] = useState(null);
    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);
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
        cssProperties$D
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
registerComponent("action-group", ActionGroup);
registerComponent("ActionGroup", ActionGroup);
const cssProperties$C = makeCssVariablePrefixMap("--elf--link-button", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  padding: true
});
class LinkButton extends UIElement {
  template() {
    const { disabled, style: style2 = {}, content, onClick, href } = this.props;
    const styleObject = {
      class: "elf--link-button",
      disabled: disabled ? "disabled" : void 0,
      style: {
        ...propertyMap(style2, cssProperties$C)
      }
    };
    return /* @__PURE__ */ createElementJsx("a", {
      ...styleObject,
      onClick,
      href: href || "#"
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
registerComponent("link-button", LinkButton);
registerComponent("linkbutton", LinkButton);
registerComponent("LinkButton", LinkButton);
const cssProperties$B = {
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
    console.warn("deprecated: use Button instead");
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
        ...propertyMap(style2, cssProperties$B)
      }
    };
    return /* @__PURE__ */ createElementJsx("button", {
      type: "button",
      ...styleObject,
      onClick: this.props.onClick
    }, icon || content || "");
  }
}
const cssProperties$A = {
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
    console.warn("ToggleButton is deprecated. Use Button instead.");
    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);
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
          large: size === "large",
          small: size === "small"
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
        cssProperties$A
      )
    };
    return /* @__PURE__ */ createElementJsx("button", {
      ...styleObject,
      onClick
    }, /* @__PURE__ */ createElementJsx("span", null, content || ""));
  }
}
const cssProperties$z = makeCssVariablePrefixMap("--elf--radio", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true
});
class Radio extends UIElement {
  template() {
    const {
      disabled,
      style: style2 = {},
      value,
      content,
      name,
      checked = false,
      onChange,
      size = "medium",
      variant = "default"
    } = this.props;
    const localClass = useMemo(() => {
      return classnames([
        "elf--radio",
        {
          disabled,
          [size]: true,
          [variant]: true
        }
      ]);
    }, [disabled, size, variant]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$z)
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
registerComponent("radio", Radio);
registerComponent("Radio", Radio);
const cssProperties$y = makeCssVariablePrefixMap("--elf--radio", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true
});
class RadioGroup extends UIElement {
  template() {
    const {
      disabled,
      style: style2 = {},
      name,
      value,
      options = [],
      onChange,
      direction = "horizontal",
      size = "medium",
      variant = "default"
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--radio-group", {
        [direction]: true
      });
    }, [direction]);
    const styleObject = {
      class: localClass,
      disabled: disabled ? "disabled" : void 0,
      style: propertyMap(style2, cssProperties$y)
    };
    const radioName = name || "name-" + this.id;
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, options.map((it, index) => {
      const checked = it.value === value;
      return /* @__PURE__ */ createElementJsx(Radio, {
        ref: `$${index}`,
        name: radioName,
        value: it.value,
        onChange: (e, v) => {
          this.setState({ value: v }, false);
          onChange(e, v);
        },
        checked,
        disabled,
        size,
        variant
      }, it.label);
    }));
  }
  get value() {
    return this.state.value || this.props.value;
  }
  set value(value) {
    this.setState({ value });
  }
}
registerComponent("RadioGroup", RadioGroup);
registerComponent("radio-group", RadioGroup);
registerComponent("radiogroup", RadioGroup);
const cssProperties$x = {
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
        ...propertyMap(style2, cssProperties$x)
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
registerComponent("Checkbox", Checkbox);
registerComponent("checkbox", Checkbox);
const cssProperties$w = {
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
        ...propertyMap(style2, cssProperties$w)
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
registerComponent("checkbox-group", CheckboxGroup);
registerComponent("CheckboxGroup", CheckboxGroup);
const cssProperties$v = makeCssVariablePrefixMap("--elf--divider", {
  color: true,
  margin: true
});
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
          cssProperties$v
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
registerComponent("divider", Divider);
registerComponent("Divider", Divider);
const MenuItemType = {
  DIVIDER: "divider",
  SECTION: "section",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
  LINK: "link"
};
function makeMenuItem(items = [], variant, rootClose) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;
    if (isString(it) && it === "-") {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        ref,
        variant,
        rootClose
      });
    } else if (isFunction(it)) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, {
        variant,
        ref: `custom${index}`,
        render: it,
        rootClose
      });
    } else if (it.type === MenuItemType.CUSTOM) {
      return /* @__PURE__ */ createElementJsx(CustomMenuItem, {
        variant,
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.LINK) {
      return /* @__PURE__ */ createElementJsx(LinkMenuItem, {
        variant,
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.SECTION) {
      return /* @__PURE__ */ createElementJsx(SectionMenuItem, {
        variant,
        ref,
        ...it,
        rootClose
      });
    } else if (it.type === MenuItemType.DIVIDER) {
      return /* @__PURE__ */ createElementJsx(DividerMenuItem, {
        variant,
        ref,
        ...it,
        rootClose
      });
    }
    return /* @__PURE__ */ createElementJsx(MenuItem, {
      ref,
      variant,
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
      description,
      variant
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
      description,
      variant
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
      variant,
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
      variant,
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
const cssProperties$u = makeCssVariablePrefixMap("--elf--menu", {
  left: true,
  top: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true,
  maxWidth: true,
  sectionTitleColor: true,
  sectionTitleBackgroundColor: true,
  dividerColor: true,
  directionLeft: true,
  itemPadding: true
});
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
      variant = "light",
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
    const localClass = useMemo(() => {
      return classnames("elf--menu", {
        [type]: true,
        [variant]: true,
        compact
      });
    }, [type, variant, compact]);
    const styleObject = {
      "data-direction": direction,
      class: localClass,
      style: propertyMap(itemStyle, cssProperties$u)
    };
    return /* @__PURE__ */ createElementJsx("menu", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, makeMenuItem(items, variant, rootClose));
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
registerComponent("Menu", Menu);
registerComponent("MenuItem", MenuItem);
registerComponent("SectionMenuItem", SectionMenuItem);
registerComponent("DividerMenuItem", DividerMenuItem);
registerComponent("menu", Menu);
registerComponent("menuitem", MenuItem);
registerComponent("sectionmenuitem", SectionMenuItem);
registerComponent("dividermenuitem", DividerMenuItem);
registerComponent("menu-item", MenuItem);
registerComponent("section-menu-item", SectionMenuItem);
registerComponent("divider-menu-item", DividerMenuItem);
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
registerComponent("OptionMenu", OptionMenu);
registerComponent("optionmenu", OptionMenu);
registerComponent("option-menu", OptionMenu);
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
registerComponent("option-strip", OptionStrip);
registerComponent("optionstrip", OptionStrip);
registerComponent("OptionStrip", OptionStrip);
const cssProperties$t = makeCssVariablePrefixMap("--elf--dialog", {
  position: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true
});
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
        ...propertyMap(style2, cssProperties$t)
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
registerComponent("dialog", Dialog);
registerComponent("Dialog", Dialog);
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
registerComponent("flex", Flex);
registerComponent("Flex", Flex);
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
    const localClass = useMemo(() => {
      return classnames("elf--tools-item", {
        selected: this.state.selected ? true : void 0
      });
    }, [this.state.selected]);
    return /* @__PURE__ */ createElementJsx("div", {
      class: localClass,
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
registerComponent("tools-item", ToolsItem);
registerComponent("toolsitem", ToolsItem);
registerComponent("ToolsItem", ToolsItem);
class ToolsCustomItem extends ToolsItem {
  template() {
    var _a, _b;
    return /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tools-item custom"
    }, (_b = (_a = this.props).render) == null ? void 0 : _b.call(_a));
  }
}
registerComponent("tools-custom-item", ToolsCustomItem);
registerComponent("toolscustomitem", ToolsCustomItem);
registerComponent("ToolsCustomItem", ToolsCustomItem);
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
    const localClass = useMemo(() => {
      return classnames(
        "elf--tools-item",
        {
          selected: isSelected,
          "has-items": hasItems
        },
        className
      );
    }, [isSelected, hasItems, className]);
    return /* @__PURE__ */ createElementJsx("div", {
      class: localClass,
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
registerComponent("ToolsMenuItem", ToolsMenuItem);
registerComponent("tools-menu-item", ToolsMenuItem);
registerComponent("toolsmenuitem", ToolsMenuItem);
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
const cssProperties$s = makeCssVariablePrefixMap("--elf--tools", {
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
    const localClass = useMemo(() => {
      return classnames("elf--tools", {
        vertical,
        emphasized
      });
    }, [vertical, emphasized]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$s)
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
registerComponent("Tools", Tools);
registerComponent("tools", Tools);
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
const cssProperties$r = makeCssVariablePrefixMap("--elf--toolbar", {
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
    const localClass = useMemo(() => {
      classnames(
        "elf--toolbar",
        {
          [align]: true,
          rounded,
          emphasized,
          [type]: true
        },
        className
      );
    }, [align, type, rounded, emphasized, className]);
    const styleObject = {
      id: "toolbar-" + this.id,
      class: localClass,
      style: propertyMap(style2, cssProperties$r)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      onContextMenu: (e) => e.preventDefault()
    }, makeToolbarItem(items, {
      emphasized,
      toolbarId: "toolbar-" + this.id
    }));
  }
}
const cssProperties$q = makeCssVariablePrefixMap("--elf--notification", {
  backgroundColor: true,
  color: true,
  width: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true
});
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
        ...propertyMap(style2, cssProperties$q)
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
registerComponent("notification", Notification);
const cssProperties$p = makeCssVariablePrefixMap("--elf--toast", {
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
    const localClass = useMemo(() => {
      return classnames("elf--toast", {
        hide,
        [direction]: true,
        [variant]: true
      });
    }, [hide, direction, variant]);
    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style2, cssProperties$p),
        transition: `opacity ${localDelay}ms ease-in-out`,
        opacity: hide ? 0 : 1
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
function toast({
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
registerComponent("toast", Toast);
registerComponent("Toast", Toast);
const cssProperties$o = makeCssVariablePrefixMap("--elf--popover", {
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
        ...propertyMap(style2, cssProperties$o)
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
      class: "elf--popover-message-content"
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
registerComponent("popover", Popover);
registerComponent("Popover", Popover);
const cssProperties$n = makeCssVariablePrefixMap("--elf--panel", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  padding: true,
  borderRadius: true
});
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
    const localClass = useMemo(() => {
      return classnames("elf--panel", { [mode]: true });
    }, [mode]);
    const styleObject = {
      class: localClass,
      "data-theme": theme,
      style: propertyMap(style2, cssProperties$n)
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
registerComponent("panel", Panel);
registerComponent("Panel", Panel);
const cssProperties$m = makeCssVariablePrefixMap("--elf--tabstrip", {
  backgroundColor: true,
  color: true,
  height: true,
  borderColor: true,
  gap: true,
  offset: true,
  selectedColor: true
});
class TabStrip extends UIElement {
  template() {
    var _a;
    const {
      style: style2 = {},
      items = [],
      fitted,
      align = "left",
      orientation = "horizontal",
      activeKey,
      showIndicator = false,
      size = "medium",
      variant = "default",
      quiet = false
    } = this.props;
    const [indicatorInfo, setIndicatorInfo] = this.useState({
      left: 0,
      width: 0
    });
    const localClass = useMemo(() => {
      return classnames("elf--tabstrip", {
        "is-fitted": fitted,
        [orientation]: true,
        [size]: true,
        [variant]: true,
        quiet
      });
    }, [fitted, orientation, size, variant, quiet]);
    useEffect(() => {
      if (showIndicator) {
        const ref = this.refs[`tab-${activeKey}`];
        if (ref) {
          if (orientation === "horizontal") {
            const left = ref.offsetLeft;
            const width = ref.offsetWidth;
            setIndicatorInfo({ left, width });
          } else {
            const top = ref.offsetTop;
            const height = ref.offsetHeight;
            setIndicatorInfo({ top, height });
          }
        }
      }
    }, [activeKey, setIndicatorInfo, orientation, showIndicator]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$m)
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
        ref: `tab-${it.key}`,
        onClick: (e) => {
          it.onClick(e);
        }
      }, it.title));
    }), showIndicator ? /* @__PURE__ */ createElementJsx("div", {
      class: "indicator"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "indicator-inner",
      style: indicatorInfo
    })) : void 0), ((_a = this.props.tools) == null ? void 0 : _a.length) ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tabstrip-tools"
    }, this.props.tools.map((it) => {
      return /* @__PURE__ */ createElementJsx("div", {
        class: "elf--tabstrip-tool"
      }, it);
    })) : void 0);
  }
}
registerComponent("tabstrip", TabStrip);
registerComponent("TabStrip", TabStrip);
registerComponent("tab-strip", TabStrip);
const cssProperties$l = makeCssVariablePrefixMap("--elf--tab", {
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
    const {
      style: style2 = {},
      content,
      full,
      fitted,
      align = "left",
      orientation = "horizontal",
      showIndicator = false,
      size = "medium",
      variant = "default",
      quiet = false
    } = this.props;
    const { activeKey } = this.state;
    const localClass = useMemo(() => {
      return classnames("elf--tab", {
        full
      });
    }, [full]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$l)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--tab-header"
    }, /* @__PURE__ */ createElementJsx(TabStrip, {
      fitted,
      align,
      orientation,
      activeKey,
      showIndicator,
      size,
      variant,
      quiet,
      items: content.map((it) => {
        const { title, key, onClick, disabled, style: style22, selectedStyle } = it.props;
        return {
          title,
          style: style22,
          disabled,
          selectedStyle,
          key,
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
registerComponent("tab", Tab);
registerComponent("Tab", Tab);
registerComponent("TabItem", TabItem);
registerComponent("tab-item", TabItem);
registerComponent("tabitem", TabItem);
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
registerComponent("layout", Layout);
registerComponent("Layout", Layout);
class VBox extends Flex {
  template() {
    const { style: style2 = {}, content } = this.props;
    return /* @__PURE__ */ createElementJsx(Flex, {
      stack: true,
      style: style2
    }, content);
  }
}
registerComponent("vbox", VBox);
registerComponent("VBox", VBox);
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
    const { style: styleProperties, noneStyle } = splitStyleKeyAndNoneStyleKey(extraStyle);
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
registerComponent("grid", Grid);
registerComponent("Grid", Grid);
const cssProperties$k = makeCssVariablePrefixMap("--elf--input-editor", {
  width: true,
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
  paddingRight: true
});
class InputEditor extends UIElement {
  initState() {
    const {
      type = "text",
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
    return {
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
    const {
      icon,
      tools,
      size = "medium",
      readOnly = false,
      invalid,
      style: style2
    } = this.props;
    const {
      type = "text",
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.state;
    const localClass = useMemo(() => {
      return classnames([
        "elf--input-editor",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid,
          [size]: true,
          readonly: readOnly
        }
      ]);
    }, [focused, hover, disabled, icon, invalid, size, readOnly]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$k)
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
      readonly: readOnly ? "readonly" : void 0,
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
registerComponent("input-editor", InputEditor);
registerComponent("InputEditor", InputEditor);
registerComponent("inputeditor", InputEditor);
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
registerComponent("color-view", ColorView);
registerComponent("ColorView", ColorView);
registerComponent("colorview", ColorView);
const cssProperties$j = makeCssVariablePrefixMap("--elf--input-paint", {
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
        ...propertyMap(style2, cssProperties$j)
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
registerComponent("InputPaint", InputPaint);
registerComponent("input-paint", InputPaint);
registerComponent("inputpaint", InputPaint);
const cssProperties$i = makeCssVariablePrefixMap("--elf--input-paint", {
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
    const localClass = useMemo(() => {
      return classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid: this.isInvalidColor({ r, g, b, a })
        }
      ]);
    }, [focused, hover, disabled, icon, r, g, b, a]);
    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style2, cssProperties$i)
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
    return format({ r, g, b, a }, "hex");
  }
  set value(v) {
    this.refs.$input.value = v;
  }
  get selectedValue() {
    return document.getSelection().toString();
  }
}
registerComponent("HexColorEditor", HexColorEditor);
registerComponent("hex-color-editor", HexColorEditor);
registerComponent("hexcoloreditor", HexColorEditor);
const cssProperties$h = makeCssVariablePrefixMap("--elf--input-paint", {
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
        ...propertyMap(style2, cssProperties$h)
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
registerComponent("RGBColorEditor", RGBColorEditor);
registerComponent("rgb-color-editor", RGBColorEditor);
registerComponent("rgbcoloreditor", RGBColorEditor);
const cssProperties$g = makeCssVariablePrefixMap("--elf--input-editor", {
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
  paddingRight: true
});
class TextAreaEditor extends UIElement {
  initState() {
    const {
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.props;
    return {
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled
    };
  }
  template() {
    const {
      icon,
      tools,
      size = "medium",
      readOnly = false,
      invalid,
      rows,
      style: style2,
      resizable
    } = this.props;
    const {
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled
    } = this.state;
    const localClass = useMemo(() => {
      return classnames([
        "elf--input-editor textarea",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid,
          resizable,
          [size]: true,
          readonly: readOnly
        }
      ]);
    }, [focused, hover, disabled, icon, invalid, size, readOnly, resizable]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$g)
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
      rows,
      readonly: readOnly ? "readonly" : void 0,
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
    }, /* @__PURE__ */ createElementJsx("textarea", {
      ref: "$input",
      ...properties,
      ...inputEvents
    }, value))), tools ? tools : void 0);
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
registerComponent("TextAreaEditor", TextAreaEditor);
registerComponent("textareaeditor", TextAreaEditor);
registerComponent("text-area-editor", TextAreaEditor);
const cssProperties$f = makeCssVariablePrefixMap("--elf--field", {
  width: true
});
function Field({
  label,
  content,
  help,
  position,
  required = false,
  requiredText = "*",
  optional = false,
  optionalText = "(optional)",
  size,
  disabled,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  style: style2 = {}
}) {
  const localClass = useMemo(() => {
    return classnames("elf--field", {
      [position]: true,
      [size]: true,
      disabled
    });
  }, [position, size, disabled]);
  const styleObject = {
    class: localClass,
    style: {
      ...propertyMap(style2, cssProperties$f)
    }
  };
  return /* @__PURE__ */ createElementJsx("div", {
    ...styleObject
  }, label ? /* @__PURE__ */ createElementJsx("label", {
    class: "label"
  }, label, required ? /* @__PURE__ */ createElementJsx("span", {
    class: "required"
  }, requiredText) : null, optional ? /* @__PURE__ */ createElementJsx("span", {
    class: "optional"
  }, optionalText) : null) : void 0, (content == null ? void 0 : content.length) ? /* @__PURE__ */ createElementJsx("div", {
    class: "field-area"
  }, (content == null ? void 0 : content.length) ? /* @__PURE__ */ createElementJsx("div", {
    class: "field-area-content"
  }, content, !invalid && validIcon ? /* @__PURE__ */ createElementJsx("div", {
    class: "valid-icon"
  }, validIcon) : null, invalid && invalidIcon ? /* @__PURE__ */ createElementJsx("div", {
    class: "invalid-icon"
  }, invalidIcon) : null) : void 0, help ? /* @__PURE__ */ createElementJsx("div", {
    class: "help"
  }, help) : void 0, invalid ? /* @__PURE__ */ createElementJsx("div", {
    class: "invalid"
  }, invalidMessage) : void 0) : void 0);
}
function TextArea({
  help,
  label,
  size,
  style: style2,
  disabled,
  required,
  requiredText,
  position,
  optional,
  optionalText,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  inputStyle,
  resizable,
  ...extraProps
}) {
  const FieldProps = {
    label,
    help,
    size,
    style: style2,
    disabled,
    required,
    requiredText,
    position,
    optional,
    optionalText,
    invalid,
    validIcon,
    invalidIcon,
    invalidMessage
  };
  const hasIcon = !invalid && validIcon || invalid && invalidIcon;
  return /* @__PURE__ */ createElementJsx(Field, {
    ...FieldProps
  }, /* @__PURE__ */ createElementJsx(TextAreaEditor, {
    ...extraProps,
    disabled,
    required,
    size,
    invalid,
    resizable,
    style: {
      ...inputStyle,
      paddingRight: hasIcon ? "2.6em" : void 0
    }
  }));
}
registerComponent("text-area", TextArea);
registerComponent("TextArea", TextArea);
registerComponent("textarea", TextArea);
function TextField({
  help,
  label,
  size,
  style: style2,
  disabled,
  required,
  requiredText,
  position,
  optional,
  optionalText,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  inputStyle,
  ...extraProps
}) {
  const FieldProps = {
    label,
    help,
    size,
    style: style2,
    disabled,
    required,
    requiredText,
    position,
    optional,
    optionalText,
    invalid,
    validIcon,
    invalidIcon,
    invalidMessage
  };
  const hasIcon = !invalid && validIcon || invalid && invalidIcon;
  return /* @__PURE__ */ createElementJsx(Field, {
    ...FieldProps
  }, /* @__PURE__ */ createElementJsx(InputEditor, {
    ...extraProps,
    disabled,
    required,
    size,
    invalid,
    style: {
      ...inputStyle,
      paddingRight: hasIcon ? "2.6em" : void 0
    }
  }));
}
registerComponent("text-field", TextField);
registerComponent("TextField", TextField);
registerComponent("textfield", TextField);
const cssProperties$e = makeCssVariablePrefixMap("--elf--virtual-scroll", {
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
        ...propertyMap(style2, cssProperties$e),
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
registerComponent("VirtualScroll", VirtualScroll);
registerComponent("virtual-scroll", VirtualScroll);
registerComponent("virtualscroll", VirtualScroll);
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
registerComponent("layer", Layer);
registerComponent("Layer", Layer);
const cssProperties$d = makeCssVariablePrefixMap("--elf--input-paint", {
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
          var $el = this.$el.$("input[data-type='h']");
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
    const localClass = useMemo(() => {
      return classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon
        }
      ]);
    }, [focused, hover, disabled, icon]);
    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style2, cssProperties$d)
      }
    };
    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255
    };
    this.setState(
      {
        parsedColor: {
          h,
          s,
          l,
          a
        }
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
        a: Math.max(
          0,
          Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100)
        )
      }
    });
    this.runCallback(this.props.onChange);
  }
  updateColor(type, num) {
    const data = {};
    if (type === "h") {
      data[type] = Math.max(
        0,
        Math.min(360, this.state.parsedColor[type] + num)
      );
    } else if (type === "s") {
      data[type] = Math.max(
        0,
        Math.min(100, this.state.parsedColor[type] + num)
      );
    } else if (type === "l") {
      data[type] = Math.max(
        0,
        Math.min(100, this.state.parsedColor[type] + num)
      );
    }
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          ...data
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
registerComponent("HSLColorEditor", HSLColorEditor);
registerComponent("hsl-color-editor", HSLColorEditor);
registerComponent("hslcoloreditor", HSLColorEditor);
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
registerComponent("ColorInput", ColorInput);
registerComponent("color-input", ColorInput);
registerComponent("colorinput", ColorInput);
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
registerComponent("eye-dropper", EyeDropper);
registerComponent("eyedropper", EyeDropper);
registerComponent("EyeDropper", EyeDropper);
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
registerComponent("base-slide", BaseSlide);
registerComponent("baseslide", BaseSlide);
function HueSlide({ value, onChange }) {
  return /* @__PURE__ */ createElementJsx(BaseSlide, {
    value,
    containerClass: "hue-slide",
    slideClass: "hue-slide-bg",
    onChange
  });
}
registerComponent("HueSlide", HueSlide);
registerComponent("hue-slide", HueSlide);
registerComponent("hueslide", HueSlide);
function OpacitySlide({ value, onChange }) {
  return /* @__PURE__ */ createElementJsx(BaseSlide, {
    value,
    containerClass: "opacity-slide",
    slideClass: "opacity-slide-bg",
    onChange
  });
}
registerComponent("OpacitySlide", OpacitySlide);
registerComponent("opacity-slide", OpacitySlide);
registerComponent("opacityslide", OpacitySlide);
const cssProperties$c = {
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
          cssProperties$c
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
registerComponent("ColorMixer", ColorMixer);
registerComponent("color-mixer", ColorMixer);
registerComponent("colormixer", ColorMixer);
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
registerComponent("ColorGrid", ColorGrid);
registerComponent("color-grid", ColorGrid);
registerComponent("colorgrid", ColorGrid);
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
    const { style: styleProperties, noneStyle } = splitStyleKeyAndNoneStyleKey(extraStyle);
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
registerComponent("view", View);
registerComponent("View", View);
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
const cssProperties$b = makeCssVariablePrefixMap("--elf--data-editor", {
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
      style: propertyMap(style2, cssProperties$b)
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
registerComponent("event-panel", EventPanel);
registerComponent("EventPanel", EventPanel);
registerComponent("eventpanel", EventPanel);
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
registerComponent("event-control-panel", EventControlPanel);
registerComponent("EventControlPanel", EventControlPanel);
registerComponent("eventcontrolpanel", EventControlPanel);
const cssProperties$a = makeCssVariablePrefixMap("--elf--app-layout", {
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
      style: propertyMap(style2, cssProperties$a)
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
registerComponent("app-layout", AppLayout);
registerComponent("AppLayout", AppLayout);
registerComponent("appLayout", AppLayout);
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
registerComponent("app-resize-bar", AppResizeBar);
registerComponent("AppResizeBar", AppResizeBar);
registerComponent("appresizebar", AppResizeBar);
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
registerComponent("AppLayoutItem", AppLayoutItem);
registerComponent("app-layout-item", AppLayoutItem);
registerComponent("applayoutitem", AppLayoutItem);
const cssProperties$9 = makeCssVariablePrefixMap("--elf--help-text", {
  color: true
});
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
    const localClass = useMemo(() => {
      return classnames("elf--help-text", {
        [variant]: true,
        [size]: true,
        disabled
      });
    }, [variant, size, disabled]);
    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style2, cssProperties$9)
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
registerComponent("help-text", HelpText);
registerComponent("HelpText", HelpText);
registerComponent("helptext", HelpText);
const cssProperties$8 = makeCssVariablePrefixMap("--elf--breadcrumbs", {});
const itemCssProperties = makeCssVariablePrefixMap("--elf--breadcrumbs-item", {
  color: true
});
function BreadcrumbsItem({
  title,
  selected = false,
  multiline,
  style: style2 = {},
  href = "#",
  onClick,
  tooltip: tooltip2
}) {
  if (tooltip2) {
    if (isString(tooltip2)) {
      tooltip2 = {
        message: tooltip2,
        placement: "top",
        trigger: "hover"
      };
    }
  }
  const localClass = useMemo(() => {
    return classnames("elf--breadcrumbs-item", { selected, multiline });
  }, [selected, multiline]);
  return /* @__PURE__ */ createElementJsx("span", {
    class: localClass,
    style: propertyMap(style2, itemCssProperties)
  }, tooltip2 ? /* @__PURE__ */ createElementJsx(Tooltip, {
    ref: "$tooltip",
    ...tooltip2
  }, /* @__PURE__ */ createElementJsx("a", {
    href,
    onClick,
    onFocus: () => {
      if (tooltip2.trigger.includes("focus")) {
        this.children.$tooltip.show();
      }
    },
    onBlur: () => {
      if (tooltip2.trigger.includes("focus")) {
        this.children.$tooltip.hide();
      }
    }
  }, title)) : /* @__PURE__ */ createElementJsx("a", {
    href,
    onClick
  }, title));
}
function BreadcrumbsTitleItem({ title, style: style2 = {} }) {
  return /* @__PURE__ */ createElementJsx("span", {
    class: "elf--breadcrumbs-title-item",
    style: style2
  }, title);
}
class Breadcrumbs extends UIElement {
  template() {
    const { style: style2 = {}, items = [], separator = "\u3009" } = this.props;
    const styleObject = {
      class: "elf--breadcrumbs",
      style: propertyMap(style2, cssProperties$8)
    };
    const renderItems = items.filter((it) => !((it == null ? void 0 : it.selected) && (it == null ? void 0 : it.multiline)));
    const renderMultiItems = items.filter(
      (it) => (it == null ? void 0 : it.selected) && (it == null ? void 0 : it.multiline)
    );
    const length = renderItems.length;
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--breadcrumbs-items"
    }, renderItems.map((it, index) => {
      if (typeof it === "string") {
        it = { title: it };
      }
      const item = /* @__PURE__ */ createElementJsx(BreadcrumbsItem, {
        ...it
      });
      if (index < length - 1 || renderMultiItems.length) {
        return [item, /* @__PURE__ */ createElementJsx("span", {
          class: "separator"
        }, separator)];
      }
      return item;
    })), renderMultiItems.length ? /* @__PURE__ */ createElementJsx("div", {
      class: "elf--breadcrumbs-content"
    }, renderMultiItems.map((it) => {
      return /* @__PURE__ */ createElementJsx(BreadcrumbsTitleItem, {
        ...it
      });
    })) : void 0);
  }
}
const cssProperties$7 = makeCssVariablePrefixMap("--elf--avatar", {
  backgroundColor: true,
  backgroundImage: true
});
class Avatar extends UIElement {
  template() {
    const {
      style: style2 = {},
      content,
      size = "medium",
      shape = "circle",
      variant = "default",
      disabled = false,
      ...extraProps
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--avatar", {
        [`size-${size}`]: true,
        [shape]: true,
        [variant]: true,
        disabled
      });
    }, [shape, size, variant, disabled]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$7),
      ...extraProps
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "elf--avatar-inner"
    }, content));
  }
}
const cssProperties$6 = makeCssVariablePrefixMap("--elf--tag", {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderRadius: true,
  fontSize: true
});
const groupCssProperties = makeCssVariablePrefixMap("--elf--tag-group", {
  gap: true,
  width: true
});
class Tag extends UIElement {
  template() {
    const {
      style: style2 = {},
      content,
      removable = false,
      variant = "default",
      filled = false,
      disabled = false,
      readOnly = false
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--tag", {
        [variant]: true,
        filled,
        disabled,
        readonly: readOnly
      });
    }, [variant, filled, disabled, readOnly]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$6)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("label", null, content), removable && /* @__PURE__ */ createElementJsx(Button, {
      size: "small",
      quiet: true,
      class: "close",
      onClick: (e) => {
        this.props.onClose && this.props.onClose(e);
      }
    }, "\xD7"));
  }
}
class TagGroup extends UIElement {
  template() {
    const { style: style2 = {}, content, gap } = this.props;
    const styleObject = {
      class: "elf--tag-group",
      style: propertyMap(
        {
          ...style2,
          gap
        },
        groupCssProperties
      )
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, content);
  }
}
registerComponent("tag", Tag);
registerComponent("Tag", Tag);
const cssProperties$5 = makeCssVariablePrefixMap("--elf--badge", {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderRadius: true,
  fontSize: true,
  offset: true
});
class Badge extends UIElement {
  template() {
    const {
      style: style2 = {},
      content,
      variant = "default",
      filled = false,
      disabled = false,
      readOnly = false,
      size = "small",
      fixed = false,
      placement = "none"
    } = this.props;
    const localClass = useMemo(() => {
      const placementClass = fixed ? `placement-${placement}` : "";
      return classnames(
        "elf--badge",
        {
          [variant]: true,
          filled,
          disabled,
          readonly: readOnly,
          [size]: true,
          fixed
        },
        placementClass
      );
    }, [variant, filled, disabled, readOnly, size, fixed, placement]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$5)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("label", null, content));
  }
}
registerComponent("badge", Badge);
registerComponent("Badge", Badge);
const cssProperties$4 = makeCssVariablePrefixMap("--elf--progressbar", {
  backgroundColor: true,
  color: true,
  borderRadius: true,
  fontSize: true,
  duration: true
});
const PERCENT_NUMBER$1 = 100;
function converValueToPercent(value) {
  return value + "%";
}
class ProgressBar extends UIElement {
  template() {
    const {
      min = 0,
      max = PERCENT_NUMBER$1,
      value = min,
      showValue = true,
      valueFunction = converValueToPercent,
      title,
      variant = "default",
      size = "medium",
      style: style2 = {},
      shape = "round",
      indeterminate = false
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--progressbar", {
        [variant]: true,
        [size]: true,
        [shape]: true,
        indeterminate
      });
    }, [variant, size, indeterminate, shape]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$4)
    };
    const localValue = (value - min) / (max - min);
    const percentValue = Math.round(localValue * PERCENT_NUMBER$1);
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, title ? /* @__PURE__ */ createElementJsx("div", {
      class: "title-area"
    }, /* @__PURE__ */ createElementJsx("label", null, title), showValue && !indeterminate ? /* @__PURE__ */ createElementJsx("span", null, " ", valueFunction(percentValue), " ") : void 0) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "progress-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "progress",
      style: { width: `${percentValue}%` }
    })));
  }
}
registerComponent("progressbar", ProgressBar);
registerComponent("ProgressBar", ProgressBar);
registerComponent("progress-bar", ProgressBar);
const cssProperties$3 = makeCssVariablePrefixMap("--elf--progress-circle", {
  backgroundColor: true,
  color: true,
  duration: true,
  offset: true,
  width: true
});
const PERCENT_NUMBER = 100;
class ProgressCircle extends UIElement {
  template() {
    const {
      min = 0,
      max = PERCENT_NUMBER,
      value = min,
      variant = "default",
      size = "medium",
      style: style2 = {},
      indeterminate = false,
      animated = false
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--progress-circle", {
        [variant]: true,
        [size]: true,
        animated,
        indeterminate
      });
    }, [variant, size, indeterminate, animated]);
    const localValue = (value - min) / (max - min);
    const percentValue = localValue;
    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style2,
          offset: percentValue
        },
        cssProperties$3
      )
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "progress-area"
    }, /* @__PURE__ */ createElementJsx("svg", null, /* @__PURE__ */ createElementJsx("circle", {
      class: "progress-circle track",
      r: "50%",
      cx: "50%",
      cy: "50%"
    }), /* @__PURE__ */ createElementJsx("circle", {
      class: "progress-circle fill",
      r: "50%",
      cx: "50%",
      cy: "50%"
    }))));
  }
}
registerComponent("progress-circle", ProgressCircle);
registerComponent("progresscircle", ProgressCircle);
registerComponent("ProgressCircle", ProgressCircle);
const cssProperties$2 = makeCssVariablePrefixMap("--elf--switch", {
  backgroundColor: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true
});
class Switch extends UIElement {
  template() {
    const {
      checked = false,
      disabled = false,
      variant = "default",
      size = "medium",
      style: style2 = {},
      content,
      onClick,
      readOnly = false
    } = this.props;
    const localClass = useMemo(() => {
      return classnames("elf--switch", {
        [variant]: true,
        [size]: true,
        disabled,
        readonly: readOnly
      });
    }, [variant, size, disabled, readOnly]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$2)
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, /* @__PURE__ */ createElementJsx("input", {
      ref: "$input",
      id: "switch-checkbox-" + this.id,
      type: "checkbox",
      onClick,
      ...{
        disabled: disabled ? "disabled" : void 0,
        checked: checked ? "checked" : void 0
      }
    }), /* @__PURE__ */ createElementJsx("span", {
      class: "tools"
    }, /* @__PURE__ */ createElementJsx("span", {
      class: "track"
    }), /* @__PURE__ */ createElementJsx("span", {
      class: "handle"
    })), (content == null ? void 0 : content.length) ? /* @__PURE__ */ createElementJsx("label", {
      for: "switch-checkbox-" + this.id
    }, content) : void 0);
  }
  get checked() {
    return this.refs.$input.checked;
  }
}
registerComponent("switch", Switch);
registerComponent("Switch", Switch);
const cssProperties$1 = makeCssVariablePrefixMap("--elf--slider", {
  backgroundColor: true,
  backgroundImage: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true
});
function initValue(v) {
  return v;
}
function calculateRoundValue(min, max, step, value) {
  if (value === 0)
    return value;
  if (max < value)
    return max;
  if (min > value)
    return min;
  if (step % 1 !== 0) {
    const total = max - min;
    const count = total / step;
    const realValueCount = Math.floor(count * ((value - min) / total));
    const precison = 1 / step;
    const result = Math.round(realValueCount * step * precison);
    const minResult = min * precison;
    return (result + minResult) / precison;
  }
  return value - value % step;
}
function calculateValue({ min = 0, max = 100, step, left, width, currentX }) {
  const currentValue = calculateRoundValue(
    min,
    max,
    step,
    (currentX - left) / width * (max - min) + min
  );
  const value = Math.max(min, Math.min(max, currentValue));
  return value;
}
class SingleSlider extends UIElement {
  template() {
    const {
      label,
      labelPosition = "top",
      min = 0,
      max = 100,
      step = 1,
      value = min,
      valuePlacement = "none",
      showTrigger = "always",
      showValue = false,
      size = "medium",
      variant = "default",
      fill = false,
      fillOffset = 0,
      disabled = false,
      readOnly = false,
      style: style2 = {},
      valueFunc = initValue,
      onInput
    } = this.props;
    const onInputCallback = useCallback(
      (e) => {
        const { left, width: width2 } = this.state;
        const value2 = calculateValue({
          min,
          max,
          step,
          left,
          width: width2,
          currentX: e.clientX
        });
        if (value2 !== this.props.value) {
          onInput && onInput(value2);
        }
      },
      [onInput, min, max, step]
    );
    usePointerStart(
      "$el .range-track",
      (e) => {
        const { left, width: width2 } = this.refs.$track.getBoundingClientRect();
        this.setState(
          {
            left,
            width: width2
          },
          false
        );
        onInputCallback(e);
      },
      (e) => {
        onInputCallback(e);
      }
    );
    const localClass = useMemo(() => {
      return classnames("elf--slider", {
        [variant]: true,
        [size]: true,
        disabled,
        readonly: readOnly,
        ["placement-" + valuePlacement]: true,
        [showTrigger]: true,
        ["show-value"]: showValue,
        ["label-position-" + labelPosition]: true
      });
    }, [
      variant,
      size,
      disabled,
      readOnly,
      valuePlacement,
      showTrigger,
      showValue,
      labelPosition
    ]);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties$1)
    };
    const currentValue = Math.max(min, Math.min(max, value));
    const currenValueOffset = (currentValue - min) / (max - min) * 100;
    const progressStartOffset = (fillOffset - min) / (max - min) * 100;
    const isPrevValue = currentValue < fillOffset;
    const startOffset = Math.min(currenValueOffset, progressStartOffset);
    const width = Math.abs(currenValueOffset - progressStartOffset);
    const lastValue = isFunction(valueFunc) ? valueFunc(currentValue) : currentValue;
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject
    }, label ? /* @__PURE__ */ createElementJsx("div", {
      class: "label-area"
    }, /* @__PURE__ */ createElementJsx("label", {
      class: "label"
    }, label), labelPosition === "top" ? /* @__PURE__ */ createElementJsx("span", {
      class: "value"
    }, lastValue) : void 0) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "range-area"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "range-track",
      ref: "$track"
    }, fill ? /* @__PURE__ */ createElementJsx("div", {
      class: "range-progress",
      style: { left: `${startOffset}%`, width: `${width}%` }
    }) : void 0, /* @__PURE__ */ createElementJsx("div", {
      class: "thumb",
      ref: "$thumb",
      style: {
        left: isPrevValue ? `${startOffset}%` : `${startOffset + width}%`
      }
    }, showValue && !label ? /* @__PURE__ */ createElementJsx("div", {
      class: "thumb-value"
    }, lastValue) : void 0))), label && labelPosition === "side" ? /* @__PURE__ */ createElementJsx("div", {
      class: "value-area"
    }, /* @__PURE__ */ createElementJsx("span", {
      class: "value"
    }, lastValue)) : void 0);
  }
}
class RangeSlider extends UIElement {
  template() {
    return /* @__PURE__ */ createElementJsx("div", null);
  }
}
class Slider extends UIElement {
  template() {
    const { type = "single", ...extraProps } = this.props;
    return type === "single" ? /* @__PURE__ */ createElementJsx(SingleSlider, {
      ...extraProps
    }) : /* @__PURE__ */ createElementJsx(RangeSlider, {
      ...extraProps
    });
  }
}
registerComponent("slider", Slider);
registerComponent("Slider", Slider);
const cssProperties = makeCssVariablePrefixMap("--elf--treeview", {
  backgroundColor: true,
  backgroundImage: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true
});
const tooltipMap = /* @__PURE__ */ new WeakMap();
const isEllipsisActive = (el) => {
  return el.offsetWidth < el.scrollWidth;
};
function displayTooltip(label, target) {
  const $label = Dom.create(target).$(".label");
  if (isEllipsisActive($label.el)) {
    const labelRect = $label.rect();
    const { left, top, width, height, right, bottom } = labelRect;
    const $tooltip = tooltip({
      message: label,
      placement: "top",
      style: {
        left,
        top,
        width,
        height,
        right,
        bottom
      }
    });
    tooltipMap.set(target, $tooltip);
  }
}
function hideTooltip(target) {
  const $tooltip = tooltipMap.get(target);
  if ($tooltip) {
    $tooltip.close();
    $tooltip.remove();
    tooltipMap.delete(target);
  }
}
function itemRenderer(item, top, renderIndex, {
  onSelect,
  selectionStyle,
  variant,
  renderActions,
  renderArrow,
  renderLabel,
  renderLoading,
  onToggle,
  renderContext,
  draggable,
  showTooltip
}) {
  const { data, depth } = item;
  const arrow = renderArrow == null ? void 0 : renderArrow(item);
  const contextView = renderContext == null ? void 0 : renderContext(item);
  const actions = renderActions == null ? void 0 : renderActions(item);
  const label = (renderLabel == null ? void 0 : renderLabel(item)) || data.title;
  const loadingText = (renderLoading == null ? void 0 : renderLoading(item)) || "Loading....";
  return /* @__PURE__ */ createElementJsx("div", {
    class: classnames("elf--treeview-item", {
      selected: data.selected,
      [variant]: true,
      loading: data.loading
    }),
    "data-depth": depth,
    key: data.id,
    draggable: draggable ? true : void 0,
    style: {
      "--elf--virtual-scroll-item-top": `${top}px`,
      "--elf--treeview-item-depth": depth
    }
  }, draggable ? /* @__PURE__ */ createElementJsx("div", {
    class: "drag-handle"
  }, "\u22EE") : void 0, selectionStyle === "checkbox" ? /* @__PURE__ */ createElementJsx("div", {
    class: "checkbox-area"
  }, /* @__PURE__ */ createElementJsx(Checkbox, {
    ...{
      checked: data.selected ? "checked" : void 0
    },
    onClick: (e) => onSelect(item, "checkbox", e)
  })) : void 0, /* @__PURE__ */ createElementJsx("div", {
    class: "depth-area"
  }), data.children ? /* @__PURE__ */ createElementJsx("div", {
    class: "collapse-area",
    onClick: (e) => {
      onToggle(item, e);
    }
  }, /* @__PURE__ */ createElementJsx("div", {
    class: classnames({
      collapsed: data.collapsed
    })
  }, arrow || /* @__PURE__ */ createElementJsx("span", null, "\u203A"))) : /* @__PURE__ */ createElementJsx("div", {
    class: "collapse-area"
  }, "\xA0"), contextView ? /* @__PURE__ */ createElementJsx("div", {
    class: "context-area"
  }, contextView) : void 0, (data == null ? void 0 : data.loading) ? /* @__PURE__ */ createElementJsx("div", {
    class: "loading-area"
  }, loadingText) : /* @__PURE__ */ createElementJsx("label", {
    class: "label-area",
    onClick: (e) => onSelect(item, "highlight", e),
    onMouseEnter: (e) => {
      if (label) {
        showTooltip && displayTooltip(label, e.target);
      }
    },
    onMouseLeave: (e) => {
      showTooltip && hideTooltip(e.target);
    }
  }, /* @__PURE__ */ createElementJsx("div", {
    class: "label"
  }, label)), actions ? /* @__PURE__ */ createElementJsx("div", {
    class: "actions-area"
  }, actions) : void 0, /* @__PURE__ */ createElementJsx("div", {
    class: "tail-area"
  }));
}
function treeToList(items = [], depth = 0, command = { index: 0 }) {
  const result = [];
  items.forEach((it) => {
    result.push({ data: it, depth, index: command.index });
    command.up();
    if (!it.collapsed && it.children) {
      result.push(...treeToList(it.children, depth + 1, command));
    }
  });
  return result;
}
class TreeView extends UIElement {
  initState() {
    const { items } = this.props;
    return {
      originalItems: items,
      items: this.updateItems(items),
      isInDraggable: false
    };
  }
  updateItems(items = []) {
    return treeToList(items, 0, {
      index: 0,
      up() {
        this.index += 1;
      }
    });
  }
  template() {
    const {
      style: style2,
      variant = "default",
      itemHeight = 32,
      overscanRowCount = 30,
      renderContext,
      selectionStyle = "highlight",
      showTooltip = false,
      renderActions,
      renderArrow,
      renderLoading,
      draggable = false,
      onClickNode,
      onToggleNode,
      onDropNode,
      items: originalItems
    } = this.props;
    const items = this.updateItems(originalItems);
    const localClass = useMemo(() => {
      return classnames("elf--treeview", {});
    }, []);
    const styleObject = {
      class: localClass,
      style: propertyMap(style2, cssProperties)
    };
    const itemRendererProps = {
      onSelect: useCallback(
        (item, style22, e) => {
          if (style22 === selectionStyle) {
            onClickNode == null ? void 0 : onClickNode(item, e);
          }
        },
        [onClickNode]
      ),
      onToggle: useCallback(
        (item, e) => {
          onToggleNode == null ? void 0 : onToggleNode(item, e);
        },
        [onToggleNode]
      ),
      variant,
      draggable,
      showTooltip,
      renderContext,
      selectionStyle,
      renderActions,
      renderArrow,
      renderLoading
    };
    const onDrag = useCallback(() => {
    }, []);
    const onDragStart = useCallback((e) => {
      const $item = Dom.create(e.target).closest("elf--treeview-item");
      const ghost = this.setGhost($item, e);
      this.setState(
        {
          isInDraggable: true,
          startId: $item.attr("key"),
          rect: this.$el.rect(),
          ghost
        },
        false
      );
      e.target.style.opacity = 0.5;
      this.$el.addClass("dragging");
    }, []);
    const onDragEnd = useCallback((e) => {
      Dom.create(this.state.ghost).remove();
      e.target.style.opacity = 1;
      this.$el.removeClass("dragging");
      this.$el.removeClass("dragovered");
    }, []);
    const onDragEnter = useCallback(() => {
    }, []);
    const onDragOver = useCallback((e) => {
      e.preventDefault();
      this.$el.addClass("dragovered");
      const $item = Dom.create(e.target).closest("elf--treeview-item");
      if (!$item) {
        return;
      }
      const $depthArea = $item == null ? void 0 : $item.$(".depth-area");
      this.setState(
        {
          endId: $item.attr("key")
        },
        false
      );
      if (this.state.endId === this.state.startId) {
        return;
      }
      const rect = $item.rect();
      const depthRect = $depthArea.rect();
      const left = depthRect.right - rect.left;
      const rate = (e.clientY - rect.top) / (rect.bottom - rect.top);
      this.setState(
        {
          rate
        },
        false
      );
      let top = rect.top;
      if (0.33 < rate && rate < 0.66) {
        this.$el.removeClass("line");
        this.$el.addClass("area");
        Dom.create(this.refs.$dragArea).css({
          top: `${rect.top - this.state.rect.top}px`,
          left: `${left}px`,
          width: `${rect.width - left}px`,
          height: `${rect.height}px`
        });
      } else {
        this.$el.removeClass("area");
        this.$el.addClass("line");
        if (rate > 0.66) {
          top = rect.bottom;
        }
        Dom.create(this.refs.$dragline).css({
          top: `${top - this.state.rect.top}px`,
          left: `${left}px`
        });
      }
    }, []);
    const onDragLeave = useCallback(() => {
    }, []);
    const onDrop = useCallback(
      (e) => {
        e.preventDefault();
        this.setState(
          {
            isInDraggable: false,
            endId: Dom.create(e.target).closest("elf--treeview-item").attr("key")
          },
          false
        );
        if (this.state.startId === this.state.endId) {
          return;
        }
        onDropNode(
          {
            startId: this.state.startId,
            endId: this.state.endId,
            rate: this.state.rate,
            targetPosition: this.targetPosition
          },
          e
        );
      },
      [onDropNode]
    );
    const events = {
      droppable: true,
      onDrag,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop
    };
    return /* @__PURE__ */ createElementJsx("div", {
      ...styleObject,
      ...events
    }, /* @__PURE__ */ createElementJsx(VirtualScroll, {
      itemHeight,
      overscanRowCount,
      items,
      itemRenderer: (item, top, renderIndex) => {
        return itemRenderer(item, top, renderIndex, itemRendererProps);
      }
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "drag-line",
      ref: "$dragline"
    }, /* @__PURE__ */ createElementJsx("div", {
      class: "drag-line-inner left"
    }), /* @__PURE__ */ createElementJsx("div", {
      class: "drag-line-inner right"
    })), /* @__PURE__ */ createElementJsx("div", {
      class: "drag-inner-area",
      ref: "$dragArea"
    }));
  }
  get targetPosition() {
    if (this.state.rate < 0.33) {
      return "top";
    } else if (this.state.rate < 0.66) {
      return "middle";
    } else {
      return "bottom";
    }
  }
  setGhost($item, e) {
    const itemRect = $item.rect();
    const ghost = $item.clone(true).el;
    ghost.style.position = "absolute";
    ghost.style.top = "auto";
    ghost.style.left = "-100000px";
    ghost.style.width = `${itemRect.width}px`;
    ghost.style.height = `${itemRect.height}px`;
    ghost.style.opacity = 1;
    ghost.style.pointerEvents = "none";
    ghost.style.zIndex = 9999;
    ghost.classList.add("ghost");
    const ghostLeft = e.clientX - itemRect.left;
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, ghostLeft, -10);
    return ghost;
  }
}
registerComponent("treeview", TreeView);
registerComponent("tree-view", TreeView);
registerComponent("TreeView", TreeView);
export {
  ADD_BODY_FIRST_MOUSEMOVE,
  ADD_BODY_MOUSEMOVE,
  ADD_BODY_MOUSEUP,
  ActionGroup,
  Alert,
  AppLayout,
  AppLayoutItem,
  AppResizeBar,
  Avatar,
  BODY_MOVE_EVENT,
  Badge,
  BaseTreeViewProvider,
  Breadcrumbs,
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
  Field,
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
  ProgressBar,
  ProgressCircle,
  RGBColorEditor,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Tab,
  TabItem,
  TabStrip,
  Tag,
  TagGroup,
  TextArea,
  TextAreaEditor,
  TextField,
  Toast,
  ToggleButton,
  Toolbar,
  ToolbarItem,
  Tools,
  Tooltip,
  TooltipPlacement,
  TreeView,
  TreeViewProvider,
  VBox,
  View,
  VirtualScroll,
  alert,
  toast,
  tooltip,
  usePointerStart
};
