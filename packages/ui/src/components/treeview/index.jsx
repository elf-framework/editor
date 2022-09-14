import {
  classnames,
  Dom,
  UIElement,
  useCallback,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { VirtualScroll } from "../virtual-scroll";

const cssProperties = makeCssVariablePrefixMap("--elf--treeview", {
  backgroundColor: true,
  backgroundImage: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true,
});

function itemRenderer(
  item,
  top,
  renderIndex,
  {
    onSelect,
    selectionStyle,
    renderActions,
    renderArrow,
    onToggle,
    renderContext,
    draggable,
  }
) {
  const { data, depth } = item;

  const arrow = renderArrow?.(item);
  const contextView = renderContext?.(item);
  const actions = renderActions?.(item);

  return (
    <div
      class={classnames("elf--treeview-item", {
        selected: data.selected && selectionStyle === "highlight",
      })}
      data-depth={depth}
      key={renderIndex}
      draggable={draggable ? true : undefined}
      style={{
        "--elf--virtual-scroll-item-top": `${top}px`,
        "--elf--treeview-item-depth": depth,
      }}
    >
      {draggable ? <div class="drag-handle">{"\u22EE"}</div> : undefined}
      {selectionStyle === "checkbox" ? (
        <div class="checkbox-area">
          <input
            type="checkbox"
            {...{
              checked: data.selected ? "checked" : undefined,
            }}
            onClick={() => onSelect(item)}
          />
        </div>
      ) : undefined}
      <div class="depth-area"></div>
      {data.children ? (
        <div
          class="collapse-area"
          onClick={() => {
            onToggle(item);
          }}
        >
          <div
            class={classnames({
              collapsed: data.collapsed,
            })}
          >
            {arrow || <span>&rsaquo;</span>}
          </div>
        </div>
      ) : undefined}
      {contextView ? <div class="context-area">{contextView}</div> : undefined}
      <label class="label-area" onClick={() => onSelect(item)}>
        {data.label}
      </label>
      {actions ? <div class="actions-area">{actions}</div> : undefined}
    </div>
  );
}

function treeToList(items = [], depth = 0, command = { index: 0 }) {
  const result = [];

  items.forEach((it) => {
    result.push({ data: it, depth, index: command.index });
    command.up();
    if (!it.collapsed && it.children) {
      result.push(...treeToList(it.children, depth + 1, command));
    }
  });

  return result;
}

export class TreeView extends UIElement {
  initState() {
    const { items } = this.props;

    return {
      originalItems: items,
      items: this.updateItems(items),
      isInDraggable: false,
    };
  }

  updateItems(items = this.state.originalItems) {
    return treeToList(items, 0, {
      index: 0,
      up() {
        this.index += 1;
      },
    });
  }

  template() {
    const {
      style,
      itemHeight = 32,
      overscanRowCount = 30,
      renderContext,
      selectionStyle = "highlight",
      renderActions,
      renderArrow,
      draggable = false,
      onClickNode,
      onToggleNode,
    } = this.props;
    const { items } = this.state;

    const localClass = useMemo(() => {
      return classnames("elf--treeview", {});
    }, []);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const itemRendererProps = {
      onSelect: useCallback(
        (item) => {
          onClickNode(item);
          this.setState({
            items: this.updateItems(),
          });
        },
        [onClickNode]
      ),
      onToggle: useCallback(
        (item) => {
          onToggleNode(item);
          this.setState({
            items: this.updateItems(),
          });
        },
        [onToggleNode]
      ),
      draggable,
      renderContext,
      selectionStyle,
      renderActions,
      renderArrow,
    };

    const onDrag = useCallback(() => {
      // console.log("drag", e.target);
    }, []);

    const onDragStart = useCallback((e) => {
      const $item = Dom.create(e.target).closest("elf--treeview-item");

      const itemRect = $item.rect();

      const ghost = $item.clone(true).el;
      ghost.style.position = "absolute";
      ghost.style.top = "auto";
      ghost.style.left = "0";
      ghost.style.width = `${itemRect.width}px`;
      ghost.style.height = `${itemRect.height}px`;
      ghost.style.opacity = 1;
      ghost.style.pointerEvents = "none";
      ghost.style.zIndex = 9999;
      ghost.classList.add("ghost");

      const ghostLeft = e.clientX - itemRect.left;
      const ghostTop = e.clientY - itemRect.top;

      document.body.appendChild(ghost);

      e.dataTransfer.setDragImage(ghost, ghostLeft, ghostTop);

      this.setState(
        {
          isInDraggable: true,
          startId: $item.attr("key"),
          rect: this.$el.rect(),
          ghost,
        },
        false
      );

      console.log("drag start", this.state.startId);
      e.target.style.opacity = 0.5;
      this.$el.addClass("dragging");
    }, []);

    const onDragEnd = useCallback((e) => {
      // console.log("drag end", e);
      Dom.create(this.state.ghost).remove();
      e.target.style.opacity = 1;
      this.$el.removeClass("dragging");
    }, []);

    const onDragEnter = useCallback(() => {
      // console.log("drag enter", e);
    }, []);

    const onDragOver = useCallback((e) => {
      e.preventDefault();
      const $item = Dom.create(e.target).closest("elf--treeview-item");
      this.setState(
        {
          endId: $item.attr("key"),
        },
        false
      );

      const rect = $item.rect();

      const rate = (e.clientY - rect.top) / (rect.bottom - rect.top);
      let top = rect.top;

      if (rate > 0.66) {
        top = rect.bottom;
      } else if (rate > 0.33) {
        top = rect.top + (rect.bottom - rect.top) / 2;
      }

      Dom.create(this.refs.$dragline).css({
        top: `${top - this.state.rect.top}px`,
      });

      console.log(
        "dragover",
        $item.rect(),
        this.state.isInDraggable,
        this.state.startId,
        this.state.endId
      );
    }, []);

    const onDragLeave = useCallback(() => {
      // console.log("drag leave", e);
    }, []);

    const onDrop = useCallback((e) => {
      e.preventDefault();
      this.setState(
        {
          isInDraggable: false,
          endId: Dom.create(e.target).closest("elf--treeview-item").attr("key"),
        },
        false
      );
      console.log(
        "drop",
        this.state.isInDraggable,
        this.state.startId,
        this.state.endId
      );
    }, []);

    const events = {
      droppable: true,
      onDrag,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
    };

    console.log("aaaaaaa");

    return (
      <div {...styleObject} {...events}>
        <VirtualScroll
          itemHeight={itemHeight}
          overscanRowCount={overscanRowCount}
          items={items}
          itemRenderer={(item, top, renderIndex) => {
            return itemRenderer(item, top, renderIndex, itemRendererProps);
          }}
        />
        <div class="drag-line" ref="$dragline">
          <div class="drag-line-inner left"></div>
          <div class="drag-line-inner right"></div>
        </div>
      </div>
    );
  }
}

registerComponent("treeview", TreeView);
registerComponent("tree-view", TreeView);
registerComponent("TreeView", TreeView);
