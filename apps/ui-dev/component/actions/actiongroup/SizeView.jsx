import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
      >
        <VBox>
          <em>Small</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button size="small">
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button size="small">
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </VBox>
        <VBox>
          <em>Medium</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </VBox>

        <VBox>
          <em>Large</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button size="large">
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button size="large">
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </VBox>
        <VBox>
          <em>Extra Large</em>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button size="extra-large">
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button size="extra-large">
              <SettingsFilled /> Settings
            </Button>
          </ActionGroup>
        </VBox>
      </VBox>
      <div>
        <p>
          Action groups come in four different sizes: small, medium, large, and
          extra-large. The medium size is the default and most frequently used
          option. Use the other sizes sparingly; they should be used to create a
          hierarchy of importance within the page.
        </p>
      </div>
    </Grid>
  );
}
