import { HTMLComment, POINTERSTART, start } from "@elf-framework/sapa";
import {
  BODY_MOVE_EVENT,
  EventControlPanel,
  EventPanel,
  MOVE,
} from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";
import "./event-panel.scss";

class Background extends EventPanel {
  template() {
    const { content } = this.props;

    console.log("background");

    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {content}
      </div>
    );
  }
}

class ControlPanel extends EventControlPanel {
  template() {
    const { content } = this.props;
    const { x = 0, y = 0 } = this.state;

    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        {content}

        <div
          class="pointer"
          style={{
            left: x,
            top: y,
          }}
        ></div>
      </div>
    );
  }

  calculatePos(e) {
    const currentX = Math.max(
      this.rect.left,
      Math.min(e.xy.x, this.rect.right - 10)
    );
    const currentY = Math.max(
      this.rect.top,
      Math.min(e.xy.y, this.rect.bottom - 10)
    );

    this.startX = currentX - this.rect.left;
    this.startY = currentY - this.rect.top;

    this.setState({
      x: this.startX,
      y: this.startY,
    });
  }

  [POINTERSTART() + MOVE()](e) {
    this.rect = this.$el.rect();

    this.calculatePos(e);
  }

  move() {
    this.calculatePos(this.$store.get(BODY_MOVE_EVENT));
  }
}

function A({ content }) {
  return <div>{content}</div>;
}

start(function Root() {
  console.log("start");

  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          backgroundColor: "yellow",
        }}
      >
        <Background>
          <HTMLComment>123 Yellow black</HTMLComment>
          <HTMLComment>123 Yellow blue</HTMLComment>
          <ControlPanel>
            <A>1234</A>
            <div>f134</div>
            <div>34324</div>
            <div>4324324</div>
          </ControlPanel>
        </Background>
      </div>
    </Layout>
  );
});
