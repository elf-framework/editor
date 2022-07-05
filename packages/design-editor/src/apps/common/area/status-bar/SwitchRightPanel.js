import { CLICK } from "@elf-framework/sapa";

import "./SwitchRightPanel.scss";

import { iconUse, EditorElement } from "@elf-framework/editor";

export default class SwitchRightPanel extends EditorElement {
  template() {
    return /*html*/ `
            <button class="elf--switch-right-panel" data-tooltip="Toggle right panel" data-direction="top right">${iconUse(
              "switch_right"
            )}</button>
        `;
  }

  [CLICK()]() {
    this.$config.toggle("show.right.panel");
  }
}
