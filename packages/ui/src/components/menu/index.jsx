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
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const MenuItemType = {
  DIVIDER: "divider",
  SECTION: "section",
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
  LINK: "link",
};

function makeMenuItem(items = [], variant, rootClose) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    if (isString(it) && it === "-") {
      return (
        <DividerMenuItem ref={ref} variant={variant} rootClose={rootClose} />
      );
    } else if (isFunction(it)) {
      return (
        <CustomMenuItem
          variant={variant}
          ref={`custom${index}`}
          render={it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.CUSTOM) {
      return (
        <CustomMenuItem
          variant={variant}
          ref={ref}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.LINK) {
      return (
        <LinkMenuItem
          variant={variant}
          ref={ref}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.SECTION) {
      return (
        <SectionMenuItem
          variant={variant}
          ref={ref}
          {...it}
          rootClose={rootClose}
        />
      );
    } else if (it.type === MenuItemType.DIVIDER) {
      return (
        <DividerMenuItem
          variant={variant}
          ref={ref}
          {...it}
          rootClose={rootClose}
        />
      );
    }

    return (
      <MenuItem ref={ref} variant={variant} {...it} rootClose={rootClose} />
    );
  });
}

function DividerMenuItem({ dashed = false }) {
  return <li class="elf--divider" dashed={dashed} />;
}

function CustomMenuItem({ render, rootClose }) {
  return <li class="custom">{render?.({ rootClose })}</li>;
}

function LinkMenuItem({ rootClose, title, link }) {
  return (
    <li class="link">
      <a href={link} onClick={rootClose}>
        {title}
      </a>
    </li>
  );
}

function SectionMenuItem({ title = "" }) {
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
      description,
      variant,
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
      description,
      variant,
    };
  }

  template() {
    const {
      title = "",
      shortcut,
      icon,
      expandIcon = "▶",
      items = [],
      hover,
      selected,
      selectable,
      selectedIcon,
      disabled,
      rootClose,
      description,
      variant,
      show = false,
    } = this.state;

    const hasItems = items.length > 0;

    const selectedValue = isFunction(selected) ? selected() : selected;

    const localClass = useMemo(() => {
      return classnames({
        hover,
      });
    }, [hover]);

    return (
      <li class={localClass} disabled={disabled ? true : undefined}>
        <div class="menu-item-content">
          {selectable ? (
            <span class="selected-icon">
              {selectedValue ? selectedIcon : undefined}
            </span>
          ) : null}

          {icon ? <div class="icon">{icon}</div> : undefined}
          {title ? <div class="menu-title">{title}</div> : undefined}
          {shortcut || hasItems ? (
            <div class="value-area">
              {shortcut ? <div class="shortcut">{shortcut}</div> : undefined}
              {hasItems ? <div class="icon">{expandIcon}</div> : undefined}
            </div>
          ) : undefined}
        </div>
        {description ? (
          <div class="menu-item-description">{description}</div>
        ) : undefined}

        {items.length > 0 || show ? (
          <Menu items={items} variant={variant} rootClose={rootClose} />
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

const cssProperties = makeCssVariablePrefixMap("--elf--menu", {
  left: true,
  top: true,
  backgroundColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  borderColor: true,
  boxShadow: true,
  width: true,
  maxWidth: true,
  sectionTitleColor: true,
  sectionTitleBackgroundColor: true,
  dividerColor: true,
  directionLeft: true,
  itemPadding: true,
});

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
      variant = "light",
      compact = false,
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

    const localClass = useMemo(() => {
      return classnames("elf--menu", {
        [type]: true,
        [variant]: true,
        compact,
      });
    }, [type, variant, compact]);

    const styleObject = {
      "data-direction": direction,
      class: localClass,
      style: propertyMap(itemStyle, cssProperties),
    };

    return (
      <menu {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeMenuItem(items, variant, rootClose)}
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

registerComponent("Menu", Menu);
registerComponent("MenuItem", MenuItem);
registerComponent("SectionMenuItem", SectionMenuItem);
registerComponent("DividerMenuItem", DividerMenuItem);

registerComponent("menu", Menu);
registerComponent("menuitem", MenuItem);
registerComponent("sectionmenuitem", SectionMenuItem);
registerComponent("dividermenuitem", DividerMenuItem);

registerComponent("menu-item", MenuItem);
registerComponent("section-menu-item", SectionMenuItem);
registerComponent("divider-menu-item", DividerMenuItem);
