import FilePresentFilled from "@elf-framework/icon/FilePresentFilled";
import { Grid, IconButton, RoundButton, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 20 }}
    >
      <div>
        <Grid columns={[2, 1]} gap={20}>
          <label>With label and icon</label>
          <div>
            <RoundButton variant="primary">
              <FilePresentFilled /> Share
            </RoundButton>
          </div>
          <label>Without icon</label>
          <div>
            <RoundButton variant="primary">Share</RoundButton>
          </div>
          <label>With icon and label hidden</label>
          <div>
            <IconButton variant="primary">
              <FilePresentFilled />
            </IconButton>
          </div>
        </Grid>
      </div>
    </VBox>
  );
}
