import { EditorElement } from "@elf/editor"

export default class VersionView extends EditorElement {
  initState() {
    return {
      version: `@@VERSION@@`,
    };
  }

  template() {
    return `<div class="version-view">v${this.state.version}</div>`;
  }
}
