import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--card", {
  borderColor: true,
  backgroundColor: true,
  padding: true,
  borderRadius: true,
  width: true,
  height: true,
  shadow: true,
});

export class Card extends UIElement {
  template() {
    const {
      orientation = "vertical",
      style = {},
      shape = "round",
      content,
      quiet = false,
      ghost = false,
      selectable = false,
      selected = false,
      as = "div",
      href = "#",
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card", {
        [shape]: true,
        [orientation]: true,
        quiet,
        ghost,
        selectable,
        selected,
        "as-link": as === "link",
      });
    }, [shape, orientation, quiet, ghost, selectable, selected, as]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style, cssProperties),
      },
      ...extraProps,
    };

    // link check
    return as === "link" ? (
      <a {...styleObject} href={href}>
        {content}
      </a>
    ) : (
      <div {...styleObject}>{content}</div>
    );
  }
}
