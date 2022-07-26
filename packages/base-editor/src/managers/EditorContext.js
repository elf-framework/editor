import { CommandManager } from "./CommandManager";
import { ConfigManager } from "./ConfigManager";
import { PluginManager } from "./PluginManager";
import { UIManager } from "./UIManager";

const CONTEXT_ID = "EditorContext";
export class EditorContext {
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
      plugins = [],
    } = this.$options;
    this.initializeManagers(managers);
    this.initializeConfigs(configs);
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
      //TODO: i18n: I18nManager,            // 다국어 매니저
      //TODO: history: HistoryManager,      // history manager
      //TODO: inspector: InspectorManager,  // inspector 관리용 매니저
      //TODO: state: StateManager,  // config 와 관계없는 에디터 공용 캐쉬 저장소
      ...managers,
    };

    // 외부 manager 주입
    Object.entries(managers).forEach(([key, Manager]) => {
      if (Object.hasOwnProperty.call(this, key)) {
        console.warn(`[EditorContext] ${key} manager is already exists.`);
        return;
      }

      Object.defineProperty(this, key, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: new Manager(this),
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

  getConfig(key) {
    return this.configs.get(key);
  }
}
