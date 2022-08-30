import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DeleteFilled from "@elf-framework/icon/DeleteFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import { Toolbar, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 60 }}
    >
      <div>
        <Toolbar
          class="shadow-1"
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
          type="primary"
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
          type="secondary"
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
          type="success"
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
