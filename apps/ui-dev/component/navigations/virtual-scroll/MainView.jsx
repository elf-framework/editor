import FolderFilled from "@elf-framework/icon/FolderFilled";
import { VBox, VirtualScroll, VirtualScrollItem } from "@elf-framework/ui";

function itemRenderer(item, top) {
  return <VirtualScrollItem top={top}>{item.content}</VirtualScrollItem>;
}

const iconList = Array.from({ length: 100 }).map((_, index) => {
  return {
    index,
    content: (
      <div>
        <FolderFilled /> folder {index}
      </div>
    ),
  };
});

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        position: "relative",
        alignItems: "center",
        padding: [0, 100],
        height: 300,
      }}
    >
      <div style={{ height: "100%", width: "100%", position: "relative" }}>
        <div
          style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}
        >
          <VirtualScroll
            // ref="$scroll"
            class="my-scroll"
            itemHeight={32}
            overscanRowCount={5}
            items={iconList}
            itemRenderer={itemRenderer}
          />
        </div>
      </div>
    </VBox>
  );
}
