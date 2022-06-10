import { isFunction } from "./func";

const setBooleanProp = (el, name, value) => {
  if (value) {
    el.setAttribute(name, name);
    el[name] = value;
  } else {
    el.removeAttribute(name);
    el[name] = value;
  }
};

const setProp = (el, name, value) => {
  if (typeof value === "boolean") {
    setBooleanProp(el, name, value);
  } else {
    if (name === "style") {
      el.style.cssText = value;
    } else {
      el.setAttribute(name, value);
    }
  }
};

const removeBooleanProp = (node, name) => {
  node.removeAttribute(name);
  node[name] = false;
};

const removeUndefinedProp = (node, name) => {
  node.removeAttribute(name);
};

const removeProp = (node, name, value) => {
  if (typeof value === "boolean") {
    removeBooleanProp(node, name);
  } else if (name) {
    removeUndefinedProp(node, name);
  }
};

const updateProp = (node, name, newValue, oldValue) => {
  // 필드만 있는 것들은 value 가 없을 수 있기 때문에, 기본 value 를 채워주자.
  if (!newValue) {
    // console.log(node, name, oldValue, newValue);
    removeProp(node, name, oldValue);
  } else if (!oldValue || newValue !== oldValue) {
    setProp(node, name, newValue);
  } else {
    // console.log(node, name, newValue, oldValue, "noop");
  }
};

const updateProps = (node, newProps = {}, oldProps = {}) => {
  const keyList = [];
  keyList.push.apply(keyList, Object.keys(newProps));
  keyList.push.apply(keyList, Object.keys(oldProps));

  const props = new Set(keyList);

  props.forEach((key) => {
    updateProp(node, key, newProps[key], oldProps[key]);
  });
};

/**
 * TEXT_NODE 일 때   둘 다 공백일 때는  비교하지 않는다.
 *
 * @param {*} node1
 *
 * @param {*} node2
 */
function changed(node1, node2) {
  return (
    (node1.nodeType === window.Node.TEXT_NODE &&
      node1.textContent !== node2.textContent) ||
    node1.nodeName !== node2.nodeName
  );
}

function hasPassed(node1) {
  // <!-- comment -->  형태의 주석일 때는 그냥 패스
  if (node1?.nodeType === 8) {
    return true;
  }

  return (
    node1.nodeType !== window.Node.TEXT_NODE &&
    node1.getAttribute("data-domdiff-pass") === "true"
  );
}

/**
 * refClass 속성을 가지고 있으면 기존 el 을 대체한다.
 *
 * 두가지 node1, node2 중에 refClass 를 가지고 있으면 비교하지 않는다.
 *
 */
function hasRefClass(node1) {
  return (
    node1.nodeType !== window.Node.TEXT_NODE && node1.getAttribute("refclass")
  );
}

function getProps(attributes) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];

    // 특수 속성 제외
    if (t.name === "has-event") continue;
    else if (t.name.startsWith("on")) continue;

    results[t.name] = t.value;
  }

  return results;
}

function updateElement(parentElement, oldEl, newEl, i, options = {}) {
  // console.log("updateElement", oldEl, newEl, i);
  if (!oldEl) {
    parentElement.appendChild(newEl.cloneNode(true));
  } else if (!newEl) {
    parentElement.removeChild(oldEl);
  } else if (hasPassed(oldEl) || hasPassed(newEl)) {
    // NOOP
    // data-domdiff-pass="true" 일 때는 아무것도 비교하지 않고 끝낸다.
  } else if (changed(newEl, oldEl) || hasRefClass(newEl)) {
    // node 가 같지 않으면 바꾸고, refClass 속성이 있으면 바꾸고
    if (
      oldEl.nodeType === window.Node.TEXT_NODE &&
      newEl.nodeType !== window.Node.TEXT_NODE
    ) {
      parentElement.insertBefore(newEl.cloneNode(true), oldEl);
      parentElement.removeChild(oldEl);
    } else if (
      oldEl.nodeType !== window.Node.TEXT_NODE &&
      newEl.nodeType === window.Node.TEXT_NODE
    ) {
      parentElement.insertBefore(newEl.cloneNode(true), oldEl);
      parentElement.removeChild(oldEl);
    } else {
      // newEl 이 refClass이고, 바뀌어야 하는 경우 갱신을 위해서 replace 를 한다.
      if (hasRefClass(newEl)) {
        if (
          isFunction(options.checkRefClass) &&
          options.checkRefClass(oldEl, newEl)
        ) {
          console.log("replace object refclass", oldEl, newEl);
          oldEl.replaceWith(newEl.cloneNode(true));
        }
      } else {
        oldEl.replaceWith(newEl.cloneNode(true));
      }
    }
  } else if (
    newEl.nodeType !== window.Node.TEXT_NODE &&
    newEl.nodeType !== window.Node.COMMENT_NODE &&
    newEl.toString() !== "[object HTMLUnknownElement]"
  ) {
    if (options.checkPassed && options.checkPassed(oldEl, newEl)) {
      // NOOP
      // 정상적인 노드에서 checkPassed 가 true 이면 아무것도 하지 않는다.
      // 다만 자식의 속성은 변경해야한다.
    } else {
      updateProps(
        oldEl,
        getProps(newEl.attributes),
        getProps(oldEl.attributes)
      ); // added
    }

    var oldChildren = children(oldEl);
    var newChildren = children(newEl);
    var max = Math.max(oldChildren.length, newChildren.length);

    for (var index = 0; index < max; index++) {
      updateElement(
        oldEl,
        oldChildren[index],
        newChildren[index],
        index,
        options
      );
    }
  }
}

