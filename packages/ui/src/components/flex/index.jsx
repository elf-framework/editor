import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Flex extends UIElement {
  template() {
    const {
      style = {},
      class: className = "",
      content,
      stack,
      wrap = false,
    } = this.props;

    const styleObject = {
      class: classnames("elf--flex", className, {
        stack: stack,
        wrap: wrap,
      }),

      style: {
        ...propertyMap(style, {}),
      },
    };

    return <div {...styleObject}>{content}</div>;
  }
}
