import { start } from "@elf/sapa";
import { Button, Dialog } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  const toggleVisible = this.createFunction("toggleVisible", () => {
    this.setState({
      visible: !this.state.visible,
    });
  });

  return (
    <div>
      <button
        style={{
          "background-color": this.state.visible ? "red" : "yellow",
        }}
        onClick={toggleVisible}
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
        style={{
          backgroundColor: this.state.visible ? "blue" : "yellow",
        }}
        onClick={toggleVisible}
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
          center={true}
          style={{
            position: "absolute",
            width: 400,
          }}
          tools={[
            <Button
              type="primary"
              ref="$action"
              onClick={() => {
                console.log("external Action");
              }}
            >
              Action
            </Button>,
            "sample",
            <Button
              ref="$outline"
              type="outline"
              onClick={() => {
                console.log("external Dismiss");
              }}
            >
              Dismiss
            </Button>,
          ]}
          footer={
            <Button type="primary" onClick={() => console.log("footer button")}>
              단계
            </Button>
          }
          onClose={() => {
            this.setState({
              visible: false,
            });
          }}
          onCancel={(dialog) => {
            dialog.close();
          }}
          onOk={() => {
            console.log("onOk");
          }}
        >
          <div>
          The following typefaces are not available. Please either install these on your computer or in Figma. Alternatively you can replace them with other fonts.

          </div>
        </Dialog>
      ) : undefined}
    </div>
  );
});
