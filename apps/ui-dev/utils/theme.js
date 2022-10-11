import darkTokens from "@elf-framework/design-tokens/tokens.dark.json";
import lightTokens from "@elf-framework/design-tokens/tokens.json";

export function getThemeTokens() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const tokens =
    localStorage.getItem("view-mode") === "dark" || isDarkMode
      ? darkTokens
      : lightTokens;
  return tokens;
}
