import { UIElement, isNumber } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey } from "../../utils/styleKeys";

function makeTemplates(arr) {
  if (typeof arr === "number") {
    arr = Array.from({ length: arr }, () => 1);
  } else if (Array.isArray(arr) === false) {
    arr = [arr];
  }

  return arr.map((it) => (isNumber(it) ? `${it}fr` : it)).join(" ");
}

export class Grid extends UIElement {
  template() {
    const {
      style = {},
      columns = [1],
      rows = [1],
      gap,
      columnGap,
      rowGap,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties, noneStyle } =
      convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      class: "elf--grid",

      style: {
        gridTemplateColumns: makeTemplates(columns),
        gridTemplateRows: makeTemplates(rows),
        gap,
        columnGap,
        rowGap,
        ...propertyMap({ ...style, ...styleProperties }, {}),
      },
      ...noneStyle,
    };

    return <div {...styleObject}>{content}</div>;
  }
}
