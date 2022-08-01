import { createElementJsx, isArray, VNode } from "@elf-framework/sapa";

export class UIManager {
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

  /**
   * editor.registerUI({
   *  "ui-name": App.UI.InjectView,
   * })
   *
   * or
   *
   * 외부에서 주입할 수 있는 UI 는 2가지 형태로 정의된다.
   * 1. 배열 (Array)
   *  [Component, props]
   *
   *  초기화 하는 시점에 props 도 같이 넘겨주고 싶으면 배열 형태로 UI 를 동록하자.
   *
   * 2. 객체/Function
   * - Component
   * editor.registerUI({
   *   "ui-name": [App.UI.InjectView, {key: value}],
   * })
   *
   * this.createUI(this.uis['ui-name'])
   *
   * 3. VNode 일 때
   *
   * editor.registerUI({
   *  "ui-name": <div>...</div>,
   * })
   *
   * vNode 를 그대로 렌더링 하는 쪽에 전달한다.
   *
   * @param {*} ui
   * @returns
   */
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

    return undefined;
  }

  getGroupUI(key) {
    const list = Object.values(this.groupUis[key] || {})
      .map((uis) => {
        return this.createUI(uis);
      })
      .filter(Boolean);

    return list;
  }
}
