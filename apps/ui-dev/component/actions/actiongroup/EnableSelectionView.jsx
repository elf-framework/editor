import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function EnableSelectionView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <div>
            <em>Selection not enabled</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button quiet={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button quiet={true}>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </div>
        <div>
          <div>
            <em>Selection enabled</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button selected={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
          <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
            <Button selected={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </div>
      </VBox>
      <div>
        <strong>Enable selection</strong>
        <p>
          By default, selection is not enabled in an action group. This is used
          for action groups that offer direct actions, rather than toggling.
        </p>
        <p>
          Selection can be enabled for an action group to allow for toggling.
          This can be used to disclose parts of an interface (e.g., showing or
          hiding panels) or to switch between views (e.g., grid or list views).
        </p>
      </div>
    </Grid>
  );
}
