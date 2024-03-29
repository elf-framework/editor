import { isArray, isValue } from "./func";
import {
  createVNode,
  createVNodeComment,
  createVNodeComponent,
  createVNodeFragment,
} from "./vnode/index";

export function createComponent(Component, props = {}, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  return createVNodeComponent({
    props: props || {},
    children: children.length ? children : undefined,
    Component,
  });
}

export function createComponentFragment(Component, props = {}, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  return createVNodeFragment({
    props: props || {},
    children: children.length ? children : undefined,
    Component,
  });
}

export function createComment(children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  return createVNodeComment(children[0] || "");
}

export function createElement(Component, props, ...children) {
  children = children.flat(Infinity);

  return createVNode({
    tag: Component,
    props,
    children: children.length ? children : undefined,
  });
}

export function createElementJsx(Component, props = {}, ...children) {
  children = children.filter(isValue);
  // Fragment 는 자동으로 배열 형태로 리턴한다.
  if (Component === FragmentInstance) {
    return createComponentFragment(Component, props, children);
  }

  if (Component === HTMLComment) {
    return createComment(children);
  }

  // props 가 null 로 넘어오는 경우가 있어서 기본값 처리를 해준다.
  props = props || {};

  if (typeof Component !== "string") {
    return createComponent(Component, props, children);
  } else {
    return createElement(Component, props, children);
  }
}

export const FragmentInstance = new Object();
export const HTMLComment = new Object();

/**
 * jsx-runtime 을 사용하지 않고, 직접 jsx 를 만들어서 사용할 때 사용한다.
 *
 */
export const jsx = (tag, props) => {
  let { children = [], ...extraProps } = props;

  if (!isArray(children)) {
    children = [children];
  }

  return createElementJsx(tag, extraProps, ...children);
};

export const jsxs = jsx;
