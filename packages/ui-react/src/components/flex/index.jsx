import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Flex extends UIElement {
  template() {
    const { style = {}, content, stack, wrap = false } = this.props;

    const styleObject = {
      class: classnames("elf--flex", {
        stack: stack,
        wrap: wrap,
      }),

      style: {
        ...propertyMap(style, {}),
      },
    };

    return <div {...styleObject}>{content}</div>;
  }
}

export class VBox extends Flex {
  template() {
    const { style = {}, content } = this.props;

    return (
      <Flex stack={true} style={style}>
        {content}
      </Flex>
    );
  }
}
