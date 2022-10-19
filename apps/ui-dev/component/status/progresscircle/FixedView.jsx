import CheckCircleFilled from "@elf-framework/icon/CheckCircleFilled";
import { Badge, Grid, VBox } from "@elf-framework/ui";

import { ucwords } from "~/utils/ucwords";

export function FixedView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 50,
            padding: [0, 40],
            justifyContent: "center",
          }}
        >
          {["none", "top", "right", "bottom", "left"].map((placement) => {
            return (
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div style={{ flex: "1 1 auto" }}>
                  <em>{ucwords(placement)}</em>
                </div>
                <div
                  class="fixed-area"
                  style={{
                    position: "relative",
                    flex: "none",
                    width: 180,
                    height: 100,
                    borderRadius: 4,
                    backgroundColor: "var(--color-gray-2)",
                  }}
                >
                  <Badge variant="positive" fixed={true} placement={placement}>
                    <CheckCircleFilled /> Traveling
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>
      </VBox>
      <div>
        <p>
          Tags have a read-only option for when content in the disabled state
          still needs to be shown. This allows for content to be copied, but not
          interacted with or changed.
        </p>
      </div>
    </Grid>
  );
}
