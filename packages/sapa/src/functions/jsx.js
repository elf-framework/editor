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
};

function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }

  return value;
}

function CSS_TO_STRING(style, postfix = "") {
  var newStyle = style || {};

  return Object.keys(newStyle)
    .filter((key) => isNotUndefined(newStyle[key]))
    .map((key) => `${key}: ${styleMap(key, newStyle[key])}`)
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
