import {
  IF,
  isFunction,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  UIElement,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";

export class AppResizeBar extends UIElement {
  template() {
    const styleObject = {
      class: "elf--app-layout-resize-bar",
    };

    return <div {...styleObject} />;
  }

  [POINTERSTART()](e) {
    this.startXY = e.xy;
  }

  isMoved(e) {
    if (!this.startXY) return false;

    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;
    if (diffX !== 0 || diffY !== 0) {
      return true;
    }

    return false;
  }

  [POINTERMOVE("document") + IF("isMoved")](e) {
    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;

    if (isFunction(this.props.onResize)) {
      this.props.onResize(diffX, diffY);
    }
  }

  [POINTEREND("document") + IF("isMoved")](e) {
    const { xy } = e;
    const diffX = xy.x - this.startXY.x;
    const diffY = xy.y - this.startXY.y;
    if (isFunction(this.props.onResizeEnd)) {
      this.props.onResizeEnd(diffX, diffY);
    }
    this.startXY = undefined;
  }
}

registerComponent("app-resize-bar", AppResizeBar);
registerComponent("AppResizeBar", AppResizeBar);
registerComponent("appresizebar", AppResizeBar);
