import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { VBox } from "../flex/VBox";
import { Ghost } from "../ghost";

const cssProperties = makeCssVariablePrefixMap("--elf--card-body", {
  textAlign: true,
});

export class CardBody extends UIElement {
  template() {
    const {
      style = {},
      compact = false,
      ghost = false,
      content,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--card-body", {
        compact,
      });
    }, [compact]);

    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
        },
        cssProperties
      ),
      ...extraProps,
    };

    return (
      <div {...styleObject}>
        {ghost ? (
          <VBox style={{ gap: 10 }}>
            <Ghost animated style={{ width: "70%" }} />
            <Ghost animated style={{ width: "50%" }} />
            <Ghost animated style={{ width: "30%" }} />
          </VBox>
        ) : (
          <div class="content-area">{content}</div>
        )}
      </div>
    );
  }
}
