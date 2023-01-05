import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, VBox } from "@elf-framework/ui";

export function QuietView() {
  return (
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
  );
}
