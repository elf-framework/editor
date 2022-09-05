import CheckFilled from "@elf-framework/icon/CheckFilled";
import { useState } from "@elf-framework/sapa";
import { Breadcrumbs, Button, Menu, Popover, VBox } from "@elf-framework/ui";

export function MainView() {
  const [selected, setSelected] = useState(false);
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
        }}
      >
        <Breadcrumbs
          items={[
            {
              title: (
                <Popover
                  trigger="click"
                  show={selected}
                  placement="bottom-left"
                  body={
                    <Menu
                      type="dropdown"
                      items={[
                        {
                          type: "item",
                          title: "Item 1",
                        },
                      ]}
                    />
                  }
                >
                  <Button
                    quiet
                    selected={selected}
                    onClick={() => {
                      setSelected(!selected);
                    }}
                  >
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
              title: "New",
              href: "/pages/design-system/components/navigations/avatar/",
              style: {
                color: "var(--color-primary)",
              },
            },
          ]}
        />
      </div>
    </VBox>
  );
}
