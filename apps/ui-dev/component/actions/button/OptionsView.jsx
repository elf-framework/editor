import FilePresentFilled from "@elf-framework/icon/FilePresentFilled";
import { Grid, IconButton, RoundButton, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
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
      <div>
        <p>
          Buttons should always have a label, unless they are only using an icon
          that is universally understood and accessible. They can have an
          optional icon, but it should not be used for decoration. Use an icon
          only when necessary and when it has a strong association with the
          label text.
        </p>
        <p>
          The label can be hidden to create an icon-only button. If the label is
          hidden, an icon is required, and the label will appear in a tooltip.
        </p>
      </div>
    </Grid>
  );
}
