import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";

export function TextOverflowView() {
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
              width: 200,
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
                const color = item.data.selected
                  ? "var(--color-blue-5)"
                  : "var(--color-gray-5)";
                return (
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      border: "2px solid " + color,
                      backgroundImage:
                        "linear-gradient(45deg, #fff, #fff 25%, " +
                        color +
                        " 25%, " +
                        color +
                        " 50%, #fff 50%, #fff 75%, " +
                        color +
                        " 75%, " +
                        color +
                        ")",
                    }}
                  >
                    &nbsp;
                  </div>
                );
              }}
              renderArrow={() => {
                return <ChevronRightFilled />;
              }}
              itemHeight={40}
              items={provider.items}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          When a tree view item label is too long for the available horizontal
          space, the label truncates. The full label is displayed on hover and
          focus within a tooltip.
        </p>
      </div>
    </Grid>
  );
}
