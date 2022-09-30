import { IS_FRAGMENT_ITEM } from "../../constant/component";
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
  withChildren,
  options = {},
  isFragmentItem = false
) {
  // children 은 fragment 로 만들어서 추가한다.

  if (childVNode instanceof VNode || childVNode?.makeElement) {
    childVNode.setParentElement(parentElement);
    const el = DomRenderer(childVNode, options).el;

    if (el) {
      el[IS_FRAGMENT_ITEM] = isFragmentItem;

      fragment.appendChild(el);
    }
  } else if (isArray(childVNode)) {
    childVNode.forEach((it) => {
      if (it) {
        insertElement(
          it,
          fragment,
          parentElement,
          withChildren,
          options,
          isFragmentItem
        );
      }
    });
  } else if (isFunction(childVNode)) {
    const result = childVNode();

    if (result) {
      insertElement(
        result,
        fragment,
        parentElement,
        withChildren,
        options,
        isFragmentItem
      );
    }
  } else if (isValue(childVNode)) {
    fragment.appendChild(document.createTextNode(childVNode));
  } else {
    // NOOP
    // undefined, null 은 표시하지 않는다.
  }
}

/**
 * vnode 의 children 을 element 로 생성한다.
 * children 은 항상 fragment 로 생성해서 추가한다.
 */
export function makeChildren(
  vnode,
  withChildren,
  options,
  isFragmentItem = false
) {
  const parentElement = vnode.el;
  const children = vnode.children;
  if (children && children.length) {
    const fragment = document.createDocumentFragment();

    insertElement(
      children,
      fragment,
      parentElement,
      withChildren,
      options,
      isFragmentItem
    );

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
