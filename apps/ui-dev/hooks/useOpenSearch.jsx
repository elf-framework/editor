import { useCallback, useEffect, useSetStoreValue } from "@elf-framework/sapa";

export function useOpenSearch() {
  const setOpenSearchView = useSetStoreValue("open.search.view");

  const showSearchView = useCallback(() => {
    setOpenSearchView(true);
  }, [setOpenSearchView]);

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
