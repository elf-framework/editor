import {
  IF,
  isFunction,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  UIElement,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";

export class BaseSlide extends UIElement {
  template() {
    const { value, containerClass, slideClass } = this.props;
    return (
      <div class={`${containerClass} slide-view`}>
        <div class={`${slideClass} slide-bg`}>
          <div
            class="drag-pointer"
            style={{
              "--drag-point-left": value,
            }}
          ></div>
        </div>
      </div>
    );
  }

  updateValue(e) {
    const { onChange } = this.props;
    const { x, width } = this.state.rect;
    const minX = x;
    const maxX = minX + width;

    const targetX = Math.min(Math.max(minX, e.clientX), maxX);

    const value = (targetX - minX) / width;

    if (isFunction(onChange)) {
      onChange(value);
    }
  }

  [POINTERSTART("$el .slide-bg")](e) {
    this.setState(
      {
        clicked: true,
        rect: this.$el.$(".slide-bg").rect(),
      },
      false
    );

    this.updateValue(e);
  }

  checkClicked() {
    return this.state.clicked;
  }

  [POINTERMOVE("document") + IF("checkClicked")](e) {
    this.updateValue(e);
  }

  [POINTEREND("document") + IF("checkClicked")]() {
    this.setState(
      {
        clicked: false,
      },
      false
    );
    // TODO: lastChanged 이벤트를 발생시켜야함.
  }
}

registerComponent("base-slide", BaseSlide);
registerComponent("baseslide", BaseSlide);
