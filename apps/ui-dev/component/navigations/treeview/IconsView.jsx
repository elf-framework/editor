import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";

export function IconsView() {
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
          Icons can be used to add clarification about tree view items. These
          help to signify content types, which creates easier reference and
          context within the hierarchy.
        </p>
      </div>
    </Grid>
  );
}
