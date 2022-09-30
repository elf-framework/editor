import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--card-actions", {
  height: true,
  width: true,
  ratio: true,
  backgroundColor: true,
});

export class CardActions extends UIElement {
  template() {
    const { style = {}, align = "right", content, ...extraProps } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-actions", {
        [align]: true,
      });
    }, [align]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    return <div {...styleObject}>{content}</div>;
  }
}
