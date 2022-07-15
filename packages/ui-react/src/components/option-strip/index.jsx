import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class OptionStrip extends UIElement {
  initState() {
    return {
      value: this.props.value,
    };
  }

  template() {
    const {
      disabled,
      style = {},
      selectedValue,
      options = [],
      onChange,
    } = this.props;

    const styleObject = {
      class: "elf--option-strip",
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, {}),
      },
    };

    return (
      <div {...styleObject}>
        {options.map((it) => {
          return (
            <button
              type="button"
              class={classnames("elf--option-strip-item", {
                selected: selectedValue === it.value,
              })}
              onClick={() => onChange?.(it.value)}
            >
              {it.icon}
            </button>
          );
        })}
      </div>
    );
  }
}
