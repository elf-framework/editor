import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        backgroundColor: "red",
      }}
    >
      <PanZoom>Hello World yellow 234</PanZoom>
    </div>
  );
});
