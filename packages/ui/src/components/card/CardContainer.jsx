import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--card-container", {
  height: true,
  ratio: true,
  backgroundColor: true,
});

export class CardContainer extends UIElement {
  template() {
    const { style = {}, content, ...extraProps } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-container", {});
    }, []);

    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
        },
        cssProperties
      ),
      ...extraProps,
    };

    return <div {...styleObject}>{content}</div>;
  }
}
