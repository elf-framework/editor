import { Dialog, Ghost, Grid, VBox } from "@elf-framework/ui";

export function TitleView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "50px 40px",
          justifyContent: "center",
          alignItems: "center",
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
              title="Dialog"
              closable={false}
              footer={<span />}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <Ghost style={{ width: "100%" }} />
                <Ghost style={{ width: "90%" }} />
              </div>
            </Dialog>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          All alert dialogs must have a title. The title appears in bold at the
          top of the dialog and uses a few words to convey the outcome of what
          will happen if a user continues with an action.
        </p>
      </div>
    </Grid>
  );
}
