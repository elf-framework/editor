import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  borderColor: "--elf--radio-border-color",
  backgroundColor: "--elf--radio-background",
  disabledColor: "--elf--radio-disabled-color",
  color: "--elf--radio-color",
  fontSize: "--elf--radio-font-size",
  fontWeight: "--elf--radio-font-weight",
  height: "--elf--radio-height",
  padding: "--elf--radio-padding",
  borderRadius: "--elf--radio-border-radius",
};

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
    } = this.props;

    const styleObject = {
      class: classnames([
        "elf--radio",
        {
          disabled,
        },
      ]),
      style: {
        ...propertyMap(style, cssProperties),
      },
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

export class RadioGroup extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      name,
      value,
      onChange,
      content,
      contentChildren,
    } = this.props;

    const styleObject = {
      class: classnames(["elf--radio-group"]),
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        {contentChildren.map((it, index) => {
          return (
            <Radio
              ref={`$${index}`}
              name={name}
              value={it.props.value}
              onChange={(e, v) => {
                this.setState({ value: v }, false);
                onChange(e, v);
              }}
              checked={it.props.value === value}
              disabled={disabled}
            >
              {it.props.content}
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
