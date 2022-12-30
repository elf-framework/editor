import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import {
  hydrate,
  resetCurrentComponent,
  start,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useStoreSet,
} from "@elf-framework/sapa";

import "./SearchView.scss";

export function SearchView() {
  const autoRef = useRef(null);
  const previewRef = useRef(null);
  const [searchContent, setSearchContent] = useState("");

  const handleClose = useCallback(() => {
    resetCurrentComponent(this);
    useStoreSet("open.search.view", false);
  }, [useStoreSet]);

  const searchLinks = useMemo(() => {
    return {
      sourceId: "links",
      onSelect({ item }) {
        console.log(previewRef.current);
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
    autocomplete({
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
  }, [setSearchContent, previewRef, searchLinks]);

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
          <div class="search-view-content-preview" ref={previewRef}>
            {searchContent}
          </div>
        </div>
        <div class="search-view-bottom">
          <div class="search-view-bottom-left">Recent Searches</div>
          <div class="search-view-bottom-right">Recent Searches</div>
        </div>
      </div>
    </div>
  );
}
