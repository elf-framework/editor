import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import { Layer, VirtualScroll } from "@elf-framework/ui";

const selections = [];

let items = [...new Array(1000)].map((it, index) => {
  return {
    content: `Hello World ${index}`,
    index,
    selected: false,
    lock: false,
    visible: true,
    topLevel: true,
    isComponent: false,
  };
});

function itemRenderer(item, top, renderIndex, items, virtualScroll) {
  return (
    <Layer
      ref={"layer-" + renderIndex}
      top={top}
      icon={<AddChartFilled width="40" height="40" />}
      selected={selections.includes(item.index)}
      lock={item.index % 3 === 0}
      visible={item.visible}
      topLevel={item.topLevel}
      visibleIcon={<AddChartFilled width="40" height="40" />}
      lockIcon={<AddChartFilled width="40" height="40" />}
      lockOpenIcon={<AddChartFilled width="40" height="40" />}
      isComponent={item.isComponent}
      onClick={() => {
        if (selections.includes(item.index)) {
          selections.splice(selections.indexOf(item.index), 1);
        } else {
          selections.push(item.index);
        }

        virtualScroll.refreshItems();
      }}
    >
      {item.content}
    </Layer>
  );
}

export function TreeView() {
  return (
    <VirtualScroll
      // ref="$scroll"
      class="editor-treeview"
      itemHeight={32}
      overscanRowCount={30}
      items={items}
      itemRenderer={itemRenderer}
    />
  );
}
