import { Dialog, Grid, VBox } from "@elf-framework/ui";

export function ClosableView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              textAlign: "center",
            }}
          >
            <Dialog
              visible={true}
              style={{
                width: 300,
              }}
              okProps={{
                variant: "dark",
                outline: true,
              }}
              title="Title"
            >
              Smart filters are nondestructive
            </Dialog>
          </div>
        </div>
      </VBox>
      <div>
        <p>Dialogs can be canceled.</p>
      </div>
    </Grid>
  );
}
