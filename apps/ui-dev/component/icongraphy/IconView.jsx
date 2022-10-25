import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import AddChartFilled from "@elf-framework/icon/AddChartFilled";

export function IconView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        fontSize: 30,
        gap: 4,
      }}
    >
      <AddCardFilled width={30} />
      <AddChartFilled width={30} />
      Welcome
    </div>
  );
}
