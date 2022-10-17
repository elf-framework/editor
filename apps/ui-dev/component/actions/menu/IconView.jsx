import DescriptionFilled from "@elf-framework/icon/DescriptionFilled";
import { Grid, Menu, VBox } from "@elf-framework/ui";

export function IconView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",

          padding: "60px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Menu
            items={[
              {
                type: "item",
                icon: <DescriptionFilled />,
                title: "Document Setup",
              },
              { type: "item", title: "Settings" },
              {
                type: "item",
                title: "Copy",
                items: [{ type: "item", title: "Document Setup" }],
              },
            ]}
            style={{
              position: "relative",
            }}
          />
        </div>
      </VBox>
      <div>
        <p>
          A menu item can include an icon, but not purely for decoration. Use an
          icon only when necessary and when it has a strong association with the
          label text (e.g., tool switching options in a toolbar).
        </p>
      </div>
    </Grid>
  );
}
