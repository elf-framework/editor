import { CheckboxGroup, Grid, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
      }}
    >
      <Grid columns={2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            fontSize: 20,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Interests *</em>

          <CheckboxGroup
            direction="vertical"
            value={[10]}
            options={[
              { value: 10, label: "Travel" },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
            fontSize: 20,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Interests *</em>
          <CheckboxGroup
            direction="vertical"
            variant="dark"
            value={[10]}
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
