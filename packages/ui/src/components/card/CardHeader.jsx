import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Ghost } from "../ghost";

const cssProperties = makeCssVariablePrefixMap("--elf--card-header", {
  textAlign: true,
});

export class CardHeader extends UIElement {
  template() {
    const {
      style = {},
      nowrap = false,
      title,
      actions = [],
      ghost = false,
      ...extraProps
    } = this.props;

    console.log(this.props);

    const localClass = useMemo(() => {
      return classnames("elf--card-header", {
        nowrap,
        ghost,
        "has-actions": actions.length > 0,
      });
    }, [nowrap, actions, ghost]);

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

    console.log(ghost, nowrap);

    return (
      <div {...styleObject}>
        {ghost
          ? [<Ghost animated />, <Ghost animated />]
          : [
              title ? <div class="title">{title}</div> : null,
              actions.length ? <div class="actions">{actions}</div> : null,
            ]}
      </div>
    );
  }
}
