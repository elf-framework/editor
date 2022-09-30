import { Dialog, Ghost, Grid, VBox } from "@elf-framework/ui";

export function DescriptionView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
          height: 280,
        }}
      >
        <div>
          <div style={{ position: "relative", textAlign: "center" }}>
            <Dialog
              visible={true}
              noBorder
              style={{
                width: 300,
              }}
              closable={false}
              title={<Ghost width="100%" />}
              footer={<span />}
            >
              The following typefaces are not available. Please either install
              these on your computer or in Figma. Alternatively you can replace
              them with other fonts.
            </Dialog>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          Alert dialogs can include a description. A description briefly
          communicates any additional information or context that a user needs
          to know in order to make one of the decisions offered by the buttons.
        </p>
      </div>
    </Grid>
  );
}
