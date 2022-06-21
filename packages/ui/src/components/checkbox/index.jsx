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

  get checked()  {
    return this.refs.$input.checked();
  }

  get value() {
    return this.props.value;
  }
}

export class CheckboxGroup extends UIElement {

  initState() {
    return {
      value: this.props.value || [],
    };
  }

  template() {
    const { disabled, style = {}, name, value, options = [], onChange, contentChildren } = this.props;

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
        {options.map((it, index) => {
          return (
            <Checkbox
              ref={`$${index}`}
              value={it.value}
              onChange={(e, v) => {
                onChange(e, this.getValues());
              }}
              checked={value.includes(it.value)}
              disabled={disabled}
            >
              {it.label}
            </Checkbox>
          );
        })}
      </div>
    );
  }

  getValues() {
    const values = []
    this.eachChildren(it => {
      if (it.checked) {
        values.push(it.value);
      }
    })

    return values;
  }

  get disabled () {
    return this.props.disabled;
  }

  get value() {
    return this.getValues();
  }

  set value(values = []) {
    this.setState({ values });
  }
}