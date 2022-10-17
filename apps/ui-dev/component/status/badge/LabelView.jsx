import CheckCircleFilled from "@elf-framework/icon/CheckCircleFilled";
import { Badge, Grid, VBox } from "@elf-framework/ui";

export function LabelView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <div>
            <div>
              <em>With label</em>
            </div>
            <Badge variant="positive">
              <CheckCircleFilled /> Traveling
            </Badge>
          </div>

          <div>
            <div>
              <em>Without label</em>
            </div>
            <Badge variant="positive">
              <CheckCircleFilled />
            </Badge>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Badges should always have a label for accessibility and clear
            comprehension. When the label is not defined, a badge becomes
            icon-only.
          </p>
        </p>
      </div>
    </Grid>
  );
}
