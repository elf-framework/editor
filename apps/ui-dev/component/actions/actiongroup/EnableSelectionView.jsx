import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, VBox } from "@elf-framework/ui";

export function EnableSelectionView() {
  return (
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
  );
}
