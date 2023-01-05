import {
  useBatch,
  useCallback,
  useEffect,
  useMemo,
  useSetStoreValue,
  useState,
} from "@elf-framework/sapa";
import { Badge, InputEditor } from "@elf-framework/ui";

import "./SearchView.scss";

import { searchData } from "~/data/search";

console.log(searchData);

export function SearchView({ query = "" }) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const setOpenSearchView = useSetStoreValue("open.search.view");

  const handleClose = useCallback(() => {
    setOpenSearchView(false);
  }, [setOpenSearchView]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, []);

  const searchList = useMemo(() => {
    const targetQuery = searchQuery.toLowerCase();
    return searchData.filter(({ title, description, path }) => {
      return (
        title.toLowerCase().includes(targetQuery) ||
        description?.toLowerCase().includes(targetQuery) ||
        path.includes(targetQuery)
      );
    });
  }, [searchQuery]);

  const currentLink = useMemo(() => {
    return searchList[selectedIndex];
  }, [searchList, selectedIndex]);

  const handleSelectItem = useCallback(
    (index) => {
      setSelectedIndex(index);

      setTimeout(() => {
        const selected = document.querySelector(".search-item.selected");

        if (selected) {
          selected.classList.remove("selected");
        }

        const input = document.querySelector(
          `.search-item[data-index='${index}']`
        );

        input?.classList.add("selected");

        input?.scrollIntoView({ block: "center" });
      }, 10);
    },
    [setSelectedIndex]
  );

  const handleInput = (e) => {
    if (e.key === "ArrowDown") {
      handleSelectItem(selectedIndex + 1);
    } else if (e.key === "ArrowUp") {
      handleSelectItem(Math.max(-1, selectedIndex - 1));
    } else if (e.key === "Enter") {
      if (currentLink.path) {
        location.assign(currentLink.path);
      }
    } else {
      useBatch(() => {
        console.log(e.target.value);
        setSearchQuery(e.target.value);
        setSelectedIndex(-1);
      });
    }
  };

  console.log(this.id);

  return (
    <div class="search-view-overlay">
      <div class="search-view">
        <div class="search-view-top">
          <div class="search-view-title">Search</div>
          <div class="search-view-input" id="autocomplete">
            <InputEditor
              type="text"
              onKeyDown={handleInput}
              autoFocus
              autoFocusDelay={10}
              value={searchQuery}
            />
          </div>
          <div class="search-view-close" onClick={handleClose}>
            Close
          </div>
        </div>
        <div class="search-view-content">
          <div>
            <div
              class="search-view-content-list"
              onClick={(e) => {
                const index = +e.target
                  .closest("[data-index]")
                  .getAttribute("data-index");

                handleSelectItem(index);
              }}
            >
              {searchList.length === 0 ? (
                <div class="search-no-result">No results found</div>
              ) : undefined}
              {searchList.map((item, index) => {
                return (
                  <div
                    data-index={index}
                    class={`search-item ${
                      index === selectedIndex ? "selected" : ""
                    }`}
                  >
                    <div class="search-item-title">
                      <Badge variant="purple">{item.category}</Badge>
                      &nbsp;
                      {item.title}
                    </div>
                    <div class="search-item-path">{item.path}</div>
                    <div class="search-item-description">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div class="search-view-content-preview">
              {currentLink ? (
                <div>
                  <div class="search-view-content-preview-title">
                    <Badge variant="purple">{currentLink.category}</Badge>
                    &nbsp;
                    {currentLink.title}
                  </div>
                  <div class="search-view-content-preview-description">
                    {currentLink.content()}
                  </div>
                </div>
              ) : (
                <div class="search-view-content-preview-empty">
                  No preview available
                </div>
              )}
            </div>
          </div>
        </div>
        <div class="search-view-bottom">
          <div class="search-view-bottom-left">
            <kbd>↵</kbd> to select <kbd>↓</kbd> <kbd>↑</kbd> to navigate{" "}
            <kbd>esc</kbd> to close
          </div>
          <div class="search-view-bottom-right">
            Search by <Badge>ELF</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
