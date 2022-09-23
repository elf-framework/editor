import { useSyncExternalStore } from "@elf-framework/sapa";

export function useScrollStatus() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("scroll", callback);

      return () => {
        window.removeEventListener("scroll", callback);
      };
    },
    () =>
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
  );
}
