import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  color: "--elf--divider-color",
  margin: "--elf--divider-margin",
};

export class Divider extends UIElement {
  template() {
    const {
      style = {},
      variant = "default",
      size = "small",
      margin = "10px 0",
      orientation = "horizontal",
    } = this.props;
    const styleObject = {
      class: classnames("elf--divider", {
        [size]: true,
        [variant]: true,
        [orientation]: true,
      }),
      style: {
        ...propertyMap(
          {
            ...style,
            margin,
          },
          cssProperties
        ),
      },
    };

    return (
      <div {...styleObject}>
        <div className="elf--divider-inner"></div>
      </div>
    );
  }
}
