import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import ContentCopyFilled from "@elf-framework/icon/ContentCopyFilled";
import DeleteFilled from "@elf-framework/icon/DeleteFilled";
import EditFilled from "@elf-framework/icon/EditFilled";
import MoreHorizOutlined from "@elf-framework/icon/MoreHorizOutlined";
import { Grid, Toolbar, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
      >
        <div>
          <Toolbar
            class="shadow-1"
            emphasized={true}
            rounded={true}
            items={[
              {
                items: [
                  {
                    type: "button",
                    icon: <AddCardFilled />,
                    title: "Add Card",
                  },
                ],
              },
              {
                moreIcon: <MoreHorizOutlined />,
                items: [
                  {
                    type: "button",
                    icon: <EditFilled />,
                    title: "Edit",
                  },
                  {
                    type: "button",
                    icon: <ContentCopyFilled />,
                    title: "Copy",
                  },
                  {
                    type: "button",
                    icon: <DeleteFilled />,
                    title: "Delete",
                  },
                ],
              },
            ]}
          />
        </div>

        <div>
          <Toolbar
            variant="primary"
            rounded={true}
            emphasized={true}
            items={[
              {
                items: [
                  {
                    type: "button",
                    icon: <AddCardFilled />,
                    title: "Add Card",
                  },
                ],
              },
              {
                moreIcon: <MoreHorizOutlined />,
                items: [
                  {
                    type: "button",
                    icon: <EditFilled />,
                    title: "Edit",
                  },
                  {
                    type: "button",
                    icon: <ContentCopyFilled />,
                    title: "Copy",
                  },
                  {
                    type: "button",
                    icon: <DeleteFilled />,
                    title: "Delete",
                  },
                ],
              },
            ]}
          />
        </div>
      </VBox>
      <div>
        <p>
          An action bar is not emphasized by default. This is best used for when
          it needs to blend in with the rest of the UI, directing a user’s focus
          to elsewhere in a view.
        </p>
        <p>
          The emphasized action bar has a blue background that adds visual
          emphasis on the actions and selection. Use this for when the bar
          should call attention (e.g., floating in a table).
        </p>
      </div>
    </Grid>
  );
}
