import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--avatar", {
  backgroundColor: true,
  backgroundImage: true,
});

export class Avatar extends UIElement {
  template() {
    const {
      style = {},
      content,
      size = "medium",
      shape = "circle",
      variant = "default",
      disabled = false,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--avatar", {
        [`size-${size}`]: true,
        [shape]: true,
        [variant]: true,
        disabled,
      });
    }, [shape, size, variant, disabled]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    return (
      <div {...styleObject}>
        <div class="elf--avatar-inner">{content}</div>
      </div>
    );
  }
}
