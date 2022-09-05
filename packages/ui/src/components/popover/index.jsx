import {
  UIElement,
  classnames,
  CLICK,
  POINTERENTER,
  IF,
  POINTERLEAVE,
  Dom,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--popover", {
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

/**
 * Popover placement
 *
 * top
 * top-left
 * top-right
 * bottom
 * bottom-left
 * bottom-right
 * left
 * left-top
 * left-bottom
 * right
 * right-top
 * right-bottom
 *
 *
 */

export class Popover extends UIElement {
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
      body = "",
      content,
      placement = "bottom",
      showTip = false,
      animated = false,
    } = this.props;
    const { show } = this.state;

    const styleObject = {
      class: classnames("elf--popover", { [placement]: true, animated }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    const isPopoverShow = show || this.props.show;
    const isShowTip = isPopoverShow && showTip;

    return (
      <div {...styleObject}>
        <div class="elf--popover-content">
          {content}
          {isShowTip ? <div class="tip"></div> : undefined}
        </div>
        {isPopoverShow ? (
          <div class="elf--popover-message">
            <div class="elf--toolltip-message-content">{body}</div>
            {/* 이벤트 발생시 이벤트 발생 위치를 표시하기 위한 용도 */}
            <div class="event-panel"></div>
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
    const $menu = Dom.create(e.target).closest("elf--popover-content");

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

  checkNotInpopover(e) {
    const $menu = Dom.create(e.target).closest("elf--popover");

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

registerComponent("popover", Popover);
registerComponent("Popover", Popover);
