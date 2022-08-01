class EditorPlugin {
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

export class PluginManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.plugins = [];
  }

  registerPlugin(func, options = {}) {
    this.plugins.push(new EditorPlugin(this.editorContext, func, options));
  }

  /**
   * 플러그인 초기화를 비동기로 한다.
   *
   */
  async initializePlugin() {
    return await Promise.all(
      this.plugins.map(async (plugin) => {
        try {
          return await plugin.activate();
        } catch (e) {
          console.error(e);
          return undefined;
        }
      })
    );
  }

  async activate() {
    await this.initializePlugin();
  }
}
