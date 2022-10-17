import { Dialog, Grid, VBox } from "@elf-framework/ui";

export function ClosableView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [50, 50],
          justifyContent: "center",
          alignItems: "center",
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
