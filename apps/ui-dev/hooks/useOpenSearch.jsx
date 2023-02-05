import { useCallback, useEffect, useSetStoreValue } from "@elf-framework/sapa";

const formElements = ["TEXTAREA", "INPUT", "SELECT"];
function isNotFormElement(e) {
  var tagName = e.target.tagName;

  if (formElements.includes(tagName)) return false;
  else if (e.target.getAttribute("contenteditable") === "true") return false;

  return true;
}

export function useOpenSearch() {
  const setOpenSearchView = useSetStoreValue("open.search.view");

  const showSearchView = useCallback(() => {
    setOpenSearchView(true);
  }, [setOpenSearchView]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isNotFormElement(e)) {
        if (e.code === "KeyK") {
          e.preventDefault();
          e.stopPropagation();
          showSearchView();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearchView]);
}
