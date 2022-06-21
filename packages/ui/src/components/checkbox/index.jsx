import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  borderColor: "--elf--checkbox-border-color",
  backgroundColor: "--elf--checkbox-background",
  disabledColor: "--elf--checkbox-disabled-color",
  color: "--elf--checkbox-color",
  fontSize: "--elf--checkbox-font-size",
  fontWeight: "--elf--checkbox-font-weight",
  height: "--elf--checkbox-height",
  padding: "--elf--checkbox-padding",
  borderRadius: "--elf--checkbox-border-radius",
}



export class Checkbox extends UIElement {

  template() {
    const { disabled, style = {}, value, content, name, checked = false, onChange } = this.props;

    const styleObject = {
      class: classnames([
        "elf--checkbox",
        {
          disabled
        }
      ]),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    console.log(checked);

    return (
      <div {...styleObject}>
        <label>
          <input ref="$input" type="checkbox" {...{
            value,
            name,
            disabled: disabled ? "disabled" : undefined,
            checked: checked ? "checked" : undefined,
          }} onChange={(e) => onChange?.(e, value)} />
          {content} 
        </label>
      </div>
    );
  }
}

export class CheckboxGroup extends UIElement {

  template() {
    const { disabled, style = {}, name, value, onChange, contentChildren } = this.props;

    const styleObject = {
      class: classnames([
        "elf--check-group",
      ]),
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
              content={it.props.content}
              checked={it.props.value === value}
              disabled={disabled}
            />
          );
        })}
      </div>
    );
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({ value });
  }
}