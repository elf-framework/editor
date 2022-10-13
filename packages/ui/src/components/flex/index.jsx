import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";

export class Flex extends UIElement {
  template() {
    const {
      style = {},
      class: className = "",
      content,
      stack,
      wrap = false,
      sameWidth = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--flex", className, {
        stack,
        wrap,
        "same-width": sameWidth,
      });
    }, [className, stack, wrap, sameWidth]);

    const styleObject = {
      class: localClass,

      style: {
        ...propertyMap(style, {}),
      },
    };

    return <div {...styleObject}>{content}</div>;
  }
}

registerComponent("flex", Flex);
registerComponent("Flex", Flex);
