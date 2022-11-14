import { isFunction as x, isObject as b, isBoolean as w, isString as T, VNode as v, isArray as k, createElementJsx as f, useStore as p, UIElement as K, useComponentRender as L, useMemo as U, classnames as A, SUBSCRIBE_SELF as M, SUBSCRIBE as O, KEYDOWN as P, IF as g, KEYUP as z, RESIZE as $, DEBOUNCE as B } from "@elf-framework/sapa";
import { View as F } from "@elf-framework/ui";
const j = {
  command: "keymap.keydown",
  execute: function(s, t) {
    s.keyboard.add(t.code, t.keyCode, t), s.shortcuts && s.shortcuts.execute(t, "keydown");
  }
}, R = {
  command: "keymap.keyup",
  execute: function(s, t) {
    s.shortcuts && s.shortcuts.execute(t, "keyup");
  }
}, D = {
  command: "toggle.theme",
  execute: function(s) {
    var t = s.configs.get("editor.theme");
    s.configs.set("editor.theme", t === "light" ? "dark" : "light");
  }
}, V = [j, R, D], N = {
  key: "editor.theme",
  defaultValue: "light",
  title: "Editor Theme ",
  description: "Set editor's theme",
  type: "string"
}, G = [N];
class W {
  constructor(t) {
    this.editorContext = t, this.localCommands = {};
  }
  loadCommands(t = {}) {
    Object.keys(t).forEach((e) => {
      x(t[e]) ? this.registerCommand(e, t[e]) : this.registerCommand(t[e]);
    });
  }
  registerCommand(t, e) {
    if (this.localCommands[t])
      throw new Error(`command ${t} is already registered`);
    if (arguments.length === 2) {
      const i = (...n) => e.call(this, this.editorContext, ...n);
      i.source = t, this.localCommands[t] = i;
    } else if (b(t)) {
      if (!t.command)
        throw new Error("command is required", t);
      if (!t.execute)
        throw new Error("callback is required", t);
      const i = (...n) => t.execute.call(
        t,
        this.editorContext,
        ...n
      );
      i.source = t.command, this.localCommands[t.command] = i;
    }
  }
  getCallback(t) {
    return typeof t == "function" ? t : this.localCommands[t];
  }
  execute(t, ...e) {
    const i = this.getCallback(t);
    if (!i)
      throw new Error("command is not registered : " + t);
    return i(...e);
  }
  has(t) {
    return !!this.getCallback(t);
  }
}
class H {
  constructor(t) {
    this.editorContext = t, this.configList = [], this.config = /* @__PURE__ */ new Map();
  }
  get(t) {
    var e;
    return this.config.has(t) === !1 && this.config.set(
      t,
      (e = this.configList.find((i) => i.key == t)) == null ? void 0 : e.defaultValue
    ), this.config.get(t);
  }
  set(t, e) {
    const i = this.config.get(t);
    i !== e && (this.config.set(t, e), this.editorContext.emit("config:" + t, e, i));
  }
  push(t, e) {
    const n = this.get(t).length;
    return this.setIndexValue(t, n, e), n;
  }
  setIndexValue(t, e, i) {
    const n = this.get(t);
    n[e] = i, this.set(t, [...n]);
  }
  getIndexValue(t, e) {
    return this.get(t)[e];
  }
  removeByIndex(t, e) {
    const i = this.get(t);
    i.splice(e, 1), this.set(t, [...i]);
  }
  init(t, e) {
    this.set(t, e, !1);
  }
  setAll(t) {
    Object.keys(t).forEach((e) => {
      this.set(e, t[e]);
    });
  }
  getType(t) {
    var e;
    return (e = this.configList.find((i) => i.key == t)) == null ? void 0 : e.type;
  }
  isType(t, e) {
    return this.getType(t) === e;
  }
  isBoolean(t) {
    return this.isType(t, "boolean");
  }
  toggle(t) {
    this.set(t, !this.get(t));
  }
  toggleWith(t, e, i) {
    this.get(t) === e ? this.set(t, i) : this.set(t, e);
  }
  true(t) {
    return this.get(t) === !0;
  }
  false(t) {
    return this.get(t) === !1;
  }
  is(t, e) {
    return this.get(t) === e;
  }
  remove(t) {
    this.config.delete(t), this.editorContext.emit("config:" + t);
  }
  registerConfig(t) {
    this.config.set(t.key, t.defaultValue), this.configList.push(t);
  }
  updateConfig(t, e = !1) {
    Object.entries(t).forEach(([i, n]) => {
      e ? this.set(i, n) : this.config.set(i, n);
    });
  }
}
class _ {
  constructor(t) {
    this.editorContext = t, this.locales = {}, this.fallbackLang = "en_US";
  }
  getLang(t = void 0) {
    return t || this.fallbackLang;
  }
  setFallbackLang(t) {
    this.fallbackLang = t;
  }
  get(t, e = {}, i = void 0) {
    var c, u;
    const n = this.getLang(i), r = ((c = this.locales[n]) == null ? void 0 : c[t]) || ((u = this.locales[this.fallbackLang]) == null ? void 0 : u[t]) || t || void 0;
    if (x(r))
      return r(e);
    {
      let a = r;
      return t === a ? t.split(".").pop() : (Object.entries(e).forEach(([I, S]) => {
        a = a.replace(new RegExp(`{${I}}`, "ig"), S);
      }), a);
    }
  }
  hasKey(t, e = void 0) {
    const i = this.getLang(e);
    return !!(this.locales[i][t] || this.locales[this.fallbackLang][t]);
  }
  registerI18nMessage(t, e) {
    this.locales[t] || (this.locales[t] = {}), Object.assign(this.locales[t], e);
  }
}
class q {
  constructor(t) {
    this.editorContext = t, this.codeSet = /* @__PURE__ */ new Set(), this.keyCodeSet = /* @__PURE__ */ new Set(), this.event = {};
  }
  add(t, e, i) {
    this.codeSet.has(t) === !1 && this.codeSet.add(t), this.keyCodeSet.has(e) === !1 && this.keyCodeSet.add(e), this.event = i;
  }
  remove(t, e) {
    this.codeSet.delete(t), this.keyCodeSet.delete(e);
  }
  hasKey(t) {
    return this.codeSet.has(t) || this.keyCodeSet.has(t);
  }
  check(...t) {
    return t.some((e) => this.hasKey(e));
  }
  isShift() {
    return Boolean(this.event.shiftKey);
  }
  isCtrl() {
    return Boolean(this.event.ctrlKey);
  }
  isAlt() {
    return Boolean(this.event.altKey);
  }
  isMeta() {
    return Boolean(this.event.metaKey);
  }
}
class Y {
  constructor(t, e, i) {
    this.editor = t, this.callback = e, this.options = i, this.isActivated = !1, this.ret = null;
  }
  async initialize() {
    const t = await this.callback(this.editor, this.options);
    return this.isActivated = !0, t;
  }
  async activate() {
    return this.isActivated ? this.ret : (this.ret = await this.initialize(), this.ret);
  }
  deactivate() {
    this.isActivated = !1;
  }
}
class X {
  constructor(t) {
    this.editorContext = t, this.plugins = [];
  }
  registerPlugin(t, e = {}) {
    this.plugins.push(new Y(this.editorContext, t, e));
  }
  async initializePlugin() {
    return await Promise.all(
      this.plugins.map(async (t) => {
        try {
          return await t.activate();
        } catch (e) {
          console.error(e);
          return;
        }
      })
    );
  }
  async activate() {
    await this.initializePlugin();
  }
}
let l = {
  name: void 0
};
function C() {
  return l.name === void 0 && (window.navigator.appVersion.indexOf("Win") != -1 ? l.name = "win" : window.navigator.appVersion.indexOf("Mac") != -1 ? l.name = "mac" : window.navigator.appVersion.indexOf("X11") != -1 ? l.name = "linux" : l.name = ""), l.name;
}
const J = {
  backspace: 8,
  tab: 9,
  enter: 13,
  escape: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  delete: 46,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  semicolon: 59,
  equals: 61,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  multiply: 106,
  add: 107,
  subtract: 109,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  f13: 124,
  f14: 125,
  f15: 126,
  f16: 127,
  f17: 128,
  f18: 129,
  f19: 130,
  comma: 188,
  ",": 188,
  period: 190,
  ".": 190,
  slash: 191,
  "/": 191,
  backquote: 192,
  "`": 192,
  openbracket: 219,
  "[": 219,
  backslash: 220,
  "\\": 220,
  closebracket: 221,
  "]": 221,
  quote: 222,
  "'": 222,
  altgr: 225
};
C();
const o = {
  ALT: "ALT",
  CMD: "CMD",
  META: "META",
  CTRL: "CTRL",
  SHIFT: "SHIFT",
  SPACE: "SPACE",
  BACKSPACE: "BACKSPACE"
};
function m(s) {
  return J[`${s}`.toLowerCase()] || s;
}
function d(...s) {
  return s.filter(Boolean).join("+");
}
class Z {
  constructor(t) {
    this.editorContext = t, this.loadShortCuts();
  }
  getGeneratedKeyCode(t) {
    return m(t);
  }
  loadShortCuts() {
    this.list = [], this.commands = {};
  }
  makeShortcutCommandFunction(t) {
    return typeof t == "function" ? (...e) => t(this.editorContext, ...e) : t;
  }
  registerShortcut(t) {
    const e = C(), i = {
      key: "",
      args: [],
      eventType: "keydown",
      priority: 10,
      preventDefault: !1,
      stopPropagation: !1,
      isDisabled: !1,
      container: null,
      ...t,
      command: this.makeShortcutCommandFunction(t.command),
      checkKeyString: this.splitShortCut(t[e] || t.key),
      whenFunction: this.makeWhenFunction(
        t.command,
        t.when || !0
      )
    };
    this.list.push(i), this.updateCommandInfo(i);
  }
  makeWhenFunction(t, e) {
    if (w(e) && e)
      return () => !0;
    const i = this.editorContext, n = e.split("|").map((r) => r.trim());
    return () => n.some(
      (r) => i.context.modeViewManager.isCurrentMode(r)
    );
  }
  updateCommandInfo(t) {
    Array.isArray(this.commands[t.checkKeyString]) === !1 && (this.commands[t.checkKeyString] = []), this.commands[t.checkKeyString].push(t);
  }
  sort() {
    this.commands = {}, this.list.forEach((t) => {
      this.updateCommandInfo(t);
    });
  }
  splitShortCut(t) {
    var e = t.toUpperCase().split("+").map((a) => a.trim()).filter(Boolean);
    let i = !1, n = !1, r = !1, c = !1, u = [];
    return e.forEach((a) => {
      a.includes(o.ALT) ? i = !0 : a.includes(o.CTRL) ? n = !0 : a.includes(o.SHIFT) ? r = !0 : a.includes("CMD") || a.includes("WIN") || a.includes(o.META) ? c = !0 : u.push(a);
    }), d(
      i ? o.ALT : "",
      n ? o.CTRL : "",
      r ? o.SHIFT : "",
      c ? o.META : "",
      m(u.join(""))
    );
  }
  makeKeyString(t) {
    var e;
    return d(
      t.altKey ? o.ALT : "",
      t.ctrlKey ? o.CTRL : "",
      t.shiftKey ? o.SHIFT : "",
      t.metaKey ? o.META : "",
      (e = t.key) == null ? void 0 : e.toUpperCase()
    );
  }
  makeCodeString(t) {
    var e;
    return d(
      t.altKey ? o.ALT : "",
      t.ctrlKey ? o.CTRL : "",
      t.shiftKey ? o.SHIFT : "",
      t.metaKey ? o.META : "",
      (e = t.code) == null ? void 0 : e.toUpperCase()
    );
  }
  makeKeyCodeString(t) {
    return d(
      t.altKey ? o.ALT : "",
      t.ctrlKey ? o.CTRL : "",
      t.shiftKey ? o.SHIFT : "",
      t.metaKey ? o.META : "",
      t.keyCode
    );
  }
  checkShortCut(t, e, i) {
    return this.commands[t] || this.commands[e] || this.commands[i];
  }
  checkWhen(t) {
    return t.whenFunction();
  }
  execute(t, e = "keydown") {
    let i = this.checkShortCut(
      this.makeKeyCodeString(t),
      this.makeKeyString(t),
      this.makeCodeString(t)
    );
    if (i) {
      const n = i.filter((r) => r.eventType === e).filter((r) => this.checkWhen(r));
      n.length && n.forEach((r) => {
        if (r.container) {
          if (T(r.container)) {
            if (!t.target.matches(r.container))
              return;
          } else if (r.container instanceof HTMLElement && !r.container.contains(t.target))
            return;
        }
        r.preventDefault && t.preventDefault(), r.stopPropagation && t.stopPropagation(), this.editorContext.commands.execute(r.command, ...r.args);
      });
    }
  }
}
class Q {
  constructor(t) {
    this.editorContext = t, this.uis = {}, this.groupUis = {};
  }
  registerUI(t = {}) {
    Object.assign(this.uis, t);
  }
  registerGroupUI(t, e = {}) {
    this.groupUis[t] || (this.groupUis[t] = {}), Object.assign(this.groupUis[t], e);
  }
  createUI(t) {
    if (t instanceof v)
      return t;
    if (k(t)) {
      const [e, i] = t;
      return f(e, i);
    }
    return f(t);
  }
  getUI(t) {
    if (this.uis[t])
      return this.createUI(this.uis[t]);
  }
  getGroupUI(t) {
    return Object.values(this.groupUis[t] || {}).map((i) => this.createUI(i)).filter(Boolean);
  }
}
const tt = "EditorContext";
class et {
  constructor(t, e = {}) {
    this.$rootEditor = t, this.$options = e, this.isPluginActivated = !1, this.initialize();
  }
  initialize() {
    const {
      managers: t = {},
      configList: e = [],
      commands: i = [],
      plugins: n = []
    } = this.$options;
    this.initializeManagers(t), this.initializeConfigs(G), this.initializeConfigs(e), this.initializeInnerCommands(), this.initializeCommands(i), this.initializePlugins(n), this.emit("editor.initialize", this);
  }
  initializeManagers(t = {}) {
    t = {
      configs: H,
      commands: W,
      plugins: X,
      uis: Q,
      shortcuts: Z,
      keyboard: q,
      i18n: _,
      ...t
    }, Object.entries(t).forEach(([e, i]) => {
      if (Object.hasOwnProperty.call(this, e)) {
        console.warn(`[EditorContext] ${e} manager is already exists.`);
        return;
      }
      Object.defineProperty(this, e, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: new i(this)
      });
    });
  }
  initializeConfigs(t = []) {
    t.forEach((e) => {
      this.configs.registerConfig(e);
    });
  }
  updateConfigs(t = {}) {
    this.configs.updateConfig(t);
  }
  initializeInnerCommands() {
    this.initializeCommands(V);
  }
  initializeCommands(t = []) {
    t.forEach((e) => {
      this.commands.registerCommand(e);
    });
  }
  initializePlugins(t = []) {
    t.forEach((e) => {
      this.plugins.registerPlugin(e);
    });
  }
  async activate() {
    const t = await this.plugins.activate();
    return this.isPluginActivated = !0, this.updateConfigs(this.$options.configs), t;
  }
  get $store() {
    return this.$rootEditor.$store;
  }
  emit(t, ...e) {
    this.$store.source = tt, this.$store.emit(t, ...e);
  }
  registerCommand(t) {
    this.commands.registerCommand(t);
  }
  registerUI(t) {
    this.uis.registerUI(t);
  }
  registerGroupUI(t, e) {
    this.uis.registerGroupUI(t, e);
  }
  registerConfig(t) {
    this.configs.registerConfig(t);
  }
  registerShortcut(t) {
    this.shortcuts.registerShortcut(t);
  }
  registerI18nMessage(t, e) {
    this.i18n.registerI18nMessage(t, e);
  }
  registerI18nMessageWithLang(t) {
    Object.keys(t).forEach((e) => {
      this.registerI18nMessage(e, t[e]);
    });
  }
  getUI(t) {
    return this.uis.getUI(t);
  }
  getGroupUI(t) {
    return this.uis.getGroupUI(t);
  }
  getUIList(t) {
    return [this.getUI(t), this.getGroupUI(t)].flat(1 / 0).filter(Boolean);
  }
  getConfig(t) {
    return this.configs.get(t);
  }
}
const E = "editor", y = "editorOption";
class ot {
  constructor(t, e = {}) {
    this.editor = t, this.props = e;
  }
  initialize() {
  }
  load() {
  }
  activate() {
  }
  deactivate() {
  }
}
function h() {
  return p(E);
}
function at(s) {
  var t;
  return (t = p(y)) == null ? void 0 : t[s];
}
function ct(s) {
  var t, e;
  return (e = (t = h()) == null ? void 0 : t.configs) == null ? void 0 : e.get(s);
}
function lt(s, t) {
  var e, i;
  return (i = (e = h()) == null ? void 0 : e.configs) == null ? void 0 : i.set(s, t);
}
async function ht(s, ...t) {
  var e, i;
  return await ((i = (e = h()) == null ? void 0 : e.commands) == null ? void 0 : i.emit(s, ...t));
}
function ut(s, t = {}) {
  var e, i;
  return (i = (e = h()) == null ? void 0 : e.i18n) == null ? void 0 : i.get(s, t);
}
class it extends K {
  initialize() {
    super.initialize(), this.$editor = new et(this, this.props), this.$store.set(E, this.$editor), this.$store.set(y, this.props);
    const { configs: t } = this.props;
    this.$editor.updateConfigs(t), this.activate();
  }
  async activate() {
    await this.$editor.activate(), this.emit("editor.plugin.activated"), this.trigger("editor.plugin.activated");
  }
}
const st = ["TEXTAREA", "INPUT", "SELECT"];
class dt extends it {
  template() {
    const { editorClass: t, fullScreen: e } = this.props;
    L("editor.plugin.activated");
    const i = h(), n = U(() => A("elf--base-editor", {
      "full-screen": e,
      [t]: !0
    }), [t, e]);
    return /* @__PURE__ */ f("div", {
      class: n
    }, i.isPluginActivated ? i.getUIList("renderView") : void 0);
  }
  isNotFormElement(t) {
    var e = t.target.tagName;
    return st.includes(e) ? !1 : t.target.getAttribute("contenteditable") !== "true";
  }
  updateTheme() {
    const t = this.$editor.configs.get("editor.theme") !== "light";
    document.body.classList.toggle("theme-dark", t);
  }
  [M("editor.plugin.activated")]() {
    this.updateTheme();
  }
  [O("config:editor.theme")]() {
    this.updateTheme();
  }
  [P("document") + g("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keydown", t);
  }
  [z("document") + g("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keyup", t);
  }
  [$("window") + B(10)]() {
    this.$editor.emit("resize.window");
  }
}
function ft({
  views: s = [],
  groups: t = [],
  as: e = "div",
  style: i = {}
}) {
  const n = h(), r = [
    ...s.map((c) => n.getUI(c)),
    ...t.map((c) => n.getGroupUI(c))
  ].flat(1 / 0).filter(Boolean);
  return /* @__PURE__ */ f(F, {
    as: e,
    style: i
  }, r);
}
export {
  dt as BaseEditor,
  it as Editor,
  ot as EditorPlugin,
  ft as InjectView,
  ht as useCommand,
  ct as useConfig,
  h as useEditor,
  at as useEditorOption,
  ut as useI18n,
  lt as useSetConfig
};
