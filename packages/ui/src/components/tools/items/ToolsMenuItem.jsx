import {
  classnames,
  isFunction,
  CLICK,
  IF,
  Dom,
  POINTEROVER,
  POINTERLEAVE,
  useMemo,
} from "@elf-framework/sapa";

import { ArrowIcon } from "../../../icon/arrow";
import { registerComponent } from "../../../utils/component";
import { Flex } from "../../flex";
import { Menu } from "../../menu/index";
import { ToolsItem } from "./ToolsItem";

export class ToolsMenuItem extends ToolsItem {
  initState() {
    const {
      title = "",
      icon,
      selected,
      disabled,
      opened,
      direction,
      menuStyle,
      noArrow = false,
    } = this.props;

    return {
      title,
      icon,
      selected,
      opened,
      direction,
      disabled,
      menuStyle,
      noArrow,
      rootClose: this.close.bind(this),
    };
  }

  template() {
    const {
      title = "",
      icon,
      disabled,
      selected,
      opened = false,
      direction = "left",
      menuStyle,
      noArrow = false,
    } = this.state;
    const { style = {}, items, class: className } = this.props;

    const hasItems = items.length > 0;
    const isSelected = selected
      ? isFunction(selected)
        ? selected()
        : selected
      : undefined;

    const localClass = useMemo(() => {
      return classnames(
        "elf--tools-item",
        {
          selected: isSelected,
          "has-items": hasItems,
        },
        className
      );
    }, [isSelected, hasItems, className]);

    return (
      <div class={localClass} disabled={disabled} style={style}>
        <button type="button">
          <Flex style={{ columnGap: 4 }}>
            {[
              icon ? (
                <span class="icon">{isFunction(icon) ? icon() : icon}</span>
              ) : undefined,
              title ? (
                <span class="menu-title">
                  {isFunction(title) ? title() : title}
                </span>
              ) : undefined,
            ].filter(Boolean)}
          </Flex>

          {hasItems && !noArrow ? (
            <span class={classnames("arrow", { opened: opened })}>
              <ArrowIcon />
            </span>
          ) : undefined}
        </button>
        {opened && !disabled ? (
          <div class="menu-area">
            <div class="background" data-direction={direction}></div>
            {/* <div class="arrow"></div> */}
            <Menu
              ref="$menu"
              items={items}
              direction={direction}
              rootClose={this.state.rootClose}
              style={{
                ...(menuStyle || {}),
                top: "calc(100% + 5px)",
              }}
            />
          </div>
        ) : undefined}
      </div>
    );
  }

  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }

  open() {
    // close 되어 있을 때만 open 을 실행한다.
    if (!this.state.opened) {
      this.setState({
        rect: this.$el.rect(),
        opened: true,
      });
    }
  }

  close() {
    if (this.state.opened) {
      this.setState({
        opened: false,
      });
    }
  }

  toggle() {
    if (!this.state.opened) {
      this.setState(
        {
          rect: this.$el.rect(),
        },
        false
      );

      this.open();
    } else {
      this.close();
    }
  }

  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }

  checkTriggerClick() {
    const { trigger = "click", onClick } = this.props;

    return trigger === "click" || (trigger === "hover" && isFunction(onClick));
  }

  checkTriggerOver() {
    return this.props.trigger === "hover";
  }

  [POINTEROVER("$el") + IF("checkTriggerOver")]() {
    this.open();
  }

  checkNotInMenu(e) {
    const $menu = Dom.create(e.target).closest("elf--tools-item");

    // pointerout 한 최상위 target 이 현재 메뉴가 아닐 때 메뉴를 닫는다.
    if (!$menu) return true;

    // 해당 객체가 아닐 때
    return this.$el.is($menu) === false;
  }

  [POINTERLEAVE("$el") + IF("checkTriggerOver")]() {
    this.close();
  }

  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")]() {
    this.close();
  }

  [CLICK("$el") + IF("checkClickable") + IF("checkTriggerClick")](e) {
    if (
      (Dom.create(e.target).hasClass("arrow") && !this.state.noArrow) ||
      this.state.noArrow
    ) {
      this.toggle();

      if (this.state.opened) {
        this.runCallback(this.props.onOpen, e);
      } else {
        this.runCallback(this.props.onClose, e);
      }
      this.runCallback(this.props.onClick, e);
    } else {
      this.close();

      this.runCallback(this.props.onClick, e);
    }
  }
}

registerComponent("ToolsMenuItem", ToolsMenuItem);
registerComponent("tools-menu-item", ToolsMenuItem);
registerComponent("toolsmenuitem", ToolsMenuItem);
