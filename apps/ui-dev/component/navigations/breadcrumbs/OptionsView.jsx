import CheckFilled from "@elf-framework/icon/CheckFilled";
import { Breadcrumbs, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
            alignItems: "center",
          }}
        >
          <Breadcrumbs
            items={[
              {
                title: <CheckFilled />,
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
              },
            ]}
          />
        </div>
      </VBox>
      <div>
        <p>
          <p>
            By default, breadcrumbs are displayed inline with the hierarchy
            shown in reading order.
          </p>
        </p>
      </div>
    </Grid>
  );
}