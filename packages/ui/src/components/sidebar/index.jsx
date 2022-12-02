import { classnames, isFunction, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Blank } from "../blank";
import { Divider } from "../divider";

const cssProperties = makeCssVariablePrefixMap("--elf--sidebar", {
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

function makeSidebarItem(list, depth = 0, hasSelected) {
  return list.map((it) => {
    if (it === "-") {
      it = { type: "divider" };
    }

    if (it === "") {
      it = { type: "blank" };
    }

    if (typeof it === "string") {
      it = { type: "section", title: it };
    }

    if (it.type === "divider") {
      return <Divider style={it.style} />;
    }

    if (it.type === "blank") {
      return <Blank style={it.style} />;
    }

    if (it.type === "custom") {
      return (
        <CustomSidebarItem
          {...it}
          depth={depth}
          hasSelected={hasSelected}
          selected={hasSelected?.(it) || it?.selected}
        />
      );
    }

    if (it.type === "section") {
      return <SidebarItem depth={depth} title={it.title} />;
    }

    return (
      <LinkSidebarItem
        link={it.link}
        title={it.title}
        target={it.target}
        items={it.items}
        depth={depth}
        icon={it.icon}
        onClick={it.onClick}
        hasSelected={hasSelected}
        selected={hasSelected?.(it) || it?.selected}
      />
    );
  });
}

function LinkSidebarItem({
  link = "#",
  icon,
  target,
  title,
  selected,
  depth = 0,
  items = [],
  onClick,
  hasSelected,
}) {
  return (
    <div
      class={classnames("elf--sidebar-item sidebar-link", {
        selected: isFunction(hasSelected)
          ? hasSelected({ title, icon, link, depth })
          : selected,
      })}
    >
      <div class="item-title">
        <span class="depth" data-depth={depth}></span>
        {icon ? <span class="icon">{icon}</span> : undefined}
        {!items.length && link ? (
          <a href={link} target={target}>
            {title}
          </a>
        ) : (
          <div onClick={onClick}>{title}</div>
        )}
      </div>

      <div class="items">
        {items.length
          ? makeSidebarItem(items, depth + 1, hasSelected)
          : undefined}
      </div>
    </div>
  );
}

function SidebarItem({ title, depth, icon }) {
  return (
    <div class="elf--sidebar-item section-title">
      <div class="item-title">
        <span class="depth" data-depth={depth}></span>
        {icon ? <span class="icon">{icon}</span> : undefined}
        <div class="title">{title}</div>
      </div>
    </div>
  );
}

function CustomSidebarItem(props) {
  const { render, depth, icon, hasSelected, selected } = props;
  return (
    <div
      class={classnames("elf--sidebar-item custom", {
        selected: isFunction(hasSelected) ? hasSelected(props) : selected,
      })}
    >
      <div class="item-title">
        <span class="depth" data-depth={depth}></span>
        {icon ? <span class="icon">{icon}</span> : undefined}
        <div class="title">{render(props)}</div>
      </div>
    </div>
  );
}

export function Sidebar(props) {
  let {
    style = {},
    direction = "left",
    variant = "light",
    compact = false,
    items = [],
    header,
    footer,
    hasSelected,
  } = props;

  let itemStyle = { ...style };

  const localClass = useMemo(() => {
    return classnames("elf--sidebar", {
      [variant]: true,
      compact,
    });
  }, [variant, compact]);

  const styleObject = {
    "data-direction": direction,
    class: localClass,
    style: propertyMap(itemStyle, cssProperties),
  };

  return (
    <menu {...styleObject}>
      {header ? <div class="header">{header}</div> : undefined}
      <div class="body">{makeSidebarItem(items, 0, hasSelected)}</div>
      {footer ? <div class="footer">{footer}</div> : undefined}
    </menu>
  );
}

registerComponent("sidebar", Sidebar);
