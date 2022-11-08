import { useCallback, useState } from "@elf-framework/sapa";
import { Slider, VBox } from "@elf-framework/ui";

export function MainView() {
  const [value, setValue] = useState(0);
  const onInput = useCallback(
    (v) => {
      setValue(v);
    },
    [setValue]
  );
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
          width: "100%",
        }}
      >
        <Slider
          min={0}
          max={10000}
          step={20}
          value={value}
          onInput={onInput}
          valuePlacement="top"
          label={"Contrast"}
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          value={value}
          onInput={onInput}
          valuePlacement="top"
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          value={value}
          onInput={onInput}
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />

        <Slider
          min={0}
          max={10000}
          step={20}
          value={value}
          onInput={onInput}
          valuePlacement="bottom"
          showValue
          // eslint-disable-next-line no-undef
          valueFunc={(v) => new Intl.NumberFormat().format(v)}
        />
      </div>
    </VBox>
  );
}
