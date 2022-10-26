import { isFunction as E, isObject as S, isBoolean as I, VNode as b, isArray as w, createElementJsx as d, useStore as x, UIElement as T, useComponentRender as K, classnames as v, KEYDOWN as A, IF as g, KEYUP as k } from "@elf-framework/sapa";
import { View as U } from "@elf-framework/ui";
const L = {
  command: "keymap.keydown",
  execute: function(s, t) {
    s.keyboard.add(t.code, t.keyCode, t), s.shortcuts && s.shortcuts.execute(t, "keydown");
  }
}, M = {
  command: "keymap.keyup",
  execute: function(s, t) {
    s.shortcuts && s.shortcuts.execute(t, "keyup");
  }
};
class O {
  constructor(t) {
    this.editorContext = t, this.localCommands = {};
  }
  loadCommands(t = {}) {
    Object.keys(t).forEach((e) => {
      E(t[e]) ? this.registerCommand(e, t[e]) : this.registerCommand(t[e]);
    });
  }
  registerCommand(t, e) {
    if (this.localCommands[t])
      throw new Error(`command ${t} is already registered`);
    if (arguments.length === 2) {
      const i = (...n) => e.call(this, this.editorContext, ...n);
      i.source = t, this.localCommands[t] = i;
    } else if (S(t)) {
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
}
class z {
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
class P {
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
class $ {
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
class F {
  constructor(t) {
    this.editorContext = t, this.plugins = [];
  }
  registerPlugin(t, e = {}) {
    this.plugins.push(new $(this.editorContext, t, e));
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
function p() {
  if (l.name === void 0) {
    const s = navigator.userAgentData.platform.toLowerCase();
    s.indexOf("win") != -1 ? l.name = "win" : s.indexOf("mac") != -1 ? l.name = "mac" : s.indexOf("x11") != -1 ? l.name = "linux" : l.name = "";
  }
  return l.name;
}
const B = {
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
p();
const r = {
  ALT: "ALT",
  CMD: "CMD",
  META: "META",
  CTRL: "CTRL",
  SHIFT: "SHIFT",
  SPACE: "SPACE",
  BACKSPACE: "BACKSPACE"
};
function m(s) {
  return B[`${s}`.toLowerCase()] || s;
}
function u(...s) {
  return s.filter(Boolean).join("+");
}
class j {
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
    const e = p();
    console.log(e), this.list.push({
      key: "",
      args: [],
      eventType: "keydown",
      ...t,
      command: this.makeShortcutCommandFunction(t.command),
      checkKeyString: this.splitShortCut(t[e] || t.key),
      whenFunction: this.makeWhenFunction(
        t.command,
        t.when || !0
      )
    }), this.sort();
  }
  makeWhenFunction(t, e) {
    if (I(e) && e)
      return () => !0;
    const i = this.editorContext, n = e.split("|").map((o) => o.trim());
    return () => n.some(
      (o) => i.context.modeViewManager.isCurrentMode(o)
    );
  }
  sort() {
    this.commands = {}, this.list.forEach((t) => {
      Array.isArray(this.commands[t.checkKeyString]) === !1 && (this.commands[t.checkKeyString] = []), this.commands[t.checkKeyString].push(t);
    });
  }
  splitShortCut(t) {
    var e = t.toUpperCase().split("+").map((a) => a.trim()).filter(Boolean);
    let i = !1, n = !1, o = !1, c = !1, f = [];
    return e.forEach((a) => {
      a.includes(r.ALT) ? i = !0 : a.includes(r.CTRL) ? n = !0 : a.includes(r.SHIFT) ? o = !0 : a.includes("CMD") || a.includes("WIN") || a.includes(r.META) ? c = !0 : f.push(a);
    }), u(
      i ? r.ALT : "",
      n ? r.CTRL : "",
      o ? r.SHIFT : "",
      c ? r.META : "",
      m(f.join(""))
    );
  }
  makeKeyString(t) {
    var e;
    return u(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (e = t.key) == null ? void 0 : e.toUpperCase()
    );
  }
  makeCodeString(t) {
    var e;
    return u(
      t.altKey ? r.ALT : "",
      t.ctrlKey ? r.CTRL : "",
      t.shiftKey ? r.SHIFT : "",
      t.metaKey ? r.META : "",
      (e = t.code) == null ? void 0 : e.toUpperCase()
    );
  }
  makeKeyCodeString(t) {
    return u(
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
        this.editorContext.commands.execute(o.command, ...o.args);
      });
    }
  }
}
class N {
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
    if (t instanceof b)
      return t;
    if (w(t)) {
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
const R = "EditorContext";
class G {
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
    this.initializeManagers(t), this.initializeConfigs(e), this.initializeInnerCommands(), this.initializeCommands(i), this.initializePlugins(n), this.emit("editor.initialize", this);
  }
  initializeManagers(t = {}) {
    t = {
      configs: z,
      commands: O,
      plugins: F,
      uis: N,
      shortcuts: j,
      keyboard: P,
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
    this.initializeCommands([L, M]);
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
    this.$store.source = R, this.$store.emit(t, ...e);
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
const C = "editor", y = "editorOption";
class q {
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
  return x(C);
}
function Y(s) {
  var t;
  return (t = x(y)) == null ? void 0 : t[s];
}
function _(s) {
  var t, e;
  return (e = (t = h()) == null ? void 0 : t.configs) == null ? void 0 : e.get(s);
}
function X(s, t) {
  var e, i;
  return (i = (e = h()) == null ? void 0 : e.configs) == null ? void 0 : i.set(s, t);
}
async function J(s, ...t) {
  var e, i;
  return await ((i = (e = h()) == null ? void 0 : e.commands) == null ? void 0 : i.emit(s, ...t));
}
function Q(s, t = {}) {
  var e, i;
  return (i = (e = h()) == null ? void 0 : e.i18n) == null ? void 0 : i.get(s, t);
}
class V extends T {
  initialize() {
    super.initialize(), this.$editor = new G(this, this.props), this.$store.set(C, this.$editor), this.$store.set(y, this.props);
    const { configs: t } = this.props;
    this.$editor.updateConfigs(t), this.activate();
  }
  async activate() {
    await this.$editor.activate(), this.emit("editor.plugin.activated");
  }
}
const D = ["TEXTAREA", "INPUT", "SELECT"];
class Z extends V {
  template() {
    K("editor.plugin.activated");
    const t = h();
    return /* @__PURE__ */ d("div", {
      class: v("elf--base-editor", {
        "full-screen": this.props.fullScreen,
        ...this.props.editorClass
      })
    }, t.isPluginActivated ? t.getUIList("renderView") : void 0);
  }
  isNotFormElement(t) {
    var e = t.target.tagName;
    return D.includes(e) ? !1 : t.target.getAttribute("contenteditable") !== "true";
  }
  [A("document") + g("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keydown", t);
  }
  [k("document") + g("isNotFormElement")](t) {
    this.$editor.commands.execute("keymap.keyup", t);
  }
}
function tt({
  views: s = [],
  groups: t = [],
  as: e = "div",
  style: i = {}
}) {
  const n = h(), o = [
    ...s.map((c) => n.getUI(c)),
    ...t.map((c) => n.getGroupUI(c))
  ].flat(1 / 0).filter(Boolean);
  return /* @__PURE__ */ d(U, {
    as: e,
    style: i
  }, o);
}
export {
  Z as BaseEditor,
  V as Editor,
  q as EditorPlugin,
  tt as InjectView,
  J as useCommand,
  _ as useConfig,
  h as useEditor,
  Y as useEditorOption,
  Q as useI18n,
  X as useSetConfig
};
