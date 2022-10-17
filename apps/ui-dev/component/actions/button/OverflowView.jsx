import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import MoreHorizOutlined from "@elf-framework/icon/MoreHorizOutlined";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { ActionGroup, Button, Grid, VBox } from "@elf-framework/ui";

export function OverflowView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <div>
            <em>Wrap</em>
          </div>
          <ActionGroup style={{ gap: 10, margin: 10 }}>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
            <Button>
              <ContentCopyFilled /> Copy
            </Button>
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
            <Button>
              <ContentCopyFilled /> Copy
            </Button>
          </ActionGroup>
        </div>
        <div>
          <div>
            <em>Collapse</em>
          </div>
          <ActionGroup
            collapsed={true}
            moreIcon={<MoreHorizOutlined />}
            onMoreClick={(e, items) => {
              console.log(items);
            }}
            style={{ gap: 10, margin: 10 }}
          >
            <Button>
              <DescriptionFilled />
              Document Setup
            </Button>
            <Button>
              <SettingsFilled /> Settings
            </Button>
            <Button onClick={() => console.log("copy")}>
              <ContentCopyFilled /> Copy
            </Button>
          </ActionGroup>
        </div>
      </VBox>
      <div>
        <strong>Overflow mode</strong>
        <p>
          When space is limited in an action group, there are 2 options for the
          group's overflow behavior: wrap or collapse. By default, an action
          group is set to wrap, meaning that the action buttons inside the group
          wrap to form another line. Alternatively, an action group can be set
          to collapse inside a More (...) action button.
        </p>
      </div>
    </Grid>
  );
}
