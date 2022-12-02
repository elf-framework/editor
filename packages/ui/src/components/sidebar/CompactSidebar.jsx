import { classnames, isFunction, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Blank } from "../blank";
import { Divider } from "../divider";
import { FixedTooltip } from "../tooltip/FixedTooltip";

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

    if (it.type === "section") {
      return <SidebarItem depth={depth} title={it.title} icon={it.icon} />;
    }

    return (
      <LinkSidebarItem
        link={it.link}
        title={it.title}
        target={it.target}
        items={it.items}
        depth={depth}
        icon={it.icon}
        tooltip={it.tooltip}
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
  onClick,
  tooltip,
  hasSelected,
}) {
  const sidebarItem = (
    <div
      class={classnames("elf--sidebar-item sidebar-link", {
        selected: isFunction(hasSelected)
          ? hasSelected({ title, icon, link, depth })
          : selected,
      })}
    >
      <div class="item-title">
        <span class="selected-area">
          {link ? (
            <a class="icon" href={link} target={target}>
              {icon}
            </a>
          ) : (
            <div class="icon" onClick={onClick}>
              {icon}
            </div>
          )}
        </span>
      </div>
    </div>
  );

  if (typeof tooltip === "string") {
    tooltip = { message: tooltip };
  }

  return tooltip ? (
    <FixedTooltip {...tooltip} placement="right" variant="dark" show>
      {sidebarItem}
    </FixedTooltip>
  ) : (
    sidebarItem
  );
}

function SidebarItem({ icon }) {
  return (
    <div class="elf--sidebar-item section-title">
      <div class="item-title">
        {icon ? <span class="icon">{icon}</span> : undefined}
      </div>
    </div>
  );
}

export function CompactSidebar(props) {
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
    return classnames("elf--sidebar compact-sidebar", {
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
