import { classnames, UIElement } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey } from "../../utils/styleKeys";

export class View extends UIElement {
  template() {
    const {
      as = "div",
      id,
      class: className = "",
      style = {},
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties, noneStyle } =
      convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      class: classnames(className),
      id,
      style: propertyMap({ ...style, ...styleProperties }, {}),
      ...noneStyle,
    };

    Object.keys(styleObject).forEach((key) => {
      if (styleObject[key] === undefined) {
        delete styleObject[key];
      }
    });

    // eslint-disable-next-line no-undef
    return createElementJsx(as, styleObject, content);
  }
}
