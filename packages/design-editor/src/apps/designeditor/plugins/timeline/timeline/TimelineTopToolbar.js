import { createComponent } from "@elf-framework/sapa";

import KeyframeTimeControl from "./KeyframeTimeControl";

import { EditorElement } from "@elf-framework/editor"

export default class TimelineTopToolbar extends EditorElement {
  components() {
    return {
      KeyframeTimeControl,
    };
  }

  template() {
    return /*html*/ `
            <div class='timeline-top-toolbar'>
                ${createComponent("KeyframeTimeControl")}
            </div>
        `;
  }
}
