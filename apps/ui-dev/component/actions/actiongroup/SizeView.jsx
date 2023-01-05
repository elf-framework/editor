import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
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
  );
}
