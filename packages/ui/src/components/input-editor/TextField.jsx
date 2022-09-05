import { registerComponent } from "../../utils/component";
import { Field } from "./Field";

import { InputEditor } from ".";

export function TextField({
  help,
  label,
  size,
  style,
  disabled,
  required,
  requiredText,
  position,
  optional,
  optionalText,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  inputStyle,
  ...extraProps
}) {
  const FieldProps = {
    label,
    help,
    size,
    style,
    disabled,
    required,
    requiredText,
    position,
    optional,
    optionalText,
    invalid,
    validIcon,
    invalidIcon,
    invalidMessage,
  };

  const hasIcon = (!invalid && validIcon) || (invalid && invalidIcon);

  return (
    <Field {...FieldProps}>
      <InputEditor
        {...extraProps}
        disabled={disabled}
        required={required}
        size={size}
        invalid={invalid}
        style={{
          ...inputStyle,
          paddingRight: hasIcon ? "2.6em" : undefined,
        }}
      />
    </Field>
  );
}

registerComponent("text-field", TextField);
registerComponent("TextField", TextField);
registerComponent("textfield", TextField);
