import {
  COMPONENT_INSTANCE,
  ELEMENT_INSTANCE,
  ELEMENT_PROPS,
  FRAGMENT_VNODE_INSTANCE,
  IS_FRAGMENT_ITEM,
  SELF_COMPONENT_INSTANCE,
} from "../../constant/component";
import { VNodeType } from "../../constant/vnode";
import { Dom } from "../../functions/Dom";
import { isFunction, isNotUndefined, isUndefined } from "../../functions/func";
import { isSVG } from "../../functions/svg";
import { VNode } from "../../functions/vnode";
import { RefClass } from "../../HookMachine";
import { DomRenderer } from "./DomRenderer";
import {
  commitMount,
  commitMountFromElement,
  commitUnmountFromElement,
} from "./utils";
import { renderVNodeComponent } from "./VNodeComponentRender";

const IGNORE_SET_PROPS = {
  cx: true,
  cy: true,
};

function isIgnoreProperty(key) {
  return IGNORE_SET_PROPS[key];
}

const booleanTypes = new Map(
  Object.entries({
    checked: true,
    disabled: true,
    selected: true,
    readonly: true,
    required: true,
    multiple: true,
    open: true,
    hidden: true,
    spellcheck: true,
    autofocus: true,
    autoplay: true,
    controls: true,
    loop: true,
    muted: true,
    default: true,
    defer: true,
    async: true,
    allowfullscreen: true,
    allowtransparency: true,
    allowpaymentrequest: true,
  })
);

/**
 * vnode 에서 사용되는 props 는 비교 대상에서 제외한다.
 *
 */
const expectKeys = {
  content: true,
  ref: true,
  [IS_FRAGMENT_ITEM]: true,
  [ELEMENT_INSTANCE]: true,
  [ELEMENT_PROPS]: true,
  [COMPONENT_INSTANCE]: true,
};

const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const KEY_STYLE = "style";
const KEY_CLASS = "class";
const PREFIX_EVENT = "on";

function isBooleanType(key) {
  return booleanTypes.has(key);
}

