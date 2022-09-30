import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--ghost", {
  width: true,
  height: true,
  animationName: true,
  animationDuration: true,
});

export class Ghost extends UIElement {
  template() {
    const { style = {}, animated = false } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--ghost", {
        animated,
      });
    }, [animated]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(
          {
            ...style,
          },
          cssProperties
        ),
      },
    };

    return <div {...styleObject}>&nbsp;</div>;
  }
}

registerComponent("ghost", Ghost);
registerComponent("Ghost", Ghost);
