import {
  ALTERNATE_TEMPLATE,
  COMPONENT_INSTANCE,
  ELEMENT_INSTANCE,
  ELEMENT_PROPS,
  IS_FRAGMENT_ITEM,
  PARENT_VNODE_INSTANCE,
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
  isFragmentItem = false,
  parentVNode
) {
  // children 은 fragment 로 만들어서 추가한다.
  if (childVNode instanceof VNode || childVNode?.makeElement) {
    childVNode.setParentElement(parentElement);
    childVNode[PARENT_VNODE_INSTANCE] = parentVNode;
    let componentInstance = DomRenderer(childVNode, options);

    const el = componentInstance?.getEl();

    if (el) {
      // el 이 DocumentFragment 인 경우는 el 에 아무것도 없기 때문에
      // 자식 리스트를 가져와서 추가한다.
      if (el instanceof window.DocumentFragment) {
        const vNodeInstance = componentInstance;
        const instance = vNodeInstance.instance;

        // get fragment template
        const fragmentTemplate = instance[ALTERNATE_TEMPLATE];

        fragmentTemplate.children.forEach((it) => {
          if (it) {
            console.log(it, "it");
            insertElement(
              it,
              fragment,
              parentElement,
              options,
              true,
              childVNode
            );
          }
        });
      }
      // documentFragment 가 아닌 경우는 정상적으로 처리한다.
      else {
        el[IS_FRAGMENT_ITEM] = isFragmentItem;
        el[PARENT_VNODE_INSTANCE] = parentVNode;

        fragment.appendChild(el);
        // el 을 추가한 후에 commitMount 를 실행한다.
        commitMount(el[COMPONENT_INSTANCE]);
      }
    }
  } else if (isArray(childVNode)) {
    childVNode.forEach((it) => {
      if (it) {
        insertElement(
          it,
          fragment,
          parentElement,
          options,
          isFragmentItem,
          parentVNode
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
        options,
        isFragmentItem,
        parentVNode
      );
    }
  } else if (isValue(childVNode)) {
    childVNode[PARENT_VNODE_INSTANCE] = parentVNode;
    childVNode.el = document.createTextNode(childVNode);
    childVNode.el[ELEMENT_PROPS] = { value: childVNode };
    childVNode.el[ELEMENT_INSTANCE] = childVNode;
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
export function makeChildren(parentVNode, options, isFragmentItem = false) {
  const children = parentVNode.children;
  if (children && children.length) {
    const fragment = document.createDocumentFragment();

    insertElement(
      children,
      fragment,
      options.container,
      options,
      isFragmentItem,
      parentVNode
    );

    // fragment 적용
    options.container.appendChild(fragment);
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
  if (componentInstance && componentInstance.getFamily) {
    window.requestIdleCallback(() => {
      const family = componentInstance.getFamily();

      let len = family.family.length;

      while (len--) {
        const component = family.family[len];

        component?.runMounted();
      }
    });
  }
}

/**
 * el 에 설정된 COMPONENT_INSTANCE 기준으로 family 그룹을 구해서
 * 마지막 인스턴스부터 차례로 runMounted 를 실행한다.
 */
export function commitUnmountFromElement(el) {
  commitUnmount(el[COMPONENT_INSTANCE]);
}

/**
 * DomTree 에서 삭제될 때 실행한다.
 */
export function commitUnmount(componentInstance) {
  if (componentInstance && componentInstance.getFamily) {
    const family = componentInstance.getFamily();

    let len = family.family.length;
    let i = 0;

    while (i < len) {
      const component = family.family[len];

      component?.runUnmounted();
      i++;
    }
  }
}

export function commitUpdatedFromElement(el) {
  commitUpdated(el[COMPONENT_INSTANCE]);
}

/**
 * componentInstance 기준으로 runMounted 실행한다.
 */
export function commitUpdated(componentInstance) {
  if (componentInstance) {
    window.requestIdleCallback(() => {
      const family = componentInstance.getFamily();

      let len = family.family.length;

      while (len--) {
        const component = family.family[len];

        component?.runUpdated();
      }
    });
  }
}
