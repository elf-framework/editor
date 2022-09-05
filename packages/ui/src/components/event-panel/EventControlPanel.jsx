import { UIElement } from "@elf-framework/sapa";

import {
  ADD_BODY_FIRST_MOUSEMOVE,
  ADD_BODY_MOUSEMOVE,
  ADD_BODY_MOUSEUP,
} from "../../consts";
import { registerComponent } from "../../utils/component";

export class EventControlPanel extends UIElement {
  bodyMouseFirstMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_FIRST_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }

  bodyMouseMove(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEMOVE, this[methodName], this, e.xy);
    }
  }

  bodyMouseUp(e, methodName) {
    if (this[methodName]) {
      this.emit(ADD_BODY_MOUSEUP, this[methodName], this, e.xy);
    }
  }
}

registerComponent("event-control-panel", EventControlPanel);
registerComponent("EventControlPanel", EventControlPanel);
registerComponent("eventcontrolpanel", EventControlPanel);
