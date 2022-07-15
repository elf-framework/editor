import { format, parse } from "@elf-framework/color";

interface ColorViewProps {
  color: string;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

export function ColorView({ color }: ColorViewProps) {
  const parsedColor = parse(color) as RGB;
  const { r, g, b } = parsedColor;

  return (
    <div className="elf--color-view">
      <div
        className="elf--color-view-color"
        style={{ backgroundColor: format({ r, g, b }, "rgb") }}
      />
      <div className="elf--color-view-opacity-pattern">
        <div
          className="elf--color-view-opacity"
          style={{ backgroundColor: format(parsedColor, "rgb") }}
        />
      </div>
    </div>
  );
}
