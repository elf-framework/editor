import {
  classnames,
  isArray,
  isBoolean,
  isNotUndefined,
  isObject,
  isString,
  isUndefined,
} from "./func";
import { registElement, variable } from "./registElement";

const NumberStyleKeys = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  border: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
};

const styleKeys = {};
const uppercasePattern = /([A-Z])/g;

/**
 * style key convert to css key
 * 
 * backgroundColor -> background-color 
 * 
 * @param {*} key 
 * @returns 
 */
const convertStyleKey = (key) => {

  if (styleKeys[key]) {
    return styleKeys[key];
  }

  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();

  styleKeys[key] = upperKey;

  return upperKey;
}

function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }

  return value;
}

function styleKeyMap(key) {
  return convertStyleKey(key);
}

function CSS_TO_STRING(style, postfix = "") {
  var newStyle = style || {};

  return Object.keys(newStyle)
    .filter((key) => isNotUndefined(newStyle[key]))
    .map((key) => `${styleKeyMap(key)}: ${styleMap(key, newStyle[key])}`)
    .join(";" + postfix);
}

function OBJECT_TO_PROPERTY(obj) {
  const target = obj || {};

  return Object.keys(target)
    .map((key) => {
      if (key === "class") {
        if (isObject(obj[key])) {
          return `${key}="${classnames(obj[key])}"`;
        }
      }

      if (key === "style") {
        if (isObject(obj[key])) {
          return `${key}="${CSS_TO_STRING(obj[key])}"`;
        }
      }

      if (
        isBoolean(obj[key]) ||
        isUndefined(obj[key]) ||
        obj[key] === "undefined"
      ) {
        if (obj[key]) {
          return key;
        } else {
          return "";
        }
      }

      return `${key}="${obj[key]}"`;
    })
    .join(" ");
}

export function createComponent(ComponentName, props = {}, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity).join("");

  let targetVariable;
  targetVariable = Object.keys(props).length ? variable(props) : "";

  const ref = props.ref ? `ref="${props.ref}"` : "";

  return /*html*/ `<object refClass="${ComponentName}" ${ref} ${targetVariable}>${children}</object>`;
}

export function createComponentList(...args) {
  return args
    .map((it) => {
      let ComponentName;
      let props = {};
      let children = [];
      if (isString(it)) {
        ComponentName = it;
      } else if (isArray(it)) {
        [ComponentName, props = {}, children = []] = it;
      }

      if (children.length) {
        return createComponent(
          ComponentName,
          props,
          createComponentList(children)
        );
      }

      return createComponent(ComponentName, props);
    })
    .join("\n");
}

export function createElement(Component, props, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  let hasEvent = false;
  Object.keys(props).forEach((key) => {
    // 동적 이벤트 처리 로직
    if (key.startsWith("on")) {
      const callback = variable(props[key]);

      props[key] = callback;
      hasEvent = true;
    }
  });

  return /*html*/ `<${Component} ${OBJECT_TO_PROPERTY({
    ...props,
    "has-event": hasEvent ? "true" : undefined,
  })}>${children.join(" ")}</${Component}>`;
}

export function createElementJsx(Component, props = {}, ...children) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  // Fragment 는 자동으로 배열 형태로 리턴한다.
  if (Component === FragmentInstance) {
    return children;
  }

  // props 가 null 로 넘어오는 경우가 있어서 기본값 처리를 해준다.
  props = props || {};

  if (typeof Component !== "string") {
    const ComponentName = Component.name;
    registElement({
      [ComponentName]: Component,
    });
    return createComponent(ComponentName, props, children);
  } else {
    return createElement(Component, props, children);
  }
}

export const FragmentInstance = new Object();
