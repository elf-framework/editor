import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Layer, VirtualScroll } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

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

function addItems() {
  items = items.concat({
    content: `Hello World ${items.length}`,
    index: items.length,
    selected: false,
    lock: false,
    visible: true,
    topLevel: true,
    isComponent: false,
  });
}

function makeIconDom() {
  return <AddChartFilled width="40" height="40" />;
}

function itemRenderer(item, top, renderIndex, items, virtualScroll) {
  return (
    <Layer
      ref={"layer-" + renderIndex}
      top={top}
      icon={makeIconDom("artboard", renderIndex)}
      selected={selections.includes(item.index)}
      lock={item.index % 3 === 0}
      visible={item.visible}
      topLevel={item.topLevel}
      visibleIcon={makeIconDom("visible", renderIndex)}
      lockIcon={makeIconDom("lock", renderIndex)}
      lockOpenIcon={makeIconDom("lock_open", renderIndex)}
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

function MakeText(props) {
  return `${props.text}`;
}

function MakeButton(props) {
  const { onChange } = props;
  this.useMounted(() => {
    console.log(this.$el.rect());
  });
  return (
    <button
      onClick={() => {
        addItems();
        onChange?.();
        this.parent.trigger("yellow");
      }}
    >
      Add Items
    </button>
  );
}

start(function () {
  const onChange = this.createFunction("onChange", () => {
    this.refresh();
  });

  return (
    <div>
      <div style={{ width: 300, height: 500, position: "relative" }}>
        <VirtualScroll
          // ref="$scroll"
          class="my-scroll"
          itemHeight={32}
          overscanRowCount={30}
          items={items}
          itemRenderer={itemRenderer}
        />
      </div>
      <MakeButton onChange={onChange} />
      <MakeText text="Hello World" />
      <>
        <div>1</div>
        <div>2</div>
      </>
    </div>
  );
});
