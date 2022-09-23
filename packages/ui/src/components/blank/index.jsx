import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--blank", {
  width: true,
  height: true,
  backgroundColor: true,
});

export class Blank extends UIElement {
  template() {
    const {
      style = {},
      stripe = "none",
      color = "transparent",
      content,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--blank", {
        [stripe]: true,
      });
    }, [stripe]);

    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
          backgroundColor: color,
        },
        cssProperties
      ),
      ...extraProps,
    };

    return <div {...styleObject}>{content || <span>&nbsp;</span>}</div>;
  }
}

registerComponent("blank", Blank);
registerComponent("Blank", Blank);
