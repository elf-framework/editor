import { Button, Divider, Grid, Menu, Popover } from "@elf-framework/ui";

import { PreviewItem } from "./PreviewItem";

export function ContainersView() {
  return (
    <div>
      <Grid columns={2} rows={["300px"]} style={{ gap: 10 }}>
        <PreviewItem
          title={"Popover"}
          link={"/pages/design-system/components/containers/popover/"}
        >
          <Popover
            body={
              <Menu
                type="dropdown"
                items={[
                  { type: "item", title: "Document Setup" },
                  { type: "item", title: "Settings" },
                  { type: "item", title: "Copy" },
                  {
                    type: "section",
                    title: "Group",
                  },
                  {
                    type: "item",
                    title: "Languages",
                  },
                ]}
                style={{
                  width: 200,
                  position: "relative",
                  boxShadow: "none",
                }}
              />
            }
            show
            showTip
            placement="bottom-left"
          >
            <Button>Settings</Button>
          </Popover>
        </PreviewItem>
        <PreviewItem
          title={"Divider"}
          link={"/pages/design-system/components/containers/divider/"}
        >
          <Divider />
          <Divider variant="primary" />
          <Divider variant="primary" orientation="vertical" />
        </PreviewItem>
      </Grid>
    </div>
  );
}
