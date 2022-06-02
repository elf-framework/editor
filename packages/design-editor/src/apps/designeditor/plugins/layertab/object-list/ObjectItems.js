import { createComponent } from "@elf/sapa";

import "./ObjectItems.scss";

import { EditorElement } from "@elf/editor"

export default class ObjectItems extends EditorElement {
  template() {
    return /*html*/ `
        <div class="object-items">
          <div>
            ${createComponent("ProjectProperty")}
          </div>
          <div>
            ${createComponent("LayerTreeProperty")}
          </div>
        </div>
    `;
  }
}