const patch = {
  setBooleanProp(el, name, value) {
    if (isNotUndefined(value)) {
      el.setAttribute(name, name);

      if (isIgnoreProperty(name)) return;

      el[name] = value;
    } else {
      el.removeAttribute(name);

      if (isIgnoreProperty(name)) return;
      el[name] = undefined;
    }
  },
  setProp(el, name, value) {
    // ref 는 속성설정을 하지 않는다.
    if (name === "ref") return;

    if (isBooleanType(name)) {
      const oldFieldValue = el[ELEMENT_PROPS]?.[name];

      if (oldFieldValue !== value) {
        this.setBooleanProp(el, name, value);
      }
    } else if (name.startsWith(PREFIX_EVENT)) {
      const oldFieldValue = el[ELEMENT_PROPS]?.[name];

      if (oldFieldValue !== value) {
        el[name.toLowerCase()] = value;
      }
    } else if (name === KEY_STYLE) {
      const oldStyle = el[ELEMENT_PROPS].style || el.style.cssText;
      if (oldStyle != value) {
        el.style.cssText = value;
      } else if (oldStyle === "" && value === "") {
        this.removeProp(el, name);
      }
    } else if (name === KEY_CLASS) {
      if (el[name] === "" && value === "") {
        this.removeProp(el, name);
      } else {
        const oldClassName = el[ELEMENT_PROPS].class || el.className;

        if (oldClassName !== value) {
          // 속성을 정의할 때 property 와 같이 정의한다.
          el.setAttribute(name, value);
        }
      }
    } else {
      const oldFieldValue = el[ELEMENT_PROPS]?.[name] || el[name];

      if (oldFieldValue !== value) {
        // 속성을 정의할 때 property 와 같이 정의한다.
        el.setAttribute(name, value);

        if (isSVG(el.tagName)) return;
        el[name] = value;
      }
    }
  },
  removeProp(el, name) {
    el.removeAttribute(name);

    // name 이 style 인 경우 remoteAttribute 만 처리한다.
    if (name == KEY_STYLE) return;

    if (isBooleanType(name)) {
      el[name] = false;
    } else if (name) {
      el[name] = undefined;
    }
  },
  updateProp(node, name, newValue, oldValue) {
    if (isUndefined(newValue)) {
      if (oldValue) {
        this.removeProp(node, name);
      } else {
        // noop
        // 값디 둘다 존재하지 않을 때는 아무것도 하지 않는다.
      }
    } else if (!oldValue || newValue != oldValue) {
      /* != 연산자를 사용하면서 element의 value 가 문자열 일때도 같이 비교를 해줄 수 있다. */
      this.setProp(node, name, newValue);
    }
  },

  // 컴포넌트 내부에서 다시 그리기를 한다.
  /**
   * 이 함수를 더 이상 사용하지 않습니다.
   * getTargetInstance 로 컴포넌트를 찾지 않습니다.
   *
   * reloadComponentInstance() 함수를 사용해주세요.
   *
   * @deprecated
   */
  reloadComponent(oldEl, newVNode, options) {
    const targetInstance = options.context.getTargetInstance(oldEl);

    if (targetInstance) {
      targetInstance._reload(newVNode.props);
    }
  },

  /**
   * targetInstance 에 newVNode.props 를 업데이트 하고 다시 그린다.
   */
  reloadComponentInstance(targetInstance, newVNode) {
    if (targetInstance) {
      targetInstance._reload(newVNode.props);
    }
  },

  /**
   * 이 함수는 Component 의 클래스/함수 자체가 변경되었을 때 호출한다. (HMR)
   *
   * 기본 컨셉은 oldEl 에 적용된 component instance 를 newVNode 의 instance 로 교체한다.
   * 이 때 component instance 가 가지고 있던 몇가지 정보들은 유지해야 한다.
   *
   *
   * @deprecated
   */
  makeComponent(oldEl, newVNode, options) {
    let oldInstance = oldEl[COMPONENT_INSTANCE];

    const family = oldInstance.getFamily();

    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      oldInstance = family.family[0];
    } else {
      const index = family.family.findIndex((it) => {
        return it.id === newVNode[SELF_COMPONENT_INSTANCE].id;
      });

      if (index > -1) {
        oldInstance = family.family[index + 1];
      }
    }

    // 현재 oldElement 가 객체 참조를 가지고 있지 않는 경우
    // 부모의 객체를 기준으로 작성한다.
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);

    // 기존의 $el 을 대입
    const instance = newVNode.instance;
    instance.$el = Dom.create(oldEl);

    instance.setParentElement(oldEl.parentElement);

    // component 를 다시 렌더링
    // $el 이 존재하면 Reconcile 을 수행함
    renderVNodeComponent(instance);
  },

  makeComponentInstance(oldInstance, newVNode, options) {
    const oldEl = oldInstance.getEl();

    const family = oldInstance.getFamily();

    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      oldInstance = family.family[0];
    } else {
      const index = family.family.findIndex((it) => {
        return it.id === newVNode[SELF_COMPONENT_INSTANCE].id;
      });

      if (index > -1) {
        oldInstance = family.family[index + 1];
      }
    }

    // 현재 oldElement 가 객체 참조를 가지고 있지 않는 경우
    // 부모의 객체를 기준으로 작성한다.
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);

    // 기존의 $el 을 대입
    const instance = newVNode.instance;
    instance.$el = Dom.create(oldEl);

    instance.setParentElement(oldEl.parentElement);

    // component 를 다시 렌더링
    // $el 이 존재하면 Reconcile 을 수행함
    renderVNodeComponent(instance);
  },

  replaceWith(oldEl, newVNode, options) {
    if (!(newVNode instanceof VNode)) {
      return;
    }

    const newVNodeInstance = DomRenderer(newVNode, {
      ...options,
      container: oldEl.parentElement,
    });

    const newElement = newVNodeInstance.getEl();

    oldEl.replaceWith(newElement);

    // 기존의 el 을 삭제한다.
    commitUnmountFromElement(oldEl);

    // 새로운 el 을 마운트한다.
    commitMountFromElement(newElement);
  },

  replaceText(oldEl, newVNode) {
    const oldText = oldEl[ELEMENT_PROPS]?.value || oldEl.textContent;

    if (oldText != newVNode.value) {
      oldEl.textContent = newVNode.value;

      if (!oldEl[ELEMENT_PROPS]) {
        oldEl[ELEMENT_PROPS] = { value: newVNode.value };
      } else {
        oldEl[ELEMENT_PROPS].value = newVNode.value;
      }
    }
  },
  replaceComment(oldEl, newVNode) {
    patch.replaceText(oldEl, newVNode);

    newVNode.setEl(oldEl);
    newVNode.el[ELEMENT_INSTANCE] = newVNode;

    if (newVNode[FRAGMENT_VNODE_INSTANCE]) {
      this.updateFragmentItem(newVNode, true);
    }
  },

  updateFragmentItem(vNodeInstance, isFragmentItem = false) {
    if (isFragmentItem) {
      vNodeInstance.el[FRAGMENT_VNODE_INSTANCE] =
        vNodeInstance[FRAGMENT_VNODE_INSTANCE];
      vNodeInstance.el[IS_FRAGMENT_ITEM] = isFragmentItem;
    }
  },

  addNewVNode(parentElement, oldEl, newVNode, options) {
    const componentInstance = DomRenderer(newVNode, options);
    const newEl = componentInstance.el;

    if (newEl) {
      parentElement.insertBefore(newEl, oldEl);
      parentElement.removeChild(oldEl);

      // unmounted
      commitUnmountFromElement(oldEl);

      // mounted
      commitMount(componentInstance);
    }
  },

  appendChild(containerElement, newVNode, options, isFragment = false) {
    const newVNodeInstance = DomRenderer(newVNode, options);

    const el = newVNodeInstance.getEl();

    if (containerElement) {
      if (isFragment) {
        patch.updateFragmentItem(newVNodeInstance, isFragment);
      }

      if (el) {
        containerElement.appendChild(el);
        commitMountFromElement(el);
      } else {
        // el 이 존재하지 않더라도 mounted 는 실행해야한다.
        commitMount(newVNodeInstance.instance);
      }
    }
  },

  insertAfter(beforeElement, newVNode, options, isFragment = false) {
    const newVNodeInstance = DomRenderer(newVNode, options);

    if (newVNodeInstance?.el) {
      if (isFragment) {
        patch.updateFragmentItem(newVNodeInstance, isFragment);
      }

      beforeElement.parentElement?.insertBefore(
        newVNodeInstance.el,
        beforeElement.nextSibling
      );
      newVNode.runMounted();
    }
  },

  removeChild(parentElement, oldEl) {
    if (oldEl[COMPONENT_INSTANCE]) {
      oldEl[COMPONENT_INSTANCE].destroy();
    }

    if (Dom.create(parentElement).hasChild(oldEl)) {
      parentElement?.removeChild(oldEl);
    }
  },
};

