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

  return (
    <Field {...FieldProps}>
      <InputEditor
        {...extraProps}
        disabled={disabled}
        required={required}
        size={size}
        invalid={invalid}
        style={inputStyle}
      />
    </Field>
  );
}

registerComponent("text-field", TextField);
registerComponent("TextField", TextField);
registerComponent("textfield", TextField);
