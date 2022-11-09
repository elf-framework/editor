import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DeleteFilled from "@elf-framework/icon/DeleteFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import { Toolbar, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{ gap: 50, backgroundColor: "var(--color-gray-0)", padding: 60 }}
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
                {
                  type: "menu",
                  title: "Edit",
                  // opened: true,
                  trigger: "click",
                  items: [
                    {
                      type: "item",
                      title: "Save a file",
                      description: "create a new shape",
                    },
                    {
                      type: "item",
                      title: "Save a file",
                    },
                    "-",
                    {
                      type: "item",
                      title: "Save a file",
                      description: "create a new shape",
                    },
                    "-",
                  ],
                },
              ],
            },
            {
              items: [
                {
                  type: "button",
                  icon: <EditFilled />,
                  tooltip: {
                    message: "Edit",
                    show: true,
                  },
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
          variant="secondary"
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
          variant="success"
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
