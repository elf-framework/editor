import classNames from "classnames";
import { useCallback, useState } from "react";

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
};

interface CheckboxProps {
  disabled?: boolean;
  style?: React.CSSProperties;
  value: any;
  children: React.ReactNode;
  name?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Checkbox(props: CheckboxProps) {
  const {
    disabled,
    style = {},
    value,
    children,
    name,
    checked,
    onChange,
  } = props;

  const styleObject = {
    className: classNames([
      "elf--checkbox",
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
          type="checkbox"
          value={value}
          name={name}
          disabled={disabled}
          checked={checked}
          onChange={() => onChange?.(value)}
        />
        {children}
      </label>
    </div>
  );
}

interface CheckboxOption {
  value: any;
  label: string;
}

interface CheckboxGroupProps {
  disabled?: boolean;
  options?: CheckboxOption[];
  style?: React.CSSProperties;
  value: any;
  children?: React.ReactNode;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  const [selectedValues, setSelectedValues] = useState(props.value || []);

  const { disabled, style = {}, options = [], onChange } = props;

  const toggle = useCallback(
    (value: any) => {
      if (selectedValues.includes(value)) {
        return selectedValues.filter((v: any) => v !== value);
      } else {
        return [...selectedValues, value];
      }
    },
    [options, selectedValues]
  );

  const styleObject = {
    className: classNames(["elf--check-group"]),
    disabled,
    style: {
      ...propertyMap(style, cssProperties),
    },
  };

  return (
    <div {...styleObject}>
      {options.map((it, index) => {
        return (
          <Checkbox
            key={`index-${index}`}
            value={it.value}
            onChange={(currentValue) => {
              const currentValues = toggle(currentValue);
              onChange?.(currentValues);
              setSelectedValues(currentValues);
            }}
            checked={selectedValues.includes(it.value)}
            disabled={disabled}
          >
            {it.label}
          </Checkbox>
        );
      })}
    </div>
  );
}
