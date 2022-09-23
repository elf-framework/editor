import { isArray, isFunction, isValue } from "../../functions/func";
import { VNode } from "../../functions/vnode";
import { DomRenderer } from "./DomRenderer";

export function insertElement(
  child,
  fragment,
  parentElement,
  withChildren,
  options = {}
) {
  // element 수집
  // children 은 fragment 로 만들어서 추가한다.

  if (child instanceof VNode || child?.makeElement) {
    child.setParentElement(parentElement);
    const el = DomRenderer(child, options).el;

    if (el) {
      fragment.appendChild(el);
    }
  } else if (isArray(child)) {
    child.forEach((it) => {
      if (it) {
        insertElement(it, fragment, parentElement, withChildren, options);
      }
    });
  } else if (isFunction(child)) {
    const result = child();

    if (result) {
      insertElement(result, fragment, parentElement, withChildren, options);
    }
  } else if (child instanceof window.HTMLElement) {
    fragment.appendChild(child);
  } else if (isValue(child)) {
    fragment.appendChild(document.createTextNode(child));
  } else {
    // NOOP
    // undefined, null 은 표시하지 않는다.
  }
}

export function makeChildren(obj, withChildren, options) {
  const parentElement = obj.el;
  const children = obj.children;
  if (children && children.length) {
    const fragment = document.createDocumentFragment();

    insertElement(children, fragment, parentElement, withChildren, options);

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