const check = {
  isTextNode(node) {
    return node.nodeType === TEXT_NODE;
  },
  isCommentNode(node) {
    return node.nodeType === COMMENT_NODE;
  },
  isElementNode(node) {
    return node.nodeType === 1;
  },
  isFragmentNode(node) {
    return node.nodeType === FRAGMENT_NODE;
  },
  isVNodeText(node) {
    return node.type === VNodeType.TEXT;
  },
  isVNodeComment(node) {
    return node.type === VNodeType.COMMENT;
  },
  isVNodeComponent(node) {
    return node.type === VNodeType.COMPONENT;
  },
  isVNodeFragment(node) {
    return node.type === VNodeType.FRAGMENT;
  },
  /**
   * TEXT_NODE/COMMENT_NODE 일 때   둘 다 공백일 때는  비교하지 않는다.
   * nodeName 이 다를 때는 변경 된 것으로 인지한다.
   *
   * @param {*} node1
   *
   * @param {*} node2
   */
  changed(vNode, node2) {
    return (
      ((vNode.type === VNodeType.TEXT || vNode.type === VNodeType.COMMENT) &&
        vNode.textContent !== node2.textContent) ||
      vNode.nodeName !== node2.nodeName.toUpperCase()
    );
  },

  /**
   * pass 속성이 있을 때만 비교한다.
   *
   * @param {VNode} vNode
   * @returns
   */
  hasPassed(vNode) {
    return vNode?.pass;
  },

  /**
   * oldElement 를 기준으로 컴포넌트를 다시 그릴지 여부를 판단한다.
   * 1. 현재컴포넌트 oldElement[COMPONENT_INSTANCE] 구한다.
   * 2. 현재 컴포넌트 기준으로 FamilyTree 를 구한다.
   * 3. FamilyTree 에서 newVNode[SELF_COMPONENT_INSTANCE] 가 있는지 체크한다.
   * 4. newVNode[SELF_COMPONENT_INSTANCE] 가 있고, newVNode.isComponentChanged 가 true 면 true 를 리턴한다.
   * 5. true 는 컴포넌트를 새로 생성한다.
   * 6. false 면 reload 만 수행한다.
   * 7. reload 는 컴포넌트의 props 만 비교해서 다시 렌더링한다.
   *
   * 이곳의 알고리즘은 아직 실험적이며 계속해서 개선될 예정이다.
   */
  checkRefClass(oldEl, newVNode, options) {
    // 새로운 newVNode 가 SELF_COMPONENT_INSTANCE 가 없으면
    // root 가 아니라 children 에서 생성되기 때문에
    // 해당 element 의 family 컴포넌트중 root 에 해당된다.
    // 즉, self_component_instance 가 없으면  상위 컴포넌트의 children 으로 존재하기 때문에
    // hierarchy 기준으로 검색한다.
    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      // oldEl 의 컴포넌트 인스턴스를 구한다.
      const family = oldEl[COMPONENT_INSTANCE]?.getFamily();

      // 기존 컴포넌트 instance 와 다르면 dom 을 교체한다.
      // dom의 family 를 구해서 첫번째 컴포넌트 객체와 다르면 교체한다.
      if (
        family &&
        family?.family?.length &&
        family?.family[0]?.isInstanceOf(newVNode.Component) === false
      ) {
        patch.replaceWith(oldEl, newVNode, options);
        return;
      }

      // family 가 존재하고  첫번째 컴포넌트 객체와 같으면 reload 한다.
      if (
        family &&
        family?.family?.length &&
        family?.family[0]?.isInstanceOf(newVNode.Component)
      ) {
        // family 의 컴포넌트 이지만
        // hmr 에 의해서 새로 로드된 컴포넌트는 새로운 컴포넌트로 템플릿을 다시 생성해야한다.
        // 그로 인한 사이드 이펙트들도 모두 이전해야한다.
        if (newVNode.isComponentChanged) {
          patch.makeComponentInstance(family?.family[0], newVNode, options);
          return;
        }

        // 해당 컴포넌트를 알고 있으면 그 컴포넌트를 바로 reload 한다.
        patch.reloadComponentInstance(family?.family[0], newVNode, options);
        return;
      }

      /*----------------------------------------------*/

      // newVNode의 SELF_COMPONENT_INSTANCE 가 없는 경우는 처음 생성되는 경우이다.
      // 이 때 oldEl 의 컴포넌트가 newVNode 의 컴포넌트와 같은지를 체크한다.
      if (oldEl[COMPONENT_INSTANCE]?.isInstanceOf(newVNode.Component)) {
        // 만약에 같으면 props 를 업데이트 한다.
        patch.reloadComponent(oldEl, newVNode, options);
      } else {
        // 객체 인스턴스가 존재하지 않으면 dom 을 교체한다.
        patch.replaceWith(oldEl, newVNode, options);
      }

      return;
    }

    // family 구하기
    const family = oldEl[COMPONENT_INSTANCE].getFamily();

    // familyInstance
    const familyInstance = newVNode[SELF_COMPONENT_INSTANCE];
    const targetFamilyInstance = family.family.find(
      // familyInstance.id 가 같은지 체크
      // id 같으면 같은 컴포넌트이다.
      // 모듈이 새롭게 로드되면 컴포넌트는 같더라도 instance 의 참조가 달라지기 때문에
      // 같다라는걸 검증 할 수 없다.
      // 그래서 id 를 사용한다.
      // id 가 같으면 같은 컴포넌트이다.
      // 그래서 makeComponent 에서 id 를 계승하도록 한다.
      (it) => it.id === familyInstance.id
    );

    // family 에 속하지 않으면 다시 생성한다.
    if (!targetFamilyInstance) {
      patch.makeComponent(oldEl, newVNode, options);
      return;
    }

    if (targetFamilyInstance) {
      // family 에 속하면 reload 한다.
      patch.makeComponentInstance(targetFamilyInstance, newVNode, options);
      return;
    }
  },
};

