import {
  ActionGroup,
  Badge,
  Button,
  Dialog,
  Grid,
  VBox,
} from "@elf-framework/ui";

export function CustomFooterView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
              footer={
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    borderTop: "1px solid var(--color-gray-1)",
                    paddingTop: 20,
                    marginTop: 20,
                  }}
                >
                  <Badge variant="informative">Sample text</Badge>
                  <ActionGroup style={{ gap: 10 }}>
                    <Button variant="dark" outline>
                      Cancel
                    </Button>
                    <Button variant="dark">OK</Button>
                  </ActionGroup>
                </div>
              }
            >
              Smart filters are nondestructive
            </Dialog>
          </div>
        </div>
      </VBox>
      <div>
        <p>Dialogs can have custom footer.</p>
        <p>
          The footer is placed at the bottom of the dialog, and is always
          visible.
        </p>
      </div>
    </Grid>
  );
}
