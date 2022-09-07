import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Button } from "../button";

const cssProperties = makeCssVariablePrefixMap("--elf--tag", {
  backgroundColor: true,
  color: true,
  borderColor: true,
  borderRadius: true,
  fontSize: true,
});

const groupCssProperties = makeCssVariablePrefixMap("--elf--tag-group", {
  gap: true,
  width: true,
});

export class Tag extends UIElement {
  template() {
    const {
      style = {},
      content,
      removable = false,
      variant = "default",
      filled = false,
      disabled = false,
      readOnly = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--tag", {
        [variant]: true,
        filled,
        disabled,
        readonly: readOnly,
      });
    }, [variant, filled, disabled, readOnly]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <label>{content}</label>
        {removable && (
          <Button
            size="small"
            quiet
            class="close"
            onClick={(e) => {
              this.props.onClose && this.props.onClose(e);
            }}
          >
            &times;
          </Button>
        )}
      </div>
    );
  }
}

export class TagGroup extends UIElement {
  template() {
    const { style = {}, content, gap } = this.props;

    const styleObject = {
      class: "elf--tag-group",
      style: propertyMap(
        {
          ...style,
          gap,
        },
        groupCssProperties
      ),
    };

    return <div {...styleObject}>{content}</div>;
  }
}

registerComponent("tag", Tag);
registerComponent("Tag", Tag);
