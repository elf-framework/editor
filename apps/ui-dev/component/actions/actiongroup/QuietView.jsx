import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function QuietView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <div>
            <em>Not quiet</em>
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
        </div>
        <div>
          <div>
            <em>Quiet</em>
          </div>
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
      </VBox>
      <div>
        <p>
          By default, an action group uses not-quiet action buttons. This style
          works best in a dense array of controls where the background helps to
          separate action buttons from the surrounding container, or to give
          visibility to isolated buttons.
        </p>
        <p>
          Alternatively, quiet action groups can have no visible background
          until they’re interacted with. This style works best when a clear
          layout (vertical stack, table, grid) makes it easy to parse the
          buttons. Too many quiet components in a small space can be hard to
          read.
        </p>
      </div>
    </Grid>
  );
}
