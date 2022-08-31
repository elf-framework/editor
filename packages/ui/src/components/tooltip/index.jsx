import {
  UIElement,
  classnames,
  CLICK,
  POINTERENTER,
  IF,
  POINTERLEAVE,
  Dom,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--tooltip", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
  delay: true,
  contentPadding: true,
});

export const TooltipPosition = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
};

export class Tooltip extends UIElement {
  initState() {
    return {
      trigger: this.props.trigger || "hover",
      delay: 1000,
      show: this.props.show || false,
    };
  }

  template() {
    const {
      style = {},
      message = "",
      content,
      position = "bottom",
      hideArrow = false,
    } = this.props;
    const { show } = this.state;

    const styleObject = {
      class: classnames("elf--tooltip", { [position]: true }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        <div class="elf--tooltip-content">{content}</div>
        {show || this.props.show ? (
          <div class="elf--tooltip-message">
            {hideArrow ? undefined : <div class="arrow"></div>}
            <div class="elf--toolltip-message-content">{message}</div>
          </div>
        ) : undefined}
      </div>
    );
  }

  open() {
    this.setState({
      show: true,
    });
  }

  close() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, this.props.hideDelay);
  }

  toggle() {
    this.setState({
      show: !this.state.show,
    });
  }

  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip-content");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }

  checkTriggerClick() {
    return this.state.trigger === "click";
  }

  checkTriggerOver() {
    return this.state.trigger === "hover";
  }

  [POINTERENTER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }

  checkNotInTooltip(e) {
    const $menu = Dom.create(e.target).closest("elf--tooltip");

    // pointerout 한 최상위 target 이 현재 메뉴가 아닐 때 메뉴를 닫는다.
    if (!$menu) return true;

    // 해당 객체가 아닐 때
    return this.$el.is($menu) === false;
  }

  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }

  [CLICK("$el") + IF("checkTriggerClick")]() {
    this.toggle();
  }
}
