import { UIElement, isNumber, classnames } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { splitStyleKeyAndNoneStyleKey } from "../../utils/styleKeys";

function makeTemplates(arr) {
  if (typeof arr === "number") {
    arr = Array.from({ length: arr }, () => 1);
  } else if (Array.isArray(arr) === false) {
    arr = [arr];
  }

  if (arr.length === 0) {
    return undefined;
  }

  return arr.map((it) => (isNumber(it) ? `${it}fr` : it)).join(" ");
}

export class Grid extends UIElement {
  template() {
    const {
      class: className = "",
      style = {},
      columns = [],
      rows = [],
      gap,
      columnGap,
      rowGap,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties, noneStyle } =
      splitStyleKeyAndNoneStyleKey(extraStyle);

    const styleObject = {
      class: classnames("elf--grid", className),

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

    // 필요없는 스타일 삭제
    Object.keys(styleObject.style).forEach((key) => {
      if (styleObject.style[key] === undefined) {
        delete styleObject.style[key];
      }
    });

    return <div {...styleObject}>{content}</div>;
  }
}

registerComponent("grid", Grid);
registerComponent("Grid", Grid);
