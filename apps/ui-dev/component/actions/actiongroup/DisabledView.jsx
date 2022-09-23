import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <div>
            <em>Wrap</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button disabled={true}>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button disabled={true}>
              <SettingsFilled /> Settings
            </Button>
            <Button disabled={true}>
              <ContentCopyFilled /> Copy
            </Button>
          </ActionGroup>
        </div>
      </VBox>
      <div>
        <p>
          A action group in a disabled state shows that the action buttons
          within the group exist, but are not available in that circumstance.
          This state can be used to maintain layout continuity and to
          communicate that an action group may become available later.
        </p>
      </div>
    </Grid>
  );
}
