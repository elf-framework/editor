import { CheckFilled } from "@elf-framework/icon";
import { Breadcrumbs, Grid, Tooltip, VBox } from "@elf-framework/ui";

export function TooltipView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
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
                title: "New line menu",
                tooltip: {
                  trigger: ["focus", "hover"],
                  placement: "top",
                  message: "New line menu",
                },
                href: "/pages/design-system/components/navigations/avatar/",
              },
            ]}
          />
        </div>
      </VBox>
      <div>
        <p>
          <p>
            When the breadcrumb title is truncated, a tooltip should display the
            full title when the user hovers, keyboard focuses, or single-taps on
            mobile.
          </p>
        </p>
      </div>
    </Grid>
  );
}
