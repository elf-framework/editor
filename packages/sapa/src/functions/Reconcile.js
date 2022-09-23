import { VNodeType } from "../constant/vnode";
import { DomRenderer } from "../renderer/dom/DomRenderer";
import { isFunction, isNotUndefined, isUndefined } from "./func";

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
};

const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const KEY_STYLE = "style";
const PREFIX_EVENT = "on";

function isBooleanType(key) {
  return booleanTypes.has(key);
}

const patch = {
  setBooleanProp(el, name, value) {
    if (isNotUndefined(value)) {
      el.setAttribute(name, name);
      el[name] = value;
    } else {
      el.removeAttribute(name);
      el[name] = undefined;
    }
  },
  setProp(el, name, value) {
    if (isBooleanType(name)) {
      this.setBooleanProp(el, name, value);
    } else if (name.startsWith(PREFIX_EVENT)) {
      el[name.toLowerCase()] = value;
    } else if (name === KEY_STYLE) {
      el.style.cssText = value;
    } else {
      // 속성을 정의할 때 property 와 같이 정의한다.
      el.setAttribute(name, value);
      el[name] = value;
    }
  },
  removeProp(el, name) {
    el.removeAttribute(name);

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

  reconcile(oldEl, newVNode, options) {
    const isRootElement = options.context.$el.el === oldEl;

    newVNode.makeClassInstance(options);

    Reconcile(oldEl, newVNode.template(), options);

    if (isRootElement) {
      options.context.$el.el = oldEl;
    }

    newVNode.runUpdated();
  },

  replaceWith(oldEl, newVNode, options) {
    const isRootElement = options.context.$el.el === oldEl;
    const objectElement = DomRenderer(newVNode, options).el;

    if (isRootElement) {
      options.context.$el.el = objectElement;
    }
    oldEl.replaceWith(objectElement);
    newVNode.runMounted();
  },

  replaceText(oldEl, newVNode) {
    if (oldEl.textContent != newVNode.textContent) {
      oldEl.textContent = newVNode.textContent;
    }
  },
  replaceComment(oldEl, newVNode) {
    patch.replaceText(oldEl, newVNode);
  },

  addNewVNode(parentElement, oldEl, newVNode, options) {
    parentElement.insertBefore(DomRenderer(newVNode, options).el, oldEl);
    parentElement.removeChild(oldEl);
    newVNode.runMounted();
  },

  appendChild(el, newVNode, options) {
    const newVNodeInstance = DomRenderer(newVNode, options);

    if (newVNodeInstance?.el) {
      el.appendChild(newVNodeInstance.el);
      newVNode.runMounted();
    }
  },

  removeChild(parentElement, oldEl) {
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
    return vNode.pass;
  },

  /**
   * refClass 속성을 가지고 있으면 기존 el 을 대체한다.
   *
   * 두가지 node1, node2 중에 refClass 를 가지고 있으면 비교하지 않는다.
   *
   */
  hasRefClass(vNode) {
    return vNode.Component;
  },
};

const updateProps = (node, newProps = {}, oldProps = {}) => {
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);

  // props 가 없으면 비교하지 않는다.
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    return;
  }

  // newProps 를 기준으로 루프를 먼저 돌고
  newPropsKeys
    .filter((key) => !expectKeys[key])
    .forEach((key) => {
      const newValue = newProps[key];
      let oldValue;

      if (key === "style") {
        // style 값은 cssText 로 대체한다.
        oldValue = node.style.cssText;
      } else {
        oldValue = oldProps[key];
      }

      patch.updateProp(node, key, newValue, oldValue);
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
};

function getProps(oldEl, attributes, newProps) {
  var results = {};
  const len = attributes.length;

  // 일단 attribute 에는 없음
  // properties 에 있는지 봐야함.
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;

    results[name] = value;
  }

  // DESC: newProps 를 기준으로 oldEl 에서 없는 요소를 추가한다.
  // DESC: property 로 입력 되는 이벤트 들만 처리 하는 것도 의미가 있을 듯 합니다.
  // DESC: onXXX 로 시작되는것은 property 로 정의되기 때문에 여기서 처리합니다.
  Object.keys(newProps).forEach((key) => {
    const checkKey = key.startsWith(PREFIX_EVENT) ? key.toLowerCase() : key;

    if (!results[checkKey]) {
      results[key] = oldEl[checkKey];
    }
  });

  return results;
}

