import {
  UIElement,
  classnames,
  isFunction,
  CLICK,
  IF,
  Dom,
  POINTEROVER,
  POINTERLEAVE,
} from "@elf-framework/sapa";

import { ArrowIcon } from "../../icon/arrow";
import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
import { Flex } from "../flex/index";
import { Menu } from "../menu/index";

const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
};

function makeToolsItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type}-${index}`;

    if (it.type === ToolsItemType.CUSTOM) {
      return <ToolsCustomItem ref={ref} {...it} />;
    }

    if (it.type === ToolsItemType.MENU) {
      return <ToolsMenuItem ref={ref} {...it} />;
    }

    return <ToolsItem ref={ref} {...it} />;
  });
}

class ToolsItem extends UIElement {
  initialize() {
    super.initialize();
    // event check
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => {
          this.refresh();
        });
      });
    }
  }

  initState() {
    const { title = "", icon, selected } = this.props;

    return {
      title,
      icon,
      selected,
    };
  }

  template() {
    const { title = "", icon } = this.state;
    return (
      <div
        class={classnames("elf--tools-item", {
          selected: this.selected ? true : undefined,
        })}
        onClick={this.props.onClick}
      >
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
        </button>
      </div>
    );
  }

  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected,
    });
  }

  get selected() {
    if (isFunction(this.state.selected)) {
      return this.state.selected();
    }

    return this.state.selected;
  }

  set selected(value) {
    this.setSelected(value);
  }
}

export class ToolsCustomItem extends ToolsItem {
  template() {
    return <div class="elf--tools-item custom">{this.props.render?.()}</div>;
  }
}

export class ToolsMenuItem extends ToolsItem {
  initState() {
    const {
      title = "",
      icon,
      selected,
      disabled,
      opened,
      items,
      direction,
      menuStyle,
    } = this.props;

    return {
      title,
      icon,
      selected,
      opened,
      items,
      direction,
      disabled,
      menuStyle,
      rootClose: this.close.bind(this),
    };
  }

  template() {
    const {
      title = "",
      icon,
      disabled,
      selected,
      items = [],
      opened = false,
      direction = "left",
      menuStyle,
    } = this.state;

    const hasItems = items.length > 0;
    const isSelected = selected
      ? isFunction(selected)
        ? selected()
        : selected
      : undefined;

    return (
      <div
        class={classnames("elf--tools-item", {
          selected: isSelected,
          "has-items": hasItems,
        })}
        disabled={disabled}
      >
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

          {hasItems ? (
            <span class={classnames("arrow", { opened: opened })}>
              <ArrowIcon />
            </span>
          ) : undefined}
        </button>
        {opened && !disabled ? (
          <div class="menu-area" style={{ backgroundColor: "yellow" }}>
            <div class="background" data-direction={direction}></div>
            <div class="arrow"></div>
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
    if (Dom.create(e.target).hasClass("arrow")) {
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

const cssProperties = makeStyleMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true,
});

export class Tools extends UIElement {
  template() {
    const { style = {}, vertical = false } = this.props;

    const styleObject = {
      class: classnames("elf--tools", {
        vertical,
      }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeToolsItem(this.props.items)}
      </div>
    );
  }
}
