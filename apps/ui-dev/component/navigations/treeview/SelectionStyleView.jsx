import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import { Grid, VBox, TreeViewProvider, TreeView } from "@elf-framework/ui";

import treeData from "./data/base.json";
import single from "./data/single.json";

export function SelectionStyleView() {
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
            Checkbox Selection
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
              selectionStyle="checkbox"
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
            Highlight Selection
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
          Some tree views let a user select items, on which they can then take
          an action. Both single-select and multi-select tree views can display
          checkboxes to the far left side of each item, or display only a
          highlight state. With the checkbox selection style, clicking another
          tree view item will add that item to the selection. Clicking a
          selected tree view item will deselect it.
        </p>
        <p>
          Sometimes it may not make sense to use checkboxes to indicate
          selection. In those cases, use the highlight selection style to
          display a highlighted state when a user is selecting one or more
          items. With this option, clicking another tree view item will select
          the new item and deselect any existing selection by default.
        </p>
        <p>
          For the highlight selection style, use the emphasized option in order
          to meet contrast minimums. All tree views have a hover state,
          regardless if actions or selections can be made.
        </p>
      </div>
    </Grid>
  );
}