function updateChangedElement(parentElement, oldEl, newVNode, options = {}) {
  // node 가 같지 않으면 바꾸고, refClass 속성이 있으면 바꾸고
  if (
    (check.isTextNode(oldEl) && !check.isVNodeText(newVNode)) ||
    (check.isCommentNode(oldEl) && !check.isVNodeComment(newVNode))
  ) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
  } else if (
    (!check.isTextNode(oldEl) && check.isVNodeText(newVNode)) ||
    (!check.isCommentNode(oldEl) && check.isVNodeComment(newVNode))
  ) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
  } else if (check.isTextNode(oldEl) && check.isVNodeText(newVNode)) {
    patch.replaceText(oldEl, newVNode);
  } else if (check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.replaceComment(oldEl, newVNode);
  } else {
    // newVNode 가 Component 인 경우
    if (check.hasRefClass(newVNode)) {
      if (
        isFunction(options.checkRefClass) &&
        options.checkRefClass(oldEl, newVNode)
      ) {
        // 컴포넌트가 적용되는 곳은 Reconcile 을 재귀로 실행
        patch.reconcile(oldEl, newVNode, options);

        // 기존의 replaceWith 는 element 통으로 바꾸기 때문에 화면 렌더링을 많이 해야함.
        // patch.replaceWith(oldEl, newVNode, options);
        // 이건 안 쓰는 걸로>

        if (isFunction(options.registerChildComponent)) {
          options.registerChildComponent(
            newVNode.el,
            newVNode.instance,
            newVNode.instance.id,
            oldEl // 옛날 element 는 삭제하기
          );
        }
      } else {
        // noop
      }
    } else {
      patch.replaceWith(oldEl, newVNode, options);
    }
  }
  return true;
}

function updatePropertyAndChildren(oldEl, newVNode, options = {}) {
  // props 가 설정 될 때 비교될 props 를 사전에 정의해서 가지고 오는 것이 좋다.
  const newVNodeProps = newVNode.memoizedProps;

  // update properties
  updateProps(
    oldEl,
    newVNodeProps,
    getProps(oldEl, oldEl.attributes, newVNodeProps)
  ); // added

  updateChildren(oldEl, newVNode, options);
}

export function updateChildren(oldEl, newVNode, options = {}) {
  // check children count
  if (!oldEl.hasChildNodes() && !newVNode.children.length) {
    return;
  }

  var oldChildren = children(oldEl);
  var newChildren = vNodeChildren(newVNode);
  var max = Math.max(oldChildren.length, newChildren.length);

  if (max === 0) {
    return;
  }

  // newChildren 만 존재할 때는 추가하고, oldChildren 만 존재할 때는 삭제한다.
  if (oldChildren.length === 0 && newChildren.length > 0) {
    var fragment = document.createDocumentFragment();
    newChildren.forEach((it) => {
      const retElement = DomRenderer(it, options).el;

      if (retElement) {
        fragment.appendChild(retElement);
      }
    });
    // children B 만 존재할 때는 b 에 있는 것을 모두 A 로 추가한다.
    // B 에서 모든 자식을 A 에 추가한다.
    oldEl.appendChild(fragment);
    newChildren.forEach((it) => {
      it.runMounted();
    });
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    // noop
    oldEl.textContent = "";
  } else {
    // 그 외는 다시 loop를 돌린다.
    for (var i = 0; i < max; i++) {
      updateElement(oldEl, oldChildren[i], newChildren[i], options);
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
  parentElement = parentElement || options.context.parentElement;
  if (!oldEl && newVNode) {
    patch.appendChild(parentElement, newVNode, options);
    return;
  }
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }

  // pass 옵션이 없는 경우
  if (!newVNode.props?.pass) {
    if (check.hasPassed(newVNode)) {
      return;
    }

    if (check.changed(newVNode, oldEl) || check.hasRefClass(newVNode)) {
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
  var element = el.firstChild;

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

const DefaultOption = {
  checkPassed: undefined,
  keyField: "key",
  removedElements: [],
};

/**
 *
 *  Reconcile 를 수행한다.
 *
 * Dom 과 VNode 를 Diff 한다.
 *
 */
export function Reconcile(oldEl, newVNode, options = {}) {
  options = Object.assign({}, DefaultOption, options);
  if (oldEl.nodeType !== 11) {
    // fragment 가 아니면 비교를 시작한다.
    updateElement(oldEl.parentElement, oldEl, newVNode, options);
    return;
  }
}
