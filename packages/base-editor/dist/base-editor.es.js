import { isFunction as g, isObject as f, VNode as d, isArray as p, createElementJsx as o, useStore as l, UIElement as C, useSelf as m, classnames as I } from "@elf-framework/sapa";
import { View as E } from "@elf-framework/ui";
class U {
  constructor(t) {
    this.editorContext = t, this.localCommands = {};
  }
  loadCommands(t = {}) {
    Object.keys(t).forEach((i) => {
      g(t[i]) ? this.registerCommand(i, t[i]) : this.registerCommand(t[i]);
    });
  }
  registerCommand(t, i) {
    if (this.localCommands[t])
      throw new Error(`command ${t} is already registered`);
    if (arguments.length === 2) {
      const e = (...r) => i.call(this, this.editorContext, ...r);
      e.source = t, this.localCommands[t] = e;
    } else if (f(t)) {
      if (!t.command)
        throw new Error("command is required", t);
      if (!t.execute)
        throw new Error("callback is required", t);
      const e = (...r) => t.execute.call(
        t,
        this.editorContext,
        ...r
      );
      e.source = t.command, this.localCommands[t.command] = e;
    }
  }
  getCallback(t) {
    return this.localCommands[t];
  }
  emit(t, ...i) {
    const e = this.getCallback(t);
    if (e)
      return e(...i);
  }
}
class v {
  constructor(t) {
    this.editorContext = t, this.configList = [], this.config = /* @__PURE__ */ new Map();
  }
  get(t) {
    var i;
    return this.config.has(t) === !1 && this.config.set(
      t,
      (i = this.configList.find((e) => e.key == t)) == null ? void 0 : i.defaultValue
    ), this.config.get(t);
  }
  set(t, i) {
    const e = this.config.get(t);
    e !== i && (this.config.set(t, i), this.editorContext.emit("config:" + t, i, e));
  }
  push(t, i) {
    const r = this.get(t).length;
    return this.setIndexValue(t, r, i), r;
  }
  setIndexValue(t, i, e) {
    const r = this.get(t);
    r[i] = e, this.set(t, [...r]);
  }
  getIndexValue(t, i) {
    return this.get(t)[i];
  }
  removeByIndex(t, i) {
    const e = this.get(t);
    e.splice(i, 1), this.set(t, [...e]);
  }
  init(t, i) {
    this.set(t, i, !1);
  }
  setAll(t) {
    Object.keys(t).forEach((i) => {
      this.set(i, t[i]);
    });
  }
  getType(t) {
    var i;
    return (i = this.configList.find((e) => e.key == t)) == null ? void 0 : i.type;
  }
  isType(t, i) {
    return this.getType(t) === i;
  }
  isBoolean(t) {
    return this.isType(t, "boolean");
  }
  toggle(t) {
    this.set(t, !this.get(t));
  }
  toggleWith(t, i, e) {
    this.get(t) === i ? this.set(t, e) : this.set(t, i);
  }
  true(t) {
    return this.get(t) === !0;
  }
  false(t) {
    return this.get(t) === !1;
  }
  is(t, i) {
    return this.get(t) === i;
  }
  remove(t) {
    this.config.delete(t), this.editorContext.emit("config:" + t);
  }
  registerConfig(t) {
    this.config.set(t.key, t.defaultValue), this.configList.push(t);
  }
  updateConfig(t, i = !1) {
    Object.entries(t).forEach(([e, r]) => {
      i ? this.set(e, r) : this.config.set(e, r);
    });
  }
}
class w {
  constructor(t, i, e) {
    this.editor = t, this.callback = i, this.options = e, this.isActivated = !1, this.ret = null;
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
class x {
  constructor(t) {
    this.editorContext = t, this.plugins = [];
  }
  registerPlugin(t, i = {}) {
    this.plugins.push(new w(this.editorContext, t, i));
  }
  async initializePlugin() {
    return await Promise.all(
      this.plugins.map(async (t) => {
        try {
          return await t.activate();
        } catch (i) {
          console.error(i);
          return;
        }
      })
    );
  }
  async activate() {
    await this.initializePlugin();
  }
}
class b {
  constructor(t) {
    this.editorContext = t, this.uis = {}, this.groupUis = {};
  }
  registerUI(t = {}) {
    Object.assign(this.uis, t);
  }
  registerGroupUI(t, i = {}) {
    this.groupUis[t] || (this.groupUis[t] = {}), Object.assign(this.groupUis[t], i);
  }
  createUI(t) {
    if (t instanceof d)
      return t;
    if (p(t)) {
      const [i, e] = t;
      return o(i, e);
    }
    return o(t);
  }
  getUI(t) {
    if (this.uis[t])
      return this.createUI(this.uis[t]);
  }
  getGroupUI(t) {
    return Object.values(this.groupUis[t] || {}).map((e) => this.createUI(e)).filter(Boolean);
  }
}
const z = "EditorContext";
class O {
  constructor(t, i = {}) {
    this.$rootEditor = t, this.$options = i, this.isPluginActivated = !1, this.initialize();
  }
  initialize() {
    const {
      managers: t = {},
      configList: i = [],
      commands: e = [],
      plugins: r = []
    } = this.$options;
    this.initializeManagers(t), this.initializeConfigs(i), this.initializeCommands(e), this.initializePlugins(r), this.emit("editor.initialize", this);
  }
  initializeManagers(t = {}) {
    t = {
      configs: v,
      commands: U,
      plugins: x,
      uis: b,
      ...t
    }, Object.entries(t).forEach(([i, e]) => {
      if (Object.hasOwnProperty.call(this, i)) {
        console.warn(`[EditorContext] ${i} manager is already exists.`);
        return;
      }
      Object.defineProperty(this, i, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: new e(this)
      });
    });
  }
  initializeConfigs(t = []) {
    t.forEach((i) => {
      this.configs.registerConfig(i);
    });
  }
  updateConfigs(t = {}) {
    this.configs.updateConfig(t);
  }
  initializeCommands(t = []) {
    t.forEach((i) => {
      this.commands.registerCommand(i);
    });
  }
  initializePlugins(t = []) {
    t.forEach((i) => {
      this.plugins.registerPlugin(i);
    });
  }
  async activate() {
    const t = await this.plugins.activate();
    return this.isPluginActivated = !0, this.updateConfigs(this.$options.configs), t;
  }
  get $store() {
    return this.$rootEditor.$store;
  }
  emit(t, ...i) {
    this.$store.source = z, this.$store.emit(t, ...i);
  }
  registerCommand(t) {
    this.commands.registerCommand(t);
  }
  registerUI(t) {
    this.uis.registerUI(t);
  }
  registerGroupUI(t, i) {
    this.uis.registerGroupUI(t, i);
  }
  registerConfig(t) {
    this.configs.registerConfig(t);
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
const h = "editor", u = "editorOption";
class y {
  constructor(t, i = {}) {
    this.editor = t, this.props = i;
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
function n() {
  return l(h);
}
function A(s) {
  var t;
  return (t = l(u)) == null ? void 0 : t[s];
}
function T(s) {
  var t, i;
  return (i = (t = n()) == null ? void 0 : t.configs) == null ? void 0 : i.get(s);
}
function V(s, t) {
  var i, e;
  return (e = (i = n()) == null ? void 0 : i.configs) == null ? void 0 : e.set(s, t);
}
async function G(s, ...t) {
  var i, e;
  return await ((e = (i = n()) == null ? void 0 : i.commands) == null ? void 0 : e.emit(s, ...t));
}
function L(s, t = {}) {
  var i, e;
  return (e = (i = n()) == null ? void 0 : i.i18n) == null ? void 0 : e.get(s, t);
}
class $ extends C {
  initialize() {
    super.initialize(), this.$editor = new O(this, this.props), this.$store.set(h, this.$editor), this.$store.set(u, this.props);
    const { configs: t } = this.props;
    this.$editor.updateConfigs(t), this.activate();
  }
  async activate() {
    await this.$editor.activate(), this.trigger("editor.plugin.activated");
  }
}
class M extends $ {
  template() {
    const t = n();
    return m("editor.plugin.activated", () => {
      this.refresh();
    }), /* @__PURE__ */ o("div", {
      class: I("elf--base-editor", {
        "full-screen": this.props.fullScreen,
        ...this.props.editorClass
      })
    }, t.isPluginActivated ? t.getUIList("renderView") : void 0);
  }
}
function B({
  views: s = [],
  groups: t = [],
  as: i = "div",
  style: e = {}
}) {
  const r = n(), a = [
    ...s.map((c) => r.getUI(c)),
    ...t.map((c) => r.getGroupUI(c))
  ].flat(1 / 0).filter(Boolean);
  return /* @__PURE__ */ o(E, {
    as: i,
    style: e
  }, a);
}
export {
  M as BaseEditor,
  $ as Editor,
  y as EditorPlugin,
  B as InjectView,
  G as useCommand,
  T as useConfig,
  n as useEditor,
  A as useEditorOption,
  L as useI18n,
  V as useSetConfig
};