const children = (el) => {
  var element = el.firstChild;

  if (!element) {
    return [];
  }

  var results = [];

  do {
    results.push(element);
    element = element.nextSibling;
  } while (element);

  return results;
};

// function reconcile(parentEl, oldChildren = [], newChildren = [], options = {}) {
//   const oldLength = oldChildren.length;
//   const newLength = newChildren.length;

//   //  둘다 존재해야 진행
//   if (oldLength < 1 || newLength < 1) {
//     return;
//   }

//   let oldHead = 0;
//   let oldTail = oldLength - 1;

//   let newHead = 0;
//   let newTail = newLength - 1;

//   while(oldHead < oldTail && newHead < newTail) {

//     const oldHeadEl = oldChildren[oldHead];
//     const oldTailEl = oldChildren[oldTail];
//     const newHeadEl = newChildren[newHead];
//     const newTailEl = newChildren[newTail];

//     const oldHeadKey = oldHeadEl.getAttribute(options.keyField);

//   }

// }

const DefaultOption = {
  checkPassed: undefined,
  keyField: "key",
  removedElements: [],
};

/**
 *
 *  DomDiff 를 수행한다.
 *
 *  TODO: id 기반으로 reconcile 을 할 수 있도록 맞춰야 한다.
 *
 * @param {*} A
 * @param {*} B
 * @param {object} options
 * @param {function} [options.checkPassed=undefined]
 * @param {string} [options.keyField=key]
 */
export function DomDiff(A, B, options = {}) {
  // initialize options parameter

  options = {
    ...DefaultOption,
    checkPassed: isFunction(options.checkPassed)
      ? options.checkPassed
      : undefined,
    checkRefClass: isFunction(options.checkRefClass)
      ? options.checkRefClass
      : undefined,
  };

  A = A.el || A;
  B = B.el || B;

  var childrenA = children(A);
  var childrenB = children(B);

  // A, B 모두 fragment 가 아닐 때 props 처리
  if (A.nodeType !== 11 && B.nodeType !== 11) {
    // 메인 element 속성 변경
    updateProps(A, getProps(B.attributes), getProps(A.attributes)); // added
  }

  // return;

  // 자식 element 의 속성 변경
  var len = Math.max(childrenA.length, childrenB.length);
  if (len === 0) {
    return;
  }

  if (childrenA.length === 0 && childrenB.length > 0) {
    var fragment = document.createDocumentFragment();
    childrenB.forEach((it) => fragment.appendChild(it));
    // children B 만 존재할 때는 b 에 있는 것을 모두 A 로 추가한다.
    // B 에서 모든 자식을 A 에 추가한다.
    A.appendChild(fragment);
  } else if (childrenA.length > 0 && childrenB.length === 0) {
    // children A 만 존재할 때는 A에 있는 것을 모두 삭제한다.
    // noop
    A.textContent = "";
  } else {
    for (var i = 0; i < len; i++) {
      updateElement(A, childrenA[i], childrenB[i], i, options);
    }
  }
}
