import { createComponent } from "@elf/sapa";

import KeyframeTimeControl from "./KeyframeTimeControl";

import { EditorElement } from "@elf/editor"

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
