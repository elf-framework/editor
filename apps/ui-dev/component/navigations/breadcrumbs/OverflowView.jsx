import { CheckFilled } from "@elf-framework/icon";
import {
  Breadcrumbs,
  Button,
  Grid,
  Menu,
  Popover,
  VBox,
} from "@elf-framework/ui";

export function OverflowView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 200,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
            // justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <Breadcrumbs
            items={[
              {
                title: (
                  <Popover
                    trigger="click"
                    show={true}
                    placement="bottom-left"
                    body={
                      <Menu
                        type="dropdown"
                        compact
                        style={{
                          width: 150,
                        }}
                        items={[
                          {
                            type: "item",
                            title: "Item 1",
                          },
                          {
                            type: "item",
                            title: "Item 2",
                          },
                          {
                            type: "item",
                            title: "Item 3",
                          },
                          {
                            type: "item",
                            title: "Item 4",
                          },
                        ]}
                      />
                    }
                  >
                    <Button quiet selected={true}>
                      <CheckFilled />
                    </Button>
                  </Popover>
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
                title: "New line menu",
                tooltip: "New line menu tooltip",
                href: "/pages/design-system/components/navigations/avatar/",
              },
            ]}
          />
        </div>
      </VBox>
      <div>
        <p>
          <p>
            The multiline variation places emphasis on the selected breadcrumb
            item as a page title, helping a user to more clearly identify their
            current location.
          </p>
        </p>
      </div>
    </Grid>
  );
}
