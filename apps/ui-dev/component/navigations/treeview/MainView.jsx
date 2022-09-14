import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { Button, TreeView, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
          width: 300,
          height: 300,
        }}
      >
        <TreeView
          draggable
          // selectionStyle="checkbox"
          renderContext={(item) => {
            return item.data.children?.length ? (
              <FolderFilled />
            ) : (
              <DescriptionFilled />
            );
          }}
          renderArrow={(item) => {
            return <ChevronRightFilled />;
          }}
          items={[
            {
              label: "Item 1",
              children: [
                {
                  label: "Item 1.1",
                  children: [
                    {
                      label: "Item 1.1.1",
                    },
                    {
                      label: "Item 1.1.2",
                    },
                    {
                      label: "Item 1.1.3",
                    },
                    {
                      label: "Item 1.1.4",
                    },
                    {
                      label: "Item 1.1.5",
                    },
                  ],
                },
                {
                  label: "Item 1.2",
                },
              ],
            },
          ]}
          onClickNode={(item) => {
            item.data.selected = !item.data.selected;
          }}
          onToggleNode={(item) => {
            item.data.collapsed = !item.data.collapsed;
          }}
          renderActions={(item) => {
            return [
              <Button quiet shape="square">
                I
              </Button>,
              <Button quiet shape="square">
                II
              </Button>,
            ];
          }}
        />
      </div>
    </VBox>
  );
}
