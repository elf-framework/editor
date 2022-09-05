import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--help-text", {
  color: true,
});

export class HelpText extends UIElement {
  template() {
    const {
      variant = "default",
      size = "medium",
      content = "",
      icon,
      style = {},
      disabled = false,
      ...extrProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--help-text", {
        [variant]: true,
        [size]: true,
        disabled,
      });
    }, [variant, size, disabled]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style, cssProperties),
      },
      ...extrProps,
    };

    return (
      <div {...styleObject}>
        {icon && <span class="icon">{icon}</span>}
        {content ? <div class="content">{content}</div> : null}
      </div>
    );
  }
}

registerComponent("help-text", HelpText);
registerComponent("HelpText", HelpText);
registerComponent("helptext", HelpText);
