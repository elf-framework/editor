import { isFunction as g, isObject as E, isBoolean as k, isString as I, VNode as T, isArray as L, createElementJsx as d, useStore as x, UIElement as v, useRef as K, useGetStoreValue as U, useMemo as A, classnames as M, useEffect as O, SUBSCRIBE_SELF as $, SUBSCRIBE as z, KEYDOWN as B, IF as m, KEYUP as P, RESIZE as V, DEBOUNCE as F } from "@elf-framework/sapa";
import { View as R } from "@elf-framework/ui";
const j = {
  command: "editor.layout.toggle.bottom",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.bottom");
    s.configs.set("editor.layout.show.bottom", !t);
  }
}, D = {
  command: "editor.layout.toggle.left",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.left");
    s.configs.set("editor.layout.show.left", !t);
  }
}, N = {
  command: "editor.layout.toggle.right",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.right");
    s.configs.set("editor.layout.show.right", !t);
  }
}, G = {
  command: "editor.layout.toggle.top",
  execute: function(s) {
    var t = s.configs.get("editor.layout.show.top");
    s.configs.set("editor.layout.show.top", !t);
  }
}, W = {
  command: "keymap.keydown",
  execute: function(s, t) {
    s.keyboard.add(t.code, t.keyCode, t), s.shortcuts && s.shortcuts.execute(t, "keydown");
  }
}, H = {
  command: "keymap.keyup",
  execute: function(s, t) {
    s.keyboard.remove(t.code, t.keyCode), s.shortcuts && s.shortcuts.execute(t, "keyup");
  }
}, _ = {
  command: "toggle.theme",
  execute: function(s) {
    var t = s.configs.get("editor.theme");
    s.configs.set("editor.theme", t === "light" ? "dark" : "light");
  }
}, q = [
  W,
  H,
  _,
  G,
  N,
  D,
  j
], Y = {
  key: "editor.layout.show.bottom",
  defaultValue: !0,
  title: "Show bottom panel in layout ",
  description: "Show bottom panel in layout",
  type: "boolean"
}, X = {
  key: "editor.layout.show.left",
  defaultValue: !0,
  title: "Show left panel in layout ",
  description: "Show left panel in layout",
  type: "boolean"
}, J = {
  key: "editor.layout.show.right",
  defaultValue: !0,
  title: "Show right panel in layout ",
  description: "Show right panel in layout",
  type: "boolean"
}, Z = {
  key: "editor.layout.show.top",
  defaultValue: !0,
  title: "Show top panel in layout ",
  description: "Show top panel in layout",
  type: "boolean"
}, Q = {
  key: "editor.theme",
  defaultValue: "light",
  title: "Editor Theme ",
  description: "Set editor's theme",
  type: "string"
}, tt = [
  Q,
  Z,
  X,
  J,
  Y
];
class et {
  constructor(t) {
    this.editorContext = t, this.localCommands = {};
  }
  loadCommands(t = {}) {
    Object.keys(t).forEach((e) => {
      g(t[e]) ? this.registerCommand(e, t[e]) : this.registerCommand(t[e]);
    });
  }
  registerCommand(t, e) {
    if (this.localCommands[t])
      throw new Error(`command ${t} is already registered`);
    if (arguments.length === 2) {
      const i = (...n) => e.call(this, this.editorContext, ...n);
      i.source = t, this.localCommands[t] = i;
    } else if (E(t)) {
      if (!t.command)
        throw new Error("command is required", t);
      if (!g(t.execute))
        throw new Error("execute function is required", t);
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
class it {
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
class st {
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
    var l, c;
    const n = this.getLang(i), o = ((l = this.locales[n]) == null ? void 0 : l[t]) || ((c = this.locales[this.fallbackLang]) == null ? void 0 : c[t]) || t || void 0;
    if (g(o))
      return o(e);
    {
      let a = o;
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
class ot {
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
class nt {
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
class rt {
  constructor(t) {
    this.editorContext = t, this.plugins = [];
  }
  registerPlugin(t, e = {}) {
    this.plugins.push(new nt(this.editorContext, t, e));
  }
  init() {
    this.plugins = [];
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
    return await this.initializePlugin();
  }
}
let h = {
  name: void 0
};
function y() {
  return h.name === void 0 && (window.navigator.appVersion.indexOf("Win") != -1 ? h.name = "win" : window.navigator.appVersion.indexOf("Mac") != -1 ? h.name = "mac" : window.navigator.appVersion.indexOf("X11") != -1 ? h.name = "linux" : h.name = ""), h.name;
}
const at = {
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
  return at[`${s}`.toLowerCase()] || s;
}
function f(...s) {
  return s.filter(Boolean).join("+");
}
class lt {
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
    const i = this.editorContext, n = e.split("|").map((o) => o.trim());
    return () => n.some(
      (o) => i.context.modeViewManager.isCurrentMode(o)
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
    let i = !1, n = !1, o = !1, l = !1, c = [];
    return e.forEach((a) => {
      a.includes(r.ALT) ? i = !0 : a.includes(r.CTRL) ? n = !0 : a.includes(r.SHIFT) ? o = !0 : a.includes("CMD") || a.includes("WIN") || a.includes(r.META) ? l = !0 : c.push(a);
    }), f(
      i ? r.ALT : "",
      n ? r.CTRL : "",
      o ? r.SHIFT : "",
      l ? r.META : "",
      p(c.join(""))
    );
  }
  makeKeyString(t) {
    var e, i;
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? (e = t.key) == null ? void 0 : e.toUpperCase() : f(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (i = t.key) == null ? void 0 : i.toUpperCase()
    );
  }
  makeCodeString(t) {
    var e, i;
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? (e = t.code) == null ? void 0 : e.toUpperCase() : f(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (i = t.code) == null ? void 0 : i.toUpperCase()
    );
  }
  makeKeyCodeString(t) {
    return t.key === "Shift" || t.key === "Control" || t.key === "Alt" || t.key === "Meta" ? t.keyCode : f(
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
      const n = i.filter((o) => o.eventType === e).filter((o) => this.checkWhen(o));
      n.length && n.forEach((o) => {
        if (o.container) {
          if (I(o.container)) {
            if (!t.target.matches(o.container))
              return;
          } else if (o.container instanceof HTMLElement && !o.container.contains(t.target))
            return;
        }
        o.preventDefault && t.preventDefault(), o.stopPropagation && t.stopPropagation(), this.editorContext.commands.execute(o.command, ...o.args);
      });
    }
  }
}
class ct {
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
    if (L(t)) {
      const [e, i] = t;
      return d(e, i);
    }
    return d(t);
  }
  getUI(t) {
    if (this.uis[t])
      return this.createUI(this.uis[t]);
  }
  getGroupUI(t) {
    return Object.values(this.groupUis[t] || {}).map((i) => this.createUI(i)).filter(Boolean);
  }
}
const ut = "EditorContext";
class ht {
  constructor(t, e = {}) {
    this.$rootEditor = t, this.$options = e, this.initialize();
  }
  initialize() {
    const {
      managers: t = {},
      configList: e = [],
      commands: i = [],
      plugins: n = []
    } = this.$options;
    this.initializeManagers(t), this.initializeConfigs(tt), this.initializeConfigs(e), this.initializeInnerCommands(), this.initializeCommands(i), this.initializePlugins(n), this.emit("editor.initialize", this);
  }
  initializeManagers(t = {}) {
    t = {
      configs: it,
      commands: et,
      plugins: rt,
      uis: ct,
      shortcuts: lt,
      keyboard: ot,
      i18n: st,
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
    this.initializeCommands(q);
  }
  initializeCommands(t = []) {
    t.forEach((e) => {
      this.commands.registerCommand(e);
    });
  }
  initializePlugins(t = []) {
    this.plugins.init(), t.forEach((e) => {
      this.plugins.registerPlugin(e);
    });
  }
  async activate() {
    const t = await this.plugins.activate();
    return this.updateConfigs(this.$options.configs), t;
  }
  get $store() {
    return this.$rootEditor.$store;
  }
  emit(t, ...e) {
    this.$store.source = ut, this.$store.emit(t, ...e);
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
class xt {
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
function u() {
  return x(C);
}
function yt(s) {
  var t;
  return (t = x(w)) == null ? void 0 : t[s];
}
function Ct(s) {
  var t, e;
  return (e = (t = u()) == null ? void 0 : t.configs) == null ? void 0 : e.get(s);
}
function wt(s, t) {
  var e, i;
  return (i = (e = u()) == null ? void 0 : e.configs) == null ? void 0 : i.set(s, t);
}
async function St(s, ...t) {
  var e, i;
  return await ((i = (e = u()) == null ? void 0 : e.commands) == null ? void 0 : i.emit(s, ...t));
}
function bt(s) {
  var t, e;
  return (e = (t = u()) == null ? void 0 : t.commands) == null ? void 0 : e.get(s);
}
function Et(s, t = {}) {
  var e, i;
  return (i = (e = u()) == null ? void 0 : e.i18n) == null ? void 0 : i.get(s, t);
}
class dt extends v {
  initialize() {
    super.initialize(), this.$editor || (this.$editor = new ht(this, this.props)), this.$store.set(C, this.$editor), this.$store.set(w, this.props);
  }
  async load() {
    const { configs: t } = this.props;
    this.$editor.updateConfigs(t), await this.activate();
  }
  async activate() {
    await this.$editor.activate(), this.$store.initValue("editor.plugin.activated", (t = 0) => t + 1), this.render();
  }
}
function ft() {
  return /* @__PURE__ */ d("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0
    }
  }, "Loading...");
}
const gt = ["TEXTAREA", "INPUT", "SELECT"];
class kt extends dt {
  template() {
    const {
      class: t = "",
      fullScreen: e,
      loading: i = /* @__PURE__ */ d(ft, null)
    } = this.props, n = K(0), o = u(), l = U("editor.plugin.activated");
    n.current++;
    const c = A(() => M(
      "elf--base-editor",
      {
        "full-screen": e
      },
      t
    ), [t, e]);
    return O(() => {
      this.load();
    }, []), /* @__PURE__ */ d("div", {
      class: c
    }, l() ? o.getUIList("renderView") : i);
  }
  isNotFormElement(t) {
    var e = t.target.tagName;
    return gt.includes(e) ? !1 : t.target.getAttribute("contenteditable") !== "true";
  }
  updateTheme() {
    const t = this.$editor.configs.get("editor.theme") !== "light";
    document.body.classList.toggle("theme-dark", t);
  }
  [$("editor.plugin.activated")]() {
    this.updateTheme();
  }
  [z("config:editor.theme")]() {
    this.updateTheme();
  }
  [B("document") + m("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keydown", t);
  }
  [P("document") + m("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keyup", t);
  }
  [V("window") + F(10)]() {
    this.$editor.emit("resize.window");
  }
}
function It({
  views: s = [],
  groups: t = [],
  as: e = "div",
  style: i = {}
}) {
  const n = u(), o = [
    ...s.map((l) => n.getUI(l)),
    ...t.map((l) => n.getGroupUI(l))
  ].flat(1 / 0).filter(Boolean);
  return /* @__PURE__ */ d(R, {
    as: e,
    style: i
  }, o);
}
export {
  kt as BaseEditor,
  dt as Editor,
  xt as EditorPlugin,
  It as InjectView,
  St as useCommand,
  Ct as useConfig,
  u as useEditor,
  yt as useEditorOption,
  bt as useGetCommand,
  Et as useI18n,
  wt as useSetConfig
};
