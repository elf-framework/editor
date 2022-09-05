import { registerComponent } from "../../utils/component";
import { Field } from "./Field";
import { TextAreaEditor } from "./TextAreaEditor";

export function TextArea({
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
  resizable,
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
      <TextAreaEditor
        {...extraProps}
        disabled={disabled}
        required={required}
        size={size}
        invalid={invalid}
        resizable={resizable}
        style={{
          ...inputStyle,
          paddingRight: hasIcon ? "2.6em" : undefined,
        }}
      />
    </Field>
  );
}

registerComponent("text-area", TextArea);
registerComponent("TextArea", TextArea);
registerComponent("textarea", TextArea);
