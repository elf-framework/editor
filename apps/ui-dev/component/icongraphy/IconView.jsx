import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import { Button, Grid } from "@elf-framework/ui";

export function IconView() {
  return (
    <div class="bold-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Metaphors</strong>
          <div style={{ padding: 10 }}>
            <p>
              The metaphor of the icon is clear, powerful, and empirical.
              Briefly and accurately describe the tools and topics as follows:
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 150,
            }}
          >
            <Button quiet>
              <AddCardFilled />
              <AddChartFilled />
              Welcome
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
