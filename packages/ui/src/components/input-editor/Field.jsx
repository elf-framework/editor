import { classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--field", {
  width: true,
});

export function Field({
  label,
  content,
  help,
  position,
  required = false,
  requiredText = "*",
  optional = false,
  optionalText = "(optional)",
  size,
  disabled,
  validIcon,
  invalid,
  invalidIcon,
  invalidMessage,
  style = {},
}) {
  const localClass = useMemo(() => {
    return classnames("elf--field", {
      [position]: true,
      [size]: true,
      disabled,
    });
  }, [position, size, disabled]);

  const styleObject = {
    class: localClass,
    style: {
      ...propertyMap(style, cssProperties),
    },
  };

  return (
    <div {...styleObject}>
      {label ? (
        <label class="label">
          {label}
          {required ? <span class="required">{requiredText}</span> : null}
          {optional ? <span class="optional">{optionalText}</span> : null}
        </label>
      ) : undefined}
      {content?.length ? (
        <div class="field-area">
          {content?.length ? (
            <div class="field-area-content">
              {content}
              {!invalid && validIcon ? (
                <div class="valid-icon">{validIcon}</div>
              ) : null}
              {invalid && invalidIcon ? (
                <div class="invalid-icon">{invalidIcon}</div>
              ) : null}
            </div>
          ) : undefined}
          {help ? <div class="help">{help}</div> : undefined}
          {invalid ? <div class="invalid">{invalidMessage}</div> : undefined}
        </div>
      ) : undefined}
    </div>
  );
}
