var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => {
  return {
    set _(value) {
      __privateSet(obj, member, value, setter);
    },
    get _() {
      return __privateGet(obj, member, getter);
    }
  };
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _handlerCache, ___stateHooks, ___stateHooksIndex, _state, _cachedMethodList, _functionCache, _childObjectList, _childObjectElements, _reloadInstance, reloadInstance_fn, _storeInstance;
function collectProps(root, rootClass, filterFunction = () => true) {
  let p = root;
  let results = [];
  do {
    const isObject2 = p instanceof Object;
    if (isObject2 === false) {
      break;
    }
    const isRootClass = p.constructor.name === rootClass.name;
    if (isRootClass) {
      break;
    }
    const names = Object.getOwnPropertyNames(p).filter(filterFunction);
    results.push.apply(results, names);
  } while (p = Object.getPrototypeOf(p));
  return results;
}
function debounce(callback, delay = 0) {
  if (delay === 0) {
    return callback;
  }
  var t = void 0;
  return function($1, $2, $3, $4, $5) {
    if (t) {
      window.clearTimeout(t);
    }
    t = window.setTimeout(function() {
      callback($1, $2, $3, $4, $5);
    }, delay || 300);
  };
}
function throttle(callback, delay) {
  var t = void 0;
  return function($1, $2, $3, $4, $5) {
    if (!t) {
      t = window.setTimeout(function() {
        callback($1, $2, $3, $4, $5);
        t = null;
      }, delay || 300);
    }
  };
}
function ifCheck(callback, context, checkMethods) {
  return (...args) => {
    const ifResult = checkMethods.every((check2) => {
      return context[check2].apply(context, args);
    });
    if (ifResult) {
      callback.apply(context, args);
    }
  };
}
function makeRequestAnimationFrame(callback, context) {
  return (...args) => {
    if (callback.requestAnimationFrameId) {
      cancelAnimationFrame(callback.requestAnimationFrameId);
    }
    callback.requestAnimationFrameId = requestAnimationFrame(() => {
      callback.apply(context, args);
    });
  };
}
function keyEach(obj, callback) {
  Object.keys(obj).forEach((key, index) => {
    callback(key, obj[key], index);
  });
}
function keyMap(obj, callback) {
  return Object.keys(obj).map((key, index) => {
    return callback(key, obj[key], index);
  });
}
function keyMapJoin(obj, callback, joinString = "") {
  return keyMap(obj, callback).join(joinString);
}
function get(obj, key, callback) {
  var returnValue = defaultValue(obj[key], key);
  if (isFunction(callback)) {
    return callback(returnValue);
  }
  return returnValue;
}
function defaultValue(value, defaultValue2) {
  return typeof value == "undefined" ? defaultValue2 : value;
}
function isUndefined(value) {
  return typeof value == "undefined";
}
function isNotUndefined(value) {
  return !isUndefined(value);
}
function isBoolean(value) {
  return typeof value == "boolean";
}
function isString(value) {
  return typeof value == "string";
}
function isNotString(value) {
  return !isString(value);
}
function isEqual(obj1, obj2, count = 0, omitKeys = {}) {
  if (count > 5) {
    console.error(obj1, obj2);
    throw new Error(["isEqual \uC744 \uC624\uB798 \uC2E4\uD589\uD558\uC600\uC2B5\uB2C8\uB2E4."]);
  }
  if (isFunction(obj1) && isFunction(obj2)) {
    return false;
  }
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  return obj1Keys.every((key) => {
    if (omitKeys[key]) {
      return true;
    }
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];
    if (isObject(obj1Value) && isObject(obj2Value)) {
      return isEqual(obj1Value, obj2Value, count + 1, omitKeys);
    } else if (isArray(obj1Value) && isArray(obj2Value)) {
      return obj1Value.every((value, index) => {
        return isEqual(value, obj2Value[index], count + 1, omitKeys);
      });
    }
    return obj1Value === obj2Value;
  });
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return typeof value == "object" && !Array.isArray(value) && !isNumber(value) && !isString(value) && value !== null;
}
function isFunction(value) {
  return typeof value == "function";
}
function isNumber(value) {
  return typeof value == "number";
}
function isZero(num) {
  return num === 0;
}
function isNotZero(num) {
  return !isZero(num);
}
const CLONE_FUNCTION = (obj) => JSON.parse(JSON.stringify(obj));
function clone(obj) {
  if (isUndefined(obj))
    return void 0;
  return CLONE_FUNCTION(obj);
}
function combineKeyArray(obj) {
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key] = obj[key].join(", ");
    }
  });
  return obj;
}
function classnames(...args) {
  const result = [];
  args.filter(Boolean).forEach((it) => {
    if (isArray(it)) {
      result.push(classnames(...it));
    } else if (isObject(it)) {
      Object.keys(it).filter((k) => Boolean(it[k])).forEach((key) => {
        result.push(key);
      });
    } else if (isString(it)) {
      result.push(it);
    }
  });
  return result.join(" ");
}
const booleanTypes$1 = {
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
  allowpaymentrequest: true
};
const TEXT_NODE$1 = 3;
const COMMENT_NODE$1 = 8;
function isBooleanType$1(key) {
  return booleanTypes$1[key];
}
const setBooleanProp = (el, name, value) => {
  if (isNotUndefined(value)) {
    el.setAttribute(name, name);
    el[name] = value;
  } else {
    el.removeAttribute(name);
    el[name] = void 0;
  }
};
const setProp = (el, name, value) => {
  if (isBooleanType$1(name)) {
    setBooleanProp(el, name, value);
  } else {
    if (name === "style") {
      el.style.cssText = value;
    } else {
      el.setAttribute(name, value);
    }
  }
};
const removeProp = (node, name) => {
  if (isBooleanType$1(name)) {
    node.removeAttribute(name);
    node[name] = false;
  } else if (name) {
    node.removeAttribute(name);
  }
};
const updateProp = (node, name, newValue, oldValue) => {
  if (isUndefined(newValue)) {
    removeProp(node, name);
  } else if (!oldValue || newValue !== oldValue) {
    setProp(node, name, newValue);
  } else
    ;
};
const updateProps$1 = (node, newProps = {}, oldProps = {}) => {
  const keyList = [];
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    return;
  }
  keyList.push.apply(keyList, newPropsKeys);
  keyList.push.apply(keyList, oldPropsKeys);
  const props = new Set(keyList);
  props.forEach((key) => {
    updateProp(node, key, newProps[key], oldProps[key]);
  });
};
function changed(node1, node2) {
  return node1.nodeType === TEXT_NODE$1 && node1.textContent !== node2.textContent || node1.nodeName !== node2.nodeName;
}
function hasPassed(node1) {
  if (node1.nodeType === COMMENT_NODE$1) {
    return true;
  }
  return node1.nodeType !== TEXT_NODE$1 && node1.getAttribute("data-domdiff-pass") === "true";
}
function hasRefClass(node1) {
  return node1.nodeType !== TEXT_NODE$1 && node1.getAttribute("refclass");
}
function getProps$2(attributes) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;
    if (name.startsWith("on"))
      continue;
    results[name] = value;
  }
  return results;
}
function updateChangedElement$1(parentElement, oldEl, newEl, i, options = {}) {
  const oldNodeType = oldEl.nodeType;
  const newNodeType = newEl.nodeType;
  if (oldNodeType === TEXT_NODE$1 && newNodeType !== TEXT_NODE$1) {
    parentElement.insertBefore(newEl.cloneNode(true), oldEl);
    parentElement.removeChild(oldEl);
  } else if (oldNodeType !== TEXT_NODE$1 && newNodeType === TEXT_NODE$1) {
    parentElement.insertBefore(newEl.cloneNode(true), oldEl);
    parentElement.removeChild(oldEl);
  } else if (oldNodeType === TEXT_NODE$1 && newNodeType === TEXT_NODE$1) {
    oldEl.textContent = newEl.textContent;
  } else {
    if (hasRefClass(newEl)) {
      if (isFunction(options.checkRefClass) && options.checkRefClass(oldEl, newEl)) {
        oldEl.replaceWith(newEl.cloneNode(true));
      }
    } else {
      oldEl.replaceWith(newEl.cloneNode(true));
    }
  }
  return true;
}
function updatePropertyAndChildren$1(parentElement, oldEl, newEl, i, options = {}) {
  if (options.checkPassed && options.checkPassed(oldEl, newEl)) {
    return;
  } else {
    updateProps$1(oldEl, getProps$2(newEl.attributes), getProps$2(oldEl.attributes));
  }
  if (!oldEl.hasChildNodes() && !newEl.hasChildNodes()) {
    return;
  }
  var oldChildren = children$2(oldEl);
  var newChildren = children$2(newEl);
  var max = Math.max(oldChildren.length, newChildren.length);
  for (var index = 0; index < max; index++) {
    updateElement$1(oldEl, oldChildren[index], newChildren[index], index, options);
  }
}
function updateElement$1(parentElement, oldEl, newEl, i, options = {}) {
  if (!oldEl) {
    parentElement.appendChild(newEl.cloneNode(true));
    return;
  }
  if (!newEl) {
    parentElement.removeChild(oldEl);
    return;
  }
  if (hasPassed(newEl) || hasPassed(oldEl)) {
    return;
  }
  if (changed(newEl, oldEl) || hasRefClass(newEl)) {
    updateChangedElement$1(parentElement, oldEl, newEl, i, options);
    return;
  }
  const newNodeType = newEl.nodeType;
  if (newNodeType !== TEXT_NODE$1 && newNodeType !== COMMENT_NODE$1 && newEl.toString() !== "[object HTMLUnknownElement]") {
    updatePropertyAndChildren$1(parentElement, oldEl, newEl, i, options);
  }
}
const children$2 = (el) => {
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
const DefaultOption$1 = {
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function DomDiff(A, B, options = {}) {
  if (!A || !B) {
    throw new Error("A and B must be defined");
  }
  options = Object.assign({}, DefaultOption$1, options);
  A = A.el || A;
  B = B.el || B;
  var childrenA = children$2(A);
  var childrenB = children$2(B);
  if (A.nodeType !== 11 && B.nodeType !== 11) {
    updateProps$1(A, getProps$2(B.attributes), getProps$2(A.attributes));
  }
  var len = Math.max(childrenA.length, childrenB.length);
  if (len === 0) {
    return;
  }
  if (childrenA.length === 0 && childrenB.length > 0) {
    var fragment = document.createDocumentFragment();
    childrenB.forEach((it) => fragment.appendChild(it));
    A.appendChild(fragment);
  } else if (childrenA.length > 0 && childrenB.length === 0) {
    A.textContent = "";
  } else {
    for (var i = 0; i < len; i++) {
      updateElement$1(A, childrenA[i], childrenB[i], i, options);
    }
  }
}
const UUID_REG = /[xy]/g;
function uuid() {
  var dt = new Date().getTime();
  var uuid2 = "xxx12-xx-34xx".replace(UUID_REG, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
function uuidShort() {
  var dt = new Date().getTime();
  var uuid2 = "idxxxxxxx".replace(UUID_REG, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
const map = {};
const handlerMap = {};
const aliasMap = {};
const __rootInstance = /* @__PURE__ */ new Set();
const __tempVariables = /* @__PURE__ */ new Map();
const __tempVariablesGroup = /* @__PURE__ */ new Map();
const _modules = {};
const _moduleMap = /* @__PURE__ */ new WeakMap();
const VARIABLE_SAPARATOR = "v:";
function variable(value, groupId = "") {
  const id = `${VARIABLE_SAPARATOR}${uuidShort()}`;
  __tempVariables.set(id, value);
  if (groupId) {
    __tempVariablesGroup.has(groupId) || __tempVariablesGroup.set(groupId, /* @__PURE__ */ new Set());
    __tempVariablesGroup.get(groupId).add(id);
  }
  return id;
}
function initializeGroupVariables(groupId) {
  if (__tempVariablesGroup.has(groupId)) {
    __tempVariablesGroup.get(groupId).forEach((id) => {
      __tempVariables.delete(id);
    });
    __tempVariablesGroup.delete(groupId);
  }
}
function recoverVariable(id, removeVariable = true) {
  if (isString(id) === false) {
    return id;
  }
  let value = id;
  if (__tempVariables.has(id)) {
    value = __tempVariables.get(id);
    if (removeVariable) {
      __tempVariables.delete(id);
    }
  }
  return value;
}
function getVariable(idOrValue) {
  if (__tempVariables.has(idOrValue)) {
    return __tempVariables.get(idOrValue);
  }
  return idOrValue;
}
function hasVariable(id) {
  return __tempVariables.has(id);
}
function spreadVariable(obj) {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${variable(value)}`;
  }).join(" ");
}
function registElement(classes = {}) {
  Object.keys(classes).forEach((key) => {
    map[key] = classes[key];
  });
}
function registAlias(a, b) {
  aliasMap[a] = b;
}
function retriveAlias(key) {
  return aliasMap[key];
}
function retriveElement(className) {
  return map[retriveAlias(className) || className];
}
function registRootElementInstance(instance) {
  if (instance) {
    const lastInstance = getRootElementInstanceList().find((it) => {
      return it.$el.el.__component !== it;
    });
    removeRootElementInstance(lastInstance);
  }
  __rootInstance.add(instance);
}
function removeRootElementInstance(instance) {
  instance == null ? void 0 : instance.destroy();
  __rootInstance.delete(instance);
}
function getRootElementInstanceList() {
  return [...__rootInstance];
}
function renderRootElementInstanceList(isForce = false) {
  getRootElementInstanceList().forEach((instance) => {
    if (isForce) {
      instance.forceRender();
    } else {
      instance.render();
    }
  });
}
function registHandler(handlers) {
  Object.keys(handlers).forEach((key) => {
    handlerMap[key] = handlers[key];
  });
}
function retriveHandler(className) {
  return handlerMap[className];
}
function createHandlerInstance(context, localHanders = {}) {
  return [
    ...Object.keys(handlerMap).map((key) => {
      const HandlerClass = handlerMap[key];
      return new HandlerClass(context);
    }),
    ...Object.keys(localHanders).map((key) => {
      const HandlerClass = localHanders[key];
      return new HandlerClass(context);
    })
  ];
}
function registerModule(id, modules = {}) {
  if (!_modules[id]) {
    _modules[id] = { new: modules, old: modules };
    Object.keys(modules).forEach((key) => {
      _moduleMap.set(modules[key], id);
    });
  } else {
    refreshModule(id, modules);
  }
}
function refreshModule(id, newModules) {
  _modules[id].new = newModules;
  Object.keys(newModules).forEach((key) => {
    _moduleMap.set(newModules[key], id);
  });
}
function getModule(Component) {
  const id = _moduleMap.get(Component);
  if (!id) {
    return Component;
  }
  const m = _modules[id];
  if (!m) {
    return Component;
  }
  const currentNewComponent = Object.values(m.new).find((it) => {
    return it === Component;
  });
  if (currentNewComponent) {
    return currentNewComponent;
  }
  let oldKey = "";
  const currentOldComponent = Object.entries(m.old).find(([key, it]) => {
    if (it === Component) {
      oldKey = key;
      return true;
    }
    return false;
  });
  if (currentOldComponent) {
    return m.new[oldKey];
  }
}
class Dom {
  constructor(tag, className, attr) {
    if (typeof tag !== "string") {
      if (tag instanceof Dom) {
        this.el = tag.el;
      } else {
        this.el = tag;
      }
    } else {
      var el = document.createElement(tag);
      if (className) {
        el.className = className;
      }
      attr = attr || {};
      Object.assign(el, attr);
      this.el = el;
    }
  }
  static create(tag, className, attr) {
    return new Dom(tag, className, attr);
  }
  static createText(text) {
    return new Dom(document.createTextNode(text));
  }
  static createByHTML(htmlString) {
    var div = Dom.create("div");
    return div.html(htmlString).firstChild;
  }
  static getScrollTop() {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  static getScrollLeft() {
    return Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);
  }
  static parse(html) {
    var parser = window.DOMParser();
    return parser.parseFromString(html, "text/htmll");
  }
  static body() {
    return Dom.create(document.body);
  }
  get tagName() {
    return this.el.tagName;
  }
  get exists() {
    return Boolean(this.el);
  }
  setAttr(obj) {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key]);
    });
    return this;
  }
  setAttrNS(obj, namespace = "http://www.w3.org/2000/svg") {
    Object.keys(obj).forEach((key) => {
      this.attr(key, obj[key], namespace);
    });
    return this;
  }
  setProp(obj) {
    Object.keys(obj).forEach((key) => {
      if (this.el[key] != obj[key]) {
        this.el[key] = obj[key];
      }
    });
    return this;
  }
  data(key, value) {
    if (arguments.length === 1) {
      const value2 = this.attr("data-" + key);
      return recoverVariable(value2, false);
    } else if (arguments.length === 2) {
      return this.attr("data-" + key, value);
    }
    return this;
  }
  attr(...args) {
    if (args.length == 1) {
      return isFunction(this.el.getAttribute) && this.el.getAttribute(args[0]);
    }
    if (this.el.getAttribute(args[0]) != args[1]) {
      this.el.setAttribute(args[0], args[1]);
    }
    return this;
  }
  attrNS(key, value, namespace = "http://www.w3.org/2000/svg") {
    if (arguments.length == 1) {
      return this.el.getAttributeNS(namespace, key);
    }
    if (this.el.getAttributeNS(namespace, key) != value) {
      this.el.setAttributeNS(namespace, key, value);
    }
    return this;
  }
  attrKeyValue(keyField) {
    return {
      [this.el.getAttribute(keyField)]: this.val()
    };
  }
  get attributes() {
    try {
      return [...this.el.attributes];
    } catch (e) {
      const length = this.el.attributes.length;
      const attributes = [];
      for (var i = 0; i < length; i++) {
        attributes.push(this.el.attributes[`${i}`]);
      }
      return attributes;
    }
  }
  attrs(...args) {
    return args.map((key) => {
      return this.el.getAttribute(key);
    });
  }
  styles(...args) {
    return args.map((key) => {
      return this.el.style[key];
    });
  }
  removeAttr(key) {
    this.el.removeAttribute(key);
    return this;
  }
  removeStyle(key) {
    this.el.style.removeProperty(key);
    return this;
  }
  get isFragment() {
    return this.el.nodeType === 11;
  }
  get isTemplate() {
    return this.el.nodeType === 1 && this.el.tagName === "TEMPLATE";
  }
  get content() {
    return this.isTemplate ? this.el.content : this.el;
  }
  is(checkElement) {
    if (checkElement instanceof Dom) {
      return this.el === checkElement.el;
    }
    return this.el === checkElement;
  }
  isTag(tag) {
    return this.el.tagName.toLowerCase() === tag.toLowerCase();
  }
  closest(cls) {
    var temp = this;
    var checkCls = false;
    while (!(checkCls = temp.hasClass(cls))) {
      if (temp.el.parentNode) {
        temp = Dom.create(temp.el.parentNode);
      } else {
        return null;
      }
    }
    if (checkCls) {
      return temp;
    }
    return null;
  }
  path() {
    if (!this.el)
      return [];
    let pathList = [this];
    let $parentNode = this.parent();
    if (!$parentNode.el)
      return pathList;
    while ($parentNode) {
      pathList.unshift($parentNode);
      $parentNode = $parentNode.parent();
      if (!$parentNode.el)
        break;
    }
    return pathList;
  }
  get $parent() {
    return this.parent();
  }
  parent() {
    return Dom.create(this.el.parentNode);
  }
  hasParent() {
    return !!this.el.parentNode;
  }
  get isUnlinked() {
    return !this.el.parentNode;
  }
  removeClass(...args) {
    this.el.classList.remove(...args);
    return this;
  }
  updateClass(className) {
    this.el.className = className;
    return this;
  }
  replaceClass(oldClass, newClass) {
    this.el.classList.replace(oldClass, newClass);
    return this;
  }
  hasClass(cls) {
    if (!this.el.classList)
      return false;
    return this.el.classList.contains(cls);
  }
  addClass(...args) {
    this.el.classList.add(...args);
    return this;
  }
  onlyOneClass(cls) {
    var parent = this.parent();
    parent.children().forEach((it) => {
      it.removeClass(cls);
    });
    this.addClass(cls);
  }
  toggleClass(cls, isForce) {
    this.el.classList.toggle(cls, isForce);
    return this;
  }
  outerHTML() {
    if (this.isTextNode) {
      return this.text();
    }
    return this.el.outerHTML;
  }
  html(html) {
    try {
      if (typeof html === "undefined") {
        return this.el.innerHTML;
      }
      if (typeof html === "string") {
        Object.assign(this.el, { innerHTML: html });
      } else {
        this.empty().append(html);
      }
      return this;
    } catch (e) {
      console.log(e, html);
      return this;
    }
  }
  htmlDiff(fragment, options = {}) {
    DomDiff(this, fragment, options);
  }
  updateDiff(html, rootElement = "div", options = {}) {
    DomDiff(this, Dom.create(rootElement).html(html), options);
  }
  updateSVGDiff(html, rootElement = "div", options = {}) {
    DomDiff(this, Dom.create(rootElement).html(`<svg>${html}</svg>`).firstChild.firstChild, options);
  }
  getById(id) {
    return this.el.getElementById(id);
  }
  find(selector, el = this.el) {
    if (this.isTextNode)
      return void 0;
    return el.querySelector(selector);
  }
  $(selector) {
    var node = this.find(selector, this.isTemplate ? this.el.content : this.el);
    return node ? Dom.create(node) : null;
  }
  findAll(selector, el = this.el) {
    if (this.isTextNode)
      return [];
    return Array.from(el.querySelectorAll(selector));
  }
  $$(selector) {
    var arr = this.findAll(selector, this.isTemplate ? this.el.content : this.el);
    return arr.map((node) => Dom.create(node));
  }
  empty() {
    while (this.el.firstChild)
      this.el.removeChild(this.el.firstChild);
    return this;
  }
  append(el) {
    if (!el)
      return this;
    if (isArray(el)) {
      this.el.append(...el.map((it) => it.el || it));
    } else if (typeof el === "string") {
      this.el.appendChild(document.createTextNode(el));
    } else {
      this.el.appendChild(el.el || el);
    }
    return this;
  }
  prepend(el) {
    if (typeof el === "string") {
      this.el.prepend(document.createTextNode(el));
    } else {
      this.el.prepend(el.el || el);
    }
    return this;
  }
  prependHTML(html) {
    var $dom = Dom.create("div").html(html);
    this.prepend($dom.createChildrenFragment());
    return $dom;
  }
  appendHTML(html) {
    var $dom = Dom.create("div").html(html);
    this.append($dom.createChildrenFragment());
    return $dom;
  }
  createChildrenFragment() {
    const list = this.childNodes;
    var fragment = document.createDocumentFragment();
    list.forEach(($el) => fragment.appendChild($el.el));
    return fragment;
  }
  static createFragment(list = []) {
    var fragment = document.createDocumentFragment();
    list.forEach((it) => fragment.appendChild(it));
    return fragment;
  }
  appendTo(target) {
    var t = target.el ? target.el : target;
    t.appendChild(this.el);
    return this;
  }
  remove() {
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
    return this;
  }
  removeChild(el) {
    this.el.removeChild(el.el || el);
    return this;
  }
  text(value) {
    if (typeof value === "undefined") {
      return this.el.textContent;
    } else {
      var tempText = value;
      if (value instanceof Dom) {
        tempText = value.text();
      }
      if (this.el.textContent !== tempText) {
        this.el.textContent = tempText;
      }
      return this;
    }
  }
  css(key, value) {
    if (typeof key !== "undefined" && typeof value !== "undefined") {
      if (key.indexOf("--") === 0 && typeof value !== "undefined") {
        this.el.style.setProperty(key, value);
      } else {
        this.el.style[key] = value;
      }
    } else if (typeof key !== "undefined") {
      if (typeof key === "string") {
        return window.getComputedStyle(this.el)[key];
      } else {
        Object.entries(key).forEach(([localKey, value2]) => {
          if (localKey.indexOf("--") === 0 && typeof value2 !== "undefined") {
            this.el.style.setProperty(localKey, value2);
          } else {
            this.el.style[localKey] = value2;
          }
        });
      }
    }
    return this;
  }
  getComputedStyle(...list) {
    var css2 = window.getComputedStyle(this.el);
    var obj = {};
    list.forEach((it) => {
      obj[it] = css2[it];
    });
    return obj;
  }
  getStyleList(...list) {
    var style = {};
    var len = this.el.style.length;
    for (var i = 0; i < len; i++) {
      var key = this.el.style[i];
      style[key] = this.el.style[key];
    }
    list.forEach((key2) => {
      style[key2] = this.css(key2);
    });
    return style;
  }
  cssText(value) {
    if (typeof value === "undefined") {
      return this.el.style.cssText;
    }
    if (value != this.el.tempCssText) {
      this.el.style.cssText = value;
      this.el.tempCssText = value;
    }
    return this;
  }
  cssArray(arr) {
    if (arr[0])
      this.el.style[arr[0]] = arr[1];
    if (arr[2])
      this.el.style[arr[2]] = arr[3];
    if (arr[4])
      this.el.style[arr[4]] = arr[5];
    if (arr[6])
      this.el.style[arr[6]] = arr[7];
    if (arr[8])
      this.el.style[arr[8]] = arr[9];
    return this;
  }
  cssFloat(key) {
    return parseFloat(this.css(key));
  }
  cssInt(key) {
    return parseInt(this.css(key));
  }
  px(key, value) {
    return this.css(key, `${value}px`);
  }
  rect() {
    return this.el.getBoundingClientRect();
  }
  bbox() {
    return this.el.getBBox();
  }
  isSVG() {
    if (!this.el._cachedIsSVG) {
      this.el._cachedIsSVG = { value: this.el.tagName.toLowerCase() === "svg" };
    }
    return this.el._cachedIsSVG.value;
  }
  offsetRect() {
    if (this.isSVG()) {
      const parentBox = this.parent().rect();
      const box = this.rect();
      return {
        x: box.x - parentBox.x,
        y: box.y - parentBox.y,
        width: box.width,
        height: box.height
      };
    }
    const el = this.el;
    return {
      x: el.offsetLeft,
      y: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }
  offsetClientRect() {
    if (this.isSVG()) {
      const parentBox2 = this.parent().rect();
      const box2 = this.rect();
      return {
        x: box2.x - parentBox2.x,
        y: box2.y - parentBox2.y,
        width: box2.width,
        height: box2.height
      };
    }
    const parentBox = this.parent().rect();
    const box = this.rect();
    return {
      x: box.x - parentBox.x,
      y: box.y - parentBox.y,
      width: box.width,
      height: box.height
    };
  }
  offset() {
    var rect = this.rect();
    var scrollTop = Dom.getScrollTop();
    var scrollLeft = Dom.getScrollLeft();
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
  offsetLeft() {
    return this.offset().left;
  }
  offsetTop() {
    return this.offset().top;
  }
  position() {
    if (this.el.style.top) {
      return {
        top: parseFloat(this.css("top")),
        left: parseFloat(this.css("left"))
      };
    } else {
      return this.rect();
    }
  }
  size() {
    return [this.width(), this.height()];
  }
  width() {
    return this.el.offsetWidth || this.rect().width;
  }
  contentWidth() {
    return this.width() - this.cssFloat("padding-left") - this.cssFloat("padding-right");
  }
  height() {
    return this.el.offsetHeight || this.rect().height;
  }
  contentHeight() {
    return this.height() - this.cssFloat("padding-top") - this.cssFloat("padding-bottom");
  }
  val(value) {
    if (typeof value === "undefined") {
      return this.el.value;
    } else if (typeof value !== "undefined") {
      var tempValue = value;
      if (value instanceof Dom) {
        tempValue = value.val();
      }
      this.el.value = tempValue;
    }
    return this;
  }
  matches(selector) {
    if (this.el) {
      if (!this.el.matches)
        return null;
      if (this.el.matches(selector)) {
        return this;
      }
      return this.parent().matches(selector);
    }
    return null;
  }
  get value() {
    return this.el.value;
  }
  set value(v) {
    this.el.value = v;
  }
  get naturalWidth() {
    return this.el.naturalWidth;
  }
  get naturalHeight() {
    return this.el.naturalHeight;
  }
  get files() {
    return this.el.files ? [...this.el.files] : [];
  }
  get isTextNode() {
    return this.el.nodeType === 3;
  }
  realVal() {
    switch (this.el.nodeType) {
      case "INPUT":
        var type = this.attr("type");
        if (type == "checkbox" || type == "radio") {
          return this.checked();
        }
        return this.el.value;
      case "SELECT":
      case "TEXTAREA":
        return this.el.value;
    }
    return "";
  }
  int() {
    return parseInt(this.val(), 10);
  }
  float() {
    return parseFloat(this.val());
  }
  show(displayType = "block") {
    this.el.style.display = displayType != "none" ? displayType : "block";
    return this;
  }
  hide() {
    this.el.style.display = "none";
    return this;
  }
  isHide() {
    return this.el.style.display === "none";
  }
  isShow() {
    return !this.isHide();
  }
  toggle(isForce) {
    var currentHide = this.isHide();
    if (arguments.length == 1) {
      if (isForce) {
        return this.show();
      } else {
        return this.hide();
      }
    } else {
      if (currentHide) {
        return this.show();
      } else {
        return this.hide();
      }
    }
  }
  get totalLength() {
    return this.el.getTotalLength();
  }
  scrollIntoView() {
    this.el.scrollIntoView();
  }
  addScrollLeft(dt) {
    this.el.scrollLeft += dt;
    return this;
  }
  addScrollTop(dt) {
    this.el.scrollTop += dt;
    return this;
  }
  setScrollTop(scrollTop) {
    this.el.scrollTop = scrollTop;
    return this;
  }
  setScrollLeft(scrollLeft) {
    this.el.scrollLeft = scrollLeft;
    return this;
  }
  get scrollTop() {
    if (this.el === document.body) {
      return Dom.getScrollTop();
    }
    return this.el.scrollTop;
  }
  get scrollLeft() {
    if (this.el === document.body) {
      return Dom.getScrollLeft();
    }
    return this.el.scrollLeft;
  }
  get scrollHeight() {
    return this.el.scrollHeight;
  }
  get scrollWidth() {
    return this.el.scrollWidth;
  }
  on(eventName, callback, opt1, opt2) {
    this.el.addEventListener(eventName, callback, opt1, opt2);
    return this;
  }
  off(eventName, callback) {
    this.el.removeEventListener(eventName, callback);
    return this;
  }
  getElement() {
    return this.el;
  }
  createChild(tag, className = "", attrs = {}, css2 = {}) {
    let $element = Dom.create(tag, className, attrs);
    $element.css(css2);
    this.append($element);
    return $element;
  }
  get firstChild() {
    return Dom.create(this.el.firstElementChild);
  }
  get first() {
    return Dom.create(this.el.firstChild);
  }
  children() {
    var element = this.el.firstElementChild;
    if (!element) {
      return [];
    }
    var results = [];
    do {
      results.push(Dom.create(element));
      element = element.nextElementSibling;
    } while (element);
    return results;
  }
  hasChild(child) {
    const childNode = child.el || child;
    return this.el === childNode ? false : this.el.contains(childNode);
  }
  get childNodes() {
    const result = [];
    if (this.el.hasChildNodes()) {
      const childNodes = this.el.childNodes;
      for (let i = 0; i < childNodes.length; i++) {
        result.push(Dom.create(childNodes[i]));
      }
    }
    return result;
  }
  childLength() {
    return this.el.childNodes.length;
  }
  replace(newElement) {
    if (this.el.parentNode) {
      this.el.parentNode.replaceChild(newElement.el || newElement, this.el);
    }
    return this;
  }
  replaceChild(oldElement, newElement) {
    this.el.replaceChild(newElement.el || newElement, oldElement.el || oldElement);
    return this;
  }
  checked(isChecked = false) {
    if (arguments.length == 0) {
      return !!this.el.checked;
    }
    this.el.checked = !!isChecked;
    return this;
  }
  click() {
    this.el.click();
    return this;
  }
  focus() {
    this.el.focus();
    return this;
  }
  select() {
    if (this.attr("contenteditable") === "true") {
      var range = document.createRange();
      range.selectNodeContents(this.el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else {
      this.el.select();
    }
    return this;
  }
  blur() {
    this.el.blur();
    return this;
  }
  toDataURL(type = "image/png", quality = 1) {
    return this.el.toDataURL(type, quality);
  }
  fullscreen() {
    var element = this.el;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.wekitRequestFullscreen) {
      element.wekitRequestFullscreen();
    }
  }
  toggleFullscreen() {
    if (this.el === document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      this.fullscreen();
    }
  }
}
const VNodeType = {
  NODE: 8,
  TEXT: 3,
  FRAGMENT: 11,
  COMPONENT: 100,
  ELEMENT: 101,
  COMMENT: 102
};
const NumberStyleKeys = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontSize: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  width: true,
  maxWidth: true,
  maxHeight: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  border: true,
  padding: true,
  margin: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingBottom: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginBottom: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;
const convertStyleKey = (key) => {
  if (styleKeys[key]) {
    return styleKeys[key];
  }
  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
  styleKeys[key] = upperKey;
  return upperKey;
};
function styleMap(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }
  return value;
}
function styleKeyMap(key) {
  return convertStyleKey(key);
}
function css(style) {
  const newStyles = {};
  Object.keys(style).forEach((styleKey) => {
    newStyles[styleKeyMap(styleKey)] = styleMap(styleKey, style[styleKey]);
  });
  return newStyles;
}
function VNodeToElement(obj, options = {}) {
  if (isString(obj)) {
    obj = createVNodeText(obj);
  }
  if (isArray(obj) && obj.length === 1) {
    return VNodeToElement(obj[0], options);
  }
  if (obj) {
    return Dom.create(obj.makeElement(true, options).el);
  }
  return null;
}
async function VNodeToHtml(obj, options = {}) {
  if (isString(obj)) {
    return obj;
  }
  if (isArray(obj) && obj.length === 1) {
    return await VNodeToHtml(obj[0], options);
  }
  if (obj) {
    return await obj.makeHtml(true, options);
  }
  return "";
}
const VoidTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
function isVoidTag(tag) {
  return VoidTags[tag.toLowerCase()];
}
const SVG_ELEMENTS = {
  svg: true,
  g: true,
  path: true,
  rect: true,
  circle: true,
  ellipse: true,
  line: true,
  polyline: true,
  polygon: true,
  text: true,
  tspan: true,
  textPath: true,
  tref: true,
  defs: true,
  clipPath: true,
  mask: true,
  pattern: true,
  image: true,
  linearGradient: true,
  radialGradient: true,
  stop: true,
  animate: true,
  animateMotion: true,
  animateColor: true,
  animateTransform: true,
  mpath: true,
  set: true,
  use: true,
  desc: true,
  metadata: true,
  title: true,
  marker: true,
  symbol: true,
  view: true,
  foreignObject: true,
  switch: true,
  link: true
};
function isSVG(tagName) {
  return !!SVG_ELEMENTS[tagName];
}
const TAG_PREFIX = "<";
const TEMP_DIV = Dom.create("div");
const TEMP_TEXT = document.createTextNode("");
const TEMP_COMMENT = document.createComment("");
let cache = {};
let cacheCount = 0;
let nativeDomCache = {};
function makeNativeDom(name) {
  if (!nativeDomCache[name]) {
    const el = isSVG(name) ? document.createElementNS("http://www.w3.org/2000/svg", name) : document.createElement(name);
    nativeDomCache[name] = el;
  }
  return nativeDomCache[name].cloneNode(false);
}
function makeNativeTextDom(value) {
  const text = TEMP_TEXT.cloneNode();
  text.textContent = value;
  return text;
}
function makeNativeCommentDom(value) {
  const text = TEMP_COMMENT.cloneNode();
  text.textContent = value;
  return text;
}
const expectAttributes = {
  content: true
};
function setAttribute(el, name, value) {
  if (expectAttributes[name])
    return;
  el.setAttribute(name, value);
}
function setEventAttribute(el, name, value) {
  el[name.toLowerCase()] = value;
}
function setStyle(el, key, value) {
  if (key.indexOf("--") === 0) {
    if (typeof value === "undefined") {
      el.style.removeProperty(key);
    } else {
      el.style.setProperty(key, value);
    }
  } else {
    el.style[key] = value;
  }
}
function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);
  return Object.keys(newStyle).map((key) => {
    return `${key}: ${newStyle[key]};`;
  }).join(" ");
}
function getProps$1(attributes) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;
    results[name] = value;
  }
  return results;
}
const children$1 = (el) => {
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
function makeOneElement(html) {
  if (cacheCount > 2e3) {
    cacheCount = 0;
    cache = {};
  }
  if (!cache[html]) {
    cacheCount++;
    cache[html] = TEMP_DIV.html(html).first.el;
  }
  return cache[html].cloneNode(true);
}
class VNode {
  constructor(type, tag, props, children2, Component) {
    this.type = type;
    this.tag = tag;
    this.nodeName = tag == null ? void 0 : tag.toUpperCase();
    this.props = props;
    this.children = children2;
    this.Component = Component;
    this.initializeProps();
    this.initializeChildren();
  }
  clone() {
    return new VNode(this.type, this.tag, __spreadValues({}, this.props), this.children.map((it) => it.clone()), this.Component);
  }
  find(callback) {
    return this.props.content.find(callback);
  }
  mounted() {
  }
  runMounted() {
    if (this.mounted) {
      requestAnimationFrame(() => {
        this.mounted();
      }, 0);
    }
  }
  get stringifyStyle() {
    return this.tagProps.style;
  }
  initializeProps() {
    const newProps = Object.assign({}, this.props);
    if (!this.Component) {
      if (isObject(newProps.style)) {
        newProps.style = stringifyStyle(newProps.style);
      }
      this.tagProps = newProps;
    } else {
      const targetVariable = Object.keys(newProps).length ? variable(newProps) : void 0;
      const newProps2 = {
        ref: newProps.ref ? newProps.ref : void 0
      };
      if (targetVariable) {
        newProps2[targetVariable] = "";
      }
      this.tagProps = newProps2;
    }
    if (this.props.enableHtml) {
      this.enableHtml = this.props.enableHtml;
      delete this.props.enableHtml;
    }
  }
  initializeChildren() {
    if (isArray(this.children)) {
      if (this.props.content)
        return;
      this.children = this.children.filter(Boolean).map((child) => {
        if (isString(child)) {
          if (this.enableHtml) {
            if (child.indexOf(TAG_PREFIX) === -1) {
              return createVNodeText(child);
            } else {
              const newEl = makeOneElement(child);
              if ((newEl == null ? void 0 : newEl.nodeType) === 3) {
                return createVNodeText(newEl.textContent);
              }
              return createVNodeElement(newEl);
            }
          } else {
            return createVNodeText(child);
          }
        } else if (isNumber(child)) {
          return createVNodeText(child);
        }
        return child;
      });
      this.props.content = this.children;
    }
  }
  makeChildren(withChildren, options) {
    const el = this.el;
    const children2 = this.children;
    if (children2 && children2.length) {
      const fragment = document.createDocumentFragment();
      children2.forEach((child) => {
        if (child instanceof VNode || child.makeElement) {
          fragment.appendChild(child.makeElement(withChildren, options).el);
        } else if (isArray(child)) {
          child.forEach((it) => {
            if (it) {
              fragment.appendChild(it.makeElement(withChildren, options).el);
            }
          });
        } else if (isFunction(child)) {
          fragment.appendChild(child());
        } else if (child instanceof window.HTMLElement) {
          fragment.appendChild(child);
        } else {
          fragment.appendChild(document.createTextNode(child));
        }
      });
      el.appendChild(fragment);
      children2.forEach((child) => {
        if (isArray(child)) {
          child.forEach((it) => {
            if (it) {
              it.runMounted();
            }
          });
        } else if (child) {
          child.runMounted();
        }
      });
    }
  }
  async makeChildrenHtml(withChildren, options) {
    const tempChildren = [];
    const children2 = this.children;
    if (children2 && children2.length) {
      const tempArray = await Promise.all(children2.map(async (child) => {
        if (child instanceof VNode || child.makeHtml) {
          return await child.makeHtml(withChildren, options);
        } else if (isArray(child)) {
          return await Promise.all(child.map(async (it) => {
            if (it) {
              return await it.makeHtml(withChildren, options);
            }
            return void 0;
          })).filter((it) => typeof it !== "undefined");
        } else if (isFunction(child)) {
          return await child();
        } else {
          return await child;
        }
      }));
      tempChildren.push(...tempArray);
    }
    return tempChildren.join("\n");
  }
  createElement() {
    return makeNativeDom(this.tag);
  }
  makeElement(withChildren = false, options = {}) {
    if (this.el)
      return this;
    const el = this.createElement();
    const props = this.tagProps;
    if (props) {
      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (key === "style") {
          if (isString(value)) {
            el.style.cssText = value;
          } else {
            const styleValues = css(value);
            Object.entries(styleValues).forEach(([localKey, value2]) => {
              setStyle(el, localKey, value2);
            });
          }
        } else {
          if (key) {
            if (value !== void 0) {
              if (key.startsWith("on")) {
                setEventAttribute(el, key, value);
              } else {
                setAttribute(el, key, value);
              }
            }
          }
        }
        if (key === "ref" && value) {
          this.ref = value;
          isFunction(options.registerRef) && options.registerRef(value, el);
        }
      });
    }
    this.el = el;
    this.makeChildren(withChildren, options);
    return this;
  }
  async makeHtml(withChildren = false, options = {}) {
    const tempProps = [];
    const props = this.tagProps;
    if (props) {
      Object.keys(props).forEach((key) => {
        const value = props[key];
        if (key === "style") {
          if (isString(value))
            ;
          else {
            props[key] = stringifyStyle(css(value));
          }
        } else {
          if (key) {
            if (value !== void 0) {
              if (key.startsWith("on")) {
                return;
              }
            }
          }
        }
        if (key === "ref") {
          return;
        }
        if (value) {
          tempProps.push(`${key}="${value}"`);
        }
      });
    }
    if (isVoidTag(this.tag)) {
      return `
        <${this.tag} ${tempProps.join(" ")} />
      `;
    } else {
      const childrenHtml = await this.makeChildrenHtml(withChildren, options);
      return `
        <${this.tag} ${tempProps.join(" ")}>${childrenHtml}</${this.tag}>
      `;
    }
  }
}
class VNodeText extends VNode {
  constructor(value) {
    super(VNodeType.TEXT, null, {});
    this.value = value;
  }
  clone() {
    return new VNodeText(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return makeNativeTextDom(this.value);
  }
  makeElement() {
    if (this.el)
      return this;
    this.el = this.createElement();
    return this;
  }
  makeHtml() {
    return this.value;
  }
}
class VNodeComment extends VNode {
  constructor(value) {
    super(VNodeType.COMMENT, null, {});
    this.value = value;
  }
  clone() {
    return new VNodeComment(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  createElement() {
    return makeNativeCommentDom(this.value);
  }
  makeElement() {
    if (this.el)
      return this;
    this.el = this.createElement();
    return this;
  }
  makeHtml() {
    return this.value;
  }
}
class VNodeFragment extends VNode {
  constructor(props = {}, children2) {
    super(VNodeType.FRAGMENT, "fragment", props || {}, children2);
  }
  clone() {
    return new VNodeFragment(this.props, this.children.map((it) => it.clone()));
  }
  makeElement(withChildren = false, options = {}) {
    if (this.el)
      return this;
    const el = document.createDocumentFragment();
    this.el = el;
    this.makeChildren(withChildren, options);
    return this;
  }
  async makeHtml(withChildren = false, options = {}) {
    return await this.makeChildrenHtml(withChildren, options);
  }
}
class VNodeComponent extends VNode {
  constructor(props = {}, children2, Component) {
    super(VNodeType.COMPONENT, "object", props || {}, children2);
    this.Component = Component;
    this.instance = null;
  }
  clone() {
    return new VNodeComponent(this.props, this.children.map((it) => it.clone()), this.Component);
  }
  mounted() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.onMounted();
  }
  makeClassInstance(options) {
    var _a, _b, _c;
    const props = this.props;
    this.Component = getModule(this.Component);
    const hooks = (_a = this.instance) == null ? void 0 : _a.copyHooks();
    const state = (_b = this.instance) == null ? void 0 : _b.state;
    const oldId = (_c = this.instance) == null ? void 0 : _c.id;
    this.instance = options.context.createInstanceForComponent(this.Component, props, options, state || {});
    if (oldId) {
      this.instance.setId(oldId);
    }
    if (hooks) {
      this.instance.reloadHooks(hooks);
    }
    return this.instance;
  }
  render(options) {
    this.makeClassInstance(options);
    this.instance.render();
  }
  async renderHtml(options) {
    this.makeClassInstance(options);
    return await this.instance.renderToHtml();
  }
  makeElement(withChildren, options = {}) {
    if (this.el)
      return this;
    this.render(options);
    this.el = this.instance.$el.el;
    const id = this.props.ref || this.instance.id;
    isFunction(options.registerChildComponent) && options.registerChildComponent(this.el, this.instance, id);
    return this;
  }
  async makeHtml(withChildren, options = {}) {
    return await this.renderHtml(options);
  }
}
class VNodeElement extends VNode {
  constructor(el) {
    super(VNodeType.ELEMENT, null, {});
    this.el = el;
    this.outerHTML = el.outerHTML;
    this.pass = true;
  }
  clone() {
    return new VNodeElement(this.el);
  }
  makeElement() {
    return this;
  }
}
function createVNode({ tag, props = {}, children: children2 }) {
  return new VNode(VNodeType.NODE, tag, props, children2);
}
function createVNodeComponent({ props = {}, children: children2, Component }) {
  return new VNodeComponent(props, children2, Component);
}
function createVNodeFragment({ props = {}, children: children2 }) {
  return new VNodeFragment(props, children2);
}
function createVNodeText(text) {
  return new VNodeText(text);
}
function createVNodeComment(text) {
  return new VNodeComment(text);
}
function createVNodeElement(el) {
  return new VNodeElement(el);
}
function htmlToVNode(html) {
  const $dom = Dom.createByHTML(html);
  return createVNodeByDom($dom.el);
}
function createVNodeByDom(el) {
  return createVNode({
    tag: el.tagName.toLowerCase(),
    props: getProps$1(el.attributes),
    children: children$1(el).map((it) => {
      return createVNodeByDom(it);
    })
  });
}
function cloneVNode(vnode) {
  return vnode.clone();
}
function jsonToVNode(json) {
  const _a = json, { children: children2 = [] } = _a, rest = __objRest(_a, ["children"]);
  if (typeof json === "string" || typeof json === "number") {
    return createVNodeText(json);
  }
  if (rest.type === "comment") {
    return createVNodeComment(rest.text);
  }
  if (rest.type === "text") {
    return createVNodeText(rest.text);
  }
  if (rest.type === "fragment") {
    return createVNodeFragment(__spreadProps(__spreadValues({}, rest), {
      children: children2.map((it) => jsonToVNode(it))
    }));
  }
  if (rest.type === "component" || rest.Component) {
    return createVNodeComponent(__spreadProps(__spreadValues({}, rest), {
      children: children2.map((it) => jsonToVNode(it))
    }));
  }
  return createVNode(__spreadProps(__spreadValues({}, rest), {
    children: children2.map((it) => jsonToVNode(it))
  }));
}
class BaseStore {
  constructor() {
    this.id = uuidShort();
    this.cachedCallback = {};
    this.callbacks = {};
    this.settings = /* @__PURE__ */ new Map();
  }
  get(key, defaultValue2 = void 0) {
    if (this.settings.has(key) === false) {
      return defaultValue2;
    }
    return this.settings.get(key);
  }
  set(key, value) {
    const oldValue = this.settings.get(key);
    if (oldValue !== value) {
      this.settings.set(key, value);
      this.sendMessage(this, key, value);
    }
  }
  init(key, value) {
    this.set(key, value, false);
  }
  toggle(key) {
    this.set(key, !this.get(key));
  }
  toggleWith(key, firstValue, secondValue) {
    if (this.get(key) === firstValue) {
      this.set(key, secondValue);
    } else {
      this.set(key, firstValue);
    }
  }
  true(key) {
    return this.get(key) === true;
  }
  false(key) {
    return this.get(key) === false;
  }
  is(key, value) {
    return this.get(key) === value;
  }
  remove(key) {
    this.settings.delete(key);
  }
  hasCallback(event, callback) {
    var list = this.getCachedCallbacks(event);
    return list.some((f) => f.originalCallback === callback);
  }
  getCallbacks(event) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [];
    }
    return this.callbacks[event];
  }
  setCallbacks(event, list = []) {
    this.callbacks[event] = list;
  }
  on(event, originalCallback, context, debounceDelay = 0, throttleDelay = 0, enableAllTrigger = false, enableSelfTrigger = false, beforeMethods = [], frame = false) {
    var callback = originalCallback;
    if (debounceDelay > 0)
      callback = debounce(originalCallback, debounceDelay);
    else if (throttleDelay > 0)
      callback = throttle(originalCallback, throttleDelay);
    if (beforeMethods.length) {
      callback = ifCheck(callback, context, beforeMethods);
    }
    if (frame) {
      callback = makeRequestAnimationFrame(callback, context, originalCallback.name);
    }
    this.getCallbacks(event).push({
      event,
      callback,
      context,
      originalCallback,
      enableAllTrigger,
      enableSelfTrigger
    });
    return () => {
      this.off(event, originalCallback);
    };
  }
  off(event, originalCallback) {
    if (arguments.length == 1) {
      this.setCallbacks(event);
    } else if (arguments.length == 2) {
      this.setCallbacks(event, this.getCallbacks(event).filter((f) => {
        return f.originalCallback !== originalCallback;
      }));
    }
  }
  offAll(context) {
    Object.keys(this.callbacks).forEach((event) => {
      this.setCallbacks(event, this.getCallbacks(event).filter((f) => {
        return f.context !== context;
      }));
    });
  }
  getCachedCallbacks(event) {
    return this.getCallbacks(event);
  }
  sendMessage(source, event, ...args) {
    this.sendMessageList(source, [[event, ...args]]);
  }
  runMessage(runnableFunction, args) {
    const result = runnableFunction.callback.apply(runnableFunction.context, args);
    if (isNotUndefined(result)) {
      if (result === false) {
        return;
      } else if (isFunction(result)) {
        result();
        return;
      }
    }
  }
  sendMessageList(source, messages = []) {
    window.Promise.resolve().then(() => {
      messages.forEach(([event, ...args]) => {
        var list = this.getCachedCallbacks(event);
        if (list && list.length) {
          const runnableFunctions = list.filter((f) => !f.enableSelfTrigger).filter((f) => f.enableAllTrigger || f.originalCallback.source !== source);
          let i = runnableFunctions.length;
          while (i--) {
            const f = runnableFunctions[i];
            this.runMessage(f, args);
          }
        }
      });
    });
  }
  nextSendMessage(source, callback, ...args) {
    window.Promise.resolve().then(() => {
      callback(...args);
    });
  }
  triggerMessage(source, event, ...args) {
    window.Promise.resolve().then(() => {
      var list = this.getCachedCallbacks(event);
      if (list) {
        const runnableFunctions = list.filter((f) => f.context.source === source);
        runnableFunctions.forEach((f) => {
          f.callback.apply(f.context, args);
        });
      }
    });
  }
  emit(event, ...args) {
    if (isFunction(event)) {
      event(...args);
    } else if (isArray(event)) {
      this.sendMessageList(this.source, event);
    } else {
      this.sendMessage(this.source, event, ...args);
    }
  }
  nextTick(callback) {
    this.nextSendMessage(this.source, callback);
  }
  trigger(event, ...args) {
    if (isFunction(event)) {
      event(...args);
    } else {
      this.triggerMessage(this.source, event, ...args);
    }
  }
}
const booleanTypes = new Map(Object.entries({
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
  allowpaymentrequest: true
}));
const expectKeys = {
  content: true
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
      el[name] = void 0;
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
      el.setAttribute(name, value);
      el[name] = value;
    }
  },
  removeProp(el, name) {
    el.removeAttribute(name);
    if (isBooleanType(name)) {
      el[name] = false;
    } else if (name) {
      el[name] = void 0;
    }
  },
  updateProp(node, name, newValue, oldValue) {
    if (isUndefined(newValue)) {
      this.removeProp(node, name);
    } else if (!oldValue || newValue != oldValue) {
      this.setProp(node, name, newValue);
    }
  },
  replaceWith(oldEl, newVNode, options) {
    const objectElement = newVNode.makeElement(true, options).el;
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
    parentElement.insertBefore(newVNode.makeElement(true, options).el, oldEl);
    parentElement.removeChild(oldEl);
    newVNode.runMounted();
  },
  appendChild(el, newVNode, options) {
    el.appendChild(newVNode.makeElement(true, options).el);
    newVNode.runMounted();
  },
  removeChild(parentElement, oldEl) {
    parentElement.removeChild(oldEl);
  }
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
  changed(vNode, node2) {
    return (vNode.type === VNodeType.TEXT || vNode.type === VNodeType.COMMENT) && vNode.textContent !== node2.textContent || vNode.nodeName !== node2.nodeName.toUpperCase();
  },
  hasPassed(vNode) {
    return vNode.pass;
  },
  hasRefClass(vNode) {
    return vNode.Component;
  }
};
const updateProps = (node, newProps = {}, oldProps = {}) => {
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    return;
  }
  newPropsKeys.forEach((key) => {
    if (!expectKeys[key]) {
      patch.updateProp(node, key, newProps[key], oldProps[key]);
    }
  });
  oldPropsKeys.forEach((key) => {
    if (isUndefined(newProps[key])) {
      patch.removeProp(node, key);
    }
  });
};
function omitProps(vNode) {
  const props = vNode.props || {};
  const results = {};
  const keys = Object.keys(props);
  if (!keys.length) {
    return results;
  }
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    if (key.startsWith(PREFIX_EVENT)) {
      results[key] = props[key];
    } else {
      if (key === KEY_STYLE) {
        results[key] = vNode.stringifyStyle;
      } else {
        results[key] = props[key];
      }
    }
  }
  return results;
}
function getProps(oldEl, attributes, newProps) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    const name = t.name;
    const value = t.value;
    results[name] = value;
  }
  Object.keys(newProps).forEach((key) => {
    const checkKey = key.startsWith(PREFIX_EVENT) ? key.toLowerCase() : key;
    if (!results[checkKey]) {
      results[key] = oldEl[checkKey];
    }
  });
  return results;
}
function updateChangedElement(parentElement, oldEl, newVNode, options = {}) {
  if (check.isTextNode(oldEl) && !check.isVNodeText(newVNode) || check.isCommentNode(oldEl) && !check.isVNodeComment(newVNode)) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
  } else if (!check.isTextNode(oldEl) && check.isVNodeText(newVNode) || !check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
  } else if (check.isTextNode(oldEl) && check.isVNodeText(newVNode)) {
    patch.replaceText(oldEl, newVNode);
  } else if (check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.replaceComment(oldEl, newVNode);
  } else {
    if (check.hasRefClass(newVNode)) {
      if (isFunction(options.checkRefClass) && options.checkRefClass(oldEl, newVNode)) {
        patch.replaceWith(oldEl, newVNode, options);
        if (isFunction(options.registerChildComponent)) {
          options.registerChildComponent(newVNode.el, newVNode.instance, newVNode.instance.id);
        }
      }
    } else {
      patch.replaceWith(oldEl, newVNode, options);
    }
  }
  return true;
}
function updatePropertyAndChildren(oldEl, newVNode, options = {}) {
  const newVNodeProps = omitProps(newVNode);
  updateProps(oldEl, newVNodeProps, getProps(oldEl, oldEl.attributes, newVNodeProps));
  if (!oldEl.hasChildNodes() && !newVNode.children.length) {
    return;
  }
  var oldChildren = children(oldEl);
  var newChildren = vNodeChildren(newVNode);
  var max = Math.max(oldChildren.length, newChildren.length);
  if (max === 0) {
    return;
  }
  if (oldChildren.length === 0 && newChildren.length > 0) {
    var fragment = document.createDocumentFragment();
    newChildren.forEach((it) => fragment.appendChild(it.makeElement(true, options).el));
    oldEl.appendChild(fragment);
    newChildren.forEach((it) => {
      it.runMounted();
    });
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    oldEl.textContent = "";
  } else {
    for (var i = 0; i < max; i++) {
      updateElement(oldEl, oldChildren[i], newChildren[i], options);
    }
  }
}
function updateElement(parentElement, oldEl, newVNode, options = {}) {
  var _a;
  if (!oldEl && newVNode) {
    patch.appendChild(parentElement, newVNode, options);
    return;
  }
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }
  if (!((_a = newVNode.props) == null ? void 0 : _a.pass)) {
    if (check.hasPassed(newVNode)) {
      if (oldEl.outerHTML !== newVNode.outerHTML) {
        DomDiff(oldEl, newVNode.el, options);
      }
      return;
    }
    if (check.changed(newVNode, oldEl) || check.hasRefClass(newVNode)) {
      updateChangedElement(parentElement, oldEl, newVNode, options);
      return;
    }
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
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function DomVNodeDiff(oldEl, newVNode, options) {
  options = Object.assign({}, DefaultOption, options);
  if (oldEl.nodeType !== 11) {
    updateElement(oldEl.parentElement, oldEl, newVNode, options);
    return;
  }
}
const MAGIC_METHOD_REG = /^@magic:([a-zA-Z][a-zA-Z0-9]*)[\W]{1}(.*)*$/g;
const MAGIC_METHOD = "@magic:";
const SPLITTER = "|";
const FUNC_REGEXP = /(([\$a-z_\-]+)\([^\(\)]*\)|([a-z_\-]+))/gi;
const FUNC_START_CHARACTER = "(";
const FUNC_END_CHARACTER = ")";
const MAGICMETHOD_EXTRA = {
  KEYWORD: "keyword",
  FUNCTION: "function",
  VALUE: "value"
};
class MagicMethod {
  constructor(obj) {
    this.context = obj.context;
    this.originalMethod = obj.originalMethod;
    this.method = obj.method;
    this.args = obj.args;
    this.pipes = obj.pipes;
    this.keys = obj.keys;
    this.__cache = /* @__PURE__ */ new Map();
  }
  setCache(key, value) {
    this.__cache.set(key, value);
  }
  hasCache(key) {
    return this.__cache.has(key);
  }
  getCache(key) {
    return this.__cache.get(key);
  }
  hasKeyword(keyword) {
    if (this.hasCache(keyword)) {
      return this.getCache(keyword);
    }
    let exists = false;
    this.pipes.forEach((pipe) => {
      switch (pipe.type) {
        case MAGICMETHOD_EXTRA.KEYWORD:
          if (pipe.value === keyword) {
            exists = true;
          }
          break;
      }
    });
    this.setCache(keyword, exists);
    return exists;
  }
  hasFunction(funcName) {
    if (this.hasCache(funcName)) {
      return this.getCache(funcName);
    }
    let exists = !!this.getFunction(funcName);
    this.setCache(funcName, exists);
    return exists;
  }
  getFunction(funcName) {
    return this.functions.find((pipe) => pipe.func === funcName);
  }
  getFunctionList(funcName) {
    return this.functions.filter((pipe) => pipe.func === funcName);
  }
  get originalCallback() {
    return this.context[this.originalMethod];
  }
  get keywords() {
    return this.keys[MAGICMETHOD_EXTRA.KEYWORD].map((pipe) => pipe.value);
  }
  get functions() {
    return this.keys[MAGICMETHOD_EXTRA.FUNCTION];
  }
  get values() {
    return this.keys[MAGICMETHOD_EXTRA.VALUE].map((pipe) => pipe.value);
  }
  execute(...args) {
    return this.originalCallback.call(this.context, ...args);
  }
  executeWithContext(context, ...args) {
    return this.originalCallback.call(context, ...args);
  }
  static make(str, ...args) {
    return `${MAGIC_METHOD}${str} ${args.join(SPLITTER)}`;
  }
  static check(str) {
    return str.match(MAGIC_METHOD_REG) !== null;
  }
  static parse(str, context = {}) {
    const matches = str.match(MAGIC_METHOD_REG);
    if (!matches) {
      return void 0;
    }
    const result = matches[0].split(MAGIC_METHOD)[1].split(SPLITTER).map((item) => item.trim());
    let [initializer, ...pipes] = result;
    const [method, ...args] = initializer.split(" ");
    const pipeList = pipes.map((it) => {
      return this.parsePipe(it);
    }).filter((it) => it.value);
    const pipeObjects = {
      function: [],
      keyword: [],
      value: []
    };
    pipeList.forEach((pipe) => {
      if (pipe.type === "function") {
        pipeObjects.function.push(pipe);
      } else if (pipe.type === "keyword") {
        pipeObjects.keyword.push(pipe);
      } else {
        pipeObjects.value.push(pipe);
      }
    });
    return new MagicMethod({
      context,
      originalMethod: str,
      method,
      args,
      pipes: pipeList,
      keys: pipeObjects
    });
  }
  static parsePipe(it) {
    const result = it.match(FUNC_REGEXP);
    if (!result) {
      return {
        type: "value",
        value: it
      };
    }
    const [value] = result;
    if (value.includes(FUNC_START_CHARACTER)) {
      const [func, rest] = value.split(FUNC_START_CHARACTER);
      const [args] = rest.split(FUNC_END_CHARACTER);
      return {
        type: "function",
        value,
        func,
        args: args.split(",").map((it2) => it2.trim()).filter(Boolean)
      };
    }
    return {
      type: "keyword",
      value: result[0]
    };
  }
}
const makeEventChecker = (value, split = SPLITTER) => {
  return ` ${split} ${value}`;
};
const MULTI_PREFIX = "ME@";
const PIPE = (...args) => {
  return args.join(SPLITTER);
};
const EVENT = (...args) => {
  return MULTI_PREFIX + PIPE(...args);
};
const COMMAND = EVENT;
const ON = EVENT;
const NAME_SAPARATOR = ":";
const SAPARATOR = " ";
const refManager = {};
const DOM_EVENT_MAKE = (...keys) => {
  var key = keys.join(NAME_SAPARATOR);
  return (...args) => {
    const [selector, ...result] = args;
    return MagicMethod.make("domevent", [key, selector].join(" "), ...result);
  };
};
const SUBSCRIBE_EVENT_MAKE = (...args) => {
  return MagicMethod.make("subscribe", ...args);
};
const CALLBACK_EVENT_MAKE = (...args) => {
  return MagicMethod.make("callback", ...args);
};
const OBSERVER_EVENT_MAKE = (...args) => {
  return MagicMethod.make("observer", ...args);
};
const CHECKER = (value, split = SPLITTER) => {
  return makeEventChecker(value, split);
};
const AFTER = (value, split = SPLITTER) => {
  return CHECKER(`after(${value})`, split);
};
const BEFORE = (value, split = SPLITTER) => {
  return CHECKER(`before(${value})`, split);
};
const IF = CHECKER;
const KEY = CHECKER;
const ARROW_UP = CHECKER("ArrowUp");
const ARROW_DOWN = CHECKER("ArrowDown");
const ARROW_LEFT = CHECKER("ArrowLeft");
const ARROW_RIGHT = CHECKER("ArrowRight");
const ENTER = CHECKER("Enter");
const SPACE = CHECKER("Space");
const ESCAPE = CHECKER("Escape");
const BACKSPACE = CHECKER("Backspace");
const DELETE = CHECKER("Delete");
const EQUAL = CHECKER("Equal");
const MINUS = CHECKER("Minus");
const BRACKET_RIGHT = CHECKER("BracketRight");
const BRACKET_LEFT = CHECKER("BracketLeft");
const ALT = CHECKER("isAltKey");
const SHIFT = CHECKER("isShiftKey");
const META = CHECKER("isMetaKey");
const CONTROL = CHECKER("isCtrlKey");
const MOUSE = CHECKER("hasMouse");
const TOUCH = CHECKER("hasTouch");
const PEN = CHECKER("hasPen");
const SELF = CHECKER("self");
const LEFT_BUTTON = CHECKER("isMouseLeftButton");
const RIGHT_BUTTON = CHECKER("isMouseRightButton");
const FIT = CHECKER("fit");
const PASSIVE = CHECKER("passive");
const DOMDIFF = CHECKER("domdiff");
const DEBOUNCE = (t = 100) => {
  return CHECKER(`debounce(${t})`);
};
const DELAY = (t = 300) => {
  return CHECKER(`delay(${t})`);
};
const D1000 = DEBOUNCE(1e3);
const THROTTLE = (t = 100) => {
  return CHECKER(`throttle(${t})`);
};
const ALL_TRIGGER = CHECKER("allTrigger()");
const SELF_TRIGGER = CHECKER("selfTrigger()");
const FRAME = CHECKER("frame()");
const PARAMS = (obj) => {
  return CHECKER(`params(${variable(obj)})`);
};
const CAPTURE = CHECKER("capture()");
const PREVENT = AFTER(`preventDefault`);
const STOP = AFTER(`stopPropagation`);
const SUBSCRIBE = SUBSCRIBE_EVENT_MAKE;
const SUBSCRIBE_ALL = (...args) => SUBSCRIBE_EVENT_MAKE(...args, ALL_TRIGGER);
const SUBSCRIBE_SELF = (...args) => SUBSCRIBE_EVENT_MAKE(...args, SELF_TRIGGER);
const CONFIG = (config, ...args) => SUBSCRIBE_EVENT_MAKE(`config:${config}`, ...args);
const CALLBACK = CALLBACK_EVENT_MAKE;
const RAF = CALLBACK("requestAnimationFrame");
const OBSERVER = OBSERVER_EVENT_MAKE;
const CUSTOM = DOM_EVENT_MAKE;
const CLICK = DOM_EVENT_MAKE("click");
const DOUBLECLICK = DOM_EVENT_MAKE("dblclick");
const MOUSEDOWN = DOM_EVENT_MAKE("mousedown");
const MOUSEUP = DOM_EVENT_MAKE("mouseup");
const MOUSEMOVE = DOM_EVENT_MAKE("mousemove");
const MOUSEOVER = DOM_EVENT_MAKE("mouseover");
const MOUSEOUT = DOM_EVENT_MAKE("mouseout");
const MOUSEENTER = DOM_EVENT_MAKE("mouseenter");
const MOUSELEAVE = DOM_EVENT_MAKE("mouseleave");
const TOUCHSTART = DOM_EVENT_MAKE("touchstart");
const TOUCHMOVE = DOM_EVENT_MAKE("touchmove");
const TOUCHEND = DOM_EVENT_MAKE("touchend");
const KEYDOWN = DOM_EVENT_MAKE("keydown");
const KEYUP = DOM_EVENT_MAKE("keyup");
const KEYPRESS = DOM_EVENT_MAKE("keypress");
const DRAG = DOM_EVENT_MAKE("drag");
const DRAGSTART = DOM_EVENT_MAKE("dragstart");
const DROP = DOM_EVENT_MAKE("drop");
const DRAGOVER = DOM_EVENT_MAKE("dragover");
const DRAGENTER = DOM_EVENT_MAKE("dragenter");
const DRAGLEAVE = DOM_EVENT_MAKE("dragleave");
const DRAGEXIT = DOM_EVENT_MAKE("dragexit");
const DRAGOUT = DOM_EVENT_MAKE("dragout");
const DRAGEND = DOM_EVENT_MAKE("dragend");
const CONTEXTMENU = DOM_EVENT_MAKE("contextmenu");
const CHANGE = DOM_EVENT_MAKE("change");
const INPUT = DOM_EVENT_MAKE("input");
const FOCUS = DOM_EVENT_MAKE("focus");
const FOCUSIN = DOM_EVENT_MAKE("focusin");
const FOCUSOUT = DOM_EVENT_MAKE("focusout");
const BLUR = DOM_EVENT_MAKE("blur");
const PASTE = DOM_EVENT_MAKE("paste");
const RESIZE = DOM_EVENT_MAKE("resize");
const SCROLL = DOM_EVENT_MAKE("scroll");
const SUBMIT = DOM_EVENT_MAKE("submit");
const POINTERSTART = (...args) => {
  return CUSTOM("pointerdown")(...args) + LEFT_BUTTON;
};
const POINTEROVER = CUSTOM("pointerover");
const POINTERENTER = CUSTOM("pointerenter");
const POINTEROUT = CUSTOM("pointerout");
const POINTERLEAVE = CUSTOM("pointerleave");
const POINTERMOVE = CUSTOM("pointermove");
const POINTEREND = CUSTOM("pointerup");
const CHANGEINPUT = CUSTOM("change", "input");
const WHEEL = CUSTOM("wheel", "mousewheel", "DOMMouseScroll");
const ANIMATIONSTART = DOM_EVENT_MAKE("animationstart");
const ANIMATIONEND = DOM_EVENT_MAKE("animationend");
const ANIMATIONITERATION = DOM_EVENT_MAKE("animationiteration");
const TRANSITIONSTART = DOM_EVENT_MAKE("transitionstart");
const TRANSITIONEND = DOM_EVENT_MAKE("transitionend");
const TRANSITIONRUN = DOM_EVENT_MAKE("transitionrun");
const TRANSITIONCANCEL = DOM_EVENT_MAKE("transitioncancel");
const DOUBLETAB = CUSTOM("doubletab");
const POPSTATE = CUSTOM("popstate");
const ORIENTATIONCHANGE = CUSTOM("orientationchange");
const HASHCHANGE = CUSTOM("hashchange");
const LOAD = (value = "$el") => {
  return MagicMethod.make("load", value);
};
const getRef = (id) => {
  return refManager[id] || "";
};
const BIND_CHECK_FUNCTION = (field) => {
  return function() {
    return this.prevState[field] != this.state[field];
  };
};
const BIND_CHECK_DEFAULT_FUNCTION = () => {
  return true;
};
const BIND = (value = "$el") => {
  return MagicMethod.make("bind", value);
};
function normalizeWheelEvent(e) {
  let dx = e.deltaX;
  let dy = e.deltaY;
  if (dx === 0 && e.shiftKey) {
    [dy, dx] = [dx, dy];
  }
  if (e.deltaMode === window.WheelEvent.DOM_DELTA_LINE) {
    dy *= 8;
  } else if (e.deltaMode === window.WheelEvent.DOM_DELTA_PAGE) {
    dy *= 24;
  }
  return [limit(dx, 24), limit(dy, 24), 0];
}
function limit(delta, maxDelta) {
  return Math.sign(delta) * Math.min(maxDelta, Math.abs(delta));
}
var Event = {
  addDomEvent(eventTarget, eventName, callback, useCapture = false) {
    if (eventTarget) {
      eventTarget.addEventListener(eventName, callback, useCapture);
    }
  },
  removeDomEvent(eventTarget, eventName, callback) {
    if (eventTarget) {
      eventTarget.removeEventListener(eventName, callback);
    }
  },
  pos(e) {
    if (e.touches && e.touches[0]) {
      return e.touches[0];
    }
    return e;
  },
  posXY(e) {
    var pos = this.pos(e);
    return {
      x: pos.pageX,
      y: pos.pageY
    };
  }
};
class BaseHandler {
  constructor(context, options = {}) {
    this.context = context;
    this.options = options;
  }
  initialize() {
  }
  load() {
  }
  refresh() {
  }
  render() {
  }
  getRef(id) {
    return this.context.getRef(id);
  }
  run() {
  }
  destroy() {
  }
}
const scrollBlockingEvents = {
  touchstart: true,
  touchmove: true,
  mousedown: true,
  mouseup: true,
  mousemove: true
};
const eventConverts = {
  doubletab: "touchend"
};
const customEventNames = {
  doubletab: true
};
const selfCheckMethods = {
  self(e) {
    return e && e.$dt && e.$dt.is(e.target);
  },
  isAltKey(e) {
    return e.altKey;
  },
  isCtrlKey(e) {
    return e.ctrlKey;
  },
  isShiftKey(e) {
    return e.shiftKey;
  },
  isMetaKey(e) {
    return e.metaKey || e.key == "Meta" || e.code.indexOf("Meta") > -1;
  },
  isMouseLeftButton(e) {
    return e.buttons === 1;
  },
  isMouseRightButton(e) {
    return e.buttons === 2;
  },
  hasMouse(e) {
    return e.pointerType === "mouse";
  },
  hasTouch(e) {
    return e.pointerType === "touch";
  },
  hasPen(e) {
    return e.pointerType === "pen";
  },
  preventDefault(e) {
    e.preventDefault();
    return true;
  },
  stopPropagation(e) {
    e.stopPropagation();
    return true;
  }
};
class DomEventHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    this.destroy();
    if (this._domEvents && this.context.notEventRedefine) {
      return;
    }
    if (!this._domEvents || this._domEvents.length === 0 || this._bindings.length === 0) {
      this._domEvents = this.context.filterMethodes("domevent");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._domEvents) == null ? void 0 : _b.length)) {
      this._domEvents.forEach((it) => this.parseDomEvent(it));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeEventAll();
    }
  }
  getCallback(field) {
    return this.context[field] || selfCheckMethods[field];
  }
  removeEventAll() {
    this.getBindings().forEach((obj) => {
      this.removeDomEvent(obj);
    });
    this.initBindings();
  }
  removeDomEvent({ eventName, dom, callback }) {
    Event.removeDomEvent(dom, eventName, callback);
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  matchPath(el, selector) {
    if (el) {
      if (el.matches(selector)) {
        return el;
      }
      return this.matchPath(el.parentElement, selector);
    }
    return null;
  }
  hasDelegate(e, eventObject) {
    return this.matchPath(e.target || e.srcElement, eventObject.delegate);
  }
  makeCallback(eventObject, magicMethod, callback) {
    if (eventObject.delegate) {
      return this.makeDelegateCallback(eventObject, magicMethod, callback);
    } else {
      return this.makeDefaultCallback(eventObject, magicMethod, callback);
    }
  }
  makeDefaultCallback(eventObject, magicMethod, callback) {
    return (e) => {
      var returnValue = this.runEventCallback(e, eventObject, magicMethod, callback);
      if (isNotUndefined(returnValue)) {
        return returnValue;
      }
    };
  }
  makeDelegateCallback(eventObject, magicMethod, callback) {
    return (e) => {
      const delegateTarget = this.hasDelegate(e, eventObject);
      if (delegateTarget) {
        e.$dt = Dom.create(delegateTarget);
        var returnValue = this.runEventCallback(e, eventObject, magicMethod, callback);
        if (isNotUndefined(returnValue)) {
          return returnValue;
        }
      }
    };
  }
  runEventCallback(e, eventObject, magicMethod, callback) {
    const context = this.context;
    e.xy = Event.posXY(e);
    if (eventObject.beforeMethods.length) {
      eventObject.beforeMethods.every((before) => {
        return this.getCallback(before.target).call(context, e, before.param);
      });
    }
    if (this.checkEventType(e, eventObject)) {
      var returnValue = callback(e, e.$dt, e.xy);
      if (returnValue !== false && eventObject.afterMethods.length) {
        eventObject.afterMethods.forEach((after) => {
          return this.getCallback(after.target).call(context, e, after.param);
        });
      }
      return returnValue;
    }
  }
  checkEventType(e, eventObject) {
    const context = this.context;
    var hasKeyCode = true;
    if (eventObject.codes.length) {
      hasKeyCode = (e.code ? eventObject.codes.indexOf(e.code.toLowerCase()) > -1 : false) || (e.key ? eventObject.codes.indexOf(e.key.toLowerCase()) > -1 : false);
    }
    var isAllCheck = true;
    if (eventObject.checkMethodList.length) {
      isAllCheck = eventObject.checkMethodList.every((field) => {
        var fieldValue = this.getCallback(field);
        if (isFunction(fieldValue) && fieldValue) {
          return fieldValue.call(context, e);
        } else if (isNotUndefined(fieldValue)) {
          return !!fieldValue;
        }
        return true;
      });
    }
    return hasKeyCode && isAllCheck;
  }
  getDefaultDomElement(dom) {
    const context = this.context;
    let el;
    if (dom) {
      el = context.refs[dom] || context[dom] || window[dom];
    } else {
      el = context.el || context.$el || context.$root;
    }
    if (el instanceof Dom) {
      return el.getElement();
    }
    return el;
  }
  getRealEventName(eventName) {
    return eventConverts[eventName] || eventName;
  }
  getCustomEventName(eventName) {
    return customEventNames[eventName] ? eventName : "";
  }
  getDefaultEventObject(eventName, dom, delegate, magicMethod, callback) {
    var _a, _b;
    const obj = {
      eventName: this.getRealEventName(eventName),
      customEventName: this.getCustomEventName(eventName),
      callback
    };
    const [, , ...delegates] = magicMethod.args;
    obj.dom = this.getDefaultDomElement(dom);
    obj.delegate = delegates.join(SAPARATOR);
    obj.beforeMethods = [];
    obj.afterMethods = [];
    obj.codes = [];
    obj.checkMethodList = [];
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    if (debounceFunction) {
      var debounceTime = +(((_a = debounceFunction.args) == null ? void 0 : _a[0]) || 0);
      obj.callback = debounce(callback, debounceTime);
    } else if (throttleFunction) {
      var throttleTime = +(((_b = throttleFunction.args) == null ? void 0 : _b[0]) || 0);
      obj.callback = throttle(callback, throttleTime);
    }
    const afterFunctionList = magicMethod.getFunctionList("after");
    const beforeFunctionList = magicMethod.getFunctionList("before");
    if (afterFunctionList.length) {
      afterFunctionList.forEach((afterFunction) => {
        var r = afterFunction.args[0].split(" ");
        var [target, param] = r;
        obj.afterMethods.push({
          target,
          param
        });
      });
    }
    if (beforeFunctionList.length) {
      beforeFunctionList.forEach((beforeFunction) => {
        var r = beforeFunction.args[0].split(" ");
        var [target, param] = r;
        obj.beforeMethods.push({
          target,
          param
        });
      });
    }
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.getCallback(method)) {
        obj.checkMethodList.push(method);
      } else {
        obj.codes.push(method.toLowerCase());
      }
    });
    return obj;
  }
  addDomEvent(eventObject, magicMethod, callback) {
    eventObject.callback = this.makeCallback(eventObject, magicMethod, callback);
    this.addBinding(eventObject);
    var options = false;
    if (magicMethod.hasKeyword("capture")) {
      options = true;
    }
    if (scrollBlockingEvents[eventObject.eventName]) {
      options = {
        passive: true,
        capture: options
      };
    }
    if (eventObject.dom) {
      Event.addDomEvent(eventObject.dom, eventObject.eventName, eventObject.callback, options);
    }
  }
  makeCustomEventCallback(eventObject, magicMethod, callback) {
    var _a;
    if (eventObject.customEventName === "doubletab") {
      var delay = 300;
      var delayFunction = magicMethod.getFunction("delay");
      if (delayFunction) {
        delay = +(((_a = delayFunction.args) == null ? void 0 : _a[0]) || 0);
      }
      return (...args) => {
        if (!this.doubleTab) {
          this.doubleTab = {
            time: window.performance.now()
          };
        } else {
          if (window.performance.now() - this.doubleTab.time < delay) {
            callback(...args);
          }
          this.doubleTab = null;
        }
      };
    }
    return callback;
  }
  bindingDomEvent([eventName, dom, ...delegate], magicMethod, callback) {
    let eventObject = this.getDefaultEventObject(eventName, dom, delegate, magicMethod, callback);
    eventObject.callback = this.makeCustomEventCallback(eventObject, magicMethod, eventObject.callback);
    this.addDomEvent(eventObject, magicMethod, eventObject.callback);
  }
  getEventNames(eventName) {
    let results = [];
    eventName.split(NAME_SAPARATOR).forEach((e) => {
      var arr = e.split(NAME_SAPARATOR);
      results.push.apply(results, arr);
    });
    return results;
  }
  parseDomEvent(it) {
    const context = this.context;
    var arr = it.args;
    if (arr) {
      var eventNames = this.getEventNames(arr[0]);
      var callback = context[it.originalMethod].bind(context);
      for (let i = 0, len = eventNames.length; i < len; i++) {
        arr[0] = eventNames[i];
        this.bindingDomEvent(arr, it, callback);
      }
    }
  }
}
class ObserverHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    if (this._observers && this.context.notEventRedefine) {
      return;
    }
    if (!this._observers || this._observers.length === 0) {
      this._observers = this.context.filterMethodes("observer");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._observers) == null ? void 0 : _b.length)) {
      this._observers.forEach((it) => this.parseObserver(it));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeEventAll();
    }
  }
  removeEventAll() {
    this.getBindings().forEach((observer) => {
      this.disconnectObserver(observer);
    });
    this.initBindings();
  }
  disconnectObserver(observer) {
    observer == null ? void 0 : observer.disconnect();
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  addObserver(observer) {
    this.addBinding(observer);
  }
  getDefaultDomElement(dom) {
    const context = this.context;
    let el;
    if (dom) {
      el = context.refs[dom] || context[dom] || window[dom];
    } else {
      el = context.el || context.$el || context.$root;
    }
    if (el instanceof Dom) {
      return el.getElement();
    }
    return el;
  }
  createObserver(magicMethod, callback) {
    var _a;
    const [observerType, observerTarget] = magicMethod.args || ["intersection"];
    const $target = this.getDefaultDomElement(observerTarget);
    const params = magicMethod.getFunction("params");
    const options = getVariable((_a = params == null ? void 0 : params.args) == null ? void 0 : _a[0]);
    let observer;
    switch (observerType) {
      case "intersection":
        if (options.root) {
          options.root = this.getDefaultDomElement(options.root);
        }
        observer = new window.IntersectionObserver(callback, options || {});
        observer.observe($target);
        break;
      case "mutation":
        observer = new window.MutationObserver(callback);
        observer.observe($target, options || {
          attributes: true,
          characterData: true,
          childList: true
        });
        break;
      case "performance":
        observer = new window.PerformanceObserver(callback);
        observer.observe(options || {
          entryTypes: ["paint"]
        });
        break;
    }
    return observer;
  }
  bindingObserver(magicMethod, callback) {
    this.addObserver(this.createObserver(magicMethod, callback));
  }
  parseObserver(it) {
    const context = this.context;
    var originalCallback = context[it.originalMethod].bind(context);
    this.bindingObserver(it, originalCallback);
  }
}
class StoreHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    if (!this._callbacks) {
      this._callbacks = this.context.filterMethodes("subscribe");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._callbacks) == null ? void 0 : _b.length)) {
      this._callbacks.forEach((key) => this.parseSubscribe(key));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.context.$store.offAll(this.context);
    }
  }
  getCallback(field) {
    return this.context[field];
  }
  getBindings() {
    if (!this._bindings) {
      this.initBindings();
    }
    return this._bindings;
  }
  addBinding(obj) {
    this.getBindings().push(obj);
  }
  initBindings() {
    this._bindings = [];
  }
  createLocalCallback(event, callback) {
    var newCallback = callback.bind(this.context);
    newCallback.displayName = `${this.context.sourceName}.${event}`;
    newCallback.source = this.context.source;
    return newCallback;
  }
  parseSubscribe(magicMethod) {
    var _a, _b;
    const events = magicMethod.args.join(" ");
    const checkMethodList = [];
    const eventList = [];
    let debounce2 = 0;
    let throttle2 = 0;
    let isAllTrigger = false;
    let isSelfTrigger = false;
    let isFrameTrigger = false;
    const debounceFunction = magicMethod.getFunction("debounce");
    const throttleFunction = magicMethod.getFunction("throttle");
    const allTriggerFunction = magicMethod.getFunction("allTrigger");
    const selfTriggerFunction = magicMethod.getFunction("selfTrigger");
    const frameFunction = magicMethod.getFunction("frame");
    if (debounceFunction) {
      debounce2 = +(((_a = debounceFunction.args) == null ? void 0 : _a[0]) || 0);
    }
    if (throttleFunction) {
      throttle2 = +(((_b = throttleFunction.args) == null ? void 0 : _b[0]) || 0);
    }
    if (allTriggerFunction) {
      isAllTrigger = true;
    }
    if (selfTriggerFunction) {
      isSelfTrigger = true;
    }
    if (frameFunction) {
      isFrameTrigger = true;
    }
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.context[method]) {
        checkMethodList.push(method);
      } else {
        eventList.push(method);
      }
    });
    const originalCallback = this.context[magicMethod.originalMethod];
    [...eventList, events].filter(Boolean).forEach((e) => {
      var callback = this.createLocalCallback(e, originalCallback);
      this.context.$store.on(e, callback, this.context, debounce2, throttle2, isAllTrigger, isSelfTrigger, checkMethodList, isFrameTrigger);
    });
    this.addBinding(magicMethod);
  }
}
let currentComponent = null;
let contextProviderList = {};
function renderFromRoot() {
  renderRootElementInstanceList(true);
}
function useState(initialState) {
  return getCurrentComponent().useState(initialState);
}
function useEffect(callback, deps) {
  return getCurrentComponent().useEffect(callback, deps);
}
function useReducer(reducer, initialState) {
  return getCurrentComponent().useReducer(reducer, initialState);
}
function useMemo(callback, deps) {
  return getCurrentComponent().useMemo(callback, deps);
}
function useCallback(callback, deps) {
  return getCurrentComponent().useCallback(callback, deps);
}
function useRef(initialValue) {
  return getCurrentComponent().useRef(initialValue);
}
function useContext(context) {
  return getCurrentComponent().useContext(context);
}
function useStore(key) {
  return getCurrentComponent().useStore(key);
}
function useSubscribe(name, callback, debounceSecond = 0, throttleSecond = 0, isSelf = false) {
  return getCurrentComponent().useSubscribe(name, callback, debounceSecond, throttleSecond, isSelf);
}
function useSelf(name, callback, debounceSecond = 0, throttleSecond = 0) {
  return getCurrentComponent().useSelf(name, callback, debounceSecond, throttleSecond);
}
function useEmit(name, ...args) {
  return getCurrentComponent().emit(name, ...args);
}
function useTrigger(name, ...args) {
  return getCurrentComponent().trigger(name, ...args);
}
function createContextProvider(context) {
  contextProviderList[context.id] = {
    context,
    index: 0,
    lastProvider: null
  };
}
class InnerProvider {
  constructor(context, provider) {
    this.context = context;
    this.provider = provider;
  }
  get id() {
    return this.provider.id;
  }
  get value() {
    return this.provider.value;
  }
  set(provider) {
    this.provider = provider;
  }
}
function pushContextProvider(context, provider) {
  const innerProvider = new InnerProvider(context, provider);
  const contextInfo = contextProviderList[context.id];
  if (!contextInfo.lastProvider) {
    contextInfo.prevProvider = contextInfo.lastProvider;
    contextInfo.lastProvider = innerProvider;
    contextInfo.lastProvider.prev = contextInfo.prevProvider;
  } else {
    const lastProvider = contextInfo.lastProvider;
    const lastProviderValue = lastProvider.value;
    const lastProviderId = lastProvider.id;
    if (lastProviderId === innerProvider.id) {
      contextInfo.lastProvider.set(innerProvider);
    } else {
      contextInfo.lastProvider.next = innerProvider;
      innerProvider.prev = contextInfo.lastProvider;
      contextInfo.lastProvider = innerProvider;
    }
    if (lastProviderValue !== innerProvider.value) {
      runProviderSubscribe(innerProvider);
    }
  }
}
function popContextProvider(context) {
  const contextInfo = contextProviderList[context.id];
  if (contextInfo.lastProvider && contextInfo.lastProvider.prev) {
    contextInfo.lastProvider = contextInfo.lastProvider.prev;
    if (contextInfo.lastProvider) {
      contextInfo.lastProvider.next = null;
    }
  }
}
function getContextProvider(context) {
  const contextInfo = contextProviderList[context.id];
  return contextInfo.lastProvider;
}
let contextIndex = 0;
function createContext(defaultValue2) {
  const context = {
    id: "context-" + contextIndex++,
    defaultValue: defaultValue2,
    lastProvider: null,
    Provider: function({ value, content }) {
      pushContextProvider(context, {
        value,
        id: this.id,
        component: this
      });
      useEffect(() => {
        popContextProvider(context);
      }, []);
      return content[0] || content;
    }
  };
  context.Consumer = ({ content: [children2] }) => {
    const value = getContextProvider(context).value;
    return children2(value);
  };
  createContextProvider(context);
  return context;
}
function getCurrentComponent() {
  return currentComponent;
}
function resetCurrentComponent(component) {
  currentComponent = component;
}
function renderComponent(component) {
  if (component.isMounted) {
    component.render();
  }
}
const providerEvents = {};
function addProviderSubscribe(providerId, component, callback) {
  if (!providerEvents[providerId]) {
    providerEvents[providerId] = {};
  }
  providerEvents[providerId][component.id] = callback;
}
function runProviderSubscribe(provider) {
  const components = providerEvents[provider.id];
  if (components) {
    Object.values(components).forEach((callback) => {
      callback(provider);
    });
  }
}
class MagicHandler {
  constructor() {
    __privateAdd(this, _handlerCache, {});
    this.handlers = this.initializeHandler();
  }
  initializeHandler(localHandlers = {}) {
    return createHandlerInstance(this, localHandlers);
  }
  loadHandlerCache(func) {
    if (!__privateGet(this, _handlerCache)[func]) {
      __privateGet(this, _handlerCache)[func] = this.handlers.filter((h) => h[func]);
    }
    return __privateGet(this, _handlerCache)[func];
  }
  async runHandlers(func = "run", ...args) {
    await Promise.all(this.loadHandlerCache(func).map(async (h) => {
      await h[func](...args);
    }));
  }
}
_handlerCache = new WeakMap();
const USE_STATE = Symbol("useState");
const USE_EFFECT = Symbol("useEffect");
const USE_MEMO = Symbol("useMemo");
const USE_CONTEXT = Symbol("useContext");
const USE_SUBSCRIBE = Symbol("useSubscribe");
function createState({ value, component }) {
  let localValue = { value, component };
  function getValue(v) {
    if (typeof v === "function") {
      return v(localValue.value);
    }
    return v;
  }
  const update = (newValue) => {
    const _newValue = getValue(newValue);
    if (value.value !== _newValue) {
      localValue.value = _newValue;
      renderComponent(localValue.component);
    }
  };
  return [localValue, update];
}
class HookMachine extends MagicHandler {
  constructor() {
    super(...arguments);
    __privateAdd(this, ___stateHooks, []);
    __privateAdd(this, ___stateHooksIndex, 0);
  }
  copyHooks() {
    return {
      __stateHooks: __privateGet(this, ___stateHooks),
      __stateHooksIndex: __privateGet(this, ___stateHooksIndex)
    };
  }
  reloadHooks(hooks) {
    __privateSet(this, ___stateHooks, hooks.__stateHooks || []);
    __privateSet(this, ___stateHooksIndex, hooks.__stateHooksIndex || 0);
  }
  resetCurrentComponent() {
    this.resetHookIndex();
    resetCurrentComponent(this);
  }
  resetHookIndex() {
    __privateSet(this, ___stateHooksIndex, 0);
  }
  increaseHookIndex() {
    __privateWrapper(this, ___stateHooksIndex)._++;
  }
  getHook() {
    return __privateGet(this, ___stateHooks)[__privateGet(this, ___stateHooksIndex)];
  }
  setHook(type, hookInfo) {
    __privateGet(this, ___stateHooks)[__privateGet(this, ___stateHooksIndex)] = {
      type,
      hookInfo
    };
  }
  useState(initialState) {
    if (!this.getHook()) {
      this.setHook(USE_STATE, createState({ value: initialState, component: this }));
    }
    const [value, update] = this.getHook().hookInfo;
    this.increaseHookIndex();
    return [value.value, update];
  }
  isChangedDeps(deps) {
    const hasDeps = !deps;
    const {
      hookInfo: { deps: currentDeps }
    } = this.getHook() || { hookInfo: {} };
    const hasChangedDeps = currentDeps ? !deps.every((d, i) => d === currentDeps[i]) : true;
    return hasDeps || hasChangedDeps;
  }
  useEffect(callback, deps) {
    const hasChangedDeps = this.isChangedDeps(deps);
    if (hasChangedDeps) {
      this.setHook(USE_EFFECT, {
        deps,
        callback
      });
    }
    this.increaseHookIndex();
  }
  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);
    function dispatch(action) {
      setState((prevState) => reducer(prevState, action));
    }
    return [state, dispatch];
  }
  useMemo(callback, deps) {
    const hasChangedDeps = this.isChangedDeps(deps);
    if (hasChangedDeps) {
      this.setHook(USE_MEMO, {
        deps,
        value: callback()
      });
    }
    const lastHookValue = this.getHook().hookInfo || {};
    this.increaseHookIndex();
    return lastHookValue.value;
  }
  useCallback(callback, deps) {
    return this.useMemo(() => callback, deps);
  }
  useRef(initialValue) {
    return this.useMemo(() => ({ current: initialValue }), []);
  }
  refreshProvider(provider) {
    const hookInfo = this.filterHooks(USE_CONTEXT).find((it) => it.provider.id === provider.id);
    if (hookInfo) {
      hookInfo.provider = provider;
    }
  }
  useContext(context) {
    if (!this.getHook()) {
      this.setHook(USE_CONTEXT, {
        provider: getContextProvider(context),
        component: this
      });
    }
    const { provider } = this.getHook().hookInfo;
    addProviderSubscribe(provider.id, this, () => {
      renderComponent(this);
    });
    this.increaseHookIndex();
    return (provider == null ? void 0 : provider.value) || context.defaultValue;
  }
  useSubscribe(name, callback, debounceSecond = 0, throttleSecond = 0, isSelf = false) {
    if (!this.getHook()) {
      this.setHook(USE_SUBSCRIBE, {
        name,
        callback,
        component: this,
        unsubscribe: this.$store.on(name, callback, this, debounceSecond, throttleSecond, false, isSelf)
      });
    }
    const { unsubscribe } = this.getHook().hookInfo;
    this.increaseHookIndex();
    return unsubscribe;
  }
  useSelf(name, callback, debounceSecond = 0, throttleSecond = 0) {
    return this.useSubscribe(name, callback, debounceSecond, throttleSecond, true);
  }
  useEmit(name, ...args) {
    return this.emit(name, ...args);
  }
  useStore(key) {
    return this.$store.get(key);
  }
  filterHooks(type) {
    return __privateGet(this, ___stateHooks).filter((it) => it.type === type).map((it) => it.hookInfo);
  }
  getUseEffects() {
    return this.filterHooks(USE_EFFECT);
  }
  getUseStates() {
    return this.filterHooks(USE_STATE).map((it) => it.value);
  }
  runHooks() {
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup))
        it.cleanup();
      it.cleanup = it.callback();
    });
  }
  cleanHooks() {
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });
  }
  destroy() {
  }
  onMounted() {
    this.isMounted = true;
    this.runHooks();
  }
  onUpdated() {
    this.runHooks();
  }
  onDestroyed() {
    this.isMounted = false;
    this.cleanHooks();
  }
}
___stateHooks = new WeakMap();
___stateHooksIndex = new WeakMap();
const _EventMachine = class extends HookMachine {
  constructor(opt, props, state) {
    super();
    __privateAdd(this, _reloadInstance);
    __privateAdd(this, _state, {});
    __privateAdd(this, _cachedMethodList, void 0);
    __privateAdd(this, _functionCache, {});
    __privateAdd(this, _childObjectList, {});
    __privateAdd(this, _childObjectElements, /* @__PURE__ */ new WeakMap());
    __publicField(this, "registerRef", (ref, el) => {
      this.refs[ref] = el;
    });
    __publicField(this, "registerChildComponent", (el, childComponent, id) => {
      if (!__privateGet(this, _childObjectElements).has(el)) {
        __privateGet(this, _childObjectList)[id] = el;
        __privateGet(this, _childObjectElements).set(el, childComponent);
      }
    });
    __publicField(this, "checkRefClass", (oldEl, newVNode) => {
      const props = newVNode.props;
      let targetInstance = this.getTargetInstance(oldEl);
      if (targetInstance) {
        if (targetInstance.isInstanceOf(newVNode.Component)) {
          if (targetInstance.isForceRender(props)) {
            return true;
          }
          __privateMethod(this, _reloadInstance, reloadInstance_fn).call(this, targetInstance, props);
          return false;
        } else {
          return true;
        }
      }
      return true;
    });
    this.refs = {};
    this.id = uuid();
    this.initializeProperty(opt, props, state);
  }
  setId(id) {
    this.id = id;
  }
  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler,
      ObserverHandler,
      StoreHandler
    });
  }
  checkProps(props = {}) {
    return props;
  }
  initializeProperty(opt, props = {}, state = {}) {
    this.opt = opt || {};
    this.parent = this.opt;
    this.source = this.id;
    this.sourceName = this.constructor.name;
    this.props = props;
    __privateSet(this, _state, Object.assign({}, __privateGet(this, _state), state));
  }
  createFunction(funcName, func) {
    if (isFunction(func) && !__privateGet(this, _functionCache)[funcName]) {
      __privateGet(this, _functionCache)[funcName] = func;
    }
    return __privateGet(this, _functionCache)[funcName];
  }
  runFunction(funcName, func) {
    const cachedFunction = this.createFunction(funcName, func);
    if (cachedFunction == null ? void 0 : cachedFunction.running) {
      return;
    }
    if (isFunction(cachedFunction)) {
      if (!cachedFunction.running) {
        cachedFunction.running = true;
        cachedFunction.call(this);
      }
    }
    return cachedFunction;
  }
  initState() {
    return {};
  }
  setState(state = {}, isRefresh = true) {
    __privateSet(this, _state, Object.assign({}, __privateGet(this, _state), state));
    if (isRefresh) {
      this.refresh();
    }
  }
  toggleState(key, isLoad = true) {
    this.setState({
      [key]: !__privateGet(this, _state)[key]
    }, isLoad);
  }
  changedProps(newProps) {
    const obj1 = this.props;
    const obj2 = newProps;
    return !isEqual(obj1, obj2, 0);
  }
  _reload(props) {
    if (this.changedProps(props)) {
      this.props = props;
      this.refresh();
    }
  }
  checkLoad($container) {
    window.requestAnimationFrame(() => {
      this.render($container);
    });
  }
  get state() {
    return __privateGet(this, _state);
  }
  get ref() {
    return this.props.ref;
  }
  get children() {
    return Object.fromEntries(Object.entries(__privateGet(this, _childObjectList)).map(([_key, child]) => {
      return [_key, __privateGet(this, _childObjectElements).get(child)];
    }));
  }
  get isPreLoaded() {
    return true;
  }
  getTargetInstance(oldEl) {
    const _target = __privateGet(this, _childObjectElements).get(oldEl);
    if (_target) {
      return _target;
    }
    return void 0;
  }
  isForceRender() {
    return false;
  }
  isInstanceOf(Component) {
    return this instanceof Component;
  }
  async forceRender() {
    this.cleanHooks();
    this.render();
  }
  async render($container) {
    if (!this.isPreLoaded) {
      this.checkLoad($container);
      return;
    }
    this.resetCurrentComponent();
    const template = this.template();
    if (this.$el) {
      DomVNodeDiff(this.$el.el, template, {
        checkRefClass: this.checkRefClass,
        context: this,
        registerRef: this.registerRef,
        registerChildComponent: this.registerChildComponent
      });
      requestAnimationFrame(this.onUpdated.bind(this));
    } else {
      const newDomElement = this.parseMainTemplate(template);
      this.$el = newDomElement;
      this.refs.$el = this.$el;
      if ($container) {
        if ($container.hasChild(this.$el) === false) {
          $container.append(this.$el);
          this.runMounted();
        }
      }
      await this._afterLoad();
    }
    return this;
  }
  async renderToHtml() {
    this.resetCurrentComponent();
    const template = this.template();
    const html = await VNodeToHtml(template, this.getVNodeOptions());
    return html;
  }
  initialize() {
    __privateSet(this, _state, this.initState());
  }
  getRef(...args) {
    const key = args.join("");
    return this.refs[key];
  }
  getVNodeOptions() {
    return {
      context: this,
      registerRef: this.registerRef,
      registerChildComponent: this.registerChildComponent
    };
  }
  parseMainTemplate(html) {
    let $el = VNodeToElement(html, this.getVNodeOptions());
    return $el;
  }
  getFunctionComponent() {
    return this;
  }
  createFunctionComponent(EventMachineComponent, props, BaseClass = _EventMachine, state = {}) {
    class FunctionElement extends BaseClass {
      initializeProperty(opt, props2 = {}, state2 = {}) {
        super.initializeProperty(opt, props2, state2);
        this.sourceName = this.getFunctionComponent().name || this.sourceName;
      }
      getFunctionComponent() {
        return EventMachineComponent;
      }
      isInstanceOf(Component) {
        return EventMachineComponent === Component;
      }
      template() {
        return EventMachineComponent.call(this, this.props);
      }
    }
    return new FunctionElement(this, props, state);
  }
  createInstanceForComponent(EventMachineComponent, props, state) {
    if (EventMachineComponent.__proto__.name === "" && isFunction(EventMachineComponent)) {
      return this.createFunctionComponent(EventMachineComponent, props, void 0, state);
    }
    return new EventMachineComponent(this, props, state);
  }
  refresh() {
    this.render();
  }
  afterRender() {
  }
  async _afterLoad() {
    this.runHandlers("initialize");
    this.afterRender();
  }
  template() {
    return null;
  }
  clear() {
    Object.entries(__privateGet(this, _childObjectList)).forEach(([_key, child]) => {
      if (!child.parentNode) {
        const childInstance = __privateGet(this, _childObjectElements).get(child);
        if (childInstance) {
          childInstance.destroy();
          __privateGet(this, _childObjectElements).delete(child);
          delete __privateGet(this, _childObjectList)[_key];
        }
      }
    });
  }
  clearAll() {
    Object.entries(__privateGet(this, _childObjectList)).forEach(([_key, child]) => {
      const childInstance = __privateGet(this, _childObjectElements).get(child);
      if (childInstance) {
        childInstance.destroy();
        __privateGet(this, _childObjectElements).delete(child);
        delete __privateGet(this, _childObjectList)[_key];
      }
    });
  }
  destroy() {
    Object.entries(__privateGet(this, _childObjectList)).forEach(([_key, child]) => {
      const childInstance = __privateGet(this, _childObjectElements).get(child);
      if (childInstance) {
        childInstance.destroy();
        __privateGet(this, _childObjectElements).delete(child);
        delete __privateGet(this, _childObjectList)[_key];
      }
    });
    this.runHandlers("destroy");
    this.onDestroyed();
    this.refs = {};
  }
  collectMethodes(refreshCache = false) {
    if (!__privateGet(this, _cachedMethodList) || refreshCache) {
      __privateSet(this, _cachedMethodList, collectProps(this, _EventMachine, (name) => MagicMethod.check(name)).map((it) => {
        return MagicMethod.parse(it, this);
      }));
    }
    return __privateGet(this, _cachedMethodList);
  }
  filterMethodes(methodKey, refreshCache = false) {
    return this.collectMethodes(refreshCache).filter((it) => {
      return it.method === methodKey;
    });
  }
  getChildContent(filterCallback, defaultValue2 = "") {
    var _a;
    return ((_a = this.getChild(filterCallback)) == null ? void 0 : _a.props.content) || defaultValue2;
  }
  getChild(filterCallback) {
    return this.props.content.find(filterCallback);
  }
  runMounted() {
    this.onMounted();
  }
  onMounted() {
    var _a;
    super.onMounted();
    const instance = this.getTargetInstance((_a = this.$el) == null ? void 0 : _a.el);
    if (instance) {
      instance.onMounted();
    }
  }
  onUpdated() {
    var _a;
    super.onUpdated();
    const instance = this.getTargetInstance((_a = this.$el) == null ? void 0 : _a.el);
    if (instance) {
      instance.onUpdated();
    }
    this.clear();
  }
  onDestroyed() {
    var _a;
    super.onDestroyed();
    const instance = this.getTargetInstance((_a = this.$el) == null ? void 0 : _a.el);
    if (instance) {
      instance.onDestroyed();
    }
  }
};
let EventMachine = _EventMachine;
_state = new WeakMap();
_cachedMethodList = new WeakMap();
_functionCache = new WeakMap();
_childObjectList = new WeakMap();
_childObjectElements = new WeakMap();
_reloadInstance = new WeakSet();
reloadInstance_fn = function(instance, props) {
  instance._reload(props);
};
const _UIElement = class extends EventMachine {
  constructor(opt, props = {}) {
    super(opt, props);
    __privateAdd(this, _storeInstance, void 0);
    if (props.store) {
      __privateSet(this, _storeInstance, props.store);
    } else {
      if (!this.parent.$store) {
        __privateSet(this, _storeInstance, new BaseStore());
      }
    }
    this.created();
    this.initialize();
  }
  currentContext() {
    return this.contexts[this.contexts.length - 1];
  }
  setStore(storeInstance) {
    __privateSet(this, _storeInstance, storeInstance);
  }
  get $store() {
    return __privateGet(this, _storeInstance) || this.parent.$store;
  }
  async created() {
  }
  createLocalCallback(event, callback) {
    var newCallback = callback.bind(this);
    newCallback.displayName = `${this.sourceName}.${event}`;
    newCallback.source = this.source;
    return newCallback;
  }
  emit(messageName, ...args) {
    this.$store.source = this.source;
    this.$store.sourceContext = this;
    this.$store.emit(messageName, ...args);
  }
  nextTick(callback, delay = 0) {
    window.setTimeout(() => {
      this.$store.nextTick(callback);
    }, delay);
  }
  trigger(messageName, ...args) {
    this.$store.source = this.source;
    this.$store.trigger(messageName, ...args);
  }
  runCallback(callback, ...args) {
    if (this.parent) {
      this.parent.trigger(callback, ...args);
    }
  }
  on(message, callback, debounceDelay = 0, throttleDelay = 0, enableAllTrigger = false, enableSelfTrigger = false, frame = false) {
    this.$store.on(message, callback, this.source, debounceDelay, throttleDelay, enableAllTrigger, enableSelfTrigger, [], frame);
  }
  off(message, callback) {
    this.$store.off(message, callback, this.source);
  }
  subscribe(callback, debounceSecond = 0, throttleSecond = 0) {
    const id = `subscribe.${uuidShort()}`;
    const newCallback = this.createLocalCallback(id, callback);
    this.$store.on(id, newCallback, this, debounceSecond, throttleSecond, false, true);
    return id;
  }
  createFunctionComponent(EventMachineComponent, props, baseClass = _UIElement) {
    return super.createFunctionComponent(EventMachineComponent, props, baseClass);
  }
  static createElementInstance(ElementClass, props) {
    if (ElementClass.__proto__.name === "") {
      class FunctionElement extends _UIElement {
        template() {
          return ElementClass.call(this, this.props);
        }
      }
      return new FunctionElement(props, props);
    } else {
      return new ElementClass(props, props);
    }
  }
};
let UIElement = _UIElement;
_storeInstance = new WeakMap();
const start = (ElementClass, opt = {}) => {
  const $container = Dom.create(opt.container || document.body);
  const $targetElement = $container.children().find((it) => it.el.__component);
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }
  const app = UIElement.createElementInstance(ElementClass, opt);
  if ($targetElement) {
    app.$el = Dom.create($targetElement.el);
    app.id = $targetElement.el.__component.id;
    app.render();
  } else {
    app.render($container);
  }
  app.$el.el.__component = app;
  registRootElementInstance(app);
  return app;
};
async function renderToHtml(ElementClass, opt) {
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }
  const app = UIElement.createElementInstance(ElementClass, opt);
  const html = await app.renderToHtml();
  return html;
}
function createComponent(Component, props = {}, children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeComponent({
    props: props || {},
    children: children2,
    Component
  });
}
function createComponentFragment(Component, props = {}, children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeFragment({
    props: props || {},
    children: children2,
    Component
  });
}
function createComment(children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeComment(children2[0] || "");
}
function createComponentList(...args) {
  return args.map((it) => {
    let ComponentName;
    let props = {};
    let children2 = [];
    if (isString(it)) {
      ComponentName = it;
    } else if (isArray(it)) {
      [ComponentName, props = {}, children2 = []] = it;
    }
    if (children2.length) {
      return createComponent(ComponentName, props || {}, createComponentList(children2));
    }
    return createComponent(ComponentName, props);
  });
}
function createElement(Component, props, children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNode({ tag: Component, props, children: children2 });
}
function createElementJsx(Component, props = {}, ...children2) {
  children2 = children2.filter(Boolean);
  if (Component === FragmentInstance) {
    return createComponentFragment(Component, props, children2);
  }
  if (Component === HTMLComment) {
    return createComment(children2);
  }
  props = props || {};
  if (typeof Component !== "string") {
    return createComponent(Component, props, children2);
  } else {
    return createElement(Component, props, children2);
  }
}
const FragmentInstance = new Object();
const HTMLComment = new Object();
export { AFTER, ALL_TRIGGER, ALT, ANIMATIONEND, ANIMATIONITERATION, ANIMATIONSTART, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, BACKSPACE, BEFORE, BIND, BIND_CHECK_DEFAULT_FUNCTION, BIND_CHECK_FUNCTION, BLUR, BRACKET_LEFT, BRACKET_RIGHT, BaseStore, CALLBACK, CAPTURE, CHANGE, CHANGEINPUT, CHECKER, CLICK, COMMAND, CONFIG, CONTEXTMENU, CONTROL, CUSTOM, D1000, DEBOUNCE, DELAY, DELETE, DOMDIFF, DOUBLECLICK, DOUBLETAB, DRAG, DRAGEND, DRAGENTER, DRAGEXIT, DRAGLEAVE, DRAGOUT, DRAGOVER, DRAGSTART, DROP, Dom, ENTER, EQUAL, ESCAPE, EVENT, FIT, FOCUS, FOCUSIN, FOCUSOUT, FRAME, FUNC_END_CHARACTER, FUNC_REGEXP, FUNC_START_CHARACTER, FragmentInstance, HASHCHANGE, HTMLComment, IF, INPUT, KEY, KEYDOWN, KEYPRESS, KEYUP, LEFT_BUTTON, LOAD, MAGIC_METHOD, MAGIC_METHOD_REG, META, MINUS, MOUSE, MOUSEDOWN, MOUSEENTER, MOUSELEAVE, MOUSEMOVE, MOUSEOUT, MOUSEOVER, MOUSEUP, MagicMethod, NAME_SAPARATOR, OBSERVER, ON, ORIENTATIONCHANGE, PARAMS, PASSIVE, PASTE, PEN, PIPE, POINTEREND, POINTERENTER, POINTERLEAVE, POINTERMOVE, POINTEROUT, POINTEROVER, POINTERSTART, POPSTATE, PREVENT, RAF, RESIZE, RIGHT_BUTTON, SAPARATOR, SCROLL, SELF, SELF_TRIGGER, SHIFT, SPACE, SPLITTER, STOP, SUBMIT, SUBSCRIBE, SUBSCRIBE_ALL, SUBSCRIBE_SELF, THROTTLE, TOUCH, TOUCHEND, TOUCHMOVE, TOUCHSTART, TRANSITIONCANCEL, TRANSITIONEND, TRANSITIONRUN, TRANSITIONSTART, UIElement, VARIABLE_SAPARATOR, VNode, VNodeComment, VNodeComponent, VNodeElement, VNodeFragment, VNodeText, VNodeType, WHEEL, addProviderSubscribe, classnames, clone, cloneVNode, collectProps, combineKeyArray, createComment, createComponent, createComponentFragment, createComponentList, createContext, createElement, createElementJsx, createHandlerInstance, createVNode, createVNodeByDom, createVNodeComment, createVNodeComponent, createVNodeElement, createVNodeFragment, createVNodeText, debounce, defaultValue, get, getContextProvider, getCurrentComponent, getModule, getRef, getRootElementInstanceList, getVariable, hasVariable, htmlToVNode, ifCheck, initializeGroupVariables, isArray, isBoolean, isEqual, isFunction, isNotString, isNotUndefined, isNotZero, isNumber, isObject, isString, isUndefined, isZero, jsonToVNode, keyEach, keyMap, keyMapJoin, makeEventChecker, makeNativeCommentDom, makeNativeDom, makeNativeTextDom, makeOneElement, makeRequestAnimationFrame, normalizeWheelEvent, popContextProvider, recoverVariable, refreshModule, registAlias, registElement, registHandler, registRootElementInstance, registerModule, removeRootElementInstance, renderComponent, renderFromRoot, renderRootElementInstanceList, renderToHtml, resetCurrentComponent, retriveAlias, retriveElement, retriveHandler, runProviderSubscribe, spreadVariable, start, throttle, useCallback, useContext, useEffect, useEmit, useMemo, useReducer, useRef, useSelf, useState, useStore, useSubscribe, useTrigger, uuid, uuidShort, variable };
