import { classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  width: "--elf--field-width",
};

export function Field({
  label,
  content,
  help,
  position,
  required = false,
  optional = false,
  size,
  disabled,
  style = {},
}) {
  const styleObject = {
    class: classnames("elf--field", {
      [position]: true,
      [size]: true,
      disabled,
    }),
    style: {
      ...propertyMap(style, cssProperties),
    },
  };

  return (
    <div {...styleObject}>
      {label ? (
        <label class="label">
          {label}
          {required ? <span class="required">*</span> : null}
          {optional ? <span class="optional">(optional)</span> : null}
        </label>
      ) : undefined}
      {content?.length ? (
        <div class="field-area">
          {content?.length ? <div>{content}</div> : undefined}
          {help ? <div class="help">{help}</div> : undefined}
        </div>
      ) : undefined}
    </div>
  );
}