const updateProps = (
  node,
  newProps = {},
  oldProps = {},
  options = {},
  newVNode
) => {
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);

  // set child's ref element to parent
  if (newProps.ref) {
    if (newVNode.ref instanceof RefClass) {
      newVNode.ref.setCurrent(node);
    } else {
      isFunction(options.registerRef) &&
        options.registerRef(newProps.ref, node);
    }
  }
  // newProps 를 기준으로 루프를 먼저 돌고
  newPropsKeys
    .filter((key) => !expectKeys[key])
    .forEach((key) => {
      const newValue = newProps[key];
      let oldValue;

      if (key === KEY_STYLE) {
        // style 값은 cssText 로 대체한다.
        oldValue = node.style.cssText;
      } else {
        oldValue = oldProps[key];
      }

      if (newValue !== oldValue) {
        patch.updateProp(node, key, newValue, oldValue);
      }
    });

  // oldProps 기준으로 newProps 에 키가 없으면 삭제한다.
  oldPropsKeys
    .filter((key) => !expectKeys[key])
    .forEach((key) => {
      if (isUndefined(newProps[key])) {
        let oldValue;
        if (key === "style") {
          // style 값은 cssText 로 대체한다.
          oldValue = node.style.cssText;
        } else {
          oldValue = oldProps[key];
        }

        if (oldValue) {
          patch.removeProp(node, key);
        }
      }
    });

  // 변경된 속성으로 업데이트 해서 이전 데이타를 유지해준다.
  node[ELEMENT_INSTANCE] = newVNode;
  node[ELEMENT_PROPS] = newProps;

  // newVNode 의 el 을 node 로 설정한다.
  newVNode.setEl(node);
};

