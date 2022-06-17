import { CLICK } from "@elf-framework/sapa";

import "./SwitchLeftPanel.scss";

import { iconUse } from "@elf-framework/editor";
import { EditorElement } from "@elf-framework/editor"

export default class SwitchLeftPanel extends EditorElement {
  template() {
    return /*html*/ `
            <button class="elf--switch-left-panel" data-tooltip="Toggle left panel" data-direction="top left">${iconUse(
              "switch_left"
            )}</button>
        `;
  }

  [CLICK()]() {
    this.$config.toggle("show.left.panel");
  }
}
