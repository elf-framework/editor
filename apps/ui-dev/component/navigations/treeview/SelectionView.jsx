import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";
import single from "./data/single.json";

export function SelectionView() {
  const [provider] = useState(new TreeViewProvider(treeData));
  const [singleProvider] = useState(new TreeViewProvider(single));
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 20px",
          fontSize: 13,
        }}
      >
        <div>
          <em
            style={{
              padding: "20px 0px",
            }}
          >
            Single Selection
          </em>
          <div
            style={{
              position: "relative",
              width: 300,
              height: 200,
              margin: "0 auto",
              flex: "none",
              marginTop: 10,
              borderLeft: "1px solid var(--color-gray-4)",
              borderRight: "1px solid var(--color-gray-4)",
            }}
          >
            <TreeView
              // draggable={true}
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
              items={singleProvider.items}
            />
          </div>
        </div>
        <div>
          <em
            style={{
              padding: "20px 0px",
            }}
          >
            Multi Selection
          </em>
          <div
            style={{
              position: "relative",
              width: 300,
              height: 200,
              margin: "0 auto",
              flex: "none",
              marginTop: 10,
              borderLeft: "1px solid var(--color-gray-4)",
              borderRight: "1px solid var(--color-gray-4)",
            }}
          >
            <TreeView
              // draggable={true}
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
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          Tree views have the option of being either single-select or
          multi-select, for both checkbox and highlight selection styles. The
          default selection behavior for a multi-select tree view is to toggle
          selection on and off when selecting an item. The default selection
          behavior for a single-select tree view is to replace the current
          selection with the new selection.
        </p>
      </div>
    </Grid>
  );
}
