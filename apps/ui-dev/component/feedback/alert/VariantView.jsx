import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import WarningFilled from "@elf-framework/icon/WarningFilled";
import { Alert, Grid, VBox } from "@elf-framework/ui";

export function VariantView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
          }}
        >
          <Alert variant="dark" closable>
            Your trial has expired. Please purchase to continue.
          </Alert>
          <Alert icon={<InfoOutlined />} variant="primary" closable>
            Your trial has expired.
          </Alert>
          <Alert icon={<WarningFilled />} variant="danger" closable>
            Connect interrupted.
          </Alert>
        </div>
      </VBox>
      <div>
        <p>
          An alert banner always has a semantic meaning and uses semantic
          colors. Only gray (neutral), blue (informative), and red (negative)
          are available as options.
        </p>
      </div>
    </Grid>
  );
}
