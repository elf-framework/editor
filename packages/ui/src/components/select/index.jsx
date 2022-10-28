import { UIElement, classnames, useMemo, useEffect } from "@elf-framework/sapa";

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

export class Select extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      options = [],
      onChange,
      size = "medium",
      variant = "default",
    } = this.props;

    const localClass = useMemo(() => {
      return classnames([
        "elf--select",
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

    useEffect(() => {
      this.refs.$select.value = value;
    }, [value]);

    return (
      <div {...styleObject}>
        <select
          ref="$select"
          onChange={(e) => onChange && onChange(e.target.value)}
        >
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    );
  }
}

registerComponent("select", Select);
registerComponent("Select", Select);
