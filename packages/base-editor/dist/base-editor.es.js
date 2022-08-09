import { isFunction, isObject, VNode, isArray, createElementJsx, useStore, UIElement, useSelf, classnames } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";
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
        const result = command.execute.call(
          command,
          this.editorContext,
          ...args
        );
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
      this.config.set(
        key,
        (_a = this.configList.find((it) => it.key == key)) == null ? void 0 : _a.defaultValue
      );
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
  updateConfig(config, isEmit = false) {
    Object.entries(config).forEach(([key, value]) => {
      if (isEmit) {
        this.set(key, value);
      } else {
        this.config.set(key, value);
      }
    });
  }
}
class EditorPlugin$1 {
  constructor(editor, callback, options) {
    this.editor = editor;
    this.callback = callback;
    this.options = options;
    this.isActivated = false;
    this.ret = null;
  }
  async initialize() {
    const ret = await this.callback(this.editor, this.options);
    this.isActivated = true;
    return ret;
  }
  async activate() {
    if (this.isActivated) {
      return this.ret;
    }
    this.ret = await this.initialize();
    return this.ret;
  }
  deactivate() {
    this.isActivated = false;
  }
}
class PluginManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.plugins = [];
  }
  registerPlugin(func, options = {}) {
    this.plugins.push(new EditorPlugin$1(this.editorContext, func, options));
  }
  async initializePlugin() {
    return await Promise.all(
      this.plugins.map(async (plugin) => {
        try {
          return await plugin.activate();
        } catch (e) {
          console.error(e);
          return void 0;
        }
      })
    );
  }
  async activate() {
    await this.initializePlugin();
  }
}
class UIManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.uis = {};
    this.groupUis = {};
  }
  registerUI(obj = {}) {
    Object.assign(this.uis, obj);
  }
  registerGroupUI(key, obj = {}) {
    if (!this.groupUis[key]) {
      this.groupUis[key] = {};
    }
    Object.assign(this.groupUis[key], obj);
  }
  createUI(ui) {
    if (ui instanceof VNode) {
      return ui;
    }
    if (isArray(ui)) {
      const [Component, props] = ui;
      return createElementJsx(Component, props);
    }
    return createElementJsx(ui);
  }
  getUI(key) {
    if (this.uis[key]) {
      return this.createUI(this.uis[key]);
    }
    return void 0;
  }
  getGroupUI(key) {
    const list = Object.values(this.groupUis[key] || {}).map((uis) => {
      return this.createUI(uis);
    }).filter(Boolean);
    return list;
  }
}
const CONTEXT_ID = "EditorContext";
class EditorContext {
  constructor($rootEditor, $options = {}) {
    this.$rootEditor = $rootEditor;
    this.$options = $options;
    this.isPluginActivated = false;
    this.initialize();
  }
  initialize() {
    const {
      managers = {},
      configList = [],
      commands = [],
      plugins = []
    } = this.$options;
    this.initializeManagers(managers);
    this.initializeConfigs(configList);
    this.initializeCommands(commands);
    this.initializePlugins(plugins);
    this.emit("editor.initialize", this);
  }
  initializeManagers(managers = {}) {
    managers = {
      configs: ConfigManager,
      commands: CommandManager,
      plugins: PluginManager,
      uis: UIManager,
      ...managers
    };
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
  updateConfigs(configs = {}) {
    this.configs.updateConfig(configs);
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
    const ret = await this.plugins.activate();
    this.isPluginActivated = true;
    this.updateConfigs(this.$options.configs);
    return ret;
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
  registerGroupUI(group, ui) {
    this.uis.registerGroupUI(group, ui);
  }
  registerConfig(config) {
    this.configs.registerConfig(config);
  }
  getUI(name) {
    return this.uis.getUI(name);
  }
  getGroupUI(group) {
    return this.uis.getGroupUI(group);
  }
  getUIList(name) {
    const list = [this.getUI(name), this.getGroupUI(name)].flat(Infinity).filter(Boolean);
    return list;
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
    const { configs } = this.props;
    this.$editor.updateConfigs(configs);
    this.activate();
  }
  async activate() {
    await this.$editor.activate();
    this.trigger("editor.plugin.activated");
  }
}
class BaseEditor extends Editor {
  template() {
    const editor = useEditor();
    useSelf("editor.plugin.activated", () => {
      this.refresh();
    });
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--base-editor", {
        "full-screen": this.props.fullScreen,
        ...this.props.editorClass
      })
    }, editor.isPluginActivated ? editor.getUIList("renderView") : void 0);
  }
}
function InjectView({
  views = [],
  groups = [],
  as = "div",
  style: style2 = {}
}) {
  const editor = useEditor();
  const list = [
    ...views.map((it) => {
      return editor.getUI(it);
    }),
    ...groups.map((it) => {
      return editor.getGroupUI(it);
    })
  ].flat(Infinity).filter(Boolean);
  return /* @__PURE__ */ createElementJsx(View, {
    as,
    style: style2
  }, list);
}
export { BaseEditor, Editor, EditorPlugin, InjectView, useCommand, useConfig, useEditor, useEditorOption, useI18n, useSetConfig };