function updateChangedElement(parentElement, oldEl, newVNode, options = {}) {
  // oldEl 가 text, comment 일 때, newVNode 가 text, comment 가 아니면 새로운 노드로 대체한다.
  if (
    (check.isTextNode(oldEl) && !check.isVNodeText(newVNode)) ||
    (check.isCommentNode(oldEl) && !check.isVNodeComment(newVNode))
  ) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
    return;
  }
  // oldEl 가 text, comment 가 아니고, newVNode 가 text, comment 일 때, 새로운 노드로 대체한다.
  if (
    (!check.isTextNode(oldEl) && check.isVNodeText(newVNode)) ||
    (!check.isCommentNode(oldEl) && check.isVNodeComment(newVNode))
  ) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
    return;
  }

  // oldEl 가 text 이고 newVNode 가 text 일 때, text 를 변경한다.
  if (check.isTextNode(oldEl) && check.isVNodeText(newVNode)) {
    patch.replaceText(oldEl, newVNode);
    return;
  }

  // oldEl 가 comment 이고 newVNode 가 comment 일 때, comment 를 변경한다.
  if (check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.replaceComment(oldEl, newVNode);
    return;
  }

  // newVNode 가 Component 인 경우
  if (check.isVNodeComponent(newVNode)) {
    check.checkRefClass(oldEl, newVNode, options);
  } else {
    // newVNode 가 Component 가 아닌 경우
    // oldEl 의 tag 와 newVNode 의 tag 가 다르면, 새로운 노드로 대체한다.
    patch.replaceWith(oldEl, newVNode, options);
  }
}

function updatePropertyAndChildren(oldEl, newVNode, options = {}) {
  // props 가 설정 될 때 비교될 props 를 사전에 정의해서 가지고 오는 것이 좋다.
  const newVNodeProps = newVNode.memoizedProps;

  // update properties
  // el 에는 렌더링 될 때 사용한 ELEMENT_PROPS 를 가지고 있다.
  // dom 요소로 비교하지 않고 ELEMENT_PROPS 를 사용해서 새로운 VNode의 props 와 비교한다.
  updateProps(oldEl, newVNodeProps, oldEl[ELEMENT_PROPS], options, newVNode); // added

  updateChildren(oldEl, newVNode, options);
}

