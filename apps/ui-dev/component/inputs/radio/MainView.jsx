import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { Grid, HelpText, RadioGroup, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 100],
        position: "relative",
      }}
    >
      <Grid columns={2} style={{ gap: 50 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 13,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Size *</em>
          <RadioGroup
            direction="vertical"
            value={10}
            options={[
              { value: 10, label: "Small" },
              { value: 20, label: "Medium" },
              { value: 30, label: "Large" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
          <HelpText>Select a product size</HelpText>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 13,
          }}
        >
          <em style={{ color: "var(--color-gray-5)" }}>Size *</em>
          <RadioGroup
            direction="vertical"
            variant="dark"
            value={10}
            options={[
              { value: 10, label: "Small" },
              { value: 20, label: "Medium" },
              { value: 30, label: "Large" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
          <HelpText variant="danger" icon={<WarningOutlined />}>
            Select a product size
          </HelpText>
        </div>
      </Grid>
    </VBox>
  );
}
