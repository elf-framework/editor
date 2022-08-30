import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function MultiSelectionView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <div>
            <em>Single Selection</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button quiet={true} selected={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button quiet={true}>
              <SettingsFilled /> Settings
            </Button>
            <Button quiet={true}>
              <ContentCopyFilled /> Copy
            </Button>
          </ActionGroup>
        </div>
        <div>
          <div>
            <em>Multi Selection</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button quiet={true} selected={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button quiet={true} selected={true}>
              <SettingsFilled /> Settings
            </Button>
            <Button quiet={true}>
              <ContentCopyFilled /> Copy
            </Button>
          </ActionGroup>
        </div>
      </VBox>
      <div>
        <strong>Selection mode</strong>
        <p>
          When selection is enabled, an action group can allow for single or
          multiple selection of action buttons.
        </p>
      </div>
    </Grid>
  );
}
