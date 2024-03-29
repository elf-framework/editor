import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, VBox } from "@elf-framework/ui";

export function JustifiedView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      <VBox>
        <em>Not justified</em>
        <ActionGroup style={{ gap: 10, margin: 10 }}>
          <Button>
            <DescriptionFilled />
            Document Setup
          </Button>
          <Button>
            <SettingsFilled /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: 10 }}>
          <Button>
            <DescriptionFilled />
            Document
          </Button>
          <Button>
            <ContentCopyFilled /> Copy
          </Button>
          <Button>
            <SettingsFilled /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup compact={true} style={{ gap: 10, margin: "10px 10px" }}>
          <Button>
            <EditFilled />
          </Button>
          <Button>
            <DescriptionFilled />
          </Button>
          <Button>
            <SettingsFilled />
          </Button>
        </ActionGroup>
      </VBox>
      <VBox>
        <em>Justified</em>
        <ActionGroup justified={true} style={{ gap: 10, margin: 10 }}>
          <Button>
            <DescriptionFilled />
            Document Setup
          </Button>
          <Button>
            <SettingsFilled /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup
          justified={true}
          compact={true}
          style={{ gap: 10, margin: 10 }}
        >
          <Button>
            <ContentCopyFilled /> Copy
          </Button>
          <Button>
            <SettingsFilled /> Settings
          </Button>
        </ActionGroup>
        <ActionGroup
          justified={true}
          compact={true}
          style={{ gap: 10, margin: "10px 10px" }}
        >
          <Button>
            <EditFilled />
          </Button>
          <Button>
            <DescriptionFilled />
          </Button>
          <Button>
            <SettingsFilled />
          </Button>
        </ActionGroup>
      </VBox>
    </VBox>
  );
}
