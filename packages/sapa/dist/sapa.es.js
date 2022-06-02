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
var _state, _prevState, _localTimestamp, _loadMethods, _timestamp, _cachedMethodList, _props, _propsKeys, _isServer, _propsKeyList, _refreshTimestamp, refreshTimestamp_fn, _setProps, setProps_fn, _getProp, getProp_fn, _storeInstance;
function collectProps(root, filterFunction = () => true) {
  let p = root;
  let results = [];
  do {
    const isObject2 = p instanceof Object;
    if (isObject2 === false) {
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
    const ifResult = checkMethods.every((check) => {
      return context[check].apply(context, args);
    });
    if (ifResult) {
      callback.apply(context, args);
    }
  };
}
function makeRequestAnimationFrame(callback, context) {
  return (...args) => {
    window.requestAnimationFrame(() => {
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
    el.setAttribute(name, value);
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
  if (!newValue) {
    removeProp(node, name, oldValue);
  } else if (!oldValue || newValue !== oldValue) {
    setProp(node, name, newValue);
  } else
    ;
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
function changed(node1, node2) {
  return node1.nodeType === window.Node.TEXT_NODE && node1.textContent !== node2.textContent || node1.nodeName !== node2.nodeName;
}
function hasPassed(node1) {
  if ((node1 == null ? void 0 : node1.nodeType) === 8) {
    return true;
  }
  return node1.nodeType !== window.Node.TEXT_NODE && node1.getAttribute("data-domdiff-pass") === "true";
}
function hasRefClass(node1) {
  return node1.nodeType !== window.Node.TEXT_NODE && node1.getAttribute("refClass");
}
function getProps(attributes) {
  var results = {};
  const len = attributes.length;
  for (let i = 0; i < len; i++) {
    const t = attributes[i];
    results[t.name] = t.value;
  }
  return results;
}
function checkAllHTML(newEl, oldEl) {
  if (newEl.nodeType == window.Node.TEXT_NODE || oldEl.nodeType === window.Node.TEXT_NODE) {
    return false;
  }
  return newEl.outerHTML == oldEl.outerHTML;
}
function updateElement(parentElement, oldEl, newEl, i, options = {}) {
  if (!oldEl) {
    parentElement.appendChild(newEl.cloneNode(true));
  } else if (!newEl) {
    parentElement.removeChild(oldEl);
  } else if (hasPassed(oldEl) || hasPassed(newEl))
    ;
  else if (checkAllHTML(newEl, oldEl)) {
    return;
  } else if (changed(newEl, oldEl) || hasRefClass(newEl)) {
    oldEl.replaceWidth(newEl.cloneNode(true));
  } else if (newEl.nodeType !== window.Node.TEXT_NODE && newEl.nodeType !== window.Node.COMMENT_NODE && newEl.toString() !== "[object HTMLUnknownElement]") {
    if (options.checkPassed && options.checkPassed(oldEl, newEl))
      ;
    else {
      updateProps(oldEl, getProps(newEl.attributes), getProps(oldEl.attributes));
    }
    var oldChildren = children(oldEl);
    var newChildren = children(newEl);
    var max = Math.max(oldChildren.length, newChildren.length);
    for (var index = 0; index < max; index++) {
      updateElement(oldEl, oldChildren[index], newChildren[index], index, options);
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
const DefaultOption = {
  checkPassed: void 0,
  keyField: "key",
  removedElements: []
};
function DomDiff(A, B, options = {}) {
  options = __spreadProps(__spreadValues({}, DefaultOption), {
    checkPassed: isFunction(options.checkPassed) ? options.checkPassed : void 0
  });
  A = A.el || A;
  B = B.el || B;
  var childrenA = children(A);
  var childrenB = children(B);
  var len = Math.max(childrenA.length, childrenB.length);
  if (len === 0) {
    return;
  }
  if (childrenA.length === 0 && childrenB.length > 0) {
    A.append(...childrenB);
  } else if (childrenA.length > 0 && childrenB.length === 0) {
    A.textContent = "";
  } else {
    for (var i = 0; i < len; i++) {
      updateElement(A, childrenA[i], childrenB[i], i, options);
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
function replaceElement(module) {
  if (map[module.name]) {
    map[module.name] = module;
  }
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
  __rootInstance.add(instance);
}
function getRootElementInstanceList() {
  return [...__rootInstance];
}
function renderRootElementInstance(module) {
  replaceElement(module);
  getRootElementInstanceList().forEach((instance) => {
    instance.hmr();
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
function createHandlerInstance(context) {
  return Object.keys(handlerMap).filter((key) => Boolean(handlerMap[key])).map((key) => {
    const HandlerClass = handlerMap[key];
    return new HandlerClass(context);
  });
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
  static createByHTML(htmlString) {
    var div = Dom.create("div");
    return div.html(htmlString).firstChild;
  }
  static makeElementList(html) {
    const TEMP_DIV2 = Dom.create("div");
    let list = [];
    if (!isArray(html)) {
      html = [html];
    }
    html = html.filter(Boolean);
    for (let i = 0, len = html.length; i < len; i++) {
      const item = html[i];
      if (isString(item)) {
        list.push(...TEMP_DIV2.html(item == null ? void 0 : item.trim()).childNodes || []);
      } else if (item) {
        list.push(Dom.create(item));
      } else
        ;
    }
    return list;
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
      [...this.el.attributes];
      return this.el.attributes;
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
  htmlDiff(fragment) {
    DomDiff(this, fragment);
  }
  updateDiff(html, rootElement = "div", options = {}) {
    DomDiff(this, Dom.create(rootElement).html(html), options);
  }
  updateSVGDiff(html, rootElement = "div") {
    DomDiff(this, Dom.create(rootElement).html(`<svg>${html}</svg>`).firstChild.firstChild);
  }
  getById(id) {
    return this.el.getElementById(id);
  }
  find(selector) {
    if (this.isTextNode)
      return void 0;
    return this.el.querySelector(selector);
  }
  $(selector) {
    var node = this.find(selector);
    return node ? Dom.create(node) : null;
  }
  findAll(selector) {
    if (this.isTextNode)
      return [];
    return Array.from(this.el.querySelectorAll(selector));
  }
  $$(selector) {
    var arr = this.findAll(selector);
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
    var css = window.getComputedStyle(this.el);
    var obj = {};
    list.forEach((it) => {
      obj[it] = css[it];
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
  scrollTop() {
    if (this.el === document.body) {
      return Dom.getScrollTop();
    }
    return this.el.scrollTop;
  }
  scrollLeft() {
    if (this.el === document.body) {
      return Dom.getScrollLeft();
    }
    return this.el.scrollLeft;
  }
  scrollHeight() {
    return this.el.scrollHeight;
  }
  scrollWidth() {
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
  createChild(tag, className = "", attrs = {}, css = {}) {
    let $element = Dom.create(tag, className, attrs);
    $element.css(css);
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
    return this.el.children.length;
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
  context(contextType = "2d") {
    if (!this._initContext) {
      this._initContext = this.el.getContext(contextType);
    }
    return this._initContext;
  }
  resize({ width, height }) {
    this._initContext = null;
    var ctx = this.context();
    var scale = window.devicePixelRatio || 1;
    this.px("width", +width);
    this.px("height", +height);
    this.el.width = width * scale;
    this.el.height = height * scale;
    ctx.scale(scale, scale);
  }
  toDataURL(type = "image/png", quality = 1) {
    return this.el.toDataURL(type, quality);
  }
  clear() {
    this.context().clearRect(0, 0, this.el.width, this.el.height);
  }
  update(callback) {
    this.clear();
    callback.call(this, this);
  }
  drawImage(img, dx = 0, dy = 0) {
    var ctx = this.context();
    var scale = window.devicePixelRatio || 1;
    ctx.drawImage(img, dx, dy, img.width, img.height, 0, 0, this.el.width / scale, this.el.height / scale);
  }
  drawOption(option = {}) {
    var ctx = this.context();
    Object.assign(ctx, option);
  }
  drawLine(x1, y1, x2, y2) {
    var ctx = this.context();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }
  drawPath(...path) {
    var ctx = this.context();
    ctx.beginPath();
    path.forEach((p, index) => {
      if (index == 0) {
        ctx.moveTo(p[0], p[1]);
      } else {
        ctx.lineTo(p[0], p[1]);
      }
    });
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  drawCircle(cx, cy, r) {
    var ctx = this.context();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  drawText(x, y, text) {
    this.context().fillText(text, x, y);
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
class BaseStore {
  constructor(editor) {
    this.id = uuidShort();
    this.cachedCallback = {};
    this.callbacks = {};
    this.editor = editor;
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
  debug(...args) {
    if (this.editor && this.editor.context.config.get("debug.mode")) {
      console.debug(...args);
    }
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
      callback = makeRequestAnimationFrame(callback, context);
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
    this.debug("off message event", event);
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
    this.debug("off all message", context.sourceName);
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
        } else {
          this.debug(`message event ${event} is not exist.`);
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
        const runnableFunctions = list.filter((f) => f.originalCallback.source === source);
        runnableFunctions.forEach((f) => {
          f.callback.apply(f.context, args);
        });
      } else {
        this.debug(event, " is not valid event");
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
  addDomEvent(dom, eventName, callback, useCapture = false) {
    if (dom) {
      dom.addEventListener(eventName, callback, useCapture);
    }
  },
  removeDomEvent(dom, eventName, callback) {
    if (dom) {
      dom.removeEventListener(eventName, callback);
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
const convertToPx = (key, value) => {
  if (isNumber(value)) {
    switch (key) {
      case "width":
      case "height":
      case "top":
      case "left":
      case "right":
      case "bottom":
        return value + "px";
    }
  }
  return value;
};
const applyElementAttribute = ($element, key, value, hasStyleAttribute = false) => {
  if (key === "cssText") {
    $element.cssText(value);
    return;
  } else if (key === "style") {
    if (typeof value !== "string") {
      const css = {};
      Object.entries(value).forEach(([key2, value2]) => {
        css[key2] = convertToPx(key2, value2);
      });
      if (hasStyleAttribute) {
        const styleText = Object.keys(css).map((key2) => {
          return `${key2}:${css[key2]};`;
        }).join("");
        $element.attr("style", styleText);
      } else {
        $element.css(css);
      }
    }
    return;
  } else if (key === "class") {
    if (Array.isArray(value)) {
      $element.updateClass(classnames(...value));
    } else {
      $element.updateClass(classnames(value));
    }
    return;
  } else if (key === "callback") {
    if (typeof value === "function") {
      value();
      return;
    }
  }
  if (typeof value === "undefined") {
    $element.removeAttr(key);
  } else {
    if ($element.el.nodeName === "TEXTAREA" && key === "value") {
      $element.text(value);
    } else if (key === "text" || key === "textContent") {
      $element.text(value);
    } else if (key === "innerHTML" || key === "html") {
      $element.html(value);
    } else if (key === "htmlDiff") {
      $element.updateDiff(value);
    } else if (key === "svgDiff") {
      $element.updateSVGDiff(value);
    } else if (key === "value") {
      $element.val(value);
    } else {
      $element.attr(key, value);
    }
  }
};
const FunctionMap = {};
class BindHandler extends BaseHandler {
  async initialize() {
    if (!FunctionMap[this.context.sourceName]) {
      FunctionMap[this.context.sourceName] = this.context.filterMethodes("bind");
    }
  }
  getBindMethods() {
    return FunctionMap[this.context.sourceName] || [];
  }
  async bindData(...args) {
    const list = this.getBindMethods();
    if (!(list == null ? void 0 : list.length))
      return;
    const bindList = list == null ? void 0 : list.filter((it) => {
      if (!args.length)
        return true;
      return args.indexOf(it.args[0]) > -1;
    });
    await Promise.all(bindList == null ? void 0 : bindList.map(async (magicMethod) => {
      let refObject = this.getRef(`${magicMethod.keywords[0]}`);
      let refCallback = BIND_CHECK_DEFAULT_FUNCTION;
      if (typeof refObject === "string" && refObject !== "") {
        refCallback = BIND_CHECK_FUNCTION(refObject);
      } else if (typeof refObject === "function") {
        refCallback = refObject;
      }
      const elName = magicMethod.args[0];
      let $element = this.context.refs[elName];
      const isBindCheck = typeof refCallback === "function" && refCallback.call(this.context);
      if ($element && isBindCheck) {
        const results = await magicMethod.executeWithContext(this.context, ...args);
        if (!results)
          return;
        const keys = Object.keys(results);
        for (var elementKeyIndex = 0, len = keys.length; elementKeyIndex < len; elementKeyIndex++) {
          const key = keys[elementKeyIndex];
          const value = results[key];
          applyElementAttribute($element, key, value, this.context.isServer);
        }
      }
    }));
  }
  destroy() {
    this._bindMethods = void 0;
  }
}
class CallbackHandler extends BaseHandler {
  initialize() {
    var _a, _b;
    this.destroy();
    if (!this._callbacks) {
      this._callbacks = this.context.filterMethodes("callback");
    }
    if (!((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._callbacks) == null ? void 0 : _b.length)) {
      this._callbacks.forEach((key) => this.parseCallback(key));
    }
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
    else {
      this.removeCallbackAll();
    }
  }
  getCallback(field) {
    return this.context[field];
  }
  removeCallbackAll() {
    this.getBindings().forEach((obj) => {
      this.removeCallback(obj);
    });
    this.initBindings();
  }
  removeCallback({ requestId }) {
    window.cancelAnimationFrame(requestId);
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
  makeCallback(callbackObject) {
    const callback = callbackObject.callback;
    const run = (time) => {
      callback(time);
      callbackObject.requestId = window.requestAnimationFrame(run);
    };
    return () => {
      callbackObject.requestId = window.requestAnimationFrame(run);
    };
  }
  addCallback(callbackObject, magicMethod) {
    const callback = this.makeCallback(callbackObject, magicMethod);
    this.addBinding(callbackObject);
    callback();
  }
  bindingCallback(magicMethod, callback) {
    var _a, _b;
    const obj = {
      eventName: magicMethod.args[0],
      callback
    };
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
    magicMethod.keywords.forEach((keyword) => {
      const method = keyword;
      if (this.getCallback(method)) {
        obj.checkMethodList.push(method);
      } else {
        obj.codes.push(method.toLowerCase());
      }
    });
    this.addCallback(obj, magicMethod);
  }
  parseCallback(it) {
    const context = this.context;
    var arr = it.args;
    if (arr) {
      var originalCallback = context[it.originalMethod].bind(context);
      this.bindingCallback(it, originalCallback);
    }
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
    this.destroy();
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
      this.removeDomEvent(observer);
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
    this.destroy();
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
registHandler({
  BindHandler,
  CallbackHandler,
  DomEventHandler,
  ObserverHandler,
  StoreHandler
});
const REFERENCE_PROPERTY = "ref";
const TEMP_DIV = Dom.create("div");
const QUERY_PROPERTY = `[${REFERENCE_PROPERTY}]`;
const REF_CLASS = "refclass";
const REF_CLASS_PROPERTY = `[${REF_CLASS}]`;
const EMPTY_ARRAY = [];
const _EventMachine = class {
  constructor(opt, props) {
    __privateAdd(this, _refreshTimestamp);
    __privateAdd(this, _setProps);
    __privateAdd(this, _getProp);
    __privateAdd(this, _state, {});
    __privateAdd(this, _prevState, {});
    __privateAdd(this, _localTimestamp, 0);
    __privateAdd(this, _loadMethods, void 0);
    __privateAdd(this, _timestamp, void 0);
    __privateAdd(this, _cachedMethodList, void 0);
    __privateAdd(this, _props, {});
    __privateAdd(this, _propsKeys, {});
    __privateAdd(this, _isServer, false);
    __privateAdd(this, _propsKeyList, []);
    this.refs = {};
    this.children = {};
    this.id = uuid();
    this.initializeProperty(opt, props);
    this.handlers = this.initializeHandler();
    this.initComponents();
  }
  get __timestamp() {
    return __privateGet(this, _localTimestamp);
  }
  get timestamp() {
    return __privateGet(this, _timestamp);
  }
  set timestamp(value) {
    __privateSet(this, _timestamp, value);
  }
  get target() {
    return this.$el.el;
  }
  checkProps(props = {}) {
    return props;
  }
  initializeProperty(opt, props = {}) {
    this.opt = opt || {};
    this.parent = this.opt;
    this.source = uuid();
    this.sourceName = this.constructor.name;
    this.props = new Proxy(__privateGet(this, _props), {
      get: (target, key) => {
        return __privateMethod(this, _getProp, getProp_fn).call(this, key);
      },
      set: (target, key) => {
        throw new Error(`${key} is readonly`);
      }
    });
    __privateMethod(this, _setProps, setProps_fn).call(this, props);
  }
  hasProp(key) {
    return __privateGet(this, _propsKeyList).includes(key == null ? void 0 : key.toUpperCase());
  }
  setServer(isServer = true) {
    __privateSet(this, _isServer, isServer);
  }
  get isServer() {
    var _a;
    return ((_a = this.parent) == null ? void 0 : _a.isServer) || __privateGet(this, _isServer);
  }
  initComponents() {
    this.childComponents = this.components();
  }
  initializeHandler() {
    return createHandlerInstance(this);
  }
  initState() {
    return {};
  }
  setState(state = {}, isLoad = true) {
    __privateSet(this, _prevState, __privateGet(this, _state));
    __privateSet(this, _state, Object.assign({}, __privateGet(this, _state), state));
    if (isLoad) {
      this.load();
    }
  }
  toggleState(key, isLoad = true) {
    this.setState({
      [key]: !__privateGet(this, _state)[key]
    }, isLoad);
  }
  apply(obj) {
    return spreadVariable(obj);
  }
  _reload(props, $container = null) {
    if ($container) {
      this.render($container);
    }
    __privateMethod(this, _setProps, setProps_fn).call(this, props);
    __privateSet(this, _state, {});
    this.setState(this.initState(), false);
    this.refresh(true);
  }
  checkLoad($container) {
    window.requestAnimationFrame(() => {
      this.render($container);
    });
  }
  get state() {
    return __privateGet(this, _state);
  }
  get propKeys() {
    return __privateGet(this, _propsKeys);
  }
  get ref() {
    return this.props.ref;
  }
  get isPreLoaded() {
    return true;
  }
  async render($container) {
    if (!this.isPreLoaded) {
      this.checkLoad($container);
      return;
    }
    const template = this.template();
    const newDomElement = this.parseTemplate(template);
    if (this.$el) {
      this.$el.htmlDiff(newDomElement);
    } else {
      this.$el = newDomElement;
      this.refs.$el = this.$el;
      if ($container) {
        $container.append(this.$el);
      }
    }
    await this.load();
    this.afterRender();
    return this;
  }
  get html() {
    return this.$el.outerHTML();
  }
  initialize() {
    __privateSet(this, _state, this.initState());
  }
  afterRender() {
  }
  components() {
    return __spreadValues({}, this.parent.childComponents);
  }
  getRef(...args) {
    const key = args.join("");
    return this.refs[key];
  }
  refreshElementReference(targetRef, refName) {
    var refs = targetRef.$$(QUERY_PROPERTY);
    for (var refsIndex = 0, refsLen = refs.length; refsIndex < refsLen; refsIndex++) {
      const $dom = refs[refsIndex];
      const name = $dom.attr(REFERENCE_PROPERTY);
      if (this.refs[name]) {
        if (this.refs[name].is($dom) === false) {
          this.refs[name] = $dom;
        }
      } else {
        this.refs[name] = $dom;
      }
    }
    this.afterLoadRendering(targetRef, refName);
  }
  afterLoadRendering() {
  }
  afterComponentRendering() {
  }
  parseTemplate(html, isLoad) {
    let list = Dom.makeElementList(html);
    for (var i = 0, len = list.length; i < len; i++) {
      const $el = list[i];
      var ref = $el.attr(REFERENCE_PROPERTY);
      if (ref) {
        if (!isLoad) {
          this.refs[ref] = $el;
        }
      }
      var refs = $el.$$(QUERY_PROPERTY);
      var temp = {};
      for (var refsIndex = 0, refsLen = refs.length; refsIndex < refsLen; refsIndex++) {
        const $dom = refs[refsIndex];
        const name = $dom.attr(REFERENCE_PROPERTY);
        if (temp[name]) {
          console.warn(`${ref} is duplicated. - ${this.sourceName}`, this);
        } else {
          temp[name] = true;
        }
        if (!isLoad) {
          this.refs[name] = $dom;
        }
      }
    }
    if (!isLoad) {
      return list[0];
    }
    TEMP_DIV.append(list);
    return TEMP_DIV.createChildrenFragment();
  }
  parsePropertyInfo($dom) {
    let props = {};
    for (var t of $dom.attributes) {
      const name = t.name || t.nodeName;
      const value = t.value || t.nodeValue;
      if (hasVariable(name)) {
        const recoveredValue = getVariable(name);
        if (isObject(recoveredValue)) {
          props = Object.assign(props, recoveredValue);
        } else {
          props[name] = getVariable(value);
        }
      } else {
        props[name] = getVariable(value);
      }
    }
    const content = $dom.html();
    if (content) {
      props.content = content;
      props.contentChildren = this.parseContent(props.content);
    }
    return props;
  }
  parseSourceName(obj) {
    if (obj.parent) {
      return [obj.sourceName, ...this.parseSourceName(obj.parent)];
    }
    return [obj.sourceName];
  }
  getEventMachineComponent(refClassName) {
    var EventMachineComponent = retriveElement(refClassName) || this.childComponents[refClassName];
    return EventMachineComponent;
  }
  createFunctionComponent(EventMachineComponent, props, BaseClass = _EventMachine) {
    class FunctionElement extends BaseClass {
      template() {
        return EventMachineComponent.call(this, this.props);
      }
    }
    return new FunctionElement(this, props);
  }
  createInstanceForComponent(EventMachineComponent, targetElement, props) {
    if (EventMachineComponent.__proto__.name === "ProxyComponent") {
      return new EventMachineComponent({ target: targetElement, props });
    }
    if (EventMachineComponent.__proto__.name === "" && isFunction(EventMachineComponent)) {
      return this.createFunctionComponent(EventMachineComponent, props);
    }
    return new EventMachineComponent(this, props);
  }
  async renderComponent({ $dom, refName, component, props }) {
    var _a;
    var instance = null;
    if (this.children[refName]) {
      instance = this.children[refName];
      instance.timestamp = this.__timestamp;
      instance._reload(props);
    } else {
      instance = this.createInstanceForComponent(component, $dom.$parent.el, props);
      instance.timestamp = this.__timestamp;
      this.children[refName || instance.id] = instance;
      if (isFunction(instance.render)) {
        await instance.render();
      }
    }
    this.afterComponentRendering($dom, refName, instance, props);
    if (instance.renderTarget) {
      (_a = instance.$el) == null ? void 0 : _a.appendTo(instance.renderTarget);
      $dom.remove();
    } else if (instance.$el) {
      $dom.replace(instance.$el);
    } else {
      $dom.remove();
    }
  }
  parseContent(html, filteredRefClass = []) {
    return Dom.create("div").html(html).children().map(($dom) => {
      return this._getComponentInfo($dom);
    }).filter((it) => filteredRefClass.length === 0 ? true : filteredRefClass.includes(it.refClass));
  }
  _getComponentInfo($dom) {
    const refClass = $dom.attr(REF_CLASS);
    const EventMachineComponent = this.getEventMachineComponent(refClass);
    if (EventMachineComponent) {
      let props = this.parsePropertyInfo($dom);
      let refName = $dom.attr(REFERENCE_PROPERTY);
      return {
        $dom,
        refClass,
        props,
        refName: refName || props.ref,
        component: EventMachineComponent
      };
    } else {
      return {
        refClass,
        notUsed: true,
        $dom
      };
    }
  }
  getComponentInfoList($el) {
    if (!$el)
      return EMPTY_ARRAY;
    let targets = $el.$$(REF_CLASS_PROPERTY).filter((it) => {
      return it.path().filter((a) => {
        return a.attr(REF_CLASS);
      }).length === 1;
    });
    if (!targets.length) {
      return EMPTY_ARRAY;
    }
    return targets.map(($dom) => this._getComponentInfo($dom));
  }
  async parseComponent() {
    const $el = this.$el;
    const componentList = this.getComponentInfoList($el);
    if (!componentList.length)
      return;
    await Promise.all(componentList.map(async (comp) => {
      if (comp.notUsed) {
        comp.$dom.remove();
        console.warn(`${comp.refClass} is not used.`);
      } else {
        await this.renderComponent(comp);
      }
    }));
    keyEach(this.children, (key, child) => {
      if (child.timestamp !== this.__timestamp) {
        child.clean();
      }
    });
  }
  clean() {
    if (this.$el && !this.$el.hasParent()) {
      keyEach(this.children, (key, child) => {
        if (isFunction(child == null ? void 0 : child.clean)) {
          child.clean();
        }
      });
      this.destroy();
      return true;
    }
  }
  refresh() {
    this.load();
  }
  async _afterLoad() {
    __privateMethod(this, _refreshTimestamp, refreshTimestamp_fn).call(this);
    this.runHandlers("initialize");
    await this.bindData();
    await this.parseComponent();
  }
  async makeLoadAction(magicMethod) {
    const [elName, ...args] = magicMethod.args;
    let isDomDiff = magicMethod.hasKeyword("domdiff");
    const refTarget = this.refs[elName];
    if (refTarget) {
      const newTemplate = await magicMethod.execute(...args);
      const fragment = this.parseTemplate(newTemplate, true);
      if (isDomDiff) {
        refTarget.htmlDiff(fragment);
      } else {
        refTarget.html(fragment);
      }
      this.refreshElementReference(refTarget, elName);
    }
  }
  async load(...args) {
    if (!__privateGet(this, _loadMethods)) {
      __privateSet(this, _loadMethods, this.filterMethodes("load"));
    }
    const filtedLoadMethodList = __privateGet(this, _loadMethods).filter((it) => args.length === 0 ? true : it.args[0] === args[0]);
    await Promise.all(filtedLoadMethodList.map(async (magicMethod) => {
      await this.makeLoadAction(magicMethod);
    }));
    await this._afterLoad();
  }
  async runHandlers(func = "run", ...args) {
    await Promise.all(this.handlers.filter((h) => h[func]).map(async (h) => {
      await h[func](...args);
    }));
  }
  async bindData(...args) {
    await this.runHandlers("bindData", ...args);
  }
  template() {
    return null;
  }
  eachChildren(callback) {
    if (!isFunction(callback))
      return;
    Object.keys(this.children).forEach((key) => {
      callback(this.children[key]);
    });
  }
  hmr() {
    this.created();
    this.initialize();
    this.rerender();
    this.eachChildren((child) => {
      child.hmr();
    });
  }
  rerender() {
    var $parent = this.$el.parent();
    this.destroy();
    this.render($parent);
  }
  destroy() {
    this.eachChildren((childComponent) => {
      childComponent.destroy();
    });
    this.runHandlers("destroy");
    if (this.$el) {
      this.$el.remove();
    }
    this.$el = null;
    this.refs = {};
    this.children = {};
  }
  collectMethodes(refreshCache = false) {
    if (!__privateGet(this, _cachedMethodList) || refreshCache) {
      __privateSet(this, _cachedMethodList, collectProps(this, (name) => MagicMethod.check(name)).map((it) => {
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
  findChildren(BaseComponent) {
    return this.props.contentChildren.filter((it) => it.component === BaseComponent);
  }
  findChildByRef(ref) {
    const result = [];
    Object.keys(this.children).forEach((key) => {
      const child = this.children[key];
      if (child.ref === ref) {
        result.push(child);
      }
      if (Object.keys(child.children).length) {
        result.push(...child.findChildByRef(ref));
      }
    });
    return result;
  }
  findRef(callback) {
    const result = [];
    Object.keys(this.children).forEach((key) => {
      const child = this.children[key];
      if (callback(child)) {
        result.push(child);
      }
      if (result.length)
        return result;
      if (child.children) {
        result.push(...child.findNestedChildren(callback));
      }
      if (result.length)
        return result;
    });
    return result;
  }
  getChildContent(filterCallback, defaultValue2 = "") {
    var _a;
    return ((_a = this.getChild(filterCallback)) == null ? void 0 : _a.props.content) || defaultValue2;
  }
  getChild(filterCallback) {
    return this.props.contentChildren.find(filterCallback);
  }
};
let EventMachine = _EventMachine;
_state = new WeakMap();
_prevState = new WeakMap();
_localTimestamp = new WeakMap();
_loadMethods = new WeakMap();
_timestamp = new WeakMap();
_cachedMethodList = new WeakMap();
_props = new WeakMap();
_propsKeys = new WeakMap();
_isServer = new WeakMap();
_propsKeyList = new WeakMap();
_refreshTimestamp = new WeakSet();
refreshTimestamp_fn = function() {
  __privateWrapper(this, _localTimestamp)._++;
};
_setProps = new WeakSet();
setProps_fn = function(props) {
  __privateSet(this, _props, this.checkProps(props));
  __privateSet(this, _propsKeys, {});
  Object.keys(props).forEach((key) => {
    __privateGet(this, _propsKeys)[key.toUpperCase()] = key;
  });
  __privateSet(this, _propsKeyList, Object.keys(__privateGet(this, _propsKeys)));
};
_getProp = new WeakSet();
getProp_fn = function(key) {
  return __privateGet(this, _props)[__privateGet(this, _propsKeys)[key.toUpperCase()]];
};
const _UIElement = class extends EventMachine {
  constructor(opt, props = {}) {
    super(opt, props);
    __privateAdd(this, _storeInstance, void 0);
    if (props.store) {
      __privateSet(this, _storeInstance, props.store);
    } else {
      __privateSet(this, _storeInstance, new BaseStore());
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
  broadcast(messageName, ...args) {
    Object.keys(this.children).forEach((key) => {
      this.children[key].trigger(messageName, ...args);
      this.children[key].broadcast(messageName, ...args);
    });
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
const start = (ElementClass, opt) => {
  const $container = Dom.create(opt.container || document.body);
  const app = UIElement.createElementInstance(ElementClass, opt);
  app.render($container);
  registRootElementInstance(app);
  return app;
};
async function renderToString(ElementClass, opt) {
  const app = UIElement.createElementInstance(ElementClass, opt);
  app.setServer(true);
  const instance = await app.render();
  return instance.html;
}
function CSS_TO_STRING(style, postfix = "") {
  var newStyle = style || {};
  return Object.keys(newStyle).filter((key) => isNotUndefined(newStyle[key])).map((key) => `${key}: ${newStyle[key]}`).join(";" + postfix);
}
function OBJECT_TO_PROPERTY(obj) {
  const target = obj || {};
  return Object.keys(target).map((key) => {
    if (key === "class") {
      if (isObject(obj[key])) {
        return `${key}="${classnames(obj[key])}"`;
      }
    }
    if (key === "style") {
      if (isObject(obj[key])) {
        return `${key}="${CSS_TO_STRING(obj[key])}"`;
      }
    }
    if (isBoolean(obj[key]) || isUndefined(obj[key]) || obj[key] === "undefined") {
      if (obj[key]) {
        return key;
      } else {
        return "";
      }
    }
    return `${key}="${obj[key]}"`;
  }).join(" ");
}
function createComponent(ComponentName, props = {}, children2 = []) {
  children2 = children2.flat(Infinity).join("");
  let targetVariable;
  targetVariable = Object.keys(props).length ? variable(props) : "";
  const ref = props.ref ? `ref="${props.ref}"` : "";
  return `<object refClass="${ComponentName}" ${ref} ${targetVariable}>${children2}</object>`;
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
      return createComponent(ComponentName, props, createComponentList(children2));
    }
    return createComponent(ComponentName, props);
  }).join("\n");
}
function createElement(Component, props, children2 = []) {
  children2 = children2.flat(Infinity);
  return `<${Component} ${OBJECT_TO_PROPERTY(props)}>${children2.join(" ")}</${Component}>`;
}
function createElementJsx(Component, props = {}, ...children2) {
  children2 = children2.flat(Infinity);
  if (Component === FragmentInstance) {
    return children2;
  }
  props = props || {};
  if (typeof Component !== "string") {
    const ComponentName = Component.name;
    registElement({
      [ComponentName]: Component
    });
    return createComponent(ComponentName, props, children2);
  } else {
    return createElement(Component, props, children2);
  }
}
const FragmentInstance = new Object();
export { AFTER, ALL_TRIGGER, ALT, ANIMATIONEND, ANIMATIONITERATION, ANIMATIONSTART, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, ARROW_UP, BACKSPACE, BEFORE, BIND, BIND_CHECK_DEFAULT_FUNCTION, BIND_CHECK_FUNCTION, BLUR, BRACKET_LEFT, BRACKET_RIGHT, BaseStore, CALLBACK, CAPTURE, CHANGE, CHANGEINPUT, CHECKER, CLICK, COMMAND, CONFIG, CONTEXTMENU, CONTROL, CUSTOM, D1000, DEBOUNCE, DELAY, DELETE, DOMDIFF, DOUBLECLICK, DOUBLETAB, DRAG, DRAGEND, DRAGENTER, DRAGEXIT, DRAGLEAVE, DRAGOUT, DRAGOVER, DRAGSTART, DROP, Dom, DomDiff, ENTER, EQUAL, ESCAPE, EVENT, FIT, FOCUS, FOCUSIN, FOCUSOUT, FRAME, FUNC_END_CHARACTER, FUNC_REGEXP, FUNC_START_CHARACTER, FragmentInstance, IF, INPUT, KEY, KEYDOWN, KEYPRESS, KEYUP, LEFT_BUTTON, LOAD, MAGIC_METHOD, MAGIC_METHOD_REG, META, MINUS, MOUSE, MOUSEDOWN, MOUSEENTER, MOUSELEAVE, MOUSEMOVE, MOUSEOUT, MOUSEOVER, MOUSEUP, MagicMethod, NAME_SAPARATOR, OBSERVER, ON, PARAMS, PASSIVE, PASTE, PEN, PIPE, POINTEREND, POINTERENTER, POINTERMOVE, POINTEROUT, POINTEROVER, POINTERSTART, PREVENT, RAF, RESIZE, RIGHT_BUTTON, SAPARATOR, SCROLL, SELF, SELF_TRIGGER, SHIFT, SPACE, SPLITTER, STOP, SUBMIT, SUBSCRIBE, SUBSCRIBE_ALL, SUBSCRIBE_SELF, THROTTLE, TOUCH, TOUCHEND, TOUCHMOVE, TOUCHSTART, TRANSITIONCANCEL, TRANSITIONEND, TRANSITIONRUN, TRANSITIONSTART, UIElement, VARIABLE_SAPARATOR, WHEEL, classnames, clone, collectProps, combineKeyArray, createComponent, createComponentList, createElement, createElementJsx, createHandlerInstance, debounce, defaultValue, get, getRef, getRootElementInstanceList, getVariable, hasVariable, ifCheck, initializeGroupVariables, isArray, isBoolean, isFunction, isNotString, isNotUndefined, isNotZero, isNumber, isObject, isString, isUndefined, isZero, keyEach, keyMap, keyMapJoin, makeEventChecker, makeRequestAnimationFrame, normalizeWheelEvent, recoverVariable, registAlias, registElement, registHandler, registRootElementInstance, renderRootElementInstance, renderToString, replaceElement, retriveAlias, retriveElement, retriveHandler, spreadVariable, start, throttle, uuid, uuidShort, variable };
