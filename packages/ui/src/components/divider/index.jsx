import { UIElement, classnames } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--divider", {
  color: true,
  margin: true,
  height: true,
  borderStyle: true,
});

export class Divider extends UIElement {
  template() {
    const {
      style = {},
      variant = "default",
      size = "small",
      margin = "10px",
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

registerComponent("divider", Divider);
registerComponent("Divider", Divider);
