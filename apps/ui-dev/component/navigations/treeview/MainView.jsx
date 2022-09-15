import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Button, TreeView, TreeViewProvider, VBox } from "@elf-framework/ui";

import treeData from "./data/base.json";

export function MainView() {
  const [provider] = useState(new TreeViewProvider(treeData));

  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [0, 200],
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: 300,
          height: 300,
          flex: "none",
          borderLeft: "1px solid var(--color-gray-4)",
          borderRight: "1px solid var(--color-gray-4)",
        }}
      >
        <TreeView
          draggable={true}
          // selectionStyle="checkbox"
          renderContext={(item) => {
            return item.data.children?.length ? (
              <FolderFilled />
            ) : (
              <DescriptionFilled />
            );
          }}
          renderArrow={() => {
            return <ChevronRightFilled />;
          }}
          items={provider.items}
          onClickNode={(item) => {
            item.data.selected = !item.data.selected;
            this.render();
          }}
          onToggleNode={(item) => {
            item.data.collapsed = !item.data.collapsed;
            this.render();
          }}
          onDropNode={({ startId, endId, targetPosition }) => {
            switch (targetPosition) {
              case "top":
                provider.insertBefore(endId, startId);
                this.render();
                break;
              case "bottom":
                provider.insertAfter(endId, startId);
                this.render();
                break;
              case "middle":
                provider.insertLast(endId, startId);
                this.render();
                break;
            }
          }}
          renderActions={() => {
            return [
              <Button quiet shape="square">
                I
              </Button>,
              <Button quiet shape="square">
                II
              </Button>,
            ];
          }}
          overscanRowCount={1}
        />
      </div>
    </VBox>
  );
}
