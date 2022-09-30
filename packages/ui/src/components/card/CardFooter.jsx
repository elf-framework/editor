import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Divider } from "../divider";
import { Ghost } from "../ghost";

const cssProperties = makeCssVariablePrefixMap("--elf--card-footer", {
  textAlign: true,
  sideOffset: true,
});

export class CardFooter extends UIElement {
  template() {
    const {
      style = {},
      ghost = false,
      noDivider = false,
      content,
      compact = false,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-footer", {
        ghost,
        compact,
      });
    }, [ghost, compact]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    return (
      <div {...styleObject}>
        {noDivider ? undefined : <Divider />}

        <div class="content-area">
          {ghost ? (
            <div style={{ display: "flex", gap: 10 }}>
              <Ghost animated />
              <Ghost animated />
            </div>
          ) : (
            content
          )}
        </div>
      </div>
    );
  }
}
