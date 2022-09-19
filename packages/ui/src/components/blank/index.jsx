import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--blank", {
  width: true,
  height: true,
});

export class Blank extends UIElement {
  template() {
    const { style = {}, ...extraProps } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--blank", {});
    }, []);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    return <div {...styleObject}>&nbsp;</div>;
  }
}

registerComponent("blank", Blank);
registerComponent("Blank", Blank);
