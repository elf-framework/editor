var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var _handlerCache, _state, _cachedMethodList, _functionCache, _childObjectList;
const VNODE_INSTANCE = "__vnodeInstance";
const COMPONENT_INSTANCE = "__componentInstance";
const ALTERNATE_TEMPLATE = "__alternateTemplate";
const SELF_COMPONENT_INSTANCE = "__selfComponentInstance";
const COMPONENT_ROOT_CONTEXT = "__componentRootContext";
const ELEMENT_INSTANCE = "__elementInstance";
const PARENT_VNODE_INSTANCE = "__parentVNodeInstance";
const ELEMENT_PROPS = "__elementProps";
const IS_FRAGMENT_ITEM = "__is_fragment_item";
const CHILD_ITEM_TYPE_FRAGMENT = "fragment";
const CHILD_ITEM_TYPE_ELEMENT = "element";
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
  Object.keys(obj).forEach((key, index2) => {
    callback(key, obj[key], index2);
  });
}
function keyMap(obj, callback) {
  return Object.keys(obj).map((key, index2) => {
    return callback(key, obj[key], index2);
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
function isValue(value) {
  return value !== void 0 && value !== null;
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
  return result.length ? result.join(" ") : void 0;
}
const VNodeType = {
  NODE: 8,
  TEXT: 3,
  FRAGMENT: 11,
  COMPONENT: 100,
  ELEMENT: 101,
  COMMENT: 102,
  ROOT: 103,
  PORTAL: 104,
  LAZY: 105
};
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
const PROPS_MAKE = (ref, ...args) => {
  return MagicMethod.make("props", ref, ...args);
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
const PROPS = PROPS_MAKE;
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
const Event = {
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
    if (!isGlobalForceRender() && this._domEvents && this.context.notEventRedefine) {
      return;
    }
    if (!this._domEvents || this._domEvents.length === 0 || this._bindings.length === 0) {
      this._domEvents = this.context.filterMethodes("domevent");
    }
    if (!this._initialized && !((_a = this._bindings) == null ? void 0 : _a.length) && ((_b = this._domEvents) == null ? void 0 : _b.length)) {
      this._domEvents.forEach((it) => this.parseDomEvent(it));
      this._initialized = true;
    }
  }
  update() {
  }
  destroy() {
    if (this.context.notEventRedefine)
      ;
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
      var returnValue = this.runEventCallback(
        e,
        eventObject,
        magicMethod,
        callback
      );
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
        var returnValue = this.runEventCallback(
          e,
          eventObject,
          magicMethod,
          callback
        );
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
        var _a;
        return (_a = this.getCallback(before.target)) == null ? void 0 : _a.call(context, e, before.param);
      });
    }
    if (this.checkEventType(e, eventObject)) {
      var returnValue = callback(e, e.$dt, e.xy);
      if (returnValue !== false && eventObject.afterMethods.length) {
        eventObject.afterMethods.forEach((after) => {
          var _a;
          return (_a = this.getCallback(after.target)) == null ? void 0 : _a.call(context, e, after.param);
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
    eventObject.callback = this.makeCallback(
      eventObject,
      magicMethod,
      callback
    );
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
      Event.addDomEvent(
        eventObject.dom,
        eventObject.eventName,
        eventObject.callback,
        options
      );
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
    let eventObject = this.getDefaultEventObject(
      eventName,
      dom,
      delegate,
      magicMethod,
      callback
    );
    eventObject.callback = this.makeCustomEventCallback(
      eventObject,
      magicMethod,
      eventObject.callback
    );
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
        observer.observe(
          $target,
          options || {
            attributes: true,
            characterData: true,
            childList: true
          }
        );
        break;
      case "performance":
        observer = new window.PerformanceObserver(callback);
        observer.observe(
          options || {
            entryTypes: ["paint"]
          }
        );
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
      this._callbacks = null;
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
      this.context.$store.on(
        e,
        callback,
        this.context,
        debounce2,
        throttle2,
        isAllTrigger,
        isSelfTrigger,
        checkMethodList,
        isFrameTrigger
      );
    });
    this.addBinding(magicMethod);
  }
}
let contextProviderList = {};
const renderFromRootCallback = debounce(() => {
  renderRootElementInstanceList();
}, 10);
function renderFromRoot() {
  renderFromRootCallback();
}
function useBatch(callback) {
  getCurrentComponent().useBatch(callback);
}
function useRender(component) {
  renderComponent(component);
}
function useId() {
  return getCurrentComponent().useId();
}
function useSyncExternalStore(subscribe, getSnapshot) {
  return getCurrentComponent().useSyncExternalStore(subscribe, getSnapshot);
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
function useStore(key, defaultValue2) {
  return getCurrentComponent().useStore(key, defaultValue2);
}
function useStoreSet(key, value) {
  return getCurrentComponent().useStoreSet(key, value);
}
function useStoreValue(key, defaultValue2) {
  return getCurrentComponent().useStoreValue(key, defaultValue2);
}
function useGetStoreValue(key, defaultValue2) {
  return getCurrentComponent().useGetStoreValue(key, defaultValue2);
}
function useSetStoreValue(key) {
  return getCurrentComponent().useSetStoreValue(key);
}
function useRootContext(key) {
  return useStore(COMPONENT_ROOT_CONTEXT)[key];
}
function useSubscribe(name, callback, debounceSecond = 0, throttleSecond = 0, isSelf = false) {
  return getCurrentComponent().useSubscribe(
    name,
    callback,
    debounceSecond,
    throttleSecond,
    isSelf
  );
}
function useComponentRender(name, options = {
  debounce: 0,
  throttle: 0,
  isSelf: false,
  checkFunction: null
}) {
  const component = getCurrentComponent();
  return component.useSubscribe(
    name,
    (...args) => {
      if (isFunction(options.checkFunction)) {
        if (options.checkFunction(...args)) {
          useRender(component);
        }
      } else {
        useRender(component);
      }
    },
    options.debounce,
    options.throttle,
    options.isSelf
  );
}
function useSelf(name, callback, debounceSecond = 0, throttleSecond = 0) {
  return getCurrentComponent().useSelf(
    name,
    callback,
    debounceSecond,
    throttleSecond
  );
}
function useEmit(name, ...args) {
  return getCurrentComponent().emit(name, ...args);
}
function useTrigger(name, ...args) {
  return getCurrentComponent().trigger(name, ...args);
}
function useMagicMethod(methodName, callback) {
  return getCurrentComponent().initMagicMethod(methodName, callback);
}
function forwardRef(callback) {
  return getCurrentComponent().forwardRef(callback);
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
    await Promise.all(
      this.loadHandlerCache(func).map(async (h) => {
        await h[func](...args);
      })
    );
  }
  filterFunction(func, ...args) {
    return this.loadHandlerCache(func).map((h) => {
      return h[func](...args);
    });
  }
}
_handlerCache = new WeakMap();
const USE_STATE = Symbol("useState");
const USE_EFFECT = Symbol("useEffect");
const USE_MEMO = Symbol("useMemo");
const USE_CALLBACK = Symbol("useCallback");
const USE_REF = Symbol("useRef");
const USE_CONTEXT = Symbol("useContext");
const USE_SUBSCRIBE = Symbol("useSubscribe");
const USE_ID = Symbol("useId");
const USE_SYNC_EXTERNAL_STORE = Symbol("useSyncExternalStore");
const USE_STORE_VALUE = Symbol("useStoreValue");
const USE_SET_STORE_VALUE = Symbol("useSetStoreValue");
const USE_GET_STORE_VALUE = Symbol("useGetStoreValue");
class RefClass {
  constructor(current) {
    this.current = current;
  }
  setCurrent(current) {
    if (this.current !== current) {
      this.current = current;
    }
  }
}
function createRef(current = void 0) {
  const refInstance = new RefClass(current);
  return refInstance;
}
function createState({ value, component }) {
  let localValue = { value, component };
  function getValue(v) {
    if (typeof v === "function") {
      return v(localValue.value);
    }
    return v;
  }
  localValue.update = (newValue) => {
    const _newValue = getValue(newValue);
    if (localValue.value !== _newValue) {
      localValue.value = _newValue;
      renderComponent(localValue.component);
    }
  };
  return localValue;
}
function createExternalStore({ subscribe, getSnapshot, isEqual: isEqual2, component }) {
  let localValue = {
    value: getSnapshot(),
    subscribe,
    getSnapshot,
    unsubscribe: null,
    component
  };
  const update = () => {
    const _newValue = getSnapshot();
    const isDiff = isFunction(isEqual2) ? isEqual2(localValue, _newValue) === false : localValue.value !== _newValue;
    if (isDiff) {
      localValue.value = _newValue;
      renderComponent(localValue.component);
    }
  };
  localValue.unsubscribe = subscribe(update);
  return localValue;
}
function createStoreValue({ key, defaultValue: defaultValue2, component }) {
  let localValue = Object.assign(
    {},
    createGetStoreValue({ key, defaultValue: defaultValue2, component }),
    createSetStoreValue({ key, defaultValue: defaultValue2, component })
  );
  return localValue;
}
function createGetStoreValue({ key, defaultValue: defaultValue2, component }) {
  let localValue = {
    key,
    component,
    getValue: () => {
      return component.$store.get(key, defaultValue2);
    }
  };
  return localValue;
}
function createSetStoreValue({ key, defaultValue: defaultValue2, component }) {
  let localValue = {
    key,
    component,
    defaultValue: defaultValue2,
    update: (value) => {
      let _newValue = value;
      if (isFunction(value)) {
        _newValue = value(component.$store.get(key) || defaultValue2);
      }
      component.$store.set(key, _newValue);
    }
  };
  return localValue;
}
function createEffect({ callback, deps, component, hasChangedDeps }) {
  return {
    callback,
    deps,
    hasChangedDeps,
    component
  };
}
function createMemo({ callback, deps, component, value }) {
  const localValue = {
    callback,
    deps,
    component,
    value: null
  };
  localValue.value = isUndefined(value) ? callback.call(component) : value;
  return localValue;
}
function createSubscribe({
  name,
  callback,
  debounceSecond,
  throttleSecond,
  isSelf,
  component
}) {
  const localValue = {
    name,
    callback,
    component,
    debounceSecond,
    throttleSecond,
    isSelf
  };
  localValue.unsubscribe = component.$store.on(
    name,
    callback,
    component,
    debounceSecond,
    throttleSecond,
    false,
    isSelf
  );
  return localValue;
}
class HookMachine extends MagicHandler {
  constructor() {
    super(...arguments);
    __publicField(this, "__stateHooks", []);
    __publicField(this, "__stateHooksIndex", 0);
  }
  copyHooks() {
    return {
      __stateHooks: this.__stateHooks,
      __stateHooksIndex: this.__stateHooksIndex
    };
  }
  initHooks() {
    this.__stateHooks = [];
    this.__stateHooksIndex = 0;
  }
  reloadHooks(hooks) {
    this.__stateHooks = hooks.__stateHooks || [];
    this.__stateHooksIndex = hooks.__stateHooksIndex || 0;
    this.__stateHooks.forEach((hook, index2) => {
      switch (hook == null ? void 0 : hook.type) {
        case USE_STATE:
          hook.hookInfo = createState({
            value: hook.hookInfo.value,
            component: this
          });
          break;
        case USE_MEMO:
        case USE_CALLBACK:
        case USE_REF:
          var newData = {
            callback: hook.hookInfo.callback,
            deps: hook.hookInfo.deps,
            component: this
          };
          if (hook.type === USE_REF || hook.type === USE_MEMO) {
            newData.value = hook.hookInfo.value;
          }
          hook.hookInfo = createMemo(newData);
          break;
        case USE_STORE_VALUE:
          hook.hookInfo = createStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this
          });
          break;
        case USE_GET_STORE_VALUE:
          hook.hookInfo = createGetStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this
          });
          break;
        case USE_SET_STORE_VALUE:
          hook.hookInfo = createSetStoreValue({
            key: hook.hookInfo.key,
            defaultValue: hook.hookInfo.defaultValue,
            component: this
          });
          break;
        case USE_SYNC_EXTERNAL_STORE:
          hook.hookInfo = createExternalStore({
            subscribe: hook.hookInfo.subscribe,
            getSnapshot: hook.hookInfo.getSnapshot,
            isEqual: hook.hookInfo.isEqual,
            component: this
          });
          break;
        case USE_SUBSCRIBE:
          if (hook.hookInfo.unsubscribe) {
            hook.hookInfo.unsubscribe();
          }
          hook.hookInfo = createSubscribe({
            name: hook.hookInfo.name,
            callback: hook.hookInfo.callback.bind(this),
            debounceSecond: hook.hookInfo.debounceSecond,
            throttleSecond: hook.hookInfo.throttleSecond,
            isSelf: hook.hookInfo.isSelf,
            component: this
          });
          break;
        case USE_EFFECT:
        default:
          this.__stateHooks[index2] = void 0;
          break;
      }
    });
  }
  resetCurrentComponent() {
    this.resetHookIndex();
    resetCurrentComponent(this);
  }
  resetHookIndex() {
    this.__stateHooksIndex = 0;
  }
  increaseHookIndex() {
    this.__stateHooksIndex++;
  }
  getHook(hookType) {
    const hookInfo = this.__stateHooks[this.__stateHooksIndex];
    if (hookType && (hookInfo == null ? void 0 : hookInfo.type) !== hookType) {
      return void 0;
    }
    return hookInfo;
  }
  setHook(type, hookInfo) {
    this.__stateHooks[this.__stateHooksIndex] = {
      type,
      hookInfo
    };
  }
  useBatch(callback) {
    pendingComponent(this);
    callback && callback();
    removePendingComponent(this);
    renderComponent(this);
  }
  useId() {
    if (!this.getHook(USE_ID)) {
      this.setHook(USE_ID, { value: uuid(), component: this });
    }
    const { value } = this.getHook().hookInfo;
    this.increaseHookIndex();
    return value;
  }
  useSyncExternalStore(subscribe, getSnapshot, isEqual2) {
    if (!this.getHook(USE_SYNC_EXTERNAL_STORE)) {
      this.setHook(
        USE_SYNC_EXTERNAL_STORE,
        createExternalStore({
          subscribe,
          getSnapshot,
          isEqual: isEqual2,
          component: this
        })
      );
    }
    const { value } = this.getHook().hookInfo;
    this.increaseHookIndex();
    return value;
  }
  useState(initialState) {
    if (!this.getHook(USE_STATE)) {
      this.setHook(
        USE_STATE,
        createState({ value: initialState, component: this })
      );
    }
    const value = this.getHook().hookInfo;
    this.increaseHookIndex();
    return [value.value, value.update];
  }
  isChangedDeps(deps) {
    const hasDeps = !deps;
    const {
      hookInfo: { deps: currentDeps }
    } = this.getHook() || { hookInfo: {} };
    const hasChangedDeps = currentDeps ? !deps.every((d, i) => d === currentDeps[i]) : true;
    if ((deps == null ? void 0 : deps.length) === 0 && (currentDeps == null ? void 0 : currentDeps.length) === 0) {
      return false;
    }
    return hasDeps || hasChangedDeps;
  }
  useEffect(callback, deps) {
    this.setHook(
      USE_EFFECT,
      createEffect({
        deps,
        callback,
        hasChangedDeps: this.isChangedDeps(deps),
        component: this
      })
    );
    this.increaseHookIndex();
  }
  useReducer(reducer, initialState) {
    const [state, setState] = this.useState(initialState);
    function dispatch(action) {
      setState((prevState) => reducer(prevState, action));
    }
    return [state, dispatch];
  }
  useMemo(callback, deps, useType = USE_MEMO) {
    const hasChangedDeps = this.isChangedDeps(deps);
    if (hasChangedDeps) {
      this.setHook(
        useType,
        createMemo({
          deps,
          callback,
          component: this
        })
      );
    }
    const lastHookValue = this.getHook().hookInfo || {};
    this.increaseHookIndex();
    return lastHookValue.value;
  }
  useCallback(callback, deps) {
    return this.useMemo(() => callback, deps, USE_CALLBACK);
  }
  useRef(initialValue) {
    return this.useMemo(() => createRef(initialValue), [], USE_REF);
  }
  refreshProvider(provider) {
    const hookInfo = this.filterHooks(USE_CONTEXT).find(
      (it) => it.provider.id === provider.id
    );
    if (hookInfo) {
      hookInfo.provider = provider;
    }
  }
  useContext(context) {
    if (!this.getHook(USE_CONTEXT)) {
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
    if (!this.getHook(USE_SUBSCRIBE)) {
      this.setHook(
        USE_SUBSCRIBE,
        createSubscribe({
          name,
          callback,
          component: this,
          debounceSecond,
          throttleSecond,
          isSelf
        })
      );
    }
    this.increaseHookIndex();
  }
  useSelf(name, callback, debounceSecond = 0, throttleSecond = 0) {
    return this.useSubscribe(
      name,
      callback,
      debounceSecond,
      throttleSecond,
      true
    );
  }
  useEmit(name, ...args) {
    return this.emit(name, ...args);
  }
  useStoreValue(key, defaultValue2) {
    this.useSubscribe(key, () => {
      renderComponent(this);
    });
    if (!this.getHook(USE_STORE_VALUE)) {
      this.setHook(
        USE_STORE_VALUE,
        createStoreValue({
          key,
          defaultValue: defaultValue2,
          component: this
        })
      );
    }
    const value = this.getHook().hookInfo;
    this.increaseHookIndex();
    return [value.getValue(), value.update];
  }
  useGetStoreValue(key, defaultValue2) {
    if (!this.getHook(USE_GET_STORE_VALUE)) {
      this.setHook(
        USE_GET_STORE_VALUE,
        createGetStoreValue({
          key,
          defaultValue: defaultValue2,
          component: this
        })
      );
    }
    const value = this.getHook().hookInfo;
    this.increaseHookIndex();
    return value.getValue;
  }
  useSetStoreValue(key) {
    if (!this.getHook(USE_SET_STORE_VALUE)) {
      this.setHook(
        USE_SET_STORE_VALUE,
        createSetStoreValue({
          key,
          component: this
        })
      );
    }
    const value = this.getHook().hookInfo;
    this.increaseHookIndex();
    return value.update;
  }
  useStore(key, defaultValue2) {
    return this.$store.get(key, defaultValue2);
  }
  useStoreSet(key, value, hasChangeMessage = true) {
    this.$store.set(key, value, hasChangeMessage);
  }
  filterHooks(type) {
    return this.__stateHooks.filter((it) => (it == null ? void 0 : it.type) === type).map((it) => it.hookInfo);
  }
  getUseEffects() {
    return this.filterHooks(USE_EFFECT);
  }
  getUseSyncExternalStore() {
    return this.filterHooks(USE_SYNC_EXTERNAL_STORE);
  }
  getUseSubscribe() {
    return this.filterHooks(USE_SUBSCRIBE);
  }
  getUseStates() {
    return this.filterHooks(USE_STATE).map((it) => it.value);
  }
  runHooks() {
    this.getUseEffects().forEach((it) => {
      if (it.hasChangedDeps) {
        it.cleanup = it.callback();
      }
    });
  }
  cleanHooks() {
    this.getUseEffects().forEach((it) => {
      if (isFunction(it.cleanup)) {
        it.cleanup();
      }
    });
    this.getUseSyncExternalStore().forEach((it) => {
      if (isFunction(it.unsubscribe)) {
        it.unsubscribe();
      }
    });
    this.getUseSubscribe().forEach((it) => {
      if (isFunction(it.unsubscribe)) {
        it.unsubscribe();
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
  onUnmounted() {
    this.isMounted = false;
    this.cleanHooks();
  }
}
const _EventMachine = class extends HookMachine {
  constructor(opt, props, state) {
    super();
    __privateAdd(this, _state, {});
    __privateAdd(this, _cachedMethodList, void 0);
    __privateAdd(this, _functionCache, {});
    __privateAdd(this, _childObjectList, {});
    __publicField(this, "registerRef", (ref, el) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (isObject(ref)) {
        ref.value = el;
      } else {
        this.refs[ref] = el;
      }
    });
    this.refs = {};
    this.id = uuid();
    this.sourceId = uuid();
    this.initializeProperty(opt, props, state);
  }
  get renderer() {
    return this.$store.get(COMPONENT_ROOT_CONTEXT).renderer;
  }
  setId(id) {
    this.id = id;
  }
  setRefs(refs = {}) {
    this.refs = refs;
  }
  initializeHandler() {
    return super.initializeHandler({
      DomEventHandler,
      ObserverHandler,
      StoreHandler
    });
  }
  get firstChild() {
    return Object.values(this.children)[0];
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
  setProps(props) {
    this.props = props;
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
    if (Boolean(isRefresh) === true) {
      renderComponent(this);
    }
  }
  toggleState(key, isLoad = true) {
    this.setState(
      {
        [key]: !__privateGet(this, _state)[key]
      },
      isLoad
    );
  }
  changedProps(newProps) {
    return !vnodePropsDiff(this.props, newProps);
  }
  _reload(props) {
    if (isGlobalForceRender() || this.changedProps(props)) {
      this.props = props;
      renderComponent(this);
    }
  }
  get state() {
    return __privateGet(this, _state);
  }
  get ref() {
    return this.props.ref;
  }
  get children() {
    return __privateGet(this, _childObjectList);
  }
  get child() {
    return Object.values(this.children)[0];
  }
  isNestedComponent() {
    const oldEl = this.getEl();
    return Object.values(this.children).some((child) => {
      return oldEl === child.getEl();
    });
  }
  setChildren(children2) {
    Object.entries(children2).forEach(([id, instance]) => {
      if (instance) {
        __privateGet(this, _childObjectList)[id] = instance;
      }
    });
  }
  get isPreLoaded() {
    return true;
  }
  getEl() {
    var _a, _b, _c;
    if (!((_a = this.$el) == null ? void 0 : _a.el)) {
      return (_c = (_b = this[ALTERNATE_TEMPLATE]) == null ? void 0 : _b.instance) == null ? void 0 : _c.getEl();
    }
    return this.$el.el;
  }
  getFamily() {
    const el = this.getEl();
    if (!el) {
      return { family: [this[VNODE_INSTANCE]] };
    }
    let lastComponent = el[COMPONENT_INSTANCE];
    const family = [];
    while (lastComponent) {
      family.push(lastComponent);
      if (!lastComponent[VNODE_INSTANCE])
        break;
      const vnodeInstance = lastComponent[VNODE_INSTANCE];
      if (!vnodeInstance[SELF_COMPONENT_INSTANCE]) {
        break;
      }
      lastComponent = vnodeInstance[SELF_COMPONENT_INSTANCE];
    }
    family.reverse();
    const familyIndex = family.findIndex((item) => item === this);
    return {
      family,
      component: this,
      index: familyIndex
    };
  }
  getTargetInstance(oldEl) {
    const targetList = Object.values(this.children).filter(Boolean).filter((instance) => {
      return (instance == null ? void 0 : instance.id) !== this.id && (instance == null ? void 0 : instance.getEl()) === oldEl;
    });
    if (targetList.length) {
      return targetList[0];
    }
    return void 0;
  }
  isForceRender() {
    return false;
  }
  isInstanceOf(...args) {
    return args.some((TargetClass) => this instanceof TargetClass);
  }
  getChildrenInstanceOf(localClass) {
    return Object.values(this.children).filter((child) => {
      return child.isInstanceOf(localClass);
    });
  }
  getRootInstance() {
    var _a;
    let rootInstance = this;
    if (rootInstance.sourceName === "RootElement") {
      return rootInstance;
    }
    while ((_a = rootInstance.parent) == null ? void 0 : _a.sourceName) {
      rootInstance = rootInstance.parent;
      if (rootInstance.sourceName === "RootElement") {
        break;
      }
    }
    return rootInstance;
  }
  async forceRender() {
    this.cleanHooks();
    await renderComponent(this);
  }
  setParentElement(parentElement) {
    this.parentElement = parentElement;
  }
  is(name, callback) {
    return this.sourceName === name && callback(this);
  }
  async render($container, isForceRender = false) {
    renderComponent(this, $container);
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
      registerRef: this.registerRef
    };
  }
  getFunctionComponent() {
    return this;
  }
  refresh() {
    renderComponent(this);
  }
  template() {
    return null;
  }
  clear() {
    Object.entries(__privateGet(this, _childObjectList)).forEach(([_key, child]) => {
      if (!child.getEl().parentNode) {
        if (child) {
          child.destroy();
          delete __privateGet(this, _childObjectList)[_key];
        }
      }
    });
  }
  clearAll() {
    Object.entries(__privateGet(this, _childObjectList)).forEach(([id, child]) => {
      if (child) {
        child.destroy();
        delete __privateGet(this, _childObjectList)[id];
      }
    });
  }
  destroy(isRemoveElement = false) {
    var _a;
    removeRenderCallback(this);
    Object.entries(__privateGet(this, _childObjectList)).forEach(([id, child]) => {
      if (child) {
        child.destroy();
      }
    });
    this.runHandlers("destroy");
    if (isRemoveElement) {
      (_a = this.$el) == null ? void 0 : _a.remove();
      this.$el = null;
      this.onUnmounted();
    }
    this.onDestroyed();
    this.refs = {};
  }
  collectMethodes(refreshCache = false) {
    if (!__privateGet(this, _cachedMethodList) || refreshCache) {
      __privateSet(this, _cachedMethodList, collectProps(
        this,
        _EventMachine,
        (name) => MagicMethod.check(name)
      ).map((it) => {
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
  runUpdated() {
    this.onUpdated();
  }
  runUnmounted() {
    this.onUnmounted();
  }
  onMounted() {
    super.onMounted();
  }
  onUpdated() {
    super.onUpdated();
  }
  onDestroyed() {
    super.onDestroyed();
  }
  onUnmounted() {
    super.onUnmounted();
  }
  initMagicMethod(methodName, callback) {
    if (!this[methodName]) {
      this[methodName] = callback;
    }
  }
};
let EventMachine = _EventMachine;
_state = new WeakMap();
_cachedMethodList = new WeakMap();
_functionCache = new WeakMap();
_childObjectList = new WeakMap();
function insertElement(childVNode, fragment, parentElement, options = {}, isFragmentItem = false, parentVNode) {
  if (childVNode instanceof VNode || (childVNode == null ? void 0 : childVNode.makeElement)) {
    childVNode.setParentElement(parentElement);
    childVNode[PARENT_VNODE_INSTANCE] = parentVNode;
    let componentInstance = DomRenderer(childVNode, options);
    const el = componentInstance == null ? void 0 : componentInstance.getEl();
    if (el) {
      if (el instanceof window.DocumentFragment) {
        const vNodeInstance = componentInstance;
        const instance = vNodeInstance.instance;
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
      } else {
        el[IS_FRAGMENT_ITEM] = isFragmentItem;
        el[PARENT_VNODE_INSTANCE] = parentVNode;
        fragment.appendChild(el);
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
  } else
    ;
}
function makeChildren(parentVNode, options, isFragmentItem = false) {
  const children2 = parentVNode.children;
  if (children2 && children2.length) {
    const fragment = document.createDocumentFragment();
    insertElement(
      children2,
      fragment,
      options.container,
      options,
      isFragmentItem,
      parentVNode
    );
    options.container.appendChild(fragment);
  }
}
function commitMountFromElement(el) {
  commitMount(el[COMPONENT_INSTANCE]);
}
function commitMount(componentInstance) {
  if (componentInstance && componentInstance.getFamily) {
    window.requestIdleCallback(() => {
      const family = componentInstance.getFamily();
      let len = family.family.length;
      while (len--) {
        const component = family.family[len];
        component == null ? void 0 : component.runMounted();
      }
    });
  }
}
function commitUnmountFromElement(el) {
  commitUnmount(el[COMPONENT_INSTANCE]);
}
function commitUnmount(componentInstance) {
  if (componentInstance && componentInstance.getFamily) {
    const family = componentInstance.getFamily();
    let len = family.family.length;
    let i = 0;
    while (i < len) {
      const component = family.family[len];
      component == null ? void 0 : component.runUnmounted();
      i++;
    }
  }
}
function commitUpdated(componentInstance) {
  if (componentInstance) {
    window.requestIdleCallback(() => {
      const family = componentInstance.getFamily();
      let len = family.family.length;
      while (len--) {
        const component = family.family[len];
        component == null ? void 0 : component.runUpdated();
      }
    });
  }
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
    return this.settings.get(key) || defaultValue2;
  }
  set(key, value, hasChangeMessage = true) {
    const oldValue = this.settings.get(key);
    if (oldValue !== value) {
      this.settings.set(key, value);
      if (hasChangeMessage) {
        this.sendMessage(this, key, value);
      }
    }
  }
  setValue(key, valueFunction) {
    const oldValue = this.get(key);
    const newValue = valueFunction(oldValue);
    this.set(key, newValue);
  }
  initValue(key, valueFunction) {
    const oldValue = this.get(key);
    const newValue = valueFunction(oldValue);
    this.init(key, newValue);
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
      callback = makeRequestAnimationFrame(
        callback,
        context,
        originalCallback.name
      );
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
      const filteredEvents = this.getCallbacks(event).filter((f) => {
        return f.originalCallback !== originalCallback;
      });
      this.setCallbacks(event, filteredEvents);
    }
  }
  offAll(context) {
    Object.keys(this.callbacks).forEach((event) => {
      this.setCallbacks(
        event,
        this.getCallbacks(event).filter((f) => {
          return f.context !== context;
        })
      );
    });
  }
  getCachedCallbacks(event) {
    return this.getCallbacks(event);
  }
  sendMessage(source, event, ...args) {
    this.sendMessageList(source, [[event, ...args]]);
  }
  runMessage(runnableFunction, args) {
    const result = runnableFunction.callback.apply(
      runnableFunction.context,
      args
    );
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
          const runnableFunctions = list.filter((f) => !f.enableSelfTrigger).filter(
            (f) => f.enableAllTrigger || f.originalCallback.source !== source
          );
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
        const runnableFunctions = list.filter((f) => {
          var _a;
          return ((_a = f.context) == null ? void 0 : _a.source) === source;
        });
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
class UIElement extends EventMachine {
  constructor(opt, props = {}, state = {}) {
    super(opt, props, state);
    __publicField(this, "storeInstance");
    if (props.store) {
      this.storeInstance = props.store;
    } else {
      if (!this.parent.$store) {
        this.storeInstance = new BaseStore();
      }
    }
    this.created();
    this.initialize();
    this.initializeContext(opt, props, state);
  }
  initializeContext(opt, props = {}) {
    if (!opt) {
      this.$store.init(COMPONENT_ROOT_CONTEXT, props);
    }
  }
  currentContext() {
    return this.contexts[this.contexts.length - 1];
  }
  setStore(storeInstance) {
    this.storeInstance = storeInstance;
  }
  get $store() {
    return this.storeInstance || this.parent.$store;
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
    this.$store.on(
      message,
      callback,
      this.source,
      debounceDelay,
      throttleDelay,
      enableAllTrigger,
      enableSelfTrigger,
      [],
      frame
    );
  }
  off(message, callback) {
    this.$store.off(message, callback, this.source);
  }
  subscribe(callback, debounceSecond = 0, throttleSecond = 0) {
    const id = `subscribe.${uuidShort()}`;
    const newCallback = this.createLocalCallback(id, callback);
    this.$store.on(
      id,
      newCallback,
      this,
      debounceSecond,
      throttleSecond,
      false,
      true
    );
    return id;
  }
  static createFunctionElementInstance(NewFunctionComponent, parentInstance, props, state = {}) {
    class FunctionElement extends UIElement {
      initializeProperty(opt, props2 = {}, state2 = {}) {
        super.initializeProperty(opt, props2, state2);
        this.sourceName = this.getFunctionComponent().name || this.sourceName;
      }
      getFunctionComponent() {
        return NewFunctionComponent;
      }
      isInstanceOf(...args) {
        return args.some((TargetClass) => NewFunctionComponent === TargetClass);
      }
      template() {
        return NewFunctionComponent.call(this, this.props);
      }
    }
    return new FunctionElement(parentInstance, props, state);
  }
  static createElementInstance(ElementClass, parent, props, state) {
    if (ElementClass.__proto__.name === "") {
      return UIElement.createFunctionElementInstance(
        ElementClass,
        parent,
        props,
        state
      );
    } else {
      return new ElementClass(parent, props, state);
    }
  }
}
function createComponentInstance(ComponentClass, parent, props, state) {
  return UIElement.createElementInstance(ComponentClass, parent, props, state);
}
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
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
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
  borderWidth: true,
  borderRadius: true,
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
const ArrayNumberStyleKeys = {
  padding: true,
  border: true,
  margin: true,
  boxShadow: true
};
function convertNumberStyleValue(key, value) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  } else if (isArray(value)) {
    if (ArrayNumberStyleKeys[key]) {
      value = value.map((v) => convertNumberStyleValue(key, v)).join(" ");
    }
  }
  return value;
}
function styleKeyMap(key) {
  return convertStyleKey(key);
}
function css(style = {}) {
  const newStyles = {};
  Object.keys(style).forEach((styleKey) => {
    newStyles[styleKeyMap(styleKey)] = convertNumberStyleValue(
      styleKey,
      style[styleKey]
    );
  });
  return newStyles;
}
const EXPECT_ATTRIBUTES = {
  memoizedProps: true,
  parentElement: true,
  el: true,
  children: true,
  instance: true
};
window.instanceList = [];
function stringifyStyle$1(styleObject) {
  const newStyle = css(styleObject);
  const list = [];
  const keys = Object.keys(newStyle);
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i];
    list[list.length] = `${key}: ${newStyle[key]};`;
  }
  return list.join("");
}
const children$2 = (el) => {
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
function isEqual(obj1, obj2, count = 0, omitKeys = {}) {
  if (isFunction(obj1) && isFunction(obj2)) {
    return false;
  }
  const obj1Keys = Object.keys(obj1).filter(
    (key) => omitKeys[key] === void 0
  );
  const obj2Keys = Object.keys(obj2).filter(
    (key) => omitKeys[key] === void 0
  );
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  if (obj1Keys.length === 0 && obj2Keys.length === 0) {
    return true;
  }
  const result = obj1Keys.every((key) => {
    if (omitKeys[key]) {
      return true;
    }
    const obj1Value = obj1[key];
    const obj2Value = obj2[key];
    if (isGlobalForceRender() && key === "Component") {
      return false;
    }
    if (isArray(obj1Value) && isArray(obj2Value)) {
      if (obj1Value.length !== obj2Value.length) {
        return false;
      }
      if (obj1Value.length === 0 && obj2Value.length === 0) {
        return true;
      }
      const isTrue = obj1Value.every((value, index2) => {
        return isEqual(value, obj2Value[index2], count + 1, omitKeys);
      });
      return isTrue;
    } else if (isObject(obj1Value) && isObject(obj2Value)) {
      if (obj1Value instanceof EventMachine) {
        return obj1Value === obj2Value;
      }
      return isEqual(obj1Value, obj2Value, count + 1, omitKeys);
    }
    const result2 = obj1Value === obj2Value;
    if (result2) {
      if (isGlobalForceRender() && isFunction(obj1Value)) {
        return false;
      }
    }
    return result2;
  });
  return result;
}
function vnodePropsDiff(oldProps, newProps) {
  return isEqual(oldProps, newProps, 0, EXPECT_ATTRIBUTES);
}
class VNode {
  constructor(type, tag, props, children2, Component = void 0) {
    this.type = type;
    this.tag = tag;
    this.nodeName = tag == null ? void 0 : tag.toUpperCase();
    this.props = props;
    this.children = children2;
    this.Component = Component;
    this.el = null;
    this.initializeProps();
    this.initializeChildren();
  }
  clone() {
    return new VNode(
      this.type,
      this.tag,
      { ...this.props },
      this.children.map((it) => it.clone()),
      this.Component
    );
  }
  find(callback) {
    return this.props.content.find(callback);
  }
  mounted() {
    const selfInstance = this[SELF_COMPONENT_INSTANCE];
    commitMount(selfInstance);
  }
  updated() {
    const selfInstance = this[SELF_COMPONENT_INSTANCE];
    if (selfInstance) {
      commitUpdated(selfInstance);
    }
  }
  unmounted() {
    const selfInstance = this[SELF_COMPONENT_INSTANCE];
    if (selfInstance) {
      commitUnmount(selfInstance);
    }
  }
  runMounted() {
    if (this.mounted) {
      if (!this.runnedMounted) {
        requestAnimationFrame(() => {
          this.mounted();
        });
        this.runnedMounted = true;
      } else {
        this.mounted();
      }
    }
  }
  runUnmounted() {
    if (this.unmounted) {
      this.unmounted();
    }
  }
  runUpdated() {
    if (this.updated) {
      if (!this.runnedUpdated) {
        requestAnimationFrame(() => {
          this.updated();
        });
        this.runnedUpdated = true;
      } else {
        this.updated();
      }
    }
  }
  get stringifyStyle() {
    return this.memoizedProps.style;
  }
  initializeProps() {
    const newProps = Object.assign({}, this.props);
    if (!this.Component) {
      if (isObject(newProps.style)) {
        newProps.style = stringifyStyle$1(newProps.style);
      }
      if (newProps.className) {
        newProps.class = newProps.className;
        delete newProps.className;
      }
      Object.keys(newProps).forEach((key) => {
        const value = newProps[key];
        if (key === "style") {
          if (isUndefined(value) || value === "") {
            delete newProps[key];
          }
        } else {
          if (isUndefined(value)) {
            delete newProps[key];
          }
        }
      });
      this.memoizedProps = newProps;
    }
    if (this.props.enableHtml) {
      this.enableHtml = this.props.enableHtml;
      delete this.props.enableHtml;
    }
  }
  initializeChildren() {
    var _a;
    if (isArray(this.children)) {
      if ((_a = this.props.content) == null ? void 0 : _a.length)
        return;
      this.children = this.children.filter(isValue).map((child) => {
        if (isString(child) || isNumber(child)) {
          return createVNodeText(child);
        }
        return child;
      });
      this.props.content = this.children;
    }
  }
  setParentElement(parentElement) {
    this.parentElement = parentElement;
  }
  makeText(divider = "") {
    const arr = this.children.map((child) => child.makeText(divider)).flat(Infinity);
    return arr.join(divider);
  }
  isType(type) {
    return this.type === type;
  }
  hasComponent() {
    return this.children.length === 1 && this.children[0].type === VNodeType.COMPONENT;
  }
  hasFragment() {
    return this.children.length === 1 && this.children[0].type === VNodeType.FRAGMENT;
  }
  get firstChild() {
    return this.children[0];
  }
  get lastChild() {
    return this.children[this.children.length - 1];
  }
  toString() {
    return this.makeText();
  }
  getEl() {
    return this.el;
  }
  setEl(el) {
    this.el = el;
  }
}
class VNodeText extends VNode {
  constructor(value) {
    super(VNodeType.TEXT, null, {});
    this.value = value;
    this.nodeName = "#TEXT";
  }
  clone() {
    return new VNodeText(this.value);
  }
  get textContent() {
    return this.value;
  }
  runMounted() {
  }
  runUpdated() {
  }
  runUnmounted() {
  }
  makeText() {
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
  runUpdated() {
  }
  runUnmounted() {
  }
  makeText() {
    return "";
  }
}
class VNodeFragment extends VNode {
  constructor(props = {}, children2) {
    super(VNodeType.FRAGMENT, "fragment", props || {}, children2);
  }
  clone() {
    return new VNodeFragment(
      this.props,
      this.children.map((it) => it.clone())
    );
  }
}
class VNodeComponent extends VNode {
  constructor(props = {}, children2, Component) {
    super(VNodeType.COMPONENT, "object", props || {}, children2, Component);
    this.Component = Component;
    this.LastComponent = Component;
    this.instance = null;
  }
  clone() {
    return new VNodeComponent(
      this.props,
      this.children.map((it) => it.clone()),
      this.Component
    );
  }
  isFunctionComponent() {
    return this.LastComponent.__proto__.name === "";
  }
  getEl() {
    var _a;
    return (_a = this.instance) == null ? void 0 : _a.getEl();
  }
  setEl(el) {
    this.instance.$el = Dom.create(el);
  }
  mounted() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.onMounted();
  }
  updated() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.onUpdated();
  }
  unmounted() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.onUnmounted();
  }
  getModule() {
    if (this.Component.__timestamp) {
      const currentModule = getModule(this.Component);
      return currentModule;
    }
    return this.Component;
  }
  setInstance(instance) {
    this.instance = instance;
  }
  get isComponentChanged() {
    const localComponent = this.getModule();
    if (!localComponent)
      return false;
    return this.LastComponent !== this.getModule();
  }
  makeClassInstance(options) {
    var _a;
    const props = { ...this.props };
    const newComponent = this.getModule() || this.Component;
    this.LastComponent = newComponent;
    const oldInstance = this.instance;
    const hooks = oldInstance == null ? void 0 : oldInstance.copyHooks();
    const state = oldInstance == null ? void 0 : oldInstance.state;
    const oldId = oldInstance == null ? void 0 : oldInstance.id;
    const refs = oldInstance == null ? void 0 : oldInstance.refs;
    const children2 = (oldInstance == null ? void 0 : oldInstance.children) || {};
    this.instance = createComponentInstance(
      newComponent,
      options.context,
      props,
      state
    );
    if (oldId) {
      this.instance.setId(oldId);
    }
    if (refs) {
      this.instance.setRefs(refs);
    }
    if (hooks && ((_a = hooks.__stateHooks) == null ? void 0 : _a.length)) {
      this.instance.reloadHooks(hooks);
    } else {
      this.instance.initHooks();
    }
    if (state) {
      this.instance.setState(state, false);
    }
    if (Object.keys(children2).length) {
      this.instance.setChildren(children2);
    }
    if ((props == null ? void 0 : props.ref) instanceof RefClass) {
      props == null ? void 0 : props.ref.setCurrent(this.instance);
    }
    this.instance[VNODE_INSTANCE] = this;
    return this.instance;
  }
  template() {
    var _a;
    return (_a = this.instance) == null ? void 0 : _a.template();
  }
  makeText() {
    return "";
  }
}
class VNodePotal extends VNode {
  constructor(props = {}, children2, Component) {
    super(VNodeType.PORTAL, "potal", props || {}, children2);
    this.Component = Component;
  }
  clone() {
    return new VNodePotal(
      this.props,
      this.children.map((it) => it.clone()),
      this.Component
    );
  }
  makeText() {
    return "";
  }
}
class VNodeLazy extends VNode {
  constructor(asyncCallbackComponent) {
    super(VNodeType.LAZY, "lazy", {}, asyncCallbackComponent);
    this.Component = asyncCallbackComponent;
  }
  clone() {
    return new VNodeLazy(this.Component);
  }
  makeText() {
    return "";
  }
}
function createVNode({ tag, props = {}, children: children2 }) {
  return new VNode(VNodeType.NODE, tag, props, children2);
}
function createVNodeComponent({ props = {}, children: children2, Component }) {
  if (typeof Component === "undefined") {
    throw new Error("Component is undefined");
  }
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
function createPotal({ props = {}, children: children2, Component }) {
  return new VNodePotal(props, children2, Component);
}
function createLazy(asyncCallback) {
  return new VNodeLazy(asyncCallback);
}
function cloneVNode(vnode) {
  return vnode.clone();
}
let TEMP_COMMENT;
function makeTempComment() {
  if (!TEMP_COMMENT) {
    TEMP_COMMENT = document.createComment("");
  }
  return TEMP_COMMENT;
}
function makeNativeCommentDom(value) {
  const text = makeTempComment().cloneNode();
  text.textContent = value;
  return text;
}
function createElement$3(vNodeInstance) {
  return makeNativeCommentDom(vNodeInstance.value);
}
function makeElement$4(vNodeInstance) {
  const el = createElement$3(vNodeInstance);
  el[ELEMENT_INSTANCE] = vNodeInstance;
  el[ELEMENT_PROPS] = { value: vNodeInstance.value };
  vNodeInstance.setEl(el);
  return vNodeInstance;
}
function VNodeCommentRender$1(vNodeInstance, options) {
  return makeElement$4(vNodeInstance);
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
const SVG_ELEMENTS_LIST = {};
Object.keys(SVG_ELEMENTS).forEach((key) => {
  SVG_ELEMENTS_LIST[key.toLowerCase()] = true;
  SVG_ELEMENTS_LIST[key.toUpperCase()] = true;
});
function isSVG(tagName) {
  return !!SVG_ELEMENTS[tagName];
}
let nativeDomCache = {};
const expectAttributes = {
  content: true
};
const ENABLE_PROPERTY = {
  indeterminate: true
};
function setAttribute(el, name, value) {
  if (expectAttributes[name])
    return;
  if (ENABLE_PROPERTY[name]) {
    el[name] = value;
  } else {
    el.setAttribute(name, value);
  }
}
function removeAttribute(el, name) {
  if (ENABLE_PROPERTY[name]) {
    el[name] = false;
  } else {
    el.removeAttribute(name);
  }
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
function makeNativeDom(name) {
  if (!nativeDomCache[name]) {
    const el = isSVG(name) ? document.createElementNS("http://www.w3.org/2000/svg", name) : document.createElement(name);
    nativeDomCache[name] = el;
  }
  return nativeDomCache[name].cloneNode(false);
}
function createElement$2(vNodeInstance) {
  return makeNativeDom(vNodeInstance.tag);
}
function makeElement$3(vNodeInstance, options) {
  const el = createElement$2(vNodeInstance);
  console.group("makeElement", vNodeInstance, el);
  let props = vNodeInstance.memoizedProps;
  if (props) {
    if (props.ref) {
      vNodeInstance.ref = props.ref;
      if (vNodeInstance.ref instanceof RefClass) {
        vNodeInstance.ref.setCurrent(el);
      }
      isFunction(options.registerRef) && options.registerRef(props.ref, el);
    }
    Object.keys(props).forEach((key) => {
      const value = props[key];
      if (key === "ref")
        return;
      if (key === "style") {
        if (isString(value)) {
          el.style.cssText = value;
        } else {
          if (isObject(value) && Object.keys(value).length) {
            const styleValues = css(value);
            Object.entries(styleValues).forEach(([localKey, value2]) => {
              setStyle(el, localKey, value2);
            });
          } else {
            removeAttribute(el, "style");
          }
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
    });
  }
  el[ELEMENT_PROPS] = props;
  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.setEl(el);
  makeChildren(vNodeInstance, {
    ...options,
    container: el
  });
  console.groupEnd();
  return vNodeInstance;
}
function VNodeElementRender$1(vNodeInstance, options) {
  return makeElement$3(vNodeInstance, options);
}
function makeElement$2(vNodeInstance, options) {
  if (vNodeInstance.el)
    return this;
  const el = document.createDocumentFragment();
  el[ELEMENT_INSTANCE] = vNodeInstance;
  vNodeInstance.setEl(el);
  makeChildren(
    vNodeInstance,
    {
      ...options,
      container: el
    },
    true
  );
  return vNodeInstance;
}
function VNodeFragmentRender$1(vNodeInstance, options) {
  return makeElement$2(vNodeInstance, options);
}
let TEMP_TEXT;
function makeTempText() {
  if (!TEMP_TEXT) {
    TEMP_TEXT = document.createTextNode("");
  }
  return TEMP_TEXT;
}
function makeNativeTextDom(value) {
  const text = makeTempText().cloneNode();
  text.textContent = value;
  return text;
}
function createElement$1(vNodeInstance) {
  return makeNativeTextDom(vNodeInstance.value);
}
function makeElement$1(vNodeInstance, options) {
  const el = createElement$1(vNodeInstance);
  el[ELEMENT_INSTANCE] = vNodeInstance;
  el[ELEMENT_PROPS] = { value: vNodeInstance.value };
  vNodeInstance.setEl(el);
  return vNodeInstance;
}
function VNodeTextRender$1(vNodeInstance, options) {
  return makeElement$1(vNodeInstance);
}
const RendererList$1 = {
  [VNodeType.TEXT]: VNodeTextRender$1,
  [VNodeType.NODE]: VNodeElementRender$1,
  [VNodeType.FRAGMENT]: VNodeFragmentRender$1,
  [VNodeType.COMPONENT]: VNodeComponentRender$1,
  [VNodeType.COMMENT]: VNodeCommentRender$1
};
function VNodeRender$1(vNodeInstance, options) {
  if (isBoolean(options)) {
    throw new Error("options is boolean");
  }
  const CurrentRenderer = RendererList$1[vNodeInstance.type];
  if (CurrentRenderer) {
    return CurrentRenderer(vNodeInstance, options);
  }
  return null;
}
function DomRenderer(obj, options = {}) {
  if (isString(obj)) {
    obj = createVNodeText(obj);
  }
  if (isArray(obj) && obj.length === 1) {
    return DomRenderer(obj[0], options);
  }
  if (obj) {
    return VNodeRender$1(obj, options, options.container);
  }
  return obj;
}
const IGNORE_SET_PROPS = {
  cx: true,
  cy: true
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
    allowpaymentrequest: true
  })
);
const expectKeys = {
  content: true,
  ref: true,
  [IS_FRAGMENT_ITEM]: true,
  [ELEMENT_INSTANCE]: true,
  [ELEMENT_PROPS]: true,
  [COMPONENT_INSTANCE]: true
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
      if (isIgnoreProperty(name))
        return;
      el[name] = value;
    } else {
      el.removeAttribute(name);
      if (isIgnoreProperty(name))
        return;
      el[name] = void 0;
    }
  },
  setProp(el, name, value) {
    var _a, _b, _c;
    if (name === "ref")
      return;
    if (isBooleanType(name)) {
      const oldFieldValue = (_a = el[ELEMENT_PROPS]) == null ? void 0 : _a[name];
      if (oldFieldValue !== value) {
        this.setBooleanProp(el, name, value);
      }
    } else if (name.startsWith(PREFIX_EVENT)) {
      const oldFieldValue = (_b = el[ELEMENT_PROPS]) == null ? void 0 : _b[name];
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
          el.setAttribute(name, value);
        }
      }
    } else {
      const oldFieldValue = ((_c = el[ELEMENT_PROPS]) == null ? void 0 : _c[name]) || el[name];
      if (oldFieldValue !== value) {
        el.setAttribute(name, value);
        if (isSVG(el.tagName))
          return;
        el[name] = value;
      }
    }
  },
  removeProp(el, name) {
    el.removeAttribute(name);
    if (name == KEY_STYLE)
      return;
    if (isBooleanType(name)) {
      el[name] = false;
    } else if (name) {
      el[name] = void 0;
    }
  },
  updateProp(node, name, newValue, oldValue) {
    if (isUndefined(newValue)) {
      if (oldValue) {
        this.removeProp(node, name);
      }
    } else if (!oldValue || newValue != oldValue) {
      this.setProp(node, name, newValue);
    }
  },
  reloadComponent(oldEl, newVNode, options) {
    const targetInstance = options.context.getTargetInstance(oldEl);
    if (targetInstance) {
      targetInstance._reload(newVNode.props);
    }
  },
  reloadComponentInstance(targetInstance, newVNode) {
    if (targetInstance) {
      targetInstance._reload(newVNode.props);
    }
  },
  makeComponent(oldEl, newVNode, options) {
    let oldInstance = oldEl[COMPONENT_INSTANCE];
    const family = oldInstance.getFamily();
    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      oldInstance = family.family[0];
    } else {
      const index2 = family.family.findIndex((it) => {
        return it.id === newVNode[SELF_COMPONENT_INSTANCE].id;
      });
      if (index2 > -1) {
        oldInstance = family.family[index2 + 1];
      }
    }
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);
    const instance = newVNode.instance;
    instance.$el = Dom.create(oldEl);
    instance.setParentElement(oldEl.parentElement);
    renderVNodeComponent(instance);
  },
  makeComponentInstance(oldInstance, newVNode, options) {
    const oldEl = oldInstance.getEl();
    const family = oldInstance.getFamily();
    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      oldInstance = family.family[0];
    } else {
      const index2 = family.family.findIndex((it) => {
        return it.id === newVNode[SELF_COMPONENT_INSTANCE].id;
      });
      if (index2 > -1) {
        oldInstance = family.family[index2 + 1];
      }
    }
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);
    const instance = newVNode.instance;
    instance.$el = Dom.create(oldEl);
    instance.setParentElement(oldEl.parentElement);
    renderVNodeComponent(instance);
  },
  makeComponentForFragment(oldInstance, newVNode, options) {
    newVNode.setInstance(oldInstance);
    newVNode.makeClassInstance(options);
    const instance = newVNode.instance;
    instance.$el = oldInstance.$el;
    instance.setParentElement(oldInstance.parentElement);
    renderVNodeComponent(instance);
  },
  replaceWith(oldEl, newVNode, options) {
    if (!(newVNode instanceof VNode)) {
      return;
    }
    const newComponentInstance = DomRenderer(newVNode, {
      ...options,
      container: oldEl.parentElement
    });
    const objectElement = newComponentInstance.getEl();
    oldEl.replaceWith(objectElement);
    commitUnmountFromElement(oldEl);
    commitMountFromElement(objectElement);
  },
  replaceText(oldEl, newVNode) {
    var _a;
    const oldText = ((_a = oldEl[ELEMENT_PROPS]) == null ? void 0 : _a.value) || oldEl.textContent;
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
      commitUnmountFromElement(oldEl);
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
        commitMount(newVNodeInstance.instance);
      }
    }
  },
  insertAfter(beforeElement, newVNode, options, isFragmentItem = false) {
    const newVNodeInstance = DomRenderer(newVNode, options);
    if (newVNodeInstance == null ? void 0 : newVNodeInstance.el) {
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
  isVNodeComponent(node) {
    return node.type === VNodeType.COMPONENT;
  },
  changed(vNode, node2) {
    return (vNode.type === VNodeType.TEXT || vNode.type === VNodeType.COMMENT) && vNode.textContent !== node2.textContent || vNode.nodeName !== node2.nodeName.toUpperCase();
  },
  hasPassed(vNode) {
    return vNode == null ? void 0 : vNode.pass;
  },
  checkRefClass(oldEl, newVNode, options) {
    var _a, _b, _c, _d, _e, _f;
    if (!newVNode[SELF_COMPONENT_INSTANCE]) {
      const family2 = (_a = oldEl[COMPONENT_INSTANCE]) == null ? void 0 : _a.getFamily();
      if (family2 && ((_b = family2 == null ? void 0 : family2.family) == null ? void 0 : _b.length) && ((_c = family2 == null ? void 0 : family2.family[0]) == null ? void 0 : _c.isInstanceOf(newVNode.Component)) === false) {
        patch.replaceWith(oldEl, newVNode, options);
        return;
      }
      if (family2 && ((_d = family2 == null ? void 0 : family2.family) == null ? void 0 : _d.length) && ((_e = family2 == null ? void 0 : family2.family[0]) == null ? void 0 : _e.isInstanceOf(newVNode.Component))) {
        patch.reloadComponentInstance(family2 == null ? void 0 : family2.family[0], newVNode, options);
        return;
      }
      if ((_f = oldEl[COMPONENT_INSTANCE]) == null ? void 0 : _f.isInstanceOf(newVNode.Component)) {
        patch.reloadComponent(oldEl, newVNode, options);
      } else {
        patch.replaceWith(oldEl, newVNode, options);
      }
      return;
    }
    const family = oldEl[COMPONENT_INSTANCE].getFamily();
    const familyInstance = newVNode[SELF_COMPONENT_INSTANCE];
    const targetFamilyInstance = family.family.find(
      (it) => it.id === familyInstance.id
    );
    if (!targetFamilyInstance) {
      patch.makeComponent(oldEl, newVNode, options);
      return;
    }
    if (targetFamilyInstance) {
      patch.makeComponentInstance(targetFamilyInstance, newVNode, options);
      return;
    }
  }
};
const updateProps = (node, newProps = {}, oldProps = {}, options = {}, newVNode) => {
  const newPropsKeys = Object.keys(newProps);
  const oldPropsKeys = Object.keys(oldProps);
  if (newPropsKeys.length === 0 && oldPropsKeys.length === 0) {
    node[ELEMENT_PROPS] = newProps;
    return;
  }
  if (newProps.ref) {
    if (newVNode.ref instanceof RefClass) {
      newVNode.ref.setCurrent(node);
    } else {
      isFunction(options.registerRef) && options.registerRef(newProps.ref, node);
    }
  }
  newPropsKeys.filter((key) => !expectKeys[key]).forEach((key) => {
    const newValue = newProps[key];
    let oldValue;
    if (key === KEY_STYLE) {
      oldValue = node.style.cssText;
    } else {
      oldValue = oldProps[key];
    }
    if (newValue !== oldValue) {
      patch.updateProp(node, key, newValue, oldValue);
    }
  });
  oldPropsKeys.filter((key) => !expectKeys[key]).forEach((key) => {
    if (isUndefined(newProps[key])) {
      let oldValue;
      if (key === "style") {
        oldValue = node.style.cssText;
      } else {
        oldValue = oldProps[key];
      }
      if (oldValue) {
        patch.removeProp(node, key);
      }
    }
  });
  node[ELEMENT_INSTANCE] = newVNode;
  node[ELEMENT_PROPS] = newProps;
};
function updateChangedElement(parentElement, oldEl, newVNode, options = {}) {
  if (check.isTextNode(oldEl) && !check.isVNodeText(newVNode) || check.isCommentNode(oldEl) && !check.isVNodeComment(newVNode)) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
    return;
  }
  if (!check.isTextNode(oldEl) && check.isVNodeText(newVNode) || !check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.addNewVNode(parentElement, oldEl, newVNode, options);
    return;
  }
  if (check.isTextNode(oldEl) && check.isVNodeText(newVNode)) {
    patch.replaceText(oldEl, newVNode);
    return;
  }
  if (check.isCommentNode(oldEl) && check.isVNodeComment(newVNode)) {
    patch.replaceComment(oldEl, newVNode);
    return;
  }
  if (check.isVNodeComponent(newVNode)) {
    check.checkRefClass(oldEl, newVNode, options);
  } else {
    patch.replaceWith(oldEl, newVNode, options);
  }
}
function updatePropertyAndChildren(oldEl, newVNode, options = {}) {
  const newVNodeProps = newVNode.memoizedProps;
  updateProps(oldEl, newVNodeProps, oldEl[ELEMENT_PROPS], options, newVNode);
  updateChildren(oldEl, newVNode, options);
}
function updateChildren(parentElement, newVNode, options = {}) {
  var _a, _b;
  if (!(parentElement == null ? void 0 : parentElement.hasChildNodes()) && !((_a = newVNode.children) == null ? void 0 : _a.length)) {
    return;
  }
  var oldChildren = children$1(parentElement);
  var newChildren = vNodeChildren(newVNode);
  if (newVNode.hasComponent()) {
    const hasFragmentItem = oldChildren.some((it) => it[IS_FRAGMENT_ITEM]);
    if (hasFragmentItem) {
      const findChildren = options.context.getChildrenInstanceOf(
        (_b = newVNode.firstChild) == null ? void 0 : _b.LastComponent
      );
      if (findChildren.length) {
        renderVNodeComponent(findChildren[0]);
        return;
      }
    }
  }
  var max = Math.max(oldChildren.length, newChildren.length);
  if (max === 0) {
    return;
  }
  if (oldChildren.length === 0 && newChildren.length > 0) {
    newChildren.forEach((it) => {
      DomRenderer(it, {
        ...options,
        container: parentElement
      });
    });
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    parentElement.textContent = "";
  } else {
    for (var i = 0; i < max; i++) {
      updateElement(parentElement, oldChildren[i], newChildren[i], options);
    }
  }
}
function updateFragment(parentElement, oldChild, newChild, options = {}) {
  let filteredInstance = null;
  let parentClassInstance = parentElement[COMPONENT_INSTANCE];
  const children2 = (parentClassInstance == null ? void 0 : parentClassInstance.children) || {};
  Object.entries(children2).forEach(([, instance]) => {
    if (newChild.isType(VNodeType.COMPONENT)) {
      filteredInstance = instance;
    }
  });
  if (filteredInstance) {
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
    if (oldChildItem)
      lastElement = oldChildItem;
    updateElementWithFragment(
      parentElement,
      oldChildItem,
      newChildItem,
      options,
      lastElement
    );
  }
}
function updateChildrenWithFragment(parentElement, oldChildren = [], newVNode, options = {}) {
  if (!oldChildren.length && !newVNode.children.length) {
    return;
  }
  var newChildren = vNodeChildren(newVNode);
  var max = Math.max(oldChildren.length, newChildren.length);
  if (max === 0) {
    return;
  }
  if (oldChildren.length === 0 && newChildren.length > 0) {
    newChildren.forEach((it) => {
      DomRenderer(it, {
        ...options,
        container: parentElement
      });
    });
  } else if (oldChildren.length > 0 && newChildren.length === 0) {
    parentElement.textContent = "";
  } else {
    for (var i = 0; i < max; i++) {
      const oldChild = oldChildren[i];
      const newChild = newChildren[i];
      if (!oldChild && newChild) {
        updateElement(parentElement, oldChild, newChild, options);
      } else if (oldChild && !newChild) {
        updateElement(parentElement, oldChild.items, newChild, options);
      } else {
        if (oldChild.type === CHILD_ITEM_TYPE_FRAGMENT) {
          updateFragment(parentElement, oldChild, newChild, options);
        } else if (oldChild.type === CHILD_ITEM_TYPE_ELEMENT) {
          updateElement(parentElement, oldChild.items, newChild, options);
        }
      }
    }
  }
}
function updateElement(parentElement, oldEl, newVNode, options = {}) {
  if (!newVNode && !oldEl) {
    return;
  }
  parentElement = parentElement || options.context.parentElement;
  if (!oldEl && newVNode) {
    patch.appendChild(parentElement, newVNode, options);
    return;
  }
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }
  if (!oldEl[SELF_COMPONENT_INSTANCE] && oldEl[COMPONENT_INSTANCE] && !newVNode[SELF_COMPONENT_INSTANCE]) {
    patch.replaceWith(oldEl, newVNode, options);
    return;
  }
  const isChanged = check.changed(newVNode, oldEl);
  if (isChanged || check.isVNodeComponent(newVNode)) {
    updateChangedElement(parentElement, oldEl, newVNode, options);
    return;
  }
  const newNodeType = newVNode.type;
  if (newNodeType !== VNodeType.TEXT && newNodeType !== VNodeType.COMMENT) {
    updatePropertyAndChildren(oldEl, newVNode, options);
  }
}
function updateElementWithFragment(parentElement, oldEl, newVNode, options = {}, lastElement) {
  var _a;
  if (!newVNode && !oldEl) {
    return;
  }
  parentElement = parentElement || options.context.parentElement;
  if (!oldEl && newVNode) {
    if (!lastElement) {
      patch.appendChild(parentElement, newVNode, options, true);
    } else {
      patch.insertAfter(lastElement, newVNode, options, true);
    }
    return;
  }
  if (!newVNode && oldEl) {
    patch.removeChild(parentElement, oldEl, options);
    return;
  }
  if (!((_a = newVNode == null ? void 0 : newVNode.props) == null ? void 0 : _a.pass)) {
    if (check.hasPassed(newVNode)) {
      return;
    }
    if (check.changed(newVNode, oldEl) || check.isVNodeComponent(newVNode)) {
      updateChangedElement(parentElement, oldEl, newVNode, options);
      return;
    }
  }
  const newNodeType = newVNode.type;
  if (newNodeType !== VNodeType.TEXT && newNodeType !== VNodeType.COMMENT) {
    updatePropertyAndChildren(oldEl, newVNode, options);
  }
}
const children$1 = (el) => {
  var element = el == null ? void 0 : el.firstChild;
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
function Reconcile(oldInstance, newVNode, options = {}) {
  options = Object.assign({}, options);
  const oldEl = oldInstance.getEl();
  if ((oldEl == null ? void 0 : oldEl.nodeType) && (oldEl == null ? void 0 : oldEl.nodeType) !== 11) {
    updateElement(oldEl.parentElement, oldEl, newVNode, options);
    return;
  }
}
const children = (el) => {
  var element = el == null ? void 0 : el.firstChild;
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
function collectFragmentList(element) {
  const rootList = [];
  let rootListIndex = 0;
  children(element).forEach((it) => {
    if (it[IS_FRAGMENT_ITEM] === true) {
      if (!rootList[rootListIndex]) {
        rootList[rootListIndex] = {
          type: CHILD_ITEM_TYPE_FRAGMENT,
          items: [it]
        };
      } else {
        if (rootList[rootListIndex]) {
          if (rootList[rootListIndex].type === CHILD_ITEM_TYPE_FRAGMENT) {
            rootList[rootListIndex].items.push(it);
          } else {
            rootListIndex++;
            rootList[rootListIndex] = {
              type: CHILD_ITEM_TYPE_FRAGMENT,
              items: [it]
            };
          }
        }
      }
    } else {
      if (!rootList[rootListIndex]) {
        rootList[rootListIndex] = { type: CHILD_ITEM_TYPE_ELEMENT, items: it };
        rootListIndex++;
      } else {
        rootListIndex++;
        rootList[rootListIndex] = { type: CHILD_ITEM_TYPE_ELEMENT, items: it };
      }
    }
  });
  return rootList;
}
function flatTemplate(template) {
  let root = [template];
  root = root.filter(Boolean).flat(Infinity);
  return root;
}
function hasFragmentInList(list) {
  return list.some((it) => it.type === CHILD_ITEM_TYPE_FRAGMENT);
}
function runningUpdateFragment(componentInstance, template) {
  const rootList = collectFragmentList(componentInstance.parentElement);
  if (hasFragmentInList(rootList)) {
    const length = 1;
    const fragmentList = [];
    for (let i = 0; i < rootList.length; i++) {
      if (rootList[i].type === CHILD_ITEM_TYPE_FRAGMENT) {
        fragmentList.push(rootList[i]);
      }
      if (fragmentList.length === length) {
        break;
      }
    }
    updateFragment(
      componentInstance.parentElement,
      fragmentList[0],
      template,
      componentInstance.getVNodeOptions()
    );
  }
}
async function runningUpdate(componentInstance, template) {
  template[SELF_COMPONENT_INSTANCE] = componentInstance;
  if (template.isType(VNodeType.FRAGMENT)) {
    runningUpdateFragment(componentInstance, template);
  } else {
    const rootList = collectFragmentList(componentInstance.getEl());
    const options = componentInstance.getVNodeOptions();
    if (hasFragmentInList(rootList)) {
      updateChildrenWithFragment(
        componentInstance.getEl(),
        rootList,
        template,
        options
      );
    } else if (template.isType(VNodeType.FRAGMENT)) {
      updateChildren(componentInstance.parentElement, template, options);
    } else {
      Reconcile(componentInstance, template, options);
    }
  }
  componentInstance.runUpdated();
  await componentInstance.runHandlers("update");
  componentInstance[ALTERNATE_TEMPLATE] = template;
}
async function runningMount(componentInstance, template, containerElement) {
  if (!template) {
    componentInstance == null ? void 0 : componentInstance.runMounted();
    await componentInstance.runHandlers("initialize");
    return;
  }
  template[SELF_COMPONENT_INSTANCE] = componentInstance;
  const newVNodeInstance = DomRenderer(template, {
    ...componentInstance.getVNodeOptions(),
    container: containerElement
  });
  if (!template.Component) {
    componentInstance.$el = Dom.create(newVNodeInstance.el);
    componentInstance.refs.$el = componentInstance.$el;
  }
  componentInstance[ALTERNATE_TEMPLATE] = template;
  const el = componentInstance.getEl();
  if (el) {
    if (!el[COMPONENT_INSTANCE]) {
      el[COMPONENT_INSTANCE] = componentInstance;
    }
    if (el[IS_FRAGMENT_ITEM]) {
      componentInstance.isFragment = true;
    }
  }
  if (containerElement) {
    let $container = containerElement;
    if (!($container instanceof Dom)) {
      $container = Dom.create($container);
    }
    if ($container.hasChild(el) === false) {
      if (el instanceof window.DocumentFragment) {
        commitMountFromElement(el);
      } else {
        containerElement.appendChild(el);
        commitMountFromElement(el);
      }
    }
  }
  await componentInstance.runHandlers("initialize");
}
async function renderVNodeComponent(componentInstance, containerElement = void 0) {
  componentInstance.resetCurrentComponent();
  let template = componentInstance.template();
  template = flatTemplate(template);
  const rootTemplate = template[0];
  if (componentInstance.getEl()) {
    await runningUpdate(componentInstance, rootTemplate);
  } else {
    await runningMount(componentInstance, rootTemplate, containerElement);
  }
  return componentInstance;
}
function renderComponentForVNode(vNode, options) {
  renderVNodeComponent(vNode.instance, options.container);
}
function makeElement(vNode, options = {}) {
  vNode.makeClassInstance(options);
  try {
    vNode.instance.setParentElement(vNode.parentElement);
    renderComponentForVNode(vNode, options);
  } catch (e) {
    console.error(e);
  }
  return vNode;
}
function VNodeComponentRender$1(vNode, options) {
  return makeElement(vNode, options);
}
const handlerMap = {};
const __rootInstance = /* @__PURE__ */ new Set();
const __rootInstanceMap = /* @__PURE__ */ new WeakMap();
const __tempVariables = /* @__PURE__ */ new Map();
const __tempVariablesGroup = /* @__PURE__ */ new Map();
const _modules = {};
const _moduleMap = /* @__PURE__ */ new WeakMap();
const RenderCallbackList = /* @__PURE__ */ new WeakMap();
const PendingComponentList = /* @__PURE__ */ new WeakMap();
const GlobalState = {
  currentComponent: null
};
function getCurrentComponent() {
  return GlobalState.currentComponent;
}
function resetCurrentComponent(component) {
  GlobalState.currentComponent = component;
}
function createRenderCallback(component) {
  if (!RenderCallbackList.has(component)) {
    RenderCallbackList.set(component, (containerElement = void 0) => {
      const Renderer = component.renderer;
      if (Renderer) {
        return Renderer(component, containerElement);
      }
    });
  }
  return RenderCallbackList.get(component);
}
function removeRenderCallback(component) {
  if (RenderCallbackList.has(component)) {
    RenderCallbackList.delete(component);
  }
}
function renderComponent(component, containerElement = void 0) {
  var _a;
  if (!component) {
    return;
  }
  if (isPendingComponent(component)) {
    return;
  }
  (_a = createRenderCallback(component)) == null ? void 0 : _a(containerElement);
}
function pendingComponent(component) {
  PendingComponentList.set(component, true);
}
function isPendingComponent(component) {
  return PendingComponentList.has(component);
}
function removePendingComponent(component) {
  PendingComponentList.delete(component);
}
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
function registRootElementInstance(instance, containerElement) {
  const rootContainerElement = containerElement;
  __rootInstance.add(instance);
  if (__rootInstanceMap.has(rootContainerElement)) {
    removeRootElementInstance(__rootInstanceMap.get(rootContainerElement));
  }
  __rootInstanceMap.set(rootContainerElement, instance);
}
function removeRootElementInstance(instance) {
  instance == null ? void 0 : instance.destroy();
  __rootInstance.delete(instance);
}
function getRootElementInstanceList() {
  return [...__rootInstance];
}
let globalForceRender = void 0;
function isGlobalForceRender() {
  return globalForceRender;
}
function setGlobalForceRender(isForceRender = false) {
  globalForceRender = isForceRender;
}
function renderRootElementInstanceList() {
  getRootElementInstanceList().forEach((instance) => {
    const rootInstance = instance.getRootInstance();
    const comp = rootInstance;
    renderVNodeComponent(comp);
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
    return;
  }
  const m = _modules[id];
  if (!m) {
    return;
  }
  const newModule = m.new[Component.name];
  if (newModule) {
    return newModule;
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
  return void 0;
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
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }
  static getScrollLeft() {
    return Math.max(
      window.pageXOffset,
      document.documentElement.scrollLeft,
      document.body.scrollLeft
    );
  }
  static parse(html) {
    var parser = window.DOMParser();
    return parser.parseFromString(html, "text/html");
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
  clone(withChildren = true) {
    return Dom.create(this.el.cloneNode(withChildren));
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
    var arr = this.findAll(
      selector,
      this.isTemplate ? this.el.content : this.el
    );
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
  cssFloat(key) {
    return parseFloat(this.css(key));
  }
  rect() {
    return this.el.getBoundingClientRect();
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
  get scrollTop() {
    return this.el.scrollTop;
  }
  set scrollTop(v) {
    this.el.scrollTop = v;
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
  scrollIntoView() {
    this.el.scrollIntoView();
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
    var _a;
    const childNode = child.el || child;
    return this.el === childNode ? false : (_a = this.el) == null ? void 0 : _a.contains(childNode);
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
    this.el.replaceChild(
      newElement.el || newElement,
      oldElement.el || oldElement
    );
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
  dispatchEvent(event, data) {
    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
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
}
function createComponent(Component, props = {}, children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeComponent({
    props: props || {},
    children: children2.length ? children2 : void 0,
    Component
  });
}
function createComponentFragment(Component, props = {}, children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeFragment({
    props: props || {},
    children: children2.length ? children2 : void 0,
    Component
  });
}
function createComment(children2 = []) {
  children2 = children2.flat(Infinity);
  return createVNodeComment(children2[0] || "");
}
function createElement(Component, props, ...children2) {
  children2 = children2.flat(Infinity);
  return createVNode({
    tag: Component,
    props,
    children: children2.length ? children2 : void 0
  });
}
function createElementJsx$1(Component, props = {}, ...children2) {
  children2 = children2.filter(isValue);
  if (Component === FragmentInstance$1) {
    return createComponentFragment(Component, props, children2);
  }
  if (Component === HTMLComment$1) {
    return createComment(children2);
  }
  props = props || {};
  if (typeof Component !== "string") {
    return createComponent(Component, props, children2);
  } else {
    return createElement(Component, props, children2);
  }
}
const FragmentInstance$1 = new Object();
const HTMLComment$1 = new Object();
const jsx$1 = (tag, props) => {
  let { children: children2 = [], ...extraProps } = props;
  if (!isArray(children2)) {
    children2 = [children2];
  }
  return createElementJsx$1(tag, extraProps, ...children2);
};
const jsxs$1 = jsx$1;
const jsxFunctions = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createComponent,
  createComponentFragment,
  createComment,
  createElement,
  createElementJsx: createElementJsx$1,
  FragmentInstance: FragmentInstance$1,
  HTMLComment: HTMLComment$1,
  jsx: jsx$1,
  jsxs: jsxs$1
}, Symbol.toStringTag, { value: "Module" }));
async function makeHtml$4(vNodeInstance) {
  return `<!-- ${vNodeInstance.value} -->`;
}
async function VNodeCommentRender(vNodeInstance) {
  return await makeHtml$4(vNodeInstance);
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
async function makeChildrenHtml(vNodeInstance, options) {
  const tempChildren = [];
  const children2 = vNodeInstance.children;
  if (children2 && children2.length) {
    const tempArray = await Promise.all(
      children2.map(async (child) => {
        if (child instanceof VNode || child.makeHtml) {
          return await HtmlRenderer(child, options);
        } else if (isArray(child)) {
          return await Promise.all(
            child.map(async (it) => {
              if (it) {
                return await HtmlRenderer(it, options);
              }
              return void 0;
            })
          ).filter((it) => typeof it !== "undefined");
        } else if (isFunction(child)) {
          return await child();
        } else {
          return await child;
        }
      })
    );
    tempChildren.push(...tempArray);
  }
  return tempChildren.join("");
}
function stringifyStyle(styleObject) {
  const newStyle = css(styleObject);
  return Object.keys(newStyle).map((key) => {
    return `${key}: ${newStyle[key]};`;
  }).join(" ");
}
async function makeHtml$3(vNodeInstance, options = {}) {
  const tempProps = [];
  const props = vNodeInstance.memoizedProps;
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
  const tag = vNodeInstance.tag;
  if (isVoidTag(tag)) {
    return `<${tag} ${tempProps.join(" ")} />`;
  } else {
    const childrenHtml = await makeChildrenHtml(vNodeInstance, options);
    return `<${tag} ${tempProps.join(" ")}>${childrenHtml}</${tag}>`;
  }
}
async function VNodeElementRender(vNodeInstance, options) {
  return await makeHtml$3(vNodeInstance, options);
}
async function makeHtml$2(vNodeInstance, withChildren = false, options = {}) {
  return await makeChildrenHtml(vNodeInstance, withChildren);
}
function VNodeFragmentRender(obj, withChildren, options) {
  return makeHtml$2(obj, withChildren, options);
}
function makeHtml$1(vNodeInstance) {
  return vNodeInstance.value;
}
function VNodeTextRender(vNodeInstance) {
  return makeHtml$1(vNodeInstance);
}
const RendererList = {
  [VNodeType.TEXT]: VNodeTextRender,
  [VNodeType.NODE]: VNodeElementRender,
  [VNodeType.FRAGMENT]: VNodeFragmentRender,
  [VNodeType.COMPONENT]: VNodeComponentRender,
  [VNodeType.COMMENT]: VNodeCommentRender
};
async function VNodeRender(vNodeInstance, options) {
  const CurrentRenderer = RendererList[vNodeInstance.type];
  if (CurrentRenderer) {
    const result = CurrentRenderer(vNodeInstance, options);
    return await result;
  }
  return null;
}
async function HtmlRenderer(obj, options = {}) {
  if (isArray(obj) && obj.length === 1) {
    return await HtmlRenderer(obj[0], options);
  }
  if (obj) {
    const html = await VNodeRender(obj, options);
    return html;
  }
  return await obj;
}
async function renderVNodeComponentToHtml(componentInstance, options = {}) {
  componentInstance.resetCurrentComponent();
  const template = componentInstance.template();
  template.memoizedProps["data-saparoot"] = true;
  const html = await HtmlRenderer(template, options);
  return html;
}
async function renderHtml(vNodeInstance, parentOptions) {
  vNodeInstance.makeClassInstance(parentOptions);
  const instance = vNodeInstance.instance;
  return await renderVNodeComponentToHtml(instance, instance.getVNodeOptions());
}
async function makeHtml(vNodeInstance, options = {}) {
  return await renderHtml(vNodeInstance, options);
}
async function VNodeComponentRender(vNodeInstance, options) {
  return await makeHtml(vNodeInstance, options);
}
function start(ElementNode, opt = {}) {
  if (opt instanceof window.HTMLElement) {
    opt = { container: opt };
  }
  const $container = Dom.create(opt.container || document.body);
  const $targetElement = $container.children().find((it) => it.el[COMPONENT_INSTANCE]);
  let RootElement = ElementNode;
  if (isFunction(ElementNode)) {
    RootElement = () => createElementJsx$1(ElementNode);
  } else if (ElementNode instanceof VNode) {
    RootElement = () => ElementNode;
  }
  const app = createComponentInstance(RootElement, null, {
    ...opt,
    renderer: renderVNodeComponent
  });
  if ($targetElement) {
    const targetInstance = $targetElement.el[COMPONENT_INSTANCE];
    const rootInstance = targetInstance.getRootInstance();
    renderComponent(rootInstance);
  } else {
    renderComponent(app, $container.el);
  }
  registRootElementInstance(app, $container.el);
  return app;
}
const render = start;
const hydrate = (ElementNode, opt = {}) => {
  if (opt instanceof window.HTMLElement) {
    opt = { container: opt };
  }
  const $container = Dom.create(opt.container || document.body);
  let RootElement = ElementNode;
  if (isFunction(ElementNode)) {
    RootElement = () => createElementJsx$1(ElementNode);
  } else if (ElementNode instanceof VNode) {
    RootElement = () => ElementNode;
  }
  const app = createComponentInstance(RootElement, null, {
    ...opt,
    renderer: renderVNodeComponent
  });
  const $targetElement = $container.firstChild;
  if ($targetElement && $targetElement.el) {
    app.$el = $targetElement;
    app.$el.el[COMPONENT_INSTANCE] = app;
    renderComponent(app);
  } else {
    renderComponent(app, $container.el);
  }
  registRootElementInstance(app, $container.el);
  return app;
};
const potal = (ElementClass, opt = {}) => {
  const $container = Dom.create(opt.container || document.body);
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }
  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponent
  });
  renderComponent(app, $container);
  return app;
};
async function renderToHtml(ElementClass, opt) {
  if (ElementClass instanceof VNode) {
    const rootVNode = ElementClass;
    ElementClass = () => rootVNode;
  }
  const app = createComponentInstance(ElementClass, null, {
    ...opt,
    renderer: renderVNodeComponentToHtml
  });
  const html = await renderVNodeComponentToHtml(app);
  return html;
}
function WebComponent(CustomUIElement) {
  return class extends HTMLElement {
    constructor() {
      super();
      this._shadow = this.attachShadow({ mode: "open" });
      this._$container = Dom.create(this._shadow);
      this._comp = new CustomUIElement();
      this._comp.on("customEvent", (eventName, ...args) => {
        this.dispatchEvent(
          new CustomEvent(eventName, {
            bubbles: true,
            detail: args
          })
        );
      });
    }
    static get observedAttributes() {
      return CustomUIElement.attributes || [];
    }
    connectedCallback() {
      const attrs = this.attributes;
      const props = {};
      for (let i = attrs.length - 1; i >= 0; i--) {
        props[attrs[i].name] = attrs[i].value;
      }
      this._comp._reload(props, this._$container);
    }
    disconnectedCallback() {
      this._comp.destroy();
      this._comp = null;
    }
    adoptedCallback() {
      console.log("Custom square element moved to new page.");
    }
    attributeChangedCallback(name, oldValue, newValue) {
      this._comp._reload({
        ...this._comp.props,
        [name]: newValue
      });
    }
  };
}
function getProps(attributes) {
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
function createVNodeByDom(el) {
  if (typeof el === "string") {
    return createVNodeText(el);
  }
  if (el.nodeType === 3) {
    return createVNodeText(el.textContent);
  }
  return createVNode({
    tag: el.tagName,
    props: getProps(el.attributes),
    children: children$2(el).map((it) => {
      return createVNodeByDom(it);
    })
  });
}
function htmlToVNode(html) {
  const $dom = Dom.createByHTML(html);
  return createVNodeByDom($dom.el);
}
function jsonToVNode(json, options = {}) {
  var _a;
  const { children: children2 = [], ...rest } = json;
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
    return createVNodeFragment({
      ...rest,
      children: children2.map((it) => jsonToVNode(it))
    });
  }
  if (rest.type === "component" || rest.Component) {
    const realCompoent = ((_a = options == null ? void 0 : options.retrieveComponent) == null ? void 0 : _a.call(options, rest.Component, rest)) || rest.Component;
    return createVNodeComponent({
      ...rest,
      Component: realCompoent,
      children: children2.map((it) => jsonToVNode(it))
    });
  }
  return createVNode({
    ...rest,
    children: children2.map((it) => jsonToVNode(it))
  });
}
const FragmentInstance = FragmentInstance$1;
const createElementJsx = createElementJsx$1;
const HTMLComment = HTMLComment$1;
const jsx = jsx$1;
const jsxs = jsxs$1;
const index = {
  ...jsxFunctions
};
export {
  AFTER,
  ALL_TRIGGER,
  ALT,
  ANIMATIONEND,
  ANIMATIONITERATION,
  ANIMATIONSTART,
  ARROW_DOWN,
  ARROW_LEFT,
  ARROW_RIGHT,
  ARROW_UP,
  BACKSPACE,
  BEFORE,
  BLUR,
  BRACKET_LEFT,
  BRACKET_RIGHT,
  BaseStore,
  CALLBACK,
  CAPTURE,
  CHANGE,
  CHANGEINPUT,
  CHECKER,
  CLICK,
  COMMAND,
  CONFIG,
  CONTEXTMENU,
  CONTROL,
  CUSTOM,
  D1000,
  DEBOUNCE,
  DELAY,
  DELETE,
  DOUBLECLICK,
  DOUBLETAB,
  DRAG,
  DRAGEND,
  DRAGENTER,
  DRAGEXIT,
  DRAGLEAVE,
  DRAGOUT,
  DRAGOVER,
  DRAGSTART,
  DROP,
  Dom,
  ENTER,
  EQUAL,
  ESCAPE,
  EVENT,
  FIT,
  FOCUS,
  FOCUSIN,
  FOCUSOUT,
  FRAME,
  FUNC_END_CHARACTER,
  FUNC_REGEXP,
  FUNC_START_CHARACTER,
  FragmentInstance,
  HASHCHANGE,
  HTMLComment,
  IF,
  INPUT,
  KEYDOWN,
  KEYPRESS,
  KEYUP,
  LEFT_BUTTON,
  MAGIC_METHOD,
  MAGIC_METHOD_REG,
  META,
  MINUS,
  MOUSE,
  MOUSEDOWN,
  MOUSEENTER,
  MOUSELEAVE,
  MOUSEMOVE,
  MOUSEOUT,
  MOUSEOVER,
  MOUSEUP,
  MagicMethod,
  NAME_SAPARATOR,
  OBSERVER,
  ON,
  ORIENTATIONCHANGE,
  PARAMS,
  PASSIVE,
  PASTE,
  PEN,
  PIPE,
  POINTEREND,
  POINTERENTER,
  POINTERLEAVE,
  POINTERMOVE,
  POINTEROUT,
  POINTEROVER,
  POINTERSTART,
  POPSTATE,
  PREVENT,
  PROPS,
  RAF,
  RESIZE,
  RIGHT_BUTTON,
  SAPARATOR,
  SCROLL,
  SELF,
  SELF_TRIGGER,
  SHIFT,
  SPACE,
  SPLITTER,
  STOP,
  SUBMIT,
  SUBSCRIBE,
  SUBSCRIBE_ALL,
  SUBSCRIBE_SELF,
  THROTTLE,
  TOUCH,
  TOUCHEND,
  TOUCHMOVE,
  TOUCHSTART,
  TRANSITIONCANCEL,
  TRANSITIONEND,
  TRANSITIONRUN,
  TRANSITIONSTART,
  UIElement,
  VARIABLE_SAPARATOR,
  VNode,
  VNodeComment,
  VNodeComponent,
  VNodeFragment,
  VNodeText,
  VNodeType,
  WHEEL,
  WebComponent,
  addProviderSubscribe,
  children$2 as children,
  classnames,
  clone,
  cloneVNode,
  collectProps,
  combineKeyArray,
  createComponentInstance,
  createContext,
  createElementJsx,
  createHandlerInstance,
  createLazy,
  createPotal,
  createVNode,
  createVNodeByDom,
  createVNodeComment,
  createVNodeComponent,
  createVNodeFragment,
  createVNodeText,
  debounce,
  index as default,
  defaultValue,
  forwardRef,
  get,
  getContextProvider,
  getCurrentComponent,
  getModule,
  getRootElementInstanceList,
  getVariable,
  hasVariable,
  htmlToVNode,
  hydrate,
  ifCheck,
  initializeGroupVariables,
  isArray,
  isBoolean,
  isEqual,
  isFunction,
  isGlobalForceRender,
  isNotString,
  isNotUndefined,
  isNotZero,
  isNumber,
  isObject,
  isPendingComponent,
  isString,
  isUndefined,
  isValue,
  isZero,
  jsonToVNode,
  jsx,
  jsxs,
  keyEach,
  keyMap,
  keyMapJoin,
  makeEventChecker,
  makeRequestAnimationFrame,
  pendingComponent,
  popContextProvider,
  potal,
  recoverVariable,
  refreshModule,
  registHandler,
  registRootElementInstance,
  registerModule,
  removePendingComponent,
  removeRenderCallback,
  removeRootElementInstance,
  render,
  renderComponent,
  renderFromRoot,
  renderRootElementInstanceList,
  renderToHtml,
  resetCurrentComponent,
  retriveHandler,
  runProviderSubscribe,
  setGlobalForceRender,
  start,
  throttle,
  useBatch,
  useCallback,
  useComponentRender,
  useContext,
  useEffect,
  useEmit,
  useGetStoreValue,
  useId,
  useMagicMethod,
  useMemo,
  useReducer,
  useRef,
  useRender,
  useRootContext,
  useSelf,
  useSetStoreValue,
  useState,
  useStore,
  useStoreSet,
  useStoreValue,
  useSubscribe,
  useSyncExternalStore,
  useTrigger,
  uuid,
  uuidShort,
  variable,
  vnodePropsDiff
};
