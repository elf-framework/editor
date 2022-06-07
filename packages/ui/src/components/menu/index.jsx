import { BIND, CLICK, UIElement, classnames, IF, isFunction } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";

function makeMenuItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type}${index}`;

    if (it.type === MenuItemType.GROUP) {
      return <GroupMenuItem ref={ref} {...it} />;
    } else if (it.type === MenuItemType.DIVIDER) {
      return <DividerMenuItem ref={ref} {...it} />;
    }

    return <MenuItem ref={ref} {...it} />;
  });
}

const MenuItemType = {
  DIVIDER: "divider",
  GROUP: "group",
  MENU: "menu",
  ITEM: "item",
};

function DividerMenuItem({ dashed = false }) {
  return <li class="divider" dashed={dashed} />;
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
      selected,
    } = this.props;

    return {
      title,
      hover,
      shortcut,
      icon,
      items,
      selected,
    };
  }

  template() {
    const { title = "", shortcut, icon, items = [] } = this.state;

    return (
      <li>
        {title ? <div class="menu-title">{title}</div> : undefined}
        {shortcut ? <div class="shortcut">{shortcut}</div> : undefined}
        {icon ? <div class="icon">{icon}</div> : undefined}

        {items.length > 0 ? <Menu items={items} /> : undefined}
      </li>
    );
  }

  checkClickable() {
    const { type, items = [] } = this.props;
    return type === MenuItemType.ITEM && items.length === 0;
  }

  [CLICK("$el") + IF("checkClickable")](e) {
    const { onClick, onSelect } = this.props;

    if (isFunction(onSelect)) {
      this.setSelected(!this.selected);
      onSelect(e, this);
    } else if (isFunction(onClick)) {
      onClick(e, this);
    }
  }

  [BIND("$el")]() {
    return {
      class: classnames({
        hover: this.state.hover,
        selected: this.state.selected,
      }),
    };
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
    return (
      <menu class="elf--menu">{makeMenuItem(this.props.items || [])}</menu>
    );
  }

  [BIND("$el")]() {
    const { style = {} } = this.props;
    return {
      style: {
        ...propertyMap(style, {
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
          left: "--elf--menu-direction-left",
        }),
      },
    };
  }
}