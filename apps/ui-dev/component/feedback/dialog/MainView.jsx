import { Dialog, VBox } from "@elf-framework/ui";

function AlertDialog(props) {
  return <Dialog {...props} noBorder />;
}

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        position: "relative",
        height: 300,
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
        }}
      >
        <AlertDialog
          visible={true}
          style={{
            width: 400,
          }}
        >
          <div>
            The following typefaces are not available. Please either install
            these on your computer or in Figma. Alternatively you can replace
            them with other fonts.
          </div>
        </AlertDialog>
      </div>
    </VBox>
  );
}