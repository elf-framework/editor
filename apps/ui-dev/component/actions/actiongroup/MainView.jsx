import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DeleteFilled from "@elf-framework/icon/DeleteFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import MoreHorizOutlined from "@elf-framework/icon/MoreHorizOutlined";
import { Button, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 120 }}
    >
      <div>
        <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
          <Button>
            <EditFilled />
            Edit
          </Button>
          <Button>
            <ContentCopyFilled />
            Copy
          </Button>
          <Button>
            <DeleteFilled />
            Delete
          </Button>
          <Button>
            <MoreHorizOutlined />
          </Button>
        </div>
      </div>
    </VBox>
  );
}
