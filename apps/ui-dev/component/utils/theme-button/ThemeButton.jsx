import DarkModeFilled from "@elf-framework/icon/DarkModeFilled";
import LightModeFilled from "@elf-framework/icon/LightModeFilled";
import { useEmit, useState, useSubscribe } from "@elf-framework/sapa";
import { RoundButton } from "@elf-framework/ui";

export function ThemeButton() {
  const mode = localStorage.getItem("view-mode") || "light";
  const [viewMode, setViewMode] = useState(mode);

  useSubscribe("view-mode", (mode) => {
    setViewMode(mode);
  });

  return (
    <div style={{ justifyContent: "flex-end" }}>
      {viewMode === "dark" ? (
        <RoundButton
          iconOnly
          quiet
          variant="dark"
          onClick={() => {
            setViewMode("light");
            useEmit("view-mode", "light");
            localStorage.setItem("view-mode", "light");
            document.body.classList.toggle("theme-dark", false);
          }}
        >
          <DarkModeFilled />
        </RoundButton>
      ) : (
        <RoundButton
          iconOnly
          quiet
          onClick={() => {
            setViewMode("dark");
            useEmit("view-mode", "dark");
            localStorage.setItem("view-mode", "dark");
            document.body.classList.toggle("theme-dark", true);
          }}
        >
          <LightModeFilled />
        </RoundButton>
      )}
    </div>
  );
}
