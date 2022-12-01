import CheckFilled from "@elf-framework/icon/CheckFilled";
import { Breadcrumbs, VBox } from "@elf-framework/ui";

export function TooltipView() {
  return (
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
                show: true,
              },
              href: "/pages/design-system/components/navigations/avatar/",
            },
          ]}
        />
      </div>
    </VBox>
  );
}
