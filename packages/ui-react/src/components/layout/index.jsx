import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Layout extends UIElement {
  template() {
    const { style = {}, content, wrap = false } = this.props;

    const styleObject = {
      class: classnames("elf--layout", {
        stack: this.props.stack,
        wrap: wrap,
      }),

      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--layout-background-color",
          gap: "--elf--layout-gap",
        }),
      },
    };

    return <div {...styleObject}>{content}</div>;
  }
}