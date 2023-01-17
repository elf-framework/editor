import {
  COMPONENT_INSTANCE,
  ELEMENT_PROPS,
  IS_FRAGMENT_ITEM,
} from "../../constant/component";
import { isArray, isFunction, isValue } from "../../functions/func";
import { VNode } from "../../functions/vnode";
import { DomRenderer } from "./DomRenderer";

/**
 * childVNode 를 element 를 생성해서 fragment 에 추가한다.
 *
 */
export function insertElement(
  childVNode,
  fragment,
  parentElement,
  options = {},
  isFragmentItem = false
) {
  // children 은 fragment 로 만들어서 추가한다.
  if (childVNode instanceof VNode || childVNode?.makeElement) {
    childVNode.setParentElement(parentElement);
    let instance = DomRenderer(childVNode, options);

    const el = instance?.getEl();

    if (el) {
      el[IS_FRAGMENT_ITEM] = isFragmentItem;

      fragment.appendChild(el);
      // el 을 추가한 후에 commitMount 를 실행한다.
      commitMountFromElement(el);
    }
  } else if (isArray(childVNode)) {
    childVNode.forEach((it) => {
      if (it) {
        insertElement(it, fragment, parentElement, options, isFragmentItem);
      }
    });
  } else if (isFunction(childVNode)) {
    const result = childVNode();

    if (result) {
      insertElement(result, fragment, parentElement, options, isFragmentItem);
    }
  } else if (isValue(childVNode)) {
    childVNode.el = document.createTextNode(childVNode);
    childVNode.el[ELEMENT_PROPS] = { value: childVNode };
    fragment.appendChild(childVNode.el);
  } else {
    // NOOP
    // undefined, null 은 표시하지 않는다.
  }
}

/**
 * vnode 의 children 을 element 로 생성한다.
 * children 은 항상 fragment 로 생성해서 추가한다.
 */
export function makeChildren(vnode, options, isFragmentItem = false) {
  const parentElement = vnode.el;
  const children = vnode.children;
  if (children && children.length) {
    const fragment = document.createDocumentFragment();

    insertElement(children, fragment, parentElement, options, isFragmentItem);

    // fragment 적용
    parentElement.appendChild(fragment);
  }
}

/**
 * el 에 설정된 COMPONENT_INSTANCE 기준으로 family 그룹을 구해서
 * 마지막 인스턴스부터 차례로 runMounted 를 실행한다.
 */
export function commitMountFromElement(el) {
  commitMount(el[COMPONENT_INSTANCE]);
}

/**
 * componentInstance 기준으로 runMounted 실행한다.
 */
export function commitMount(componentInstance) {
  if (componentInstance) {
    const family = componentInstance.getFamily();

    let len = family.family.length;

    while (len--) {
      const component = family.family[len];

      component?.runMounted();
    }
  }
}
