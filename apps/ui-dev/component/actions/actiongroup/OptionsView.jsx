import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, IconButton, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
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
          <IconButton quiet={true}>
            <EditFilled />
          </IconButton>
          <IconButton quiet={true}>
            <DescriptionFilled />
          </IconButton>
          <IconButton quiet={true}>
            <SettingsFilled />
          </IconButton>
        </ActionGroup>
      </div>
      <div>
        <em>Vertical</em>
        <Grid columns={2} gap={20}>
          <ActionGroup direction="vertical" style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup
            direction="vertical"
            style={{ gap: 10, margin: "10px 10px" }}
          >
            <IconButton quiet={true}>
              <EditFilled />
            </IconButton>
            <IconButton quiet={true}>
              <DescriptionFilled />
            </IconButton>
            <IconButton quiet={true}>
              <SettingsFilled />
            </IconButton>
          </ActionGroup>
        </Grid>
      </div>
    </VBox>
  );
}
