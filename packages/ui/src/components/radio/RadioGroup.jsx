import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

import { Radio } from ".";

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

export class RadioGroup extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      name,
      value,
      options = [],
      onChange,
      direction = "horizontal",
      size = "medium",
      variant = "default",
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--radio-group", {
        [direction]: true,
      });
    }, [direction]);

    const styleObject = {
      class: localClass,
      disabled: disabled ? "disabled" : undefined,
      style: propertyMap(style, cssProperties),
    };

    const radioName = name || "name-" + this.id;

    return (
      <div {...styleObject}>
        {options.map((it, index) => {
          const checked = it.value === value;
          return (
            <Radio
              ref={`$${index}`}
              name={radioName}
              value={it.value}
              onChange={(e, v) => {
                this.setState({ value: v }, false);
                onChange(e, v);
              }}
              checked={checked}
              disabled={disabled}
              size={size}
              variant={variant}
            >
              {it.label}
            </Radio>
          );
        })}
      </div>
    );
  }

  get value() {
    return this.state.value || this.props.value;
  }

  set value(value) {
    this.setState({ value });
  }
}

registerComponent("RadioGroup", RadioGroup);
registerComponent("radio-group", RadioGroup);
registerComponent("radiogroup", RadioGroup);
