import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Ghost } from "../ghost";

const cssProperties = makeCssVariablePrefixMap("--elf--card-preview", {
  height: true,
  width: true,
  ratio: true,
  backgroundColor: true,
});

export class CardPreview extends UIElement {
  template() {
    const {
      style = {},
      content,
      ghost = false,
      ratio = "1:1",
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-preview", {
        ghost,
      });
    }, [ghost]);

    const [l, p] = ratio.split(":").map((it) => parseInt(it, 10));

    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
          ratio: p / l,
        },
        cssProperties
      ),
      ...extraProps,
    };

    return <div {...styleObject}>{ghost ? <Ghost animated /> : content}</div>;
  }
}
