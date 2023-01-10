import { ELEMENT_INSTANCE, ELEMENT_PROPS } from "../../constant/component";
import { css } from "../../functions/css";
import { isArray, isFunction, isObject, isString } from "../../functions/func";
import { isSVG } from "../../functions/svg";
import { RefClass } from "../../HookMachine";

let nativeDomCache = {};

const expectAttributes = {
  content: true,
};

const ENABLE_PROPERTY = {
  indeterminate: true,
};

/**
 * vnode 의 children 을 element 로 생성한다.
 * children 은 항상 fragment 로 생성해서 추가한다.
 */
export function makeChildren(vnode) {
  const parentElement = vnode.el;
  const children = vnode.children;
  if (children && children.length) {
    const fragment = document.createDocumentFragment();

    // fragment 적용
    parentElement.appendChild(fragment);

    // mounted 메세지 실행
    children.forEach((child) => {
      if (isArray(child)) {
        child.forEach((it) => {
          if (isFunction(it?.runMounted)) {
            it.runMounted();
          }
        });
      } else if (child) {
        if (isFunction(child?.runMounted)) {
          child.runMounted();
        }
      }
    });
  }
}

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

function makeElement(vNodeInstance) {
  const el = createElement(vNodeInstance);

  let props = vNodeInstance.memoizedProps;
  if (props) {
    // props 에 ref 속성이 있으면 context 에 추가한다.
    if (props.ref) {
      vNodeInstance.ref = props.ref;

      if (vNodeInstance.ref instanceof RefClass) {
        vNodeInstance.ref.setCurrent(el);
      } else if (isFunction(vNodeInstance.ref)) {
        vNodeInstance.ref(el);
      }
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

  el[ELEMENT_PROPS] = props;
  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.el = el;
  makeChildren(vNodeInstance);

  return vNodeInstance;
}

export function VNodeElementRender(vNodeInstance, withChildren, options) {
  return makeElement(vNodeInstance, withChildren, options);
}
