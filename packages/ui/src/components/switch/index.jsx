import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--switch", {
  backgroundColor: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true,
});

export class Switch extends UIElement {
  template() {
    const {
      checked = false,
      disabled = false,
      variant = "default",
      size = "medium",
      style = {},
      content,
      onClick,
      readOnly = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--switch", {
        [variant]: true,
        [size]: true,
        disabled,
        readonly: readOnly,
      });
    }, [variant, size, disabled, readOnly]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <input
          ref="$input"
          id={"switch-checkbox-" + this.id}
          type="checkbox"
          onClick={onClick}
          {...{
            disabled: disabled ? "disabled" : undefined,
            checked: checked ? "checked" : undefined,
          }}
        />
        <span class="tools">
          <span class="track"></span>
          <span class="handle"></span>
        </span>
        {content?.length ? (
          <label for={"switch-checkbox-" + this.id}>{content}</label>
        ) : undefined}
      </div>
    );
  }

  get checked() {
    return this.refs.$input.checked;
  }
}

registerComponent("switch", Switch);
registerComponent("Switch", Switch);
