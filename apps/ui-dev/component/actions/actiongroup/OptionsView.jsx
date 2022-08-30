import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <em>Horizontal</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup style={{ gap: 10, margin: "10px 10px" }}>
            <Button quiet={true}>
              <EditFilled />
            </Button>
            <Button quiet={true}>
              <DescriptionFilled />
            </Button>
            <Button quiet={true}>
              <SettingsFilled />
            </Button>
          </ActionGroup>
        </div>
        <div>
          <em>Vertical</em>
          <Grid columns={2} gap={20}>
            <ActionGroup direction="vertical" style={{ gap: 10, margin: 10 }}>
              <div>
                <Button>
                  <DescriptionFilled />
                  Document Setup
                </Button>
              </div>
              <div>
                <Button>
                  <SettingsFilled /> Settings
                </Button>
              </div>
            </ActionGroup>
            <ActionGroup
              direction="vertical"
              style={{ gap: 10, margin: "10px 10px" }}
            >
              <Button quiet={true}>
                <EditFilled />
              </Button>
              <Button quiet={true}>
                <DescriptionFilled />
              </Button>
              <Button quiet={true}>
                <SettingsFilled />
              </Button>
            </ActionGroup>
          </Grid>
        </div>
      </VBox>
      <div>
        <strong>Orientation</strong>
        <p>
          An action group can be either horizontal or vertical in its
          orientation. By default, an action group is horizontal. The vertical
          option should be reserved for when horizontal space is limited.
        </p>
      </div>
    </Grid>
  );
}
