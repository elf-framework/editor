import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, VBox } from "@elf-framework/ui";

export function MultiSelectionView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <div>
        <div>
          <em>Single Selection</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button quiet selected>
            <DescriptionFilled />
            Document Setup
          </Button>
          <Button quiet>
            <SettingsFilled /> Settings
          </Button>
          <Button quiet>
            <ContentCopyFilled /> Copy
          </Button>
        </ActionGroup>
      </div>
      <div>
        <div>
          <em>Multi Selection</em>
        </div>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button quiet selected>
            <DescriptionFilled />
            Document Setup
          </Button>
          <Button quiet selected>
            <SettingsFilled /> Settings
          </Button>
          <Button quiet>
            <ContentCopyFilled /> Copy
          </Button>
        </ActionGroup>
      </div>
    </VBox>
  );
}
