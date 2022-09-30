import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import { Grid } from "@elf-framework/ui";

export function IconView() {
  return (
    <div class="bold-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Metaphors</strong>
          <div style={{ padding: 10 }}>
            <p>
              icon metaphors are clear, strong, and additive to experiences.
              They describe tools and topics as simply and accurately as
              possible.
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
            <button
              type="button"
              style={{
                backgroundColor: "var(--color-action-primary)",
                color: "var(--color-black)",
                border: 0,
                borderRadius: 25,
                padding: "10px 20px",
                fontWeight: "900",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
              }}
            >
              <AddCardFilled />
              <AddChartFilled />
              Welcome
            </button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
