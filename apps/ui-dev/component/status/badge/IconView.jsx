import CheckCircleFilled from "@elf-framework/icon/CheckCircleFilled";
import { Badge, Grid, VBox } from "@elf-framework/ui";

export function IconView() {
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
              <em>With icon</em>
            </div>
            <Badge variant="positive" size="small">
              <CheckCircleFilled /> Licensed
            </Badge>
          </div>

          <div>
            <div>
              <em>Without icon</em>
            </div>
            <Badge variant="positive" size="small">
              Licensed
            </Badge>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            A badge can have an optional icon. If no label is used, a badge
            becomes icon-only and it must include an icon. An icon-only badge is
            best for very small spaces, and it should always include a tooltip
            on hover to provide more context for the icon's meaning.
          </p>
        </p>
      </div>
    </Grid>
  );
}
