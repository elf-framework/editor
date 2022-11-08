import { Grid, RadioGroup, VBox } from "@elf-framework/ui";

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
          <RadioGroup
            direction="vertical"
            value={10}
            disabled
            options={[
              { value: 10, label: "Travel" },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </div>
      </Grid>
    </VBox>
  );
}
