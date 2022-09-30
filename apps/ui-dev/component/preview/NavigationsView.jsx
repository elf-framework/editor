import CheckFilled from "@elf-framework/icon/CheckFilled";
import ChevronRightFilled from "@elf-framework/icon/ChevronRightFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import FolderFilled from "@elf-framework/icon/FolderFilled";
import { useState } from "@elf-framework/sapa";
import {
  Avatar,
  Breadcrumbs,
  Button,
  Grid,
  Tab,
  TabItem,
  Tag,
  TagGroup,
  TreeView,
  TreeViewProvider,
} from "@elf-framework/ui";

import treeData from "./base.json";
import { PreviewItem } from "./PreviewItem";

export function NavigationsView() {
  const [provider] = useState(new TreeViewProvider(treeData));
  return (
    <div>
      <Grid columns={2} style={{ gap: 10 }}>
        <PreviewItem
          title={"Breadcrumbs"}
          link={"/pages/design-system/components/navigations/breadcrumbs/"}
        >
          <Breadcrumbs
            items={[
              {
                title: (
                  <Button quiet selected iconOnly shape="round">
                    <CheckFilled />
                  </Button>
                ),
              },
              {
                title: "Design",
                href: "/pages/design-system/getting-started/",
              },
              {
                title: "Inputs",
                href: "/pages/design-system/components/inputs/checkbox/",
              },
              {
                selected: true,
                title: "New",
                href: "/pages/design-system/components/navigations/avatar/",
                style: {
                  color: "var(--color-primary)",
                },
              },
            ]}
          />
        </PreviewItem>

        <PreviewItem
          title={"Avatar"}
          link={"/pages/design-system/components/navigations/avatar/"}
        >
          <div>
            <Avatar size="300">
              <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
            </Avatar>
          </div>
          &nbsp;
          <div>
            <Avatar
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FF008C 0%, #FF8C00 100%)",
              }}
            />
          </div>
        </PreviewItem>
      </Grid>
      &nbsp;
      <Grid columns={2} row={2} style={{ gap: 10 }}>
        <PreviewItem
          title={"Tree view"}
          style={{
            gridRow: "span 2",
          }}
          link={"/pages/design-system/components/navigations/treeview/"}
        >
          <div
            style={{
              position: "relative",
              width: 300,
              height: 400,
            }}
          >
            <TreeView
              style={{
                width: 200,
              }}
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
                this.refresh();
              }}
              renderActions={() => {
                return [
                  <Button quiet shape="square" iconOnly>
                    <CheckFilled />
                  </Button>,
                  <Button quiet shape="square" iconOnly>
                    <EditFilled />
                  </Button>,
                ];
              }}
              overscanRowCount={1}
            />
          </div>
        </PreviewItem>
        <PreviewItem
          title={"Tabs"}
          link={"/pages/design-system/components/navigations/tabs/"}
        >
          <Tab activeKey={1} showIndicator variant="primary">
            <TabItem title="Design" key={1}></TabItem>
            <TabItem title="Prototype" key={2}></TabItem>
            <TabItem title="Project" key={3} disabled={true}></TabItem>
          </Tab>
        </PreviewItem>
        <PreviewItem
          title={"Tag"}
          link={"/pages/design-system/components/navigations/tag/"}
        >
          <TagGroup>
            <Tag>
              <Avatar size="30">
                <img src="https://avatars.githubusercontent.com/u/591983?s=96&v=4" />
              </Avatar>
              &nbsp; Tag 1
            </Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>
            <Tag>Tag 2</Tag>

            <Tag
              removable
              onClose={() => {
                console.log("close");
              }}
            >
              Tag 3
            </Tag>
          </TagGroup>
        </PreviewItem>
      </Grid>
    </div>
  );
}
