import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";

export function EmphasisView() {
  const [provider] = useState(new TreeViewProvider(treeData));
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
              // draggable={true}
              // selectionStyle="checkbox"
              variant="primary"
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
          By default, a tree view is not emphasized. This is optimal for when
          it's used with a clear indication of selected items elsewhere in the
          interface (e.g., a main/detail split view in which the selected item’s
          label is repeated or clearly indicated in the detail view).
        </p>
        <p>
          The emphasized tree view has a translucent blue background and blue
          border for its selected state, to provide visual prominence that meets
          accessible color contrast ratio. This is optimal for when the
          selection should call attention (e.g., selecting a file to upload from
          a tree view, or when the tree view is the sole UI element for the
          interaction with the hierarchical content).
        </p>
      </div>
    </Grid>
  );
}
