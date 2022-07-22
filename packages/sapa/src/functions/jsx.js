import { isArray, isString } from "./func";
import {
  createVNode,
  createVNodeComponent,
  createVNodeFragment,
} from "./vnode";

export function createComponent(Component, props = {}, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  // return createVNode({
  //   tag: "object",
  //   props,
  //   children,
  //   Component,
  // });

  return createVNodeComponent({
    props: props || {},
    children,
    Component,
  });
}

export function createComponentFragment(Component, props = {}, children = []) {
  // 모든 children 을 하나로 모은다.
  children = children.flat(Infinity);

  return createVNodeFragment({
    props: props || {},
    children,
    Component,
  });
}

export function createComponentList(...args) {
  return args.map((it) => {
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
        props || {},
        createComponentList(children)
      );
    }

    return createComponent(ComponentName, props);
  });
}

export function createElement(Component, props, children = []) {
  children = children.flat(Infinity);

  return createVNode({ tag: Component, props, children });
}

export function createElementJsx(Component, props = {}, ...children) {
  children = children.filter(Boolean);
  // Fragment 는 자동으로 배열 형태로 리턴한다.
  if (Component === FragmentInstance) {
    return createComponentFragment(Component, props, children);
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
