import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
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
  );
}
