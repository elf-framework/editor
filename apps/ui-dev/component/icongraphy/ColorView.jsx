import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import { Grid, VBox } from "@elf-framework/ui";

export function ColorView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 10px",
        textAlign: "center",
      }}
    >
      <VBox style={{ gap: 10 }}>
        <Grid
          columns={3}
          style={{
            width: 200,
            padding: "0px 20px",
          }}
        >
          <span>Default</span>
          <span>Hover</span>
          <span>Disabled</span>
        </Grid>
        <Grid
          columns={3}
          style={{
            width: 200,
            padding: "10px 20px",
            backgroundColor: "var(--color-white)",
            color: "var(--color-black)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "var(--color-gray-6)" }}>
            <AddCardFilled width={40} />
          </span>
          <span style={{ color: "var(--color-gray-9)" }}>
            <AddCardFilled width={40} />
          </span>
          <span style={{ color: "var(--color-text-disabled)" }}>
            <AddCardFilled width={40} />
          </span>
        </Grid>
        <Grid
          columns={3}
          style={{
            width: 200,
            padding: "10px 20px",
            backgroundColor: "var(--color-black)",
            color: "var(--color-gray-9)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "var(--color-gray-3)" }}>
            <AddCardFilled width={40} />
          </span>
          <span style={{ color: "var(--color-white)" }}>
            <AddCardFilled width={40} />
          </span>
          <span style={{ color: "var(--color-text-disabled)" }}>
            <AddCardFilled width={40} />
          </span>
        </Grid>
      </VBox>
    </div>
  );
}
