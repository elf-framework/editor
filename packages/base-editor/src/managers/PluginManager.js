export class PluginManager {
  constructor(editorContext) {
    this.editorContext = editorContext;
    this.plugins = [];
  }

  registerPlugin(func, options = {}) {
    this.plugins.push([func, options]);
  }

  /**
   * 플러그인 초기화를 비동기로 한다.
   *
   */
  async initializePlugin() {
    return await Promise.all(
      this.plugins.map(async ([CreatePluginFunction, options]) => {
        try {
          return await CreatePluginFunction(this.editorContext, options);
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