export function updateChildren(parentElement, newVNode, options = {}) {
  // console.log("updateChildren", parentElement, newVNode, options);
  // check children count
  if (!parentElement?.hasChildNodes() && !newVNode.children?.length) {
    return;
  }
  var oldChildren = children(parentElement);
  var newChildren = vNodeChildren(newVNode);

  if (newVNode.hasComponent()) {
    // fragment item 인지 먼저 체크하기
    const hasFragmentItem = oldChildren.some((it) => it[IS_FRAGMENT_ITEM]);

    if (hasFragmentItem) {
      // 1. 컴포넌트의 instance 를 찾고
      const findChildren = options.context.getChildrenInstanceOf(
        newVNode.firstChild?.LastComponent
      );
      if (findChildren.length) {
        // 자식 컴포넌트 중에 해당 컴포넌트가 있으면 해당 컴포넌트를 찾아서
        // 해당 인스턴스로 다시 로딩한다.
        // 이렇게 하면 항상 재 랜더링 해야하는데 이게 맞는지는 모르겠다.
        renderVNodeComponent(findChildren[0]);

        // patch.makeComponentForFragment(
        //   findChildren[0],
        //   newVNode.firstChild,
        //   options
        // );

        return;
      }
    }
  }

  var max = Math.max(oldChildren.length, newChildren.length);
  if (max === 0) {
    return;
  }

  // newChildren 만 존재할 때는 추가하고, oldChildren 만 존재할 때는 삭제한다.
  for (var i = 0; i < max; i++) {
    updateElement(
      parentElement,
      oldChildren[i],
      newChildren[i],
      false,
      options
    );
  }
}

/**
 * diff fragment vs fragement
 */
export function updateFragmentAll(
  parentElement,
  oldFragment,
  newFragment,
  options = {}
) {
  var oldChildren = fragmentVNodeChildren(oldFragment).map((it) => it.getEl());
  var newChildren = fragmentVNodeChildren(newFragment);

  updateElementList(parentElement, oldChildren, newChildren, true, options);
}

// reconcile fragment children
function updateElementList(
  parentElement,
  oldChildren,
  newChildren,
  isFragment,
  options = {}
) {
  if (isFragment) {
    const nextOldChildren = [...oldChildren];
    const nextNewChildren = [...newChildren];

    // start
    updateElement(parentElement, oldChildren[0], newChildren[0], true, options);

    // middle
    nextOldChildren.shift();
    nextOldChildren.pop();

    nextNewChildren.shift();
    nextNewChildren.pop();

    // end
    updateElement(
      parentElement,
      oldChildren[oldChildren.length - 1],
      newChildren[newChildren.length - 1],
      isFragment,
      options
    );

    oldChildren = nextOldChildren;
    newChildren = nextNewChildren;
  }

  var max = Math.max(oldChildren.length, newChildren.length);
  // newChildren 만 존재할 때는 추가하고, oldChildren 만 존재할 때는 삭제한다.
  let lastElement;
  for (var i = 0; i < max; i++) {
    const oldChildElement = oldChildren[i];
    const newChildVNode = newChildren[i];

    if (oldChildElement) {
      lastElement = oldChildElement;
    }

    updateElement(
      parentElement,
      oldChildElement,
      newChildVNode,
      isFragment,
      options,
      lastElement
    );
  }
}

/**
 * oldElement 와 newVNode 를 비교한다.
 *
 * 1. oldElement 가 없고, newVNode 가 있는 경우 newVNode 를 추가한다.
 *
 *
 */
function updateElement(
  parentElement,
  oldEl,
  newVNode,
  isFragment,
  options = {},
  lastElement
) {
  if (!newVNode && !oldEl) {
    return;
  }

  parentElement = parentElement || options.context.parentElement;

  // oldEl 이 없고, newVNode 가 있는 경우
  if (!oldEl && newVNode) {
    if (lastElement && isFragment) {
      patch.insertAfter(lastElement, newVNode, options, isFragment);
    } else {
      patch.appendChild(parentElement, newVNode, options, isFragment);
    }

    return;
  }

  // oldEl 이 있고, newVNode 가 없는 경우
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }

  // oldEl 이 fragment 인데, newVNode 가 fragment 인 경우
  if (check.isVNodeFragment(oldEl) && check.isVNodeFragment(newVNode)) {
    var oldChildren = fragmentVNodeChildren(oldEl).map((it) => it.getEl());
    var newChildren = fragmentVNodeChildren(newVNode);

    updateElementList(parentElement, oldChildren, newChildren, true, options);
    return;
  }

  // oldEl 이 component 인데, newVNode 가 component 가 아닌 경우
  // oldEl 을 삭제하고, newVNode 를 추가한다.
  if (
    !oldEl[SELF_COMPONENT_INSTANCE] &&
    oldEl[COMPONENT_INSTANCE] &&
    !newVNode[SELF_COMPONENT_INSTANCE]
  ) {
    if (
      newVNode.Component &&
      oldEl[COMPONENT_INSTANCE].isInstanceOf(newVNode.Component)
    ) {
      // oldEl 가 component instance 를 가지고 있고
      // newVNode 가 해당 Component 를 가지고 있으면  하위에서 처리한다.
      // NOOP
    } else {
      const family = oldEl[COMPONENT_INSTANCE].getFamily();

      if (
        newVNode.Component &&
        family.family[0].isInstanceOf(newVNode.Component)
      ) {
        // NOOP
      } else {
        patch.replaceWith(oldEl, newVNode, options);
        return;
      }
    }
  }

  const isChanged = check.changed(newVNode, oldEl);

  // oldEl 이 component 인데, newVNode 가 component 인 경우
  if (isChanged || check.isVNodeComponent(newVNode)) {
    updateChangedElement(parentElement, oldEl, newVNode, options);
    return;
  }

  // oldEl 이 component 가 아니고, newVNode 가 element 인 경우
  // 두개를 동일한 형태로 보고 Reconcile 을 수행한다.
  const newNodeType = newVNode.type;
  if (newNodeType !== VNodeType.TEXT && newNodeType !== VNodeType.COMMENT) {
    updatePropertyAndChildren(oldEl, newVNode, options);
  }
}

