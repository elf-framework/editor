import { start } from "@elf/sapa";
import { Button, Dialog } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  return (
    <div>
      <button
        style={{
          "background-color": this.state.visible ? "red" : "yellow",
        }}
        onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}
        onMouseOver={() => {
          this.setState({ visible: true });
        }}
        onMouseOut={() => {
          this.setState({ visible: false });
        }}
      >
        dddd
      </button>
      <Button
        ref="$button"
        style={{
          backgroundColor: this.state.visible ? "blue" : "yellow",
        }}
        onClick={() => {
          this.setState({
            visible: !this.state.visible,
          });
        }}
      >
        Hello
      </Button>
      <div>
        <span>fdsjkafldsf</span>
        <dl>
          <dt></dt>
          <dd></dd>
        </dl>
      </div>
      {this.state.visible ? (
        <Dialog
          ref="$dialog"
          visible={this.state.visible}
          onClose={() => {
            this.setState({
              visible: false,
            });
          }}
        />
      ) : undefined}
    </div>
  );
});
