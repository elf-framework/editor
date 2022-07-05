import { createComponent } from "@elf-framework/sapa";
import { EditorElement } from "elf/editor/ui/common/EditorElement";

import "./BlankBodyPanel.scss";
import BlankCanvasView from "./BlankCanvasView";

export default class BlankBodyPanel extends EditorElement {
  components() {
    return {
      BlankCanvasView,
    };
  }

  template() {
    return /*html*/ `
      <div class="elf--body-panel">
        <div class='editing-area'>
          <div class="canvas-layout">
            ${createComponent("BlankCanvasView")}
          </div>

        </div>
      </div>
    `;
  }
}
