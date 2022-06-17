import { UIElement, classnames, isFunction, CLICK, IF, Dom, POINTEROVER, POINTERLEAVE } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
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
          {icon ? (
            <span class="icon">{icon}</span>
          ) : title ? (
            <span class="menu-title">{title}</span>
          ) : undefined}
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
    return <div class="elf--tools-item custom" >{this.props.render?.()}</div>;
  }
}

export class ToolsMenuItem extends ToolsItem {
  initState() {
    const { title = "", icon, selected, disabled, opened, items, direction, menuStyle } = this.props;

    return {
      title,
      icon,
      selected,
      opened,
      items,
      direction,
      disabled,
      menuStyle,
      rootClose: this.close.bind(this)
    };
  }

  template() {
    const { title = "", icon, disabled, items = [], opened = false, direction = "left", rect, menuStyle } = this.state;

    const hasItems = items.length > 0;    

    return (
      <div
        class={classnames("elf--tools-item", {
          selected: this.selected ? true : undefined,
          "has-items": hasItems,
        })}
        disabled={disabled}
      >
        <button type="button">
          {icon ? (
            <span class="icon">{icon}</span>
          ) : title ? (
            <span class="menu-title">{title}</span>
          ) : undefined}
          {hasItems ? (
            <span class={classnames("arrow", {opened: opened})}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </span>
          ) : undefined}
        </button>
        {(opened && !disabled) ? (
          <div class="menu-area">
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

  open () {

    this.setState({
      rect: this.$el.rect(),
      opened: true,
    });
  }

  close () {
    this.setState({
      opened: false,
    });
  }

  toggle () {

    if (!this.state.opened) {
      this.setState({
        rect: this.$el.rect(),
      }, false)
    }

    this.setState({
      opened: !this.state.opened,
    });
  }

  checkClickable(e) {
    const $menu = Dom.create(e.target).closest("menu-area");

    // 메뉴가 클릭 될 때는 버튼 클릭으로 인식하지 않음.
    if ($menu) return false;

    return true;
  }

  checkTriggerClick () {
    const { trigger = "click" } = this.props;

    return trigger === 'click';
  }

  checkTriggerOver () {
    return this.props.trigger === 'hover';
  }

  [POINTEROVER('$el') + IF('checkTriggerOver')] () {
    this.open();
  }

  checkNotInMenu(e) {
    const $menu = Dom.create(e.target).closest("elf--tools-item");

    // pointerout 한 최상위 target 이 현재 메뉴가 아닐 때 메뉴를 닫는다.
    if (!$menu) return true;

    // 해당 객체가 아닐 때 
    return this.$el.is($menu) === false;
  }

  [POINTERLEAVE('$el') + IF('checkTriggerOver')] (e) {
    this.close();
  }  


  [CLICK("document") + IF("checkClickable") + IF("checkNotInMenu")](e) {
    this.close();
  }

  [CLICK("$el") + IF("checkClickable") + IF('checkTriggerClick')](e) {
    if (Dom.create(e.target).hasClass("arrow")) {
      this.toggle();

      if (this.state.opened) {
        this.runCallback(this.props.onOpen, e);
      } else {
        this.runCallback(this.props.onClose, e);
      }
    } else {
      this.close();

      this.runCallback(this.props.onClick, e);
    }
  }
}

export class Tools extends UIElement {
  template() {
    const { style = {} } = this.props;

    const styleObject = {
      class: classnames("elf--tools"),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--tools-background",
          color: "--elf--tools-color",
          height: "--elf--tools-height",
        }),
      },
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeToolsItem(this.props.items)}
      </div>
    );
  }
}
