import {
  ActionGroup,
  Grid,
  Menu,
  RoundButton,
  Toolbar,
} from "@elf-framework/ui";

import { PreviewItem } from "./PreviewItem";

export function ActionsView() {
  return (
    <div>
      <Grid columns={2} style={{ gap: 10 }}>
        <PreviewItem title={"Button"}>
          <RoundButton size="extra-large" variant="primary">
            Button
          </RoundButton>
        </PreviewItem>
        <PreviewItem title={"Action group"}>
          <ActionGroup compact>
            <RoundButton variant="primary">Button</RoundButton>
            <RoundButton>Button</RoundButton>
          </ActionGroup>
        </PreviewItem>
        <PreviewItem title={"Toolbar"}>
          <Toolbar
            class="shadow-1"
            rounded={true}
            items={[
              {
                items: [
                  {
                    type: "button",
                    title: "Add Card",
                  },
                ],
              },
              {
                items: [
                  {
                    type: "button",
                    title: "Delete",
                  },
                  {
                    type: "button",
                    title: "Copy",
                  },
                  {
                    type: "button",
                    title: "Share",
                  },
                ],
              },
            ]}
          />
        </PreviewItem>
        <PreviewItem title={"Menu"}>
          <Menu
            type="dropdown"
            style={{
              width: 200,
            }}
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
          />
        </PreviewItem>
      </Grid>
    </div>
  );
}
