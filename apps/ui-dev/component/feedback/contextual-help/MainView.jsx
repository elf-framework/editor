import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Panel, Popover, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        position: "relative",
        height: 300,
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button disabled shape="round">
          Create segment
        </Button>
        <Popover
          show
          body={
            <Panel title={"Permission required"}>
              <p>Your admin must grant you permission to create segments.</p>
              <a href="#">Learn about permissions</a>
            </Panel>
          }
          placement="right-bottom"
        >
          <Button quiet size="extra-small" selected>
            <InfoOutlined />
          </Button>
        </Popover>
      </div>
    </VBox>
  );
}
