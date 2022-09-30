import { classnames, isString, UIElement, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Tooltip } from "../tooltip";

const cssProperties = makeCssVariablePrefixMap("--elf--breadcrumbs", {});

const itemCssProperties = makeCssVariablePrefixMap("--elf--breadcrumbs-item", {
  color: true,
});

function BreadcrumbsItem({
  title,
  selected = false,
  multiline,
  style = {},
  href = "#",
  onClick,
  tooltip,
}) {
  if (tooltip) {
    if (isString(tooltip)) {
      tooltip = {
        message: tooltip,
        placement: "top",
        trigger: "hover",
      };
    }
  }

  const localClass = useMemo(() => {
    return classnames("elf--breadcrumbs-item", { selected, multiline });
  }, [selected, multiline]);

  return (
    <span class={localClass} style={propertyMap(style, itemCssProperties)}>
      {tooltip ? (
        <Tooltip ref="$tooltip" {...tooltip}>
          <a
            href={href}
            onClick={onClick}
            onFocus={() => {
              if (tooltip.trigger.includes("focus")) {
                this.children.$tooltip.show();
              }
            }}
            onBlur={() => {
              if (tooltip.trigger.includes("focus")) {
                this.children.$tooltip.hide();
              }
            }}
          >
            {title}
          </a>
        </Tooltip>
      ) : (
        <a href={href} onClick={onClick}>
          {title}
        </a>
      )}
    </span>
  );
}

function BreadcrumbsTitleItem({ title, style = {} }) {
  return (
    <span class="elf--breadcrumbs-title-item" style={style}>
      {title}
    </span>
  );
}

export class Breadcrumbs extends UIElement {
  template() {
    const { style = {}, items = [], separator = "〉" } = this.props;

    const styleObject = {
      class: "elf--breadcrumbs",
      style: propertyMap(style, cssProperties),
    };

    // single line items
    const renderItems = items.filter((it) => !(it?.selected && it?.multiline));

    // multi line items
    const renderMultiItems = items.filter(
      (it) => it?.selected && it?.multiline
    );

    const length = renderItems.length;

    return (
      <div {...styleObject}>
        <div class="elf--breadcrumbs-items">
          {renderItems.map((it, index) => {
            if (typeof it === "string") {
              it = { title: it };
            }
            const item = <BreadcrumbsItem {...it} />;

            if (index < length - 1 || renderMultiItems.length) {
              return [item, <span class="separator">{separator}</span>];
            }

            return item;
          })}
        </div>
        {renderMultiItems.length ? (
          <div class="elf--breadcrumbs-content">
            {renderMultiItems.map((it) => {
              return <BreadcrumbsTitleItem {...it} />;
            })}
          </div>
        ) : undefined}
      </div>
    );
  }
}
