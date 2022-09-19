import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Divider } from "../divider";

const cssProperties = makeCssVariablePrefixMap("--elf--card-footer", {
  textAlign: true,
});

export class CardFooter extends UIElement {
  template() {
    const {
      style = {},

      content,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-footer");
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

    return (
      <div {...styleObject}>
        <Divider margin={0} />
        <div class="content-area">{content}</div>
      </div>
    );
  }
}
