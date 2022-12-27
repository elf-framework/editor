import {
  UIElement,
  classnames,
  CLICK,
  POINTERENTER,
  IF,
  POINTERLEAVE,
  useMemo,
  FOCUS,
  isString,
  potal,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--tooltip", {
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
  maxWidth: true,
  position: true,
});

export const TooltipPlacement = {
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
    const trigger = this.props.trigger || "hover";

    return {
      trigger: isString(trigger) ? [trigger] : trigger,
      delay: 1000,
      show: this.props.show || false,
    };
  }

  template() {
    const {
      style = {},
      message = "",
      content,
      placement = "bottom",
      animated = false,
      hideArrow = false,
      variant = "default",
      position = "relative",
      icon,
    } = this.props;
    const { show } = this.state;

    const localClass = useMemo(() => {
      return classnames("elf--tooltip", {
        [placement]: true,
        animated,
        [variant]: true,
        [position]: true,
      });
    }, [placement, animated, variant, position]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div class="content">{content}</div>
        {show || this.props.show ? (
          <div class="message">
            {hideArrow ? undefined : <div class="arrow"></div>}
            {icon ? <div class="icon">{icon}</div> : undefined}
            <div class="message-content">
              <div>{message}</div>
            </div>
          </div>
        ) : undefined}
      </div>
    );
  }

  show() {
    this.open();
  }

  hide() {
    this.close();
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

  checkTriggerClick() {
    return this.state.trigger.includes("click");
  }

  checkTriggerOver() {
    return this.state.trigger.includes("hover");
  }

  checkTriggerFocus() {
    return this.state.trigger.includes("focus");
  }

  [POINTERENTER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }

  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }

  [CLICK("$el") + IF("checkTriggerClick")]() {
    this.toggle();
  }

  [FOCUS("$el") + IF("checkTriggerFocus")]() {
    this.open();
  }

  remove() {
    this.$el.remove();
  }
}

export function tooltip({
  content,
  message = "",
  delay = 0,
  position = "fixed",
  placement = "top",
  options = {},
  style,
  variant = "default",
}) {
  const root = potal(
    <Tooltip
      variant={variant}
      delay={delay}
      position={position}
      placement={placement}
      message={message}
      style={style}
      show={true}
    >
      {content || <span>&nbsp;</span>}
    </Tooltip>,
    options
  );

  return root.firstChild;
}
