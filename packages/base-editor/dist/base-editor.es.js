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
import { UIElement, createElementJsx, classnames } from "@elf-framework/sapa";
class EditorContext {
  constructor($root) {
    this.$root = $root;
    this.initialize();
  }
  initialize() {
    this.initializeManagers();
    this.initializeConfigs();
    this.initializePlugins();
  }
  initializePlugins() {
    this.loadPlugins();
    this.activePlugins();
  }
  initializeManagers() {
  }
  initializeConfigs() {
  }
  get $store() {
    return this.$root.$store;
  }
  emit(message, ...args) {
    this.$store.emit(message, ...args);
  }
}
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
class Editor extends UIElement {
  initialize() {
    super.initialize();
    this.context = new EditorContext(this);
    this.setConfigs(this.props.configs);
    this.setCommands(this.props.commands);
    this.setPlugins([
      ...this.props.plugins,
      ...this.props.content.filter((plugin) => plugin.Class instanceof EditorPlugin).map((plugin) => {
        return {
          plugin: plugin.Class,
          props: plugin.props
        };
      })
    ]);
    this.activate();
  }
  vNodeOptions() {
    return __spreadProps(__spreadValues({}, super.vNodeOptions()), {
      context: this.context
    });
  }
}
class BaseEditor extends Editor {
  template() {
    const { sampleText } = this.$editor.for("sample.text");
    return /* @__PURE__ */ createElementJsx("div", {
      class: classnames("elf--base-editor", __spreadValues({
        "full-screen": this.props.fullScreen
      }, this.props.editorClass))
    }, "Base Editor2", sampleText);
  }
}
export { BaseEditor };
