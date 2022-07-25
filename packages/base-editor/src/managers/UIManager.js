export class UIManager {
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
