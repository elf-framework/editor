import EditFilled from "@elf-framework/icon/EditFilled";
import HelpOutlineOutlined from "@elf-framework/icon/HelpOutlineOutlined";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
      }}
    >
      <Grid
        columns={2}
        gap={30}
        style={{
          maxWidth: 400,
          margin: [0, "auto"],
        }}
      >
        <div>
          <em style={{ marginBottom: 10 }}>Information</em>
          <div>
            <Button>
              <EditFilled /> Edit
            </Button>
            &nbsp;
            <Button iconOnly quiet size="extra-small">
              <InfoOutlined />
            </Button>
          </div>
        </div>
        <div>
          <em style={{ marginBottom: 10 }}>Help</em>
          <div>
            <Button>
              <EditFilled /> Edit
            </Button>
            &nbsp;
            <Button iconOnly quiet size="extra-small">
              <HelpOutlineOutlined />
            </Button>
          </div>
        </div>
      </Grid>
    </VBox>
  );
}
