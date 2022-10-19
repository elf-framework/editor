import CachedFilled from "@elf-framework/icon/CachedFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import HelpOutlineFilled from "@elf-framework/icon/HelpOutlineFilled";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, VBox, Tooltip } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "0px 150px",
        position: "relative",
        height: 200,
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
        <div
          style={{
            height: 200,
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Button iconOnly>
            <EditFilled />
          </Button>
          <Button iconOnly>
            <InfoOutlined />
          </Button>
          <Button iconOnly>
            <CachedFilled />
          </Button>
          <Tooltip placement="top" message={"text message"} show>
            <Button iconOnly>
              <HelpOutlineFilled />
            </Button>
          </Tooltip>
        </div>
      </div>
    </VBox>
  );
}
