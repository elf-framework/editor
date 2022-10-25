import { ColorMixer, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 50] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <ColorMixer
            color="red"
            disabled
            hideSlide
            hideInput
            width={192}
            height={192}
          />
        </div>
      </Grid>
    </VBox>
  );
}
