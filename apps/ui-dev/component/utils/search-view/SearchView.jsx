import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import {
  hydrate,
  start,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSetStoreValue,
} from "@elf-framework/sapa";

import "./SearchView.scss";

export function SearchView() {
  const autoRef = useRef(null);
  const previewRef = useRef(null);
  const initState = useRef({});
  const setOpenSearchView = useSetStoreValue("open.search.view");

  const handleClose = useCallback(() => {
    setOpenSearchView(false);
  }, [setOpenSearchView]);

  const searchLinks = useMemo(() => {
    return {
      sourceId: "links",
      onSelect({ item }) {
        hydrate(
          <div>
            {item.label}-{item.url}
          </div>,
          previewRef.current
        );
      },
      onActive({ item }) {
        hydrate(
          <div>
            {item.label}-{item.url}
          </div>,
          previewRef.current
        );
      },
      getItems({ query }) {
        const items = [
          { label: "Twitter", url: "https://twitter.com" },
          { label: "GitHub", url: "https://github.com" },
        ];

        return new Promise((resolve) => {
          resolve(
            items.filter(({ label }) =>
              label.toLowerCase().includes(query.toLowerCase())
            )
          );
        });
      },
      getItemUrl({ item }) {
        return item.url;
      },
      templates: {
        header() {
          return (
            <div class="search-result-header">
              <div class="search-result-label">Links</div>
            </div>
          );
        },
        item({ item }) {
          return (
            <div class="search-result-item">
              <div class="search-result-label">{item.label}</div>
            </div>
          );
        },
        noResults() {
          return <div class="search-no-result">No results</div>;
        },
      },
    };
  }, [previewRef]);

  useEffect(() => {
    if (!autoRef.current) return;

    autocomplete({
      // 초기 상태 적용
      initialState: initState.current,
      onStateChange({ state }) {
        // 변경된 상태 캐쉬
        initState.current = state;
      },
      renderer: {
        // eslint-disable-next-line no-undef
        createElement: createElementJsx,
        // eslint-disable-next-line no-undef
        Fragment: FragmentInstance,
        render: start,
      },
      container: "#autocomplete",
      panelContainer: ".search-view-content-list",
      placeholder: "Search for elf framework",
      panelPlacement: "full-width",
      autoFocus: true,
      openOnFocus: true,
      getSources() {
        return [searchLinks];
      },
    });
  }, [autoRef, previewRef, initState, searchLinks]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div class="search-view-overlay">
      <div class="search-view">
        <div class="search-view-top">
          <div class="search-view-title">Search</div>
          <div class="search-view-input" id="autocomplete" ref={autoRef}></div>
          <div class="search-view-close" onClick={handleClose}>
            Close
          </div>
        </div>
        <div class="search-view-content">
          <div class="search-view-content-list"></div>
          <div class="search-view-content-preview" ref={previewRef}></div>
        </div>
        <div class="search-view-bottom">
          <div class="search-view-bottom-left">
            <kbd>↵</kbd> to select <kbd>↓</kbd> <kbd>↑</kbd> to navigate{" "}
            <kbd>esc</kbd> to close
          </div>
          <div class="search-view-bottom-right">Search by elf-framework</div>
        </div>
      </div>
    </div>
  );
}
