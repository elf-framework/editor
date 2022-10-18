import { useEffect, useEmit } from "@elf-framework/sapa";

function changeTheme(mode) {
  if (mode === "light") {
    document.body.classList.toggle("theme-dark", false);
  } else {
    document.body.classList.toggle("theme-dark", true);
  }
}

export function useTheme() {
  useEffect(() => {
    const media =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mode = media ? "dark" : localStorage.getItem("view-mode") || "light";

    changeTheme(mode);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const mode = event.matches ? "dark" : "light";

        useEmit("view-mode", mode);
        localStorage.setItem("view-mode", mode);
        changeTheme(mode);
      });
  }, []);
}
