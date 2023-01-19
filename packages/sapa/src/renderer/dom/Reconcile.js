import {
  CHILD_ITEM_TYPE_ELEMENT,
  CHILD_ITEM_TYPE_FRAGMENT,
  COMPONENT_INSTANCE,
  ELEMENT_INSTANCE,
  ELEMENT_PROPS,
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

  makeComponentForFragment(oldInstance, newVNode, options) {
    // 현재 oldElement 가 객체 참조를 가지고 있지 않는 경우
    // 부모의 객체를 기준으로 작성한다.
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);

    // 기존의 $el 을 대입
    const instance = newVNode.instance;
    instance.$el = oldInstance.$el;

    instance.setParentElement(oldInstance.parentElement);

    // component 를 다시 렌더링
    // $el 이 존재하면 Reconcile 을 수행함
    renderVNodeComponent(instance);
  },

  replaceWith(oldEl, newVNode, options) {
    if (!(newVNode instanceof VNode)) {
      return;
    }

    const newComponentInstance = DomRenderer(newVNode, {
      ...options,
      container: oldEl.parentElement,
    });

    const objectElement = newComponentInstance.getEl();
    oldEl.replaceWith(objectElement);

    // 기존의 el 을 삭제한다.
    commitUnmountFromElement(oldEl);

    // 새로운 el 을 마운트한다.
    commitMountFromElement(objectElement);
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
  },

  updateFragmentItem(el, isFragmentItem = false) {
    el[IS_FRAGMENT_ITEM] = isFragmentItem;
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

  appendChild(containerElement, newVNode, options, isFragmentItem = false) {
    const newVNodeInstance = DomRenderer(newVNode, options);

    const el = newVNodeInstance.getEl();

    if (containerElement) {
      if (isFragmentItem) {
        patch.updateFragmentItem(el, isFragmentItem);
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

  insertAfter(beforeElement, newVNode, options, isFragmentItem = false) {
    const newVNodeInstance = DomRenderer(newVNode, options);

    if (newVNodeInstance?.el) {
      if (isFragmentItem) {
        patch.updateFragmentItem(newVNodeInstance.el, isFragmentItem);
      }

      beforeElement.parentNode.insertBefore(
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

    parentElement.removeChild(oldEl);
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
  isVNodeText(node) {
    return node.type === VNodeType.TEXT;
  },
  isVNodeComment(node) {
    return node.type === VNodeType.COMMENT;
  },
  isVNodeComponent(node) {
    return node.type === VNodeType.COMPONENT;
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

  // props 가 없으면 비교하지 않는다.
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    node[ELEMENT_PROPS] = newProps;
    return;
  }

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
  if (oldChildren.length === 0 && newChildren.length > 0) {
    newChildren.forEach((it) => {
      DomRenderer(it, {
        ...options,
        container: parentElement,
      });
    });
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    // noop
    parentElement.textContent = "";
  } else {
    // // 그 외는 다시 loop를 돌린다.
    for (var i = 0; i < max; i++) {
      updateElement(parentElement, oldChildren[i], newChildren[i], options);
    }
  }
}

export function updateFragment(
  parentElement,
  oldChild,
  newChild,
  options = {}
) {
  let filteredInstance = null;

  let parentClassInstance = parentElement[COMPONENT_INSTANCE];

  const children = parentClassInstance?.children || {};

  // newChild 이 Component 인 경우 객체 찾기
  Object.entries(children).forEach(([, instance]) => {
    // parent에서 fragment 인 것만필터링 한다.
    // LastComponent 는 마지막에 로드된 컷을 가리킨다.
    if (newChild.isType(VNodeType.COMPONENT)) {
      filteredInstance = instance;
    }
  });

  if (filteredInstance) {
    // 객체를 다시 그림
    patch.makeComponentForFragment(
      filteredInstance,
      newChild,
      parentElement[COMPONENT_INSTANCE].getVNodeOptions()
    );
    return;
  }

  let lastElement = null;
  const childMaxCount = Math.max(
    oldChild.items.length,
    newChild.children.length
  );

  for (var childIndex = 0; childIndex < childMaxCount; childIndex++) {
    const oldChildItem = oldChild.items[childIndex];
    const newChildItem = newChild.children[childIndex];

    if (oldChildItem) lastElement = oldChildItem;

    // fragment 내부에 있는 el 을 newChild.children 과 비교해서 처리한다.
    // fragment 로 추가된 element 는 경계가 필요하기 때문에
    // lastElement 로 그 경계를 표시한다.
    // parentElement 의 appendChild 로 항상 마지막에 추가 하는 개념이 아니라
    // lastElement 의 다음에 추가하는 개념이다.
    updateElementWithFragment(
      parentElement,
      oldChildItem,
      newChildItem,
      options,
      lastElement
    );
  }
}

export function updateChildrenWithFragment(
  parentElement,
  oldChildren = [],
  newVNode,
  options = {}
) {
  // check children count
  if (!oldChildren.length && !newVNode.children.length) {
    return;
  }

  var newChildren = vNodeChildren(newVNode);

  // 개수가 없으면 종료
  var max = Math.max(oldChildren.length, newChildren.length);
  if (max === 0) {
    return;
  }

  // newChildren 만 존재할 때는 추가하고, oldChildren 만 존재할 때는 삭제한다.
  if (oldChildren.length === 0 && newChildren.length > 0) {
    newChildren.forEach((it) => {
      DomRenderer(it, {
        ...options,
        container: parentElement,
      });
    });
    // children B 만 존재할 때는 b 에 있는 것을 모두 A 로 추가한다.
    // B 에서 모든 자식을 A 에 추가한다.
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    // noop
    parentElement.textContent = "";
  } else {
    // 그 외는 다시 loop를 돌린다.

    for (var i = 0; i < max; i++) {
      const oldChild = oldChildren[i];
      const newChild = newChildren[i];

      if (!oldChild && newChild) {
        // 추가 되는 경우
        // fragment 이외의 element 는 기존과 동일하게 updateElement 로 처리한다.
        updateElement(parentElement, oldChild, newChild, options);
      } else if (oldChild && !newChild) {
        // 삭제 되는 경우
        // fragment 이외의 element 는 기존과 동일하게 updateElement 로 처리한다.
        updateElement(parentElement, oldChild.items, newChild, options);
      } else {
        // 변경 되는 경우
        // oldChild.type 이 fragment 인 경우는
        // fragment 내부에 있는 el 을 newChild.children 과 비교해서 처리한다.
        if (oldChild.type === CHILD_ITEM_TYPE_FRAGMENT) {
          updateFragment(parentElement, oldChild, newChild, options);
        } else if (oldChild.type === CHILD_ITEM_TYPE_ELEMENT) {
          // fragment 이외의 element 는 기존과 동일하게 updateElement 로 처리한다.
          updateElement(parentElement, oldChild.items, newChild, options);
        }
      }
    }
  }
}

/**
 * oldElement 와 newVNode 를 비교한다.
 *
 * 1. oldElement 가 없고, newVNode 가 있는 경우 newVNode 를 추가한다.
 *
 *
 */
function updateElement(parentElement, oldEl, newVNode, options = {}) {
  if (!newVNode && !oldEl) {
    return;
  }

  parentElement = parentElement || options.context.parentElement;

  // oldEl 이 없고, newVNode 가 있는 경우
  if (!oldEl && newVNode) {
    patch.appendChild(parentElement, newVNode, options);
    return;
  }

  // oldEl 이 있고, newVNode 가 없는 경우
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }

  // oldEl 이 component 인데, newVNode 가 component 가 아닌 경우
  // oldEl 을 삭제하고, newVNode 를 추가한다.
  if (
    !oldEl[SELF_COMPONENT_INSTANCE] &&
    oldEl[COMPONENT_INSTANCE] &&
    !newVNode[SELF_COMPONENT_INSTANCE]
  ) {
    patch.replaceWith(oldEl, newVNode, options);
    return;
  }

  const isChanged = check.changed(newVNode, oldEl);

  // oldEl 이 component 인데, newVNode 가 component 인 경우
  if (isChanged || check.isVNodeComponent(newVNode)) {
    updateChangedElement(parentElement, oldEl, newVNode, options);
    return;
  }

  const newNodeType = newVNode.type;
  if (newNodeType !== VNodeType.TEXT && newNodeType !== VNodeType.COMMENT) {
    updatePropertyAndChildren(oldEl, newVNode, options);
  }
}

function updateElementWithFragment(
  parentElement,
  oldEl,
  newVNode,
  options = {},
  lastElement
) {
  if (!newVNode && !oldEl) {
    return;
  }

  parentElement = parentElement || options.context.parentElement;
  if (!oldEl && newVNode) {
    if (!lastElement) {
      patch.appendChild(parentElement, newVNode, options, true);
    } else {
      // fragment 리스트 내부의 lastElement 기준으로 newVNode 를 추가한다.
      patch.insertAfter(lastElement, newVNode, options, true);
    }

    return;
  }
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }
  // pass 옵션이 없는 경우
  if (!newVNode?.props?.pass) {
    if (check.hasPassed(newVNode)) {
      return;
    }

    if (check.changed(newVNode, oldEl) || check.isVNodeComponent(newVNode)) {
      updateChangedElement(parentElement, oldEl, newVNode, options);
      return;
    }
  } else {
    // newVNode.props.pass === true
    // noop
  }

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

  return results;
};

const vNodeChildren = (vnode) => {
  if (!vnode.children.length) {
    return [];
  }

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
    updateElement(oldEl.parentElement, oldEl, newVNode, options);
    return;
  }
}
