import {
  CLICK,
  UIElement,
  classnames,
  IF,
  isFunction,
  PREVENT,
  STOP,
  isString,
  OBSERVER,
  PARAMS,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
};

function makeMenuItem(items = [], rootClose) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    if (isString(it) && it === "-") {
      return <DividerMenuItem ref={ref} rootClose={rootClose} />;
    } else if (isFunction(it)) {
      return (
        <CustomMenuItem
          ref={`custom${index}`}
          render={it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.CUSTOM) {
      return <CustomMenuItem ref={ref} {...it} rootClose={rootClose} />;
    } else if (it.type === MenuItemType.GROUP) {
      return <GroupMenuItem ref={ref} {...it} rootClose={rootClose} />;
    } else if (it.type === MenuItemType.DIVIDER) {
      return <DividerMenuItem ref={ref} {...it} rootClose={rootClose} />;
    }

    return <MenuItem ref={ref} {...it} rootClose={rootClose} />;
  });
}

function DividerMenuItem({ dashed = false }) {
  return <li class="divider" dashed={dashed} />;
}

function CustomMenuItem({ render, rootClose }) {
  return <li class="custom">{render?.({ rootClose })}</li>;
}

function GroupMenuItem({ title = "" }) {
  return <li class="section-title">{title}</li>;
}

class MenuItem extends UIElement {
  initState() {
    const {
      title = "",
      hover = false,
      shortcut,
      icon,
      items = [],
      disabled = false,
      selectable,
      selected,
      selectedIcon = "✓",
      closable = true,
      rootClose,
    } = this.props;

    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selectable,
      selected,
      selectedIcon,
      disabled,
      closable,
      rootClose,
    };
  }

  template() {
    const {
      title = "",
      shortcut,
      icon = "▶",
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
      disabled,
      rootClose,
    } = this.state;

    const hasItems = items.length > 0;

    const selectedValue = isFunction(selected) ? selected() : selected;

    return (
      <li
        class={classnames({
          hover,
        })}
        disabled={disabled ? true : undefined}
      >
        {selectable ? (
          <span class="selected-icon">
            {selectedValue ? selectedIcon : undefined}
          </span>
        ) : null}
        {title ? <div class="menu-title">{title}</div> : undefined}
        {shortcut ? <div class="shortcut">{shortcut}</div> : undefined}
        {icon && hasItems ? <div class="icon">{icon}</div> : undefined}

        {items.length > 0 ? (
          <Menu items={items} rootClose={rootClose} />
        ) : undefined}
      </li>
    );
  }

  checkClickable() {
    if (this.state.disabled) {
      return false;
    }

    const { type = MenuItemType.ITEM, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }

  [CLICK("$el") + IF("checkClickable") + PREVENT + STOP](e) {
    const { selectable = false, onClick, closable = true } = this.props;

    if (selectable) {
      this.setSelected(!this.selected);
    }

    if (isFunction(onClick)) {
      onClick(e, this);
    }

    if (closable) {
      this.props.rootClose?.();
    }
  }

  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected,
    });
  }

  get selected() {
    return this.state.selected;
  }
}

const cssProperties = {
  left: "--elf--menu-left",
  top: "--elf--menu-top",
  backgroundColor: "--elf--menu-background",
  color: "--elf--menu-color",
  fontSize: "--elf--menu-font-size",
  fontWeight: "--elf--menu-font-weight",
  height: "--elf--menu-height",
  padding: "--elf--menu-padding",
  borderRadius: "--elf--menu-border-radius",
  borderColor: "--elf--menu-border-color",
  boxShadow: "--elf--menu-box-shadow",
  width: "--elf--menu-width",
  maxWidth: "--elf--menu-max-width",
  sectionTitleColor: "--elf--menu-section-title-color",
  sectionTitleBackgroundColor: "--elf--menu-section-title-background-color",
  dividerColor: "--elf--menu-divider-color",
  directionLeft: "--elf--menu-direction-left",
  itemPadding: "--elf--menu-item-padding",
};

export class Menu extends UIElement {
  initState() {
    return {
      intersectionLeft: 0,
    };
  }

  template() {
    let {
      style = {},
      type = "menu",
      x = 0,
      y = 0,
      direction = "left",
      items = [],
      rootClose,
      autoPosition = false,
    } = this.props;

    let itemStyle = { ...style };
    if (x !== 0) itemStyle = { ...itemStyle, left: x };
    if (y !== 0) itemStyle = { ...itemStyle, top: y };

    if (autoPosition) {
      const index = items.findIndex((it) => {
        return it.selectable && it.selected;
      });

      itemStyle = { ...itemStyle, top: -1 * (index * 24 + 8) };
    }

    const styleObject = {
      "data-direction": direction,
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu",
      }),
      style: {
        ...propertyMap(itemStyle, cssProperties),
      },
    };

    return (
      <menu {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeMenuItem(items, rootClose)}
      </menu>
    );
  }

  [OBSERVER("intersection") +
    PARAMS({
      root: document.body,
    })](intersects = []) {
    const item = intersects.find(
      (it) => it.isIntersecting && it.intersectionRatio < 1
    );

    if (item) {
      const { left: bLeft, right: bRight } = item.boundingClientRect;
      const { left: iLeft, right: iRight } = item.intersectionRect;

      let direction = "left";

      if (iRight != bRight && iLeft != bLeft) {
        direction = "center";
      } else if (iRight != bRight) {
        direction = "right";
      }

      this.$el.attr("data-direction", direction);
    }
  }
}
