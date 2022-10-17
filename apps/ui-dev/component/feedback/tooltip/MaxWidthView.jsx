import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Grid, Tooltip, VBox } from "@elf-framework/ui";

function Item({ variant, icon }) {
  return (
    <Tooltip
      variant={variant}
      icon={icon}
      message={[
        <div style={{ whiteSpace: "pre-wrap" }}>
          Your admin must grant you permission to create segments
        </div>,
      ]}
      placement="top"
      show
      style={{
        maxWidth: 160,
      }}
    />
  );
}

export function MaxWidthView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [120, 40],
          height: 200,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 70,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Item variant="default" icon={<InfoOutlined />} />
        </div>
      </VBox>
      <div>
        <p>
          By default, the maximum width of a tooltip is size-2000 (160 px on
          desktop, 200 px on mobile). This can be customized to better fit your
          context.
        </p>
      </div>
    </Grid>
  );
}
