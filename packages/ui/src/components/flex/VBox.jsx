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
