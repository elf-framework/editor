import { registerComponent } from "../../utils/component";

import { Flex } from ".";

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

registerComponent("vbox", VBox);
registerComponent("VBox", VBox);
