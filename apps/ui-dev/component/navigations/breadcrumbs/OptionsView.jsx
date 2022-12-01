import CheckFilled from "@elf-framework/icon/CheckFilled";
import { Breadcrumbs, Button, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
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
              title: "New",
              href: "/pages/design-system/components/navigations/avatar/",
            },
          ]}
        />
      </div>
    </VBox>
  );
}
