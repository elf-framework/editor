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
      withLabel = false,
      labels = undefined,
      onClick,
      onChange,
      readOnly = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--switch", {
        [variant]: true,
        [size]: true,
        disabled,
        readonly: readOnly,
        "with-label": withLabel,
      });
    }, [variant, size, disabled, readOnly, withLabel]);

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
          onChange={onChange}
          {...{
            disabled: disabled ? "disabled" : undefined,
            checked: checked ? "checked" : undefined,
          }}
        />
        <span class="tools">
          <span class="track"></span>
          {withLabel ? (
            <div class="label-area">
              <div class="unchecked">{labels?.[0]}</div>
              <div class="checked">{labels?.[1]}</div>
            </div>
          ) : undefined}
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
