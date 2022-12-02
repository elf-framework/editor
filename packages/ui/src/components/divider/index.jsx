import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

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

    const localClass = useMemo(() => {
      return classnames("elf--divider", {
        [size]: true,
        [variant]: true,
        [orientation]: true,
      });
    }, [size, variant, orientation]);

    const styleObject = {
      class: localClass,
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
