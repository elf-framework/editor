import * as icons from "@elf-framework/icon";
import { VirtualScroll, VirtualScrollItem } from "@elf-framework/ui";

const list = {};

Object.keys(icons).forEach((key) => {
  const name = key.replace("Filled", "").replace("Outlined", "");

  if (!list[name]) {
    list[name] = {};
  }

  if (key.includes("Filled")) {
    // eslint-disable-next-line import/namespace
    list[name].filled = icons[key];
  } else if (key.includes("Outlined")) {
    // eslint-disable-next-line import/namespace
    list[name].outlined = icons[key];
  }
});

function IconView({ Filled, Outlined, key }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        fontSize: 12,
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      {Filled && (
        <div>
          <Filled /> {`<${key}Filled />`}
        </div>
      )}
      {Outlined && (
        <div>
          <Outlined /> {`<${key}Outlined />`}
        </div>
      )}
    </div>
  );
}

function itemRenderer(item, top) {
  return <VirtualScrollItem top={top}>{item.content}</VirtualScrollItem>;
}

const iconList = Object.keys(list).map((key, index) => {
  const { filled: Filled, outlined: Outlined } = list[key];
  return {
    index,
    content: (
      <IconView Filled={Filled} Outlined={Outlined} key={key} index={index} />
    ),
  };
});

export function IconListView() {
  return (
    <div style={{ height: 500, width: "100%", position: "relative" }}>
      <div
        style={{ position: "absolute", left: 0, right: 0, bottom: 0, top: 0 }}
      >
        <VirtualScroll
          // ref="$scroll"
          class="my-scroll"
          itemHeight={50}
          overscanRowCount={50}
          items={iconList}
          itemRenderer={itemRenderer}
        />
      </div>
    </div>
  );
}
