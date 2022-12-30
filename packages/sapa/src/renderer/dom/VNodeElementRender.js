import { css } from "../../functions/css";
import { isFunction, isObject, isString } from "../../functions/func";
import { isSVG } from "../../functions/svg";
import { RefClass } from "../../HookMachine";
import { makeChildren } from "./utils";

let nativeDomCache = {};

const expectAttributes = {
  content: true,
};

const ENABLE_PROPERTY = {
  indeterminate: true,
};

function setAttribute(el, name, value) {
  if (expectAttributes[name]) return;
  if (ENABLE_PROPERTY[name]) {
    el[name] = value;
  } else {
    el.setAttribute(name, value);
  }
}

function removeAttribute(el, name) {
  if (ENABLE_PROPERTY[name]) {
    el[name] = false;
  } else {
    el.removeAttribute(name);
  }
}

function setEventAttribute(el, name, value) {
  el[name.toLowerCase()] = value;

  // or  el.addEventListener(name.replace(/on/, "").toLowerCase(), value);
}

function setStyle(el, key, value) {
  if (key.indexOf("--") === 0) {
    if (typeof value === "undefined") {
      el.style.removeProperty(key);
    } else {
      el.style.setProperty(key, value);
    }
  } else {
    el.style[key] = value;
  }
}

function makeNativeDom(name) {
  if (!nativeDomCache[name]) {
    const el = isSVG(name)
      ? document.createElementNS("http://www.w3.org/2000/svg", name)
      : document.createElement(name);

    nativeDomCache[name] = el;
  }

  return nativeDomCache[name].cloneNode(false);
}

function createElement(vNodeInstance) {
  return makeNativeDom(vNodeInstance.tag);
}

/**
 * context 에서 사용할 수 있는 속성을 추출한다.
 */
function getContextProps(context, props) {
  const newProps = context.filterFunction("getProps").flat(Infinity);
  const newPropList = newProps.filter((it) => {
    return it.ref === props.ref;
  });

  newPropList.forEach((it) => {
    if (isObject(it.props)) {
      Object.assign(props, it.props);
    }
  });
}

function makeElement(vNodeInstance, withChildren, options) {
  const el = createElement(vNodeInstance);

  let props = vNodeInstance.memoizedProps;
  if (props) {
    // props 에 ref 속성이 있으면 context 에 추가한다.
    if (props.ref) {
      getContextProps(options.context, props);

      vNodeInstance.ref = props.ref;

      if (vNodeInstance.ref instanceof RefClass) {
        vNodeInstance.ref.setCurrent(el);
      }
      isFunction(options.registerRef) && options.registerRef(props.ref, el);
    }

    Object.keys(props).forEach((key) => {
      const value = props[key];

      if (key === "ref") return;

      if (key === "style") {
        if (isString(value)) {
          el.style.cssText = value;
        } else {
          if (isObject(value) && Object.keys(value).length) {
            const styleValues = css(value);
            Object.entries(styleValues).forEach(([localKey, value]) => {
              setStyle(el, localKey, value);
            });
          } else {
            // style 속성이 없는 경우 style 요소 삭제
            removeAttribute(el, "style");
          }
        }
      } else {
        if (key) {
          if (value !== undefined) {
            // 이벤트는 단일 속성 이벤트로 정의
            if (key.startsWith("on")) {
              setEventAttribute(el, key, value);
            } else {
              setAttribute(el, key, value);
            }
          }
        }
      }
    });
  }

  vNodeInstance.el = el;
  makeChildren(vNodeInstance, withChildren, options);

  return vNodeInstance;
}

export function VNodeElementRender(vNodeInstance, withChildren, options) {
  return makeElement(vNodeInstance, withChildren, options);
}
