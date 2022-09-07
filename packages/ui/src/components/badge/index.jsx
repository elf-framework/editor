import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--badge", {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderRadius: true,
  fontSize: true,
  offset: true,
});

export class Badge extends UIElement {
  template() {
    const {
      style = {},
      content,
      variant = "default",
      filled = false,
      disabled = false,
      readOnly = false,
      size = "small",
      fixed = false,
      placement = "none",
    } = this.props;

    const localClass = useMemo(() => {
      const placementClass = fixed ? `placement-${placement}` : "";

      return classnames(
        "elf--badge",
        {
          [variant]: true,
          filled,
          disabled,
          readonly: readOnly,
          [size]: true,
          fixed,
        },
        placementClass
      );
    }, [variant, filled, disabled, readOnly, size, fixed, placement]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <label>{content}</label>
      </div>
    );
  }
}

registerComponent("badge", Badge);
registerComponent("Badge", Badge);
