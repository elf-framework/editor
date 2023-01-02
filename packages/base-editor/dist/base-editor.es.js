import { isFunction as f, isObject as E, isBoolean as k, isString as I, VNode as T, isArray as v, createElementJsx as g, useStore as x, UIElement as L, useComponentRender as K, useMemo as A, classnames as U, SUBSCRIBE_SELF as M, SUBSCRIBE as O, KEYDOWN as P, IF as m, KEYUP as z, RESIZE as $, DEBOUNCE as B } from "@elf-framework/sapa";
import { View as F } from "@elf-framework/ui";
const V = {
  command: "editor.layout.toggle.bottom",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.bottom");
    s.configs.set("editor.layout.show.bottom", !t);
  }
}, R = {
  command: "editor.layout.toggle.left",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.left");
    s.configs.set("editor.layout.show.left", !t);
  }
}, j = {
  command: "editor.layout.toggle.right",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.right");
    s.configs.set("editor.layout.show.right", !t);
  }
}, D = {
  command: "editor.layout.toggle.top",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.top");
    s.configs.set("editor.layout.show.top", !t);
  }
}, N = {
  command: "keymap.keydown",
  execute: function(s, t) {
    s.keyboard.add(t.code, t.keyCode, t), s.shortcuts && s.shortcuts.execute(t, "keydown");
  }
}, G = {
  command: "keymap.keyup",
  execute: function(s, t) {
    s.keyboard.remove(t.code, t.keyCode), s.shortcuts && s.shortcuts.execute(t, "keyup");
  }
}, W = {
  command: "toggle.theme",
  execute: function(s) {
    var t = s.configs.get("editor.theme");
    s.configs.set("editor.theme", t === "light" ? "dark" : "light");
  }
}, H = [
  N,
  G,
  W,
  D,
  j,
  R,
  V
], _ = {
  key: "editor.layout.show.bottom",
  defaultValue: !0,
  title: "Show bottom panel in layout ",
  description: "Show bottom panel in layout",
  type: "boolean"
}, q = {
  key: "editor.layout.show.left",
  defaultValue: !0,
  title: "Show left panel in layout ",
  description: "Show left panel in layout",
  type: "boolean"
}, Y = {
  key: "editor.layout.show.right",
  defaultValue: !0,
  title: "Show right panel in layout ",
  description: "Show right panel in layout",
  type: "boolean"
}, X = {
  key: "editor.layout.show.top",
  defaultValue: !0,
  title: "Show top panel in layout ",
  description: "Show top panel in layout",
  type: "boolean"
}, J = {
  key: "editor.theme",
  defaultValue: "light",
  title: "Editor Theme ",
  description: "Set editor's theme",
  type: "string"
}, Z = [
  J,
  X,
  q,
  Y,
  _
];
class Q {
  constructor(t) {
    this.editorContext = t, this.localCommands = {};
  }
  loadCommands(t = {}) {
    Object.keys(t).forEach((e) => {
      f(t[e]) ? this.registerCommand(e, t[e]) : this.registerCommand(t[e]);
    });
  }
  registerCommand(t, e) {
    if (this.localCommands[t])
      throw new Error(`command ${t} is already registered`);
    if (arguments.length === 2) {
      const i = (...o) => e.call(this, this.editorContext, ...o);
      i.source = t, this.localCommands[t] = i;
    } else if (E(t)) {
      if (!t.command)
        throw new Error("command is required", t);
      if (!f(t.execute))
        throw new Error("execute function is required", t);
      const i = (...o) => t.execute.call(
        t,
        this.editorContext,
        ...o
      );
      i.source = t.command, this.localCommands[t.command] = i;
    }
  }
  getCallback(t) {
    return typeof t == "function" ? t : this.localCommands[t];
  }
  get(t) {
    return this.getCallback(t);
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
class tt {
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
    const o = this.get(t).length;
    return this.setIndexValue(t, o, e), o;
  }
  setIndexValue(t, e, i) {
    const o = this.get(t);
    o[e] = i, this.set(t, [...o]);
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
    Object.entries(t).forEach(([i, o]) => {
      e ? this.set(i, o) : this.config.set(i, o);
    });
  }
}
class et {
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
    const o = this.getLang(i), n = ((c = this.locales[o]) == null ? void 0 : c[t]) || ((u = this.locales[this.fallbackLang]) == null ? void 0 : u[t]) || t || void 0;
    if (f(n))
      return n(e);
    {
      let a = n;
      return t === a ? t.split(".").pop() : (Object.entries(e).forEach(([S, b]) => {
        a = a.replace(new RegExp(`{${S}}`, "ig"), b);
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
class it {
  constructor(t) {
    this.editorContext = t, this.codeSet = /* @__PURE__ */ new Set(), this.keyCodeSet = /* @__PURE__ */ new Set(), this.event = {};
  }
  add(t, e, i) {
    this.codeSet.has(t) === !1 && this.codeSet.add(t), this.keyCodeSet.has(e) === !1 && this.keyCodeSet.add(e), this.event = i;
  }
  remove(t, e) {
    this.codeSet.delete(t), this.keyCodeSet.delete(e), this.event = {};
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
class st {
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
class ot {
  constructor(t) {
    this.editorContext = t, this.plugins = [];
  }
  registerPlugin(t, e = {}) {
    this.plugins.push(new st(this.editorContext, t, e));
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
let h = {
  name: void 0
};
function y() {
  return h.name === void 0 && (window.navigator.appVersion.indexOf("Win") != -1 ? h.name = "win" : window.navigator.appVersion.indexOf("Mac") != -1 ? h.name = "mac" : window.navigator.appVersion.indexOf("X11") != -1 ? h.name = "linux" : h.name = ""), h.name;
}
const nt = {
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
y();
const r = {
  ALT: "ALT",
  CMD: "CMD",
  META: "META",
  CTRL: "CTRL",
  SHIFT: "SHIFT",
  SPACE: "SPACE",
  BACKSPACE: "BACKSPACE"
};
function p(s) {
  return nt[`${s}`.toLowerCase()] || s;
}
function d(...s) {
  return s.filter(Boolean).join("+");
}
class rt {
  constructor(t) {
    this.editorContext = t, this.loadShortCuts();
  }
  getGeneratedKeyCode(t) {
    return p(t);
  }
  loadShortCuts() {
    this.list = [], this.commands = {};
  }
  makeShortcutCommandFunction(t) {
    return typeof t == "function" ? (...e) => t(this.editorContext, ...e) : t;
  }
  registerShortcut(t) {
    const e = y(), i = {
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
    if (k(e) && e)
      return () => !0;
    const i = this.editorContext, o = e.split("|").map((n) => n.trim());
    return () => o.some(
      (n) => i.context.modeViewManager.isCurrentMode(n)
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
    let i = !1, o = !1, n = !1, c = !1, u = [];
    return e.forEach((a) => {
      a.includes(r.ALT) ? i = !0 : a.includes(r.CTRL) ? o = !0 : a.includes(r.SHIFT) ? n = !0 : a.includes("CMD") || a.includes("WIN") || a.includes(r.META) ? c = !0 : u.push(a);
    }), d(
      i ? r.ALT : "",
      o ? r.CTRL : "",
      n ? r.SHIFT : "",
      c ? r.META : "",
      p(u.join(""))
    );
  }
  makeKeyString(t) {
    var e, i;
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? (e = t.key) == null ? void 0 : e.toUpperCase() : d(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (i = t.key) == null ? void 0 : i.toUpperCase()
    );
  }
  makeCodeString(t) {
    var e, i;
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? (e = t.code) == null ? void 0 : e.toUpperCase() : d(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (i = t.code) == null ? void 0 : i.toUpperCase()
    );
  }
  makeKeyCodeString(t) {
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? t.keyCode : d(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
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
      const o = i.filter((n) => n.eventType === e).filter((n) => this.checkWhen(n));
      o.length && o.forEach((n) => {
        if (n.container) {
          if (I(n.container)) {
            if (!t.target.matches(n.container))
              return;
          } else if (n.container instanceof HTMLElement && !n.container.contains(t.target))
            return;
        }
        n.preventDefault && t.preventDefault(), n.stopPropagation && t.stopPropagation(), this.editorContext.commands.execute(n.command, ...n.args);
      });
    }
  }
}
class at {
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
    if (t instanceof T)
      return t;
    if (v(t)) {
      const [e, i] = t;
      return g(e, i);
    }
    return g(t);
  }
  getUI(t) {
    if (this.uis[t])
      return this.createUI(this.uis[t]);
  }
  getGroupUI(t) {
    return Object.values(this.groupUis[t] || {}).map((i) => this.createUI(i)).filter(Boolean);
  }
}
const ct = "EditorContext";
class lt {
  constructor(t, e = {}) {
    this.$rootEditor = t, this.$options = e, this.isPluginActivated = !1, this.initialize();
  }
  initialize() {
    const {
      managers: t = {},
      configList: e = [],
      commands: i = [],
      plugins: o = []
    } = this.$options;
    this.initializeManagers(t), this.initializeConfigs(Z), this.initializeConfigs(e), this.initializeInnerCommands(), this.initializeCommands(i), this.initializePlugins(o), this.emit("editor.initialize", this);
  }
  initializeManagers(t = {}) {
    t = {
      configs: tt,
      commands: Q,
      plugins: ot,
      uis: at,
      shortcuts: rt,
      keyboard: it,
      i18n: et,
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
    this.initializeCommands(H);
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
    this.$store.source = ct, this.$store.emit(t, ...e);
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
const C = "editor", w = "editorOption";
class ft {
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
function l() {
  return x(C);
}
function mt(s) {
  var t;
  return (t = x(w)) == null ? void 0 : t[s];
}
function pt(s) {
  var t, e;
  return (e = (t = l()) == null ? void 0 : t.configs) == null ? void 0 : e.get(s);
}
function xt(s, t) {
  var e, i;
  return (i = (e = l()) == null ? void 0 : e.configs) == null ? void 0 : i.set(s, t);
}
async function yt(s, ...t) {
  var e, i;
  return await ((i = (e = l()) == null ? void 0 : e.commands) == null ? void 0 : i.emit(s, ...t));
}
function Ct(s) {
  var t, e;
  return (e = (t = l()) == null ? void 0 : t.commands) == null ? void 0 : e.get(s);
}
function wt(s, t = {}) {
  var e, i;
  return (i = (e = l()) == null ? void 0 : e.i18n) == null ? void 0 : i.get(s, t);
}
class ht extends L {
  initialize() {
    super.initialize(), this.$editor = new lt(this, this.props), this.$store.set(C, this.$editor), this.$store.set(w, this.props);
    const { configs: t } = this.props;
    this.$editor.updateConfigs(t), this.activate();
  }
  async activate() {
    await this.$editor.activate(), this.emit("editor.plugin.activated"), this.trigger("editor.plugin.activated");
  }
}
const ut = ["TEXTAREA", "INPUT", "SELECT"];
class St extends ht {
  template() {
    const { editorClass: t, fullScreen: e } = this.props;
    K("editor.plugin.activated");
    const i = l(), o = A(() => U("elf--base-editor", {
      "full-screen": e,
      [t]: !0
    }), [t, e]);
    return /* @__PURE__ */ g("div", {
      class: o
    }, i.isPluginActivated ? i.getUIList("renderView") : void 0);
  }
  isNotFormElement(t) {
    var e = t.target.tagName;
    return ut.includes(e) ? !1 : t.target.getAttribute("contenteditable") !== "true";
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
  [P("document") + m("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keydown", t);
  }
  [z("document") + m("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keyup", t);
  }
  [$("window") + B(10)]() {
    this.$editor.emit("resize.window");
  }
}
function bt({
  views: s = [],
  groups: t = [],
  as: e = "div",
  style: i = {}
}) {
  const o = l(), n = [
    ...s.map((c) => o.getUI(c)),
    ...t.map((c) => o.getGroupUI(c))
  ].flat(1 / 0).filter(Boolean);
  return /* @__PURE__ */ g(F, {
    as: e,
    style: i
  }, n);
}
export {
  St as BaseEditor,
  ht as Editor,
  ft as EditorPlugin,
  bt as InjectView,
  yt as useCommand,
  pt as useConfig,
  l as useEditor,
  mt as useEditorOption,
  Ct as useGetCommand,
  wt as useI18n,
  xt as useSetConfig
};
