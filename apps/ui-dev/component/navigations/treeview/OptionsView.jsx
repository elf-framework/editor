import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
// import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
// import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";

export function OptionsView() {
  const [provider] = useState(new TreeViewProvider(treeData));
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <div>
          <div
            style={{
              position: "relative",
              width: 300,
              height: 300,
              margin: "0 auto",
              flex: "none",
              borderLeft: "1px solid var(--color-gray-4)",
              borderRight: "1px solid var(--color-gray-4)",
            }}
          >
            <TreeView
              // draggable={true}
              // selectionStyle="checkbox"
              // renderContext={(item) => {
              //   return item.data.children?.length ? (
              //     <FolderFilled />
              //   ) : (
              //     <DescriptionFilled />
              //   );
              // }}
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
          A tree view is text-only by default. This option is best used when a
          hierarchy consists of all of the same content type.
        </p>
      </div>
    </Grid>
  );
}
