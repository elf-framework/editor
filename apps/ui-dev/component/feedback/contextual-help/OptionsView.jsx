import EditFilled from "@elf-framework/icon/EditFilled";
import HelpOutlineOutlined from "@elf-framework/icon/HelpOutlineOutlined";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <Grid columns={2}>
          <div>
            <em style={{ marginBottom: 10 }}>Information</em>
            <div>
              <Button>
                <EditFilled /> Edit
              </Button>
              &nbsp;
              <Button quiet size="extra-small">
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
              <Button quiet size="extra-small">
                <HelpOutlineOutlined />
              </Button>
            </div>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Contextual help can be used to display two types of supplementary
          content in an experience: in-line information (the info icon) or help
          and resources to learn more (the help icon).
        </p>
      </div>
    </Grid>
  );
}
