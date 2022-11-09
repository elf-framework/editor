import { Switch, Grid, VBox } from "@elf-framework/ui";

export function WithLabelView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 100] }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            gap: 10,
          }}
        >
          <div>&nbsp;</div>
          <div>
            Default &nbsp;
            <Switch checked withLabel labels={["OFF", "ON"]} />
          </div>

          <div>
            Small &nbsp;
            <Switch
              size="small"
              checked
              withLabel
              variant={"primary"}
              labels={["OFF", "ON"]}
            />
          </div>
          <div>
            Medium &nbsp;
            <Switch
              checked
              withLabel
              variant={"primary"}
              labels={["OFF", "ON"]}
            />
          </div>

          <div>
            Large &nbsp;
            <Switch
              size="large"
              checked
              withLabel
              variant={"primary"}
              labels={["OFF", "ON"]}
            />
          </div>

          <div>
            Extra large &nbsp;
            <Switch
              size="extra-large"
              checked
              withLabel
              variant={"primary"}
              labels={["OFF", "ON"]}
            />
          </div>
        </div>
      </Grid>
    </VBox>
  );
}
