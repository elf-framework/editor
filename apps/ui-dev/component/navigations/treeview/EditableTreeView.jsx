import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/single.json";

export function EditableTreeView() {
  const [provider] = useState(new TreeViewProvider(treeData));
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "0px 20px",
          fontSize: 13,
        }}
      >
        <div>
          <div
            style={{
              position: "relative",
              width: 300,
              height: 200,
              margin: "0 auto",
              flex: "none",
              borderLeft: "1px solid var(--color-gray-4)",
              borderRight: "1px solid var(--color-gray-4)",
            }}
          >
            <TreeView
              renderArrow={() => {
                return <ChevronRightFilled />;
              }}
              editable
              itemHeight={40}
              items={provider.items}
              // onEdit={(item, value) => {
              //   console.log("onEdit", item, value);
              // }}
              // onEditStart={(item) => {
              //   console.log("onEditStart", item);
              // }}
              // onEditEnd={(item) => {
              //   console.log("onEditEnd", item);
              // }}
              // onEditCancel={(item) => {
              //   console.log("onEditCancel", item);
              // }}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          You can edit the label when you double-click the label. During
          editing, the Enter key means completion, and if you lose focus or
          press Escape, you can cancel the editing.
        </p>
      </div>
    </Grid>
  );
}
