import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--radio", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export class Radio extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      content,
      name,
      checked = false,
      onChange,
      size = "medium",
      variant = "default",
    } = this.props;

    const localClass = useMemo(() => {
      return classnames([
        "elf--radio",
        {
          disabled,
          [size]: true,
          [variant]: true,
        },
      ]);
    }, [disabled, size, variant]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <label>
          <input
            ref="$input"
            type="radio"
            {...{
              value,
              name,
              disabled: disabled ? "disabled" : undefined,
              checked: checked ? "checked" : undefined,
            }}
            onChange={(e) => onChange?.(e, value)}
          />
          {content}
        </label>
      </div>
    );
  }
}

registerComponent("radio", Radio);
registerComponent("Radio", Radio);
