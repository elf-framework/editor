import { Switch, Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [60, 80],
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <em style={{ display: "inline-block", width: 100 }}>Small</em>
            <Switch size="small" checked>
              Label
            </Switch>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <em style={{ display: "inline-block", width: 100 }}>Medium</em>
            <Switch size="medium" checked>
              Label
            </Switch>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <em style={{ display: "inline-block", width: 100 }}>Large</em>
            <Switch size="large" checked>
              Label
            </Switch>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <em style={{ display: "inline-block", width: 100 }}>Extra large</em>
            <Switch size="extra-large" checked>
              Label
            </Switch>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          Switches come in four different sizes: small, medium, large, and
          extra-large. The medium size is the default and most frequently used
          option. Use the other sizes sparingly; they should be used to create a
          hierarchy of importance within the page.
        </p>
      </div>
    </Grid>
  );
}
