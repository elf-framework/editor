import {
  getCurrentComponent,
  resetCurrentComponent,
  useCallback,
  useEffect,
  useStoreSet,
} from "@elf-framework/sapa";

export function useOpenSearch() {
  const self = getCurrentComponent();

  const showSearchView = useCallback(() => {
    resetCurrentComponent(self);
    useStoreSet("open.search.view", true);
  }, [resetCurrentComponent, useStoreSet]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "KeyK") {
        e.preventDefault();
        e.stopPropagation();
        showSearchView();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearchView]);
}
