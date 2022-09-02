import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import {
  CheckboxGroup,
  Grid,
  HelpText,
  RadioGroup,
  VBox,
} from "@elf-framework/ui";

export function ErrorView() {
  return (
    <Grid columns={2} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 50] }}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <div>&nbsp;</div>
            <RadioGroup
              direction="vertical"
              value={10}
              variant="danger"
              options={[
                { value: 10, label: "Travel" },
                { value: 20, label: "Music" },
                { value: 30, label: "Shopping" },
              ]}
              onChange={(e, values) => console.log(values)}
            />
            <HelpText icon={<WarningOutlined />} variant="danger">
              Please select at least one interest
            </HelpText>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Radio groups can be marked as having an error to show that a selection
          needs to be made in order to move forward, or that a selection that
          was made is invalid. The error is indicated with negative help text,
          along with an icon.
        </p>
      </div>
    </Grid>
  );
}
