import { classnames, isString, UIElement } from "@elf-framework/sapa";

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

  return (
    <span
      class={classnames("elf--breadcrumbs-item", { selected, multiline })}
      style={propertyMap(style, itemCssProperties)}
    >
      {tooltip ? (
        <Tooltip ref="$tooltip" {...tooltip}>
          <a
            href={href}
            onClick={onClick}
            onFocus={() => {
              this.children.$tooltip.show();
            }}
            onBlur={() => {
              this.children.$tooltip.hide();
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

    const renderItems = items.filter((it) => !(it?.selected && it?.multiline));
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
