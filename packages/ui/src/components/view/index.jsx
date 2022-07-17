import { UIElement } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey } from "../../utils/styleKeys";

export class View extends UIElement {
  template() {
    const { as = "div", style = {}, content, ...extraStyle } = this.props;

    const { style: styleProperties, noneStyle } =
      convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      style: propertyMap({ ...style, ...styleProperties }, {}),
      ...noneStyle,
    };

    // eslint-disable-next-line no-undef
    return createElementJsx(as, styleObject, content);
  }
}
