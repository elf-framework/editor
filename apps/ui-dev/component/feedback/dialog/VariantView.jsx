import {
  ActionGroup,
  Dialog,
  Ghost,
  Grid,
  RoundButton,
  VBox,
} from "@elf-framework/ui";

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
              closable={false}
              title={<Ghost width="100%" />}
            >
              Smart filters are nondestructive
            </Dialog>

            <Dialog
              visible={true}
              style={{
                width: 300,
              }}
              closable={false}
              okProps={{
                variant: "danger",
              }}
              okText="Delete"
              title={<Ghost width="100%" />}
            >
              Smart filters are nondestructive
            </Dialog>

            <Dialog
              visible={true}
              style={{
                width: 300,
              }}
              closable={false}
              okProps={{
                variant: "dark",
                outline: true,
              }}
              title={<Ghost width="100%" />}
            >
              Smart filters are nondestructive
            </Dialog>

            <Dialog
              visible={true}
              style={{
                width: 300,
              }}
              closable={false}
              okProps={{
                variant: "dark",
                outline: true,
              }}
              title={<Ghost width="100%" />}
              footer={
                <div>
                  <ActionGroup
                    direction="vertical"
                    style={{
                      textAlign: "right",
                      alignItems: "flex-end",
                    }}
                  >
                    <RoundButton>No, thanks</RoundButton>
                    <RoundButton>Remind me later</RoundButton>
                    <RoundButton variant="dark" outline>
                      Rate now
                    </RoundButton>
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
        <p>
          This is the default variant for alert dialogs. Use a confirmation
          variant for asking a user to confirm a choice. This alert dialog has
          an accent button to highlight a strong preference for which action to
          take.
        </p>
      </div>
    </Grid>
  );
}
