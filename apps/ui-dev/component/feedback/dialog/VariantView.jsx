import {
  ActionGroup,
  Dialog,
  Ghost,
  RoundButton,
  VBox,
} from "@elf-framework/ui";

export function VariantView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [100, 40],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
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
                <RoundButton variant="dark">Rate now</RoundButton>
              </ActionGroup>
            </div>
          }
        >
          Smart filters are nondestructive
        </Dialog>
      </div>
    </VBox>
  );
}
