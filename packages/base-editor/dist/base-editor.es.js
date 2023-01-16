import { isFunction, isObject, isBoolean, isString, VNode, isArray, createElementJsx, useStore, UIElement, useRef, useMemo, classnames, useEffect, useRender, SUBSCRIBE_SELF, SUBSCRIBE, KEYDOWN, IF, KEYUP, RESIZE, DEBOUNCE } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";
const style = "";
const editorLayoutToggleBottom = {
  command: "editor.layout.toggle.bottom",
  execute: function(editor) {
    var isShow = editor.configs.get("editor.layout.show.bottom");
    editor.configs.set("editor.layout.show.bottom", !isShow);
  }
};
const editorLayoutToggleLeft = {
  command: "editor.layout.toggle.left",
  execute: function(editor) {
    var isShow = editor.configs.get("editor.layout.show.left");
    editor.configs.set("editor.layout.show.left", !isShow);
  }
};
const editorLayoutToggleRight = {
  command: "editor.layout.toggle.right",
  execute: function(editor) {
    var isShow = editor.configs.get("editor.layout.show.right");
    editor.configs.set("editor.layout.show.right", !isShow);
  }
};
const editorLayoutToggleTop = {
  command: "editor.layout.toggle.top",
  execute: function(editor) {
    var isShow = editor.configs.get("editor.layout.show.top");
    editor.configs.set("editor.layout.show.top", !isShow);
  }
};
const keymapKeydown = {
  command: "keymap.keydown",
  execute: function(editor, e) {
    editor.keyboard.add(e.code, e.keyCode, e);
    if (editor.shortcuts) {
      editor.shortcuts.execute(e, "keydown");
    }
  }
};
const keymapKeyup = {
  command: "keymap.keyup",
  execute: function(editor, e) {
    editor.keyboard.remove(e.code, e.keyCode);
    if (editor.shortcuts) {
      editor.shortcuts.execute(e, "keyup");
    }
  }
};
const toggleTheme = {
  command: "toggle.theme",
  execute: function(editor) {
    var theme = editor.configs.get("editor.theme");
    editor.configs.set("editor.theme", theme === "light" ? "dark" : "light");
  }
};
const defaultCommands = [
  keymapKeydown,
  keymapKeyup,
  toggleTheme,
  editorLayoutToggleTop,
  editorLayoutToggleRight,
  editorLayoutToggleLeft,
  editorLayoutToggleBottom
];
const editorLayoutShowBottom = {
  key: "editor.layout.show.bottom",
  defaultValue: true,
  title: "Show bottom panel in layout ",
  description: "Show bottom panel in layout",
  type: "boolean"
};
const editorLayoutShowLeft = {
  key: "editor.layout.show.left",
  defaultValue: true,
  title: "Show left panel in layout ",
  description: "Show left panel in layout",
  type: "boolean"
};
const editorLayoutShowRight = {
  key: "editor.layout.show.right",
  defaultValue: true,
  title: "Show right panel in layout ",
  description: "Show right panel in layout",
  type: "boolean"
};
const editorLayoutShowTop = {
  key: "editor.layout.show.top",
  defaultValue: true,
  title: "Show top panel in layout ",
  description: "Show top panel in layout",
  type: "boolean"
};
const editorTheme = {
  key: "editor.theme",
  defaultValue: "light",
  title: "Editor Theme ",
  description: "Set editor's theme",
  type: "string"
};
const defaultConfigs = [
  editorTheme,
  editorLayoutShowTop,
  editorLayoutShowLeft,
  editorLayoutShowRight,
  editorLayoutShowBottom
];
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
      if (!isFunction(command.execute))
        throw new Error("execute function is required", command);
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
    if (typeof command === "function") {
      return command;
    }
    return this.localCommands[command];
  }
  get(command) {
    return this.getCallback(command);
  }
  execute(command, ...args) {
    const callback = this.getCallback(command);
    if (!callback) {
      throw new Error("command is not registered : " + command);
    }
    return callback(...args);
  }
  has(command) {
    return !!this.getCallback(command);
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
class I18nManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.locales = {};
    this.fallbackLang = "en_US";
  }
  getLang(lang = void 0) {
    return lang || this.fallbackLang;
  }
  setFallbackLang(lang) {
    this.fallbackLang = lang;
  }
  get(key, params = {}, lang = void 0) {
    var _a, _b;
    const currentLang = this.getLang(lang);
    const str = ((_a = this.locales[currentLang]) == null ? void 0 : _a[key]) || ((_b = this.locales[this.fallbackLang]) == null ? void 0 : _b[key]) || key || void 0;
    if (isFunction(str)) {
      return str(params);
    } else {
      let newValue = str;
      if (key === newValue) {
        return key.split(".").pop();
      }
      Object.entries(params).forEach(([key2, value]) => {
        newValue = newValue.replace(new RegExp(`{${key2}}`, "ig"), value);
      });
      return newValue;
    }
  }
  hasKey(key, lang = void 0) {
    const currentLang = this.getLang(lang);
    return !!(this.locales[currentLang][key] || this.locales[this.fallbackLang][key]);
  }
  registerI18nMessage(lang, messages) {
    if (!this.locales[lang]) {
      this.locales[lang] = {};
    }
    Object.assign(this.locales[lang], messages);
  }
}
class KeyBoardManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.codeSet = /* @__PURE__ */ new Set();
    this.keyCodeSet = /* @__PURE__ */ new Set();
    this.event = {};
  }
  add(key, keyCode, e) {
    if (this.codeSet.has(key) === false) {
      this.codeSet.add(key);
    }
    if (this.keyCodeSet.has(keyCode) === false) {
      this.keyCodeSet.add(keyCode);
    }
    this.event = e;
  }
  remove(key, keyCode) {
    this.codeSet.delete(key);
    this.keyCodeSet.delete(keyCode);
    this.event = {};
  }
  hasKey(keyOrKeyCode) {
    return this.codeSet.has(keyOrKeyCode) || this.keyCodeSet.has(keyOrKeyCode);
  }
  check(...args) {
    return args.some((keyOrKeyCode) => this.hasKey(keyOrKeyCode));
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
  init() {
    this.plugins = [];
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
    const ret = await this.initializePlugin();
    return ret;
  }
}
let osInfo = {
  name: void 0
};
function os() {
  if (osInfo.name === void 0) {
    if (window.navigator.appVersion.indexOf("Win") != -1)
      osInfo.name = "win";
    else if (window.navigator.appVersion.indexOf("Mac") != -1)
      osInfo.name = "mac";
    else if (window.navigator.appVersion.indexOf("X11") != -1)
      osInfo.name = "linux";
    else
      osInfo.name = "";
  }
  return osInfo.name;
}
const KEY_CODE = {
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
os();
const KEY_STRING = {
  ALT: "ALT",
  CMD: "CMD",
  META: "META",
  CTRL: "CTRL",
  SHIFT: "SHIFT",
  SPACE: "SPACE",
  BACKSPACE: "BACKSPACE"
};
function generateKeyCode(code) {
  return KEY_CODE[`${code}`.toLowerCase()] || code;
}
function joinKeys(...args) {
  return args.filter(Boolean).join("+");
}
class ShortCutManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.loadShortCuts();
  }
  getGeneratedKeyCode(code) {
    return generateKeyCode(code);
  }
  loadShortCuts() {
    this.list = [];
    this.commands = {};
  }
  makeShortcutCommandFunction(command) {
    if (typeof command === "function") {
      return (...args) => {
        return command(this.editorContext, ...args);
      };
    }
    return command;
  }
  registerShortcut(shortcut) {
    const OSName = os();
    const shortcutData = {
      key: "",
      args: [],
      eventType: "keydown",
      priority: 10,
      preventDefault: false,
      stopPropagation: false,
      isDisabled: false,
      container: null,
      ...shortcut,
      command: this.makeShortcutCommandFunction(shortcut.command),
      checkKeyString: this.splitShortCut(shortcut[OSName] || shortcut.key),
      whenFunction: this.makeWhenFunction(
        shortcut.command,
        shortcut.when || true
      )
    };
    this.list.push(shortcutData);
    this.updateCommandInfo(shortcutData);
  }
  makeWhenFunction(command, when) {
    if (isBoolean(when) && when) {
      return () => true;
    }
    const editor = this.editorContext;
    const whenList = when.split("|").map((it) => it.trim());
    return () => {
      return whenList.some(
        (it) => editor.context.modeViewManager.isCurrentMode(it)
      );
    };
  }
  updateCommandInfo(it) {
    if (Array.isArray(this.commands[it.checkKeyString]) === false) {
      this.commands[it.checkKeyString] = [];
    }
    this.commands[it.checkKeyString].push(it);
  }
  sort() {
    this.commands = {};
    this.list.forEach((it) => {
      this.updateCommandInfo(it);
    });
  }
  splitShortCut(key) {
    var arr = key.toUpperCase().split("+").map((it) => it.trim()).filter(Boolean);
    let isAlt = false;
    let isControl = false;
    let isShift = false;
    let isMeta = false;
    let restKeys = [];
    arr.forEach((key2) => {
      if (key2.includes(KEY_STRING.ALT))
        isAlt = true;
      else if (key2.includes(KEY_STRING.CTRL))
        isControl = true;
      else if (key2.includes(KEY_STRING.SHIFT))
        isShift = true;
      else if (key2.includes("CMD") || key2.includes("WIN") || key2.includes(KEY_STRING.META))
        isMeta = true;
      else
        restKeys.push(key2);
    });
    return joinKeys(
      isAlt ? KEY_STRING.ALT : "",
      isControl ? KEY_STRING.CTRL : "",
      isShift ? KEY_STRING.SHIFT : "",
      isMeta ? KEY_STRING.META : "",
      generateKeyCode(restKeys.join(""))
    );
  }
  makeKeyString(e) {
    var _a, _b;
    if (e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta") {
      return (_a = e.key) == null ? void 0 : _a.toUpperCase();
    }
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      (_b = e.key) == null ? void 0 : _b.toUpperCase()
    );
  }
  makeCodeString(e) {
    var _a, _b;
    if (e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta") {
      return (_a = e.code) == null ? void 0 : _a.toUpperCase();
    }
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      (_b = e.code) == null ? void 0 : _b.toUpperCase()
    );
  }
  makeKeyCodeString(e) {
    if (e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta") {
      return e.keyCode;
    }
    return joinKeys(
      e.altKey ? KEY_STRING.ALT : "",
      e.ctrlKey ? KEY_STRING.CTRL : "",
      e.shiftKey ? KEY_STRING.SHIFT : "",
      e.metaKey ? KEY_STRING.META : "",
      e.keyCode
    );
  }
  checkShortCut(keyCodeString, keyString, codeString) {
    return this.commands[keyCodeString] || this.commands[keyString] || this.commands[codeString];
  }
  checkWhen(command) {
    return command.whenFunction();
  }
  execute(e, eventType = "keydown") {
    let commands = this.checkShortCut(
      this.makeKeyCodeString(e),
      this.makeKeyString(e),
      this.makeCodeString(e)
    );
    if (commands) {
      const filteredCommands = commands.filter((it) => it.eventType === eventType).filter((it) => this.checkWhen(it));
      if (filteredCommands.length) {
        filteredCommands.forEach((it) => {
          if (it.container) {
            if (isString(it.container)) {
              if (!e.target.matches(it.container)) {
                return;
              }
            } else if (it.container instanceof HTMLElement) {
              if (!it.container.contains(e.target)) {
                return;
              }
            }
          }
          if (it.preventDefault) {
            e.preventDefault();
          }
          if (it.stopPropagation) {
            e.stopPropagation();
          }
          this.editorContext.commands.execute(it.command, ...it.args);
        });
      }
    }
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
    this.initializeConfigs(defaultConfigs);
    this.initializeConfigs(configList);
    this.initializeInnerCommands();
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
      shortcuts: ShortCutManager,
      keyboard: KeyBoardManager,
      i18n: I18nManager,
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
  initializeInnerCommands() {
    this.initializeCommands(defaultCommands);
  }
  initializeCommands(commands = []) {
    commands.forEach((command) => {
      this.commands.registerCommand(command);
    });
  }
  initializePlugins(plugins = []) {
    this.plugins.init();
    plugins.forEach((plugin) => {
      this.plugins.registerPlugin(plugin);
    });
  }
  async activate() {
    const ret = await this.plugins.activate();
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
  registerShortcut(shortcut) {
    this.shortcuts.registerShortcut(shortcut);
  }
  registerI18nMessage(lang, messages) {
    this.i18n.registerI18nMessage(lang, messages);
  }
  registerI18nMessageWithLang(locales) {
    Object.keys(locales).forEach((locale) => {
      this.registerI18nMessage(locale, locales[locale]);
    });
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
const KEY_EDITOR$1 = "editor";
const KEY_EDITOR_OPTION$1 = "editorOption";
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
  return useStore(KEY_EDITOR$1);
}
function useEditorOption(key) {
  var _a;
  return (_a = useStore(KEY_EDITOR_OPTION$1)) == null ? void 0 : _a[key];
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
function useGetCommand(key) {
  var _a, _b;
  return (_b = (_a = useEditor()) == null ? void 0 : _a.commands) == null ? void 0 : _b.get(key);
}
function useI18n(key, params = {}) {
  var _a, _b;
  return (_b = (_a = useEditor()) == null ? void 0 : _a.i18n) == null ? void 0 : _b.get(key, params);
}
class Editor extends UIElement {
  initialize() {
    super.initialize();
    console.log("editor initialize");
    if (!this.$editor) {
      this.$editor = new EditorContext(this, this.props);
    }
    this.$store.set(KEY_EDITOR$1, this.$editor);
    this.$store.set(KEY_EDITOR_OPTION$1, this.props);
  }
  async load() {
    const { configs } = this.props;
    this.$editor.updateConfigs(configs);
    console.warn("editor plugin load");
    await this.activate();
  }
  async activate() {
    await this.$editor.activate();
    this.$store.initValue("editor.plugin.activated", (v = 0) => v + 1);
    console.warn("editor.plugin.activated");
    this.render();
  }
}
function Loading() {
  return /* @__PURE__ */ createElementJsx("div", {
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
const formElements = ["TEXTAREA", "INPUT", "SELECT"];
const KEY_EDITOR = "editor";
const KEY_EDITOR_OPTION = "editorOption";
class BaseEditor extends UIElement {
  template() {
    const {
      class: className = "",
      fullScreen,
      loading = /* @__PURE__ */ createElementJsx(Loading, null),
      plugins,
      configs
    } = this.props;
    const editorRef = useRef(new EditorContext(this, this.props));
    const pluginActivatedRef = useRef(false);
    const localClass = useMemo(() => {
      return classnames(
        "elf--base-editor",
        {
          "full-screen": fullScreen
        },
        className
      );
    }, [className, fullScreen]);
    useEffect(async () => {
      console.log("editor useEffect", pluginActivatedRef.current);
      if (pluginActivatedRef.current) {
        return;
      }
      if (!this.$editor) {
        this.$editor = editorRef.current;
      }
      this.$store.set(KEY_EDITOR, this.$editor);
      this.$store.set(KEY_EDITOR_OPTION, this.props);
      this.$editor.updateConfigs(configs);
      await this.$editor.activate();
      pluginActivatedRef.current = true;
      useRender(this);
    }, [editorRef.current, pluginActivatedRef.current, plugins, configs]);
    return /* @__PURE__ */ createElementJsx("div", {
      class: localClass
    }, pluginActivatedRef.current ? editorRef.current.getUIList("renderView") : loading);
  }
  isNotFormElement(e) {
    var tagName = e.target.tagName;
    if (formElements.includes(tagName))
      return false;
    else if (e.target.getAttribute("contenteditable") === "true")
      return false;
    return true;
  }
  updateTheme() {
    const isDark = this.$editor.configs.get("editor.theme") === "light" ? false : true;
    document.body.classList.toggle("theme-dark", isDark);
  }
  [SUBSCRIBE_SELF("editor.plugin.activated")]() {
    this.updateTheme();
  }
  [SUBSCRIBE("config:editor.theme")]() {
    this.updateTheme();
  }
  [KEYDOWN("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keydown", e);
  }
  [KEYUP("document") + IF("isNotFormElement")](e) {
    this.$editor.commands.execute("keymap.keyup", e);
  }
  [RESIZE("window") + DEBOUNCE(10)]() {
    this.$editor.emit("resize.window");
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
export {
  BaseEditor,
  Editor,
  EditorPlugin,
  InjectView,
  useCommand,
  useConfig,
  useEditor,
  useEditorOption,
  useGetCommand,
  useI18n,
  useSetConfig
};
