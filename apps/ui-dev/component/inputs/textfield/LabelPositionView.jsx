import { Grid, TextField, VBox } from "@elf-framework/ui";

export function LabelPositionView() {
  return (
    <Grid columns={1} gap={30}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <TextField label="Email address" value="xxx@elf-framework.com" />
            <TextField type="password" label="Password" value="password" />
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexDirection: "column",
            }}
          >
            <TextField
              type="number"
              position="horizontal"
              label="Columns"
              value={12}
            />
            <TextField
              type="number"
              position="horizontal"
              label="Gutter width"
              value={30}
            />
            <TextField
              type="number"
              position="horizontal"
              label="Column width"
              value={100}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Labels can be placed either on top or on the side. Top labels are
            the default and are recommended because they work better with long
            copy, localization, and responsive layouts. Side labels are most
            useful when vertical space is limited.
          </p>
        </p>
      </div>
    </Grid>
  );
}
