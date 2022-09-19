import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Ghost } from "../ghost";

const cssProperties = makeCssVariablePrefixMap("--elf--card-avatar", {
  height: true,
  width: true,
  ratio: true,
  backgroundColor: true,
});

export class CardAvatar extends UIElement {
  template() {
    const { style = {}, content, ghost = false, ...extraProps } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-avatar", {
        ghost,
      });
    }, [ghost]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    return (
      <div {...styleObject}>
        <div class="elf--card-avatar-inner">
          {ghost ? <Ghost animated /> : content}
        </div>
      </div>
    );
  }
}
