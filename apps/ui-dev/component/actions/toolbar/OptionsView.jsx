import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DeleteFilled from "@elf-framework/icon/DeleteFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import MoreHorizOutlined from "@elf-framework/icon/MoreHorizOutlined";
import { Toolbar, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <div>
        <Toolbar
          class="shadow-1"
          emphasized={true}
          rounded={true}
          items={[
            {
              items: [
                {
                  type: "button",
                  icon: <AddCardFilled />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MoreHorizOutlined />,
              items: [
                {
                  type: "button",
                  icon: <EditFilled />,
                  title: "Edit",
                },
                {
                  type: "button",
                  icon: <ContentCopyFilled />,
                  title: "Copy",
                },
                {
                  type: "button",
                  icon: <DeleteFilled />,
                  title: "Delete",
                },
              ],
            },
          ]}
        />
      </div>

      <div>
        <Toolbar
          variant="primary"
          rounded={true}
          emphasized={true}
          items={[
            {
              items: [
                {
                  type: "button",
                  icon: <AddCardFilled />,
                  title: "Add Card",
                },
              ],
            },
            {
              moreIcon: <MoreHorizOutlined />,
              items: [
                {
                  type: "button",
                  icon: <EditFilled />,
                  title: "Edit",
                },
                {
                  type: "button",
                  icon: <ContentCopyFilled />,
                  title: "Copy",
                },
                {
                  type: "button",
                  icon: <DeleteFilled />,
                  title: "Delete",
                },
              ],
            },
          ]}
        />
      </div>
    </VBox>
  );
}
