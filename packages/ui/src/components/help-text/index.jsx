import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  color: "--elf--help-text-color",
};

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

    const styleObject = {
      class: classnames("elf--help-text", {
        [variant]: true,
        [size]: true,
        disabled,
      }),
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
