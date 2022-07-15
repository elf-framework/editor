import { UIElement } from "@elf-framework/sapa";

export class EditorContext {
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
    // CommandManager
    // ConfigManager
    // PluginManager
  }

  initializeConfigs() {}

  get $store() {
    return this.$root.$store;
  }

  emit(message, ...args) {
    this.$store.emit(message, ...args);
  }
}

export class EditorPlugin {
  constructor(editor, props = {}) {
    this.editor = editor;
    this.props = props;
  }

  initialize() {}

  load() {}

  activate() {}

  deactivate() {}
}

/**
 * Editor
 *
 * plugin manager
 * config manager
 * content manager
 * children manager
 * command manager
 *
 *
 */
export class Editor extends UIElement {
  initialize() {
    super.initialize();

    this.context = new EditorContext(this);
    //
    this.setConfigs(this.props.configs);
    this.setCommands(this.props.commands);

    // plugin register
    this.setPlugins([
      ...this.props.plugins,
      ...this.props.content
        .filter((plugin) => plugin.Class instanceof EditorPlugin)
        .map((plugin) => {
          return {
            plugin: plugin.Class,
            props: plugin.props,
          };
        }),
    ]);

    this.activate();
  }

  vNodeOptions() {
    return {
      ...super.vNodeOptions(),
      context: this.context,
    };
  }
}
