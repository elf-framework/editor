import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import { VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        padding: "30px 10px",
        textAlign: "center",
        gap: 20,
      }}
    >
      <VBox style={{ gap: 10 }}>
        <em>Desktop (18px)</em>
        <div
          style={{
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--color-blue-0)",
            border: `1px solid var(--color-blue-4)`,
            backgroundImage:
              "repeating-linear-gradient(to right, transparent, transparent 4.95%, var(--color-blue-4) 4.95%, var(--color-blue-4) calc(4.95% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 4.95%, var(--color-blue-4) 4.95%, var(--color-blue-4) calc(4.95% + 1px))",
          }}
        >
          <AddCardFilled width={100} />
        </div>
      </VBox>

      <VBox style={{ gap: 10 }}>
        <em>Mobile (22px)</em>
        <div
          style={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--color-blue-0)",
            border: `1px solid var(--color-blue-4)`,
            backgroundImage:
              "repeating-linear-gradient(to right, transparent, transparent 4.45%, var(--color-blue-4) 4.45%, var(--color-blue-4) calc(4.45% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 4.45%, var(--color-blue-4) 4.45%, var(--color-blue-4) calc(4.45% + 1px))",
          }}
        >
          <AddCardFilled width={110} />
        </div>
      </VBox>
    </div>
  );
}
