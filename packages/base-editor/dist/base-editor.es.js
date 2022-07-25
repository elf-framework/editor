var __defProp = Object.defineProperty;
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
import { isFunction, isObject, useStore, UIElement, createElementJsx, classnames } from "@elf-framework/sapa";
var style = "";
class CommandManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.localCommands = {};
  }
  loadCommands(userCommands = {}) {
    Object.keys(userCommands).forEach((command) => {
      if (isFunction(userCommands[command])) {
        this.registerCommand(command, userCommands[command]);
      } else {
        this.registerCommand(userCommands[command]);
      }
    });
  }
  registerCommand(command, commandCallback) {
    if (this.localCommands[command]) {
      throw new Error(`command ${command} is already registered`);
    }
    if (arguments.length === 2) {
      const callback = (...args) => {
        const result = commandCallback.call(this, this.editorContext, ...args);
        return result;
      };
      callback.source = command;
      this.localCommands[command] = callback;
    } else if (isObject(command)) {
      if (!command.command)
        throw new Error("command is required", command);
      if (!command.execute)
        throw new Error("callback is required", command);
      const callback = (...args) => {
        const result = command.execute.call(command, this.editorContext, ...args);
        return result;
      };
      callback.source = command.command;
      this.localCommands[command.command] = callback;
    }
  }
  getCallback(command) {
    return this.localCommands[command];
  }
  emit(command, ...args) {
    const callback = this.getCallback(command);
    if (callback) {
      return callback(...args);
    }
  }
}
class ConfigManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.configList = [];
    this.config = /* @__PURE__ */ new Map();
  }
  get(key) {
    var _a;
    if (this.config.has(key) === false) {
      this.config.set(key, (_a = this.configList.find((it) => it.key == key)) == null ? void 0 : _a.defaultValue);
    }
    return this.config.get(key);
  }
  set(key, value) {
    const oldValue = this.config.get(key);
    if (oldValue !== value) {
      this.config.set(key, value);
      this.editorContext.emit("config:" + key, value, oldValue);
    }
  }
  push(key, value) {
    const list = this.get(key);
    const lastIndex = list.length;
    this.setIndexValue(key, lastIndex, value);
    return lastIndex;
  }
  setIndexValue(key, index, value) {
    const list = this.get(key);
    list[index] = value;
    this.set(key, [...list]);
  }
  getIndexValue(key, index) {
    const list = this.get(key);
    return list[index];
  }
  removeByIndex(key, index) {
    const list = this.get(key);
    list.splice(index, 1);
    this.set(key, [...list]);
  }
  init(key, value) {
    this.set(key, value, false);
  }
  setAll(obj) {
    Object.keys(obj).forEach((key) => {
      this.set(key, obj[key]);
    });
  }
  getType(key) {
    var _a;
    return (_a = this.configList.find((it) => it.key == key)) == null ? void 0 : _a.type;
  }
  isType(key, type) {
    return this.getType(key) === type;
  }
  isBoolean(key) {
    return this.isType(key, "boolean");
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
    this.config.delete(key);
    this.editorContext.emit("config:" + key);
  }
  registerConfig(config) {
    this.config.set(config.key, config.defaultValue);
    this.configList.push(config);
  }
}
class PluginManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.plugins = [];
  }
  registerPlugin(func, options = {}) {
    this.plugins.push([func, options]);
  }
  async initializePlugin() {
    return await Promise.all(this.plugins.map(async ([CreatePluginFunction, options]) => {
      try {
        return await CreatePluginFunction(this.editorContext, options);
      } catch (e) {
        console.error(e);
        return void 0;
      }
    }));
  }
  async activate() {
    await this.initializePlugin();
  }
}
class UIManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.uis = {};
  }
  registerUI(obj = {}) {
    Object.assign(this.uis, obj);
  }
  getUI(key) {
    return this.uis[key];
  }
}
const CONTEXT_ID = "EditorContext";
class EditorContext {
  constructor($rootEditor, $options = {}) {
    this.$rootEditor = $rootEditor;
    this.$options = $options;
    this.initialize();
  }
  initialize() {
    const {
      managers = {},
      configs = [],
      commands = [],
      plugins = []
    } = this.$options;
    this.initializeManagers(managers);
    this.initializeConfigs(configs);
    this.initializeCommands(commands);
    this.initializePlugins(plugins);
    this.emit("editor.initialize", this);
  }
  initializeManagers(managers = {}) {
    managers = __spreadValues({
      configs: ConfigManager,
      commands: CommandManager,
      plugins: PluginManager,
      uis: UIManager
    }, managers);
    Object.entries(managers).forEach(([key, Manager]) => {
      if (Object.hasOwnProperty.call(this, key)) {
        console.warn(`[EditorContext] ${key} manager is already exists.`);
        return;
      }
      Object.defineProperty(this, key, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: new Manager(this)
      });
    });
  }
  initializeConfigs(configs = []) {
    configs.forEach((config) => {
      this.configs.registerConfig(config);
    });
  }
  initializeCommands(commands = []) {
    commands.forEach((command) => {
      this.commands.registerCommand(command);
    });
  }
  initializePlugins(plugins = []) {
    plugins.forEach((plugin) => {
      this.plugins.registerPlugin(plugin);
    });
  }
  async activate() {
    return await this.plugins.activate();
  }
  get $store() {
    return this.$rootEditor.$store;
  }
  emit(message, ...args) {
    this.$store.source = CONTEXT_ID;
    this.$store.emit(message, ...args);
  }
  registerCommand(command) {
    this.commands.registerCommand(command);
  }
  registerUI(ui) {
    this.uis.registerUI(ui);
  }
  registerConfig(config) {
    this.configs.registerConfig(config);
  }
  getUI(name) {
    return this.uis.getUI(name);
  }
  getConfig(key) {
    return this.configs.get(key);
  }
}
const KEY_EDITOR = "editor";
const KEY_EDITOR_OPTION = "editorOption";
class EditorPlugin {
  constructor(editor, props = {}) {
    this.editor = editor;
    this.props = props;
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
function useEditor() {
  return useStore(KEY_EDITOR);
}
function useEditorOption(key) {
  var _a;
  return (_a = useStore(KEY_EDITOR_OPTION)) == null ? void 0 : _a[key];
}
function useConfig(key) {
  var _a, _b;
  return (_b = (_a = useEditor()) == null ? void 0 : _a.configs) == null ? void 0 : _b.get(key);
}
function useSetConfig(key, value) {
  var _a, _b;
  return (_b = (_a = useEditor()) == null ? void 0 : _a.configs) == null ? void 0 : _b.set(key, value);
}
async function useCommand(key, ...args) {
  var _a, _b;
  return await ((_b = (_a = useEditor()) == null ? void 0 : _a.commands) == null ? void 0 : _b.emit(key, ...args));
}
function useI18n(key, params = {}) {
  var _a, _b;
  return (_b = (_a = useEditor()) == null ? void 0 : _a.i18n) == null ? void 0 : _b.get(key, params);
}
class Editor extends UIElement {
  initialize() {
    super.initialize();
    this.$editor = new EditorContext(this, this.props);
    this.$store.set(KEY_EDITOR, this.$editor);
    this.$store.set(KEY_EDITOR_OPTION, this.props);
    this.activate();
  }
  async activate() {
    await this.$editor.activate();
  }
}
class BaseEditor extends Editor {
  template() {
    console.log("base editor render");
    const { content } = this.props;
    const View = this.$editor.getUI("view");
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--base-editor", __spreadValues({
        "full-screen": this.props.fullScreen
      }, this.props.editorClass))
    }, content, /* @__PURE__ */ createElementJsx(View, {
      type: "view"
    }));
  }
}
export { BaseEditor, Editor, EditorPlugin, useCommand, useConfig, useEditor, useEditorOption, useI18n, useSetConfig };
