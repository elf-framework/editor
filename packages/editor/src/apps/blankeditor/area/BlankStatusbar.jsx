import { EditorElement } from "elf/editor/ui/common/EditorElement";

import "./BlankStatusbar.scss";

export default class BlankStatusbar extends EditorElement {
  template() {
    return (
      <div class="elf--status-bar">
        ${this.$injectManager.generate("statusbar")}
      </div>
    );
  }
}
