import { useEffect, useState } from "@elf-framework/sapa";
import { ProgressBar, VBox } from "@elf-framework/ui";

export function MainView() {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   let id;
  //   setTimeout(() => {
  //     id = setInterval(() => {
  //       setValue((value) => {
  //         const newValue = Math.max(0, Math.min(value + 1, 100));

  //         if (newValue === 100) {
  //           clearInterval(id);
  //         }
  //         return newValue;
  //       });
  //     }, 10);
  //   }, 1000);

  //   return () => {
  //     if (id) clearInterval(id);
  //   };
  // }, []);

  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 240,
          gap: 30,
        }}
      >
        <div>
          <ProgressBar
            title="Loading data..."
            value={value}
            valueText={`${value}%`}
          />
        </div>
      </div>
    </VBox>
  );
}
