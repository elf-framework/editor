import CheckFilled from "@elf-framework/icon/CheckFilled";
import { Breadcrumbs, Button, Grid, VBox } from "@elf-framework/ui";

export function MultilineView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
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
          }}
        >
          <Breadcrumbs
            multiline
            items={[
              {
                title: (
                  <Button size="small" iconOnly quiet>
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
                multiline: true,
                title: "New line menu",
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