const children = (el) => {
  var element = el?.firstChild;

  if (!element) {
    return [];
  }

  var results = [];
  do {
    results[results.length] = element;
    element = element.nextSibling;
  } while (element);

  // split fragment node
  let fragmentId = null;
  results.forEach((result) => {
    if (check.isCommentNode(result)) {
      const key = result.textContent;

      if (key.startsWith("start-")) {
        const id = key.split("start-")[1];
        result.fragmentId = id;
        fragmentId = id;
        result.start = true;
      } else if (key.startsWith("end-" + fragmentId)) {
        result.fragmentId = fragmentId;
        fragmentId = null;
        result.end = true;
      }
    } else {
      result.fragmentId = fragmentId;
    }
  });

  // group fragment
  const fragmentMap = [];

  results.forEach((result) => {
    if (result.fragmentId) {
      if (result.start) {
        fragmentMap.push(result[FRAGMENT_VNODE_INSTANCE]);
      }
    } else {
      fragmentMap.push(result);
    }
  });

  return fragmentMap;
};

const fragmentVNodeChildren = (vnode) => {
  if (!vnode.children?.length) {
    return [];
  }

  const children = vnode.children || [];

  return children;
};

const vNodeChildren = (vnode) => {
  if (!vnode.children?.length) {
    return [];
  }

  // fragment 를 그대로 유지한다.
  return vnode.children;
};

/**
 *
 * Reconcile 를 수행한다.
 *
 * Dom 과 VNode 를 Diff 한다.
 *
 * Reconcile 을 수행하기 전에 oldEl 에 COMPONENT_INSTANCE 를 미리 지정해둬야 한다.
 * COMPONENT_INSTANCE 는 Root Instance 의 것으로 지정이 가능하다.
 *
 * 여기서 의문
 *
 * 꼭 COMPONENT_INSTANCE 를 지정해야 하는가?
 *
 */
export function Reconcile(oldInstance, newVNode, options = {}) {
  options = Object.assign({}, options);
  const oldEl = oldInstance.getEl();
  if (oldEl?.nodeType && oldEl?.nodeType !== 11) {
    // fragment 가 아니면 비교를 시작한다.
    updateElement(oldEl.parentElement, oldEl, newVNode, false, options);
    return;
  } else {
    // fragment 인 경우 리스트 끼리만 비교한다.
    // oldChildren 을 구하는 방법을 생각해보자.
    // 1. oldEl 가 fragment 인 경우, ELEMENT_INSTANCE 를 통해 VNodeFragment 객체를 가지고 와서 children 을 구한다.
    let oldChildren = children(oldEl);

    if (check.isFragmentNode(oldEl)) {
      // fragment 인 경우
      oldChildren = fragmentVNodeChildren(oldEl[ELEMENT_INSTANCE]).map((it) =>
        it.getEl()
      );
    }

    // 비교하는 newChildren 을 구한다.
    const newChildren = fragmentVNodeChildren(newVNode);

    // fragment 기준으로 전체 리스트를 다시 업데이트한다.
    updateElementList(
      oldChildren[0].parentElement,
      oldChildren,
      newChildren,
      true,
      options
    );

    // FIXME: oldChildren 에서 newChildren 으로 재구성되어야 한다.
  }
}
