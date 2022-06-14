import {
  CLICK,
  UIElement,
  classnames,
  IF,
  isFunction,
  PREVENT,
  STOP,
  isString,
} from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";


const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
};

function makeMenuItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    if (isString(it) && it === "-") {
      return <DividerMenuItem ref={ref} />;
    } else if (it.type === MenuItemType.CUSTOM) {
      return <CustomMenuItem ref={ref} {...it} />;
    } else if (it.type === MenuItemType.GROUP) {
      return <GroupMenuItem ref={ref} {...it} />;
    } else if (it.type === MenuItemType.DIVIDER) {
      return <DividerMenuItem ref={ref} {...it} />;
    }

    return <MenuItem ref={ref} {...it} />;
  });
}


function DividerMenuItem({ dashed = false }) {
  return <li class="divider" dashed={dashed} />;
}

function CustomMenuItem({ render }) {
  return <li class="custom">{render?.(this)}</li>;
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
      selectable,
      selected,
      selectedIcon = "✓",
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
    };
  }

  template() {
    const {
      title = "",
      shortcut,
      icon,
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
    } = this.state;

    return (
      <li
        class={classnames({
          hover,
        })}
      >
        {selectable ? (
          <span class="selected-icon">
            {selected ? selectedIcon : undefined}
          </span>
        ) : null}
        {title ? <div class="menu-title">{title}</div> : undefined}
        {shortcut ? <div class="shortcut">{shortcut}</div> : undefined}
        {icon ? <div class="icon">{icon}</div> : undefined}

        {items.length > 0 ? <Menu items={items} /> : undefined}
      </li>
    );
  }

  checkClickable() {
    const { type = MenuItemType.ITEM, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }

  [CLICK("$el") + IF("checkClickable") + PREVENT + STOP](e) {
    const { selectable = false, onClick } = this.props;

    if (selectable) {
      this.setSelected(!this.selected);
    }

    if (isFunction(onClick)) {
      onClick(e, this);
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

export class Menu extends UIElement {

  template() {
    const { style = {}, type = "menu", x = 0, y = 0, direction = "left" } = this.props;

    let itemStyle = { ...style };
    if (x !== 0) itemStyle = { ...itemStyle, left: x + "px" };
    if (y !== 0) itemStyle = { ...itemStyle, top: y + "px" };

    const styleObject = {
      class: classnames("elf--menu", {
        "elf--menu-contextmenu": type === "contextmenu",
        "left": direction === "left",
        "center": direction === "center",
        "right": direction === "right",
      }),
      style: {
        ...propertyMap(itemStyle, {
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
          sectionTitleBackgroundColor:
            "--elf--menu-section-title-background-color",
          dividerColor: "--elf--menu-divider-color",
          directionLeft: "--elf--menu-direction-left",
        }),
      },
    };

    return (
      <menu {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeMenuItem(this.props.items || [])}
      </menu>
    );
  }
}
