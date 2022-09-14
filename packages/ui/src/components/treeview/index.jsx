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
      key={data.id}
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
            onClick={() => onSelect(item, "checkbox")}
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
      ) : (
        <div class="collapse-area">&nbsp;</div>
      )}
      {contextView ? <div class="context-area">{contextView}</div> : undefined}
      <label class="label-area" onClick={() => onSelect(item, "highlight")}>
        {data.title}
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

  updateItems(items = []) {
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
      onDropNode,
      items: originalItems,
    } = this.props;
    const items = this.updateItems(originalItems);

    const localClass = useMemo(() => {
      return classnames("elf--treeview", {});
    }, []);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const itemRendererProps = {
      onSelect: useCallback(
        (item, style) => {
          // highlight 모드 일 때는 item 전체를 클릭하고 선택
          // checkbox 모드 일 때는 checkbox 영역을 클릭하고 선택
          if (style === selectionStyle) {
            onClickNode(item);
          }
        },
        [onClickNode]
      ),
      onToggle: useCallback(
        (item) => {
          onToggleNode(item);
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
      ghost.style.left = "-100000px";
      ghost.style.width = `${itemRect.width}px`;
      ghost.style.height = `${itemRect.height}px`;
      ghost.style.opacity = 1;
      ghost.style.pointerEvents = "none";
      ghost.style.zIndex = 9999;
      ghost.classList.add("ghost");

      const ghostLeft = e.clientX - itemRect.left;
      const ghostTop = e.clientY - itemRect.top;

      document.body.appendChild(ghost);

      e.dataTransfer.setDragImage(ghost, ghostLeft, -10);

      this.setState(
        {
          isInDraggable: true,
          startId: $item.attr("key"),
          rect: this.$el.rect(),
          ghost,
        },
        false
      );

      e.target.style.opacity = 0.5;
      this.$el.addClass("dragging");
    }, []);

    const onDragEnd = useCallback((e) => {
      // console.log("drag end", e);
      Dom.create(this.state.ghost).remove();
      e.target.style.opacity = 1;
      this.$el.removeClass("dragging");
      this.$el.removeClass("dragovered");
    }, []);

    const onDragEnter = useCallback(() => {
      // console.log("drag enter", e);
    }, []);

    const onDragOver = useCallback((e) => {
      e.preventDefault();
      this.$el.addClass("dragovered");
      const $item = Dom.create(e.target).closest("elf--treeview-item");

      if (!$item) {
        return;
      }

      const $depthArea = $item?.$(".depth-area");
      this.setState(
        {
          endId: $item.attr("key"),
        },
        false
      );

      // key 가 같으면 아무것도 변경하지 않는다.
      if (this.state.endId === this.state.startId) {
        return;
      }

      const rect = $item.rect();
      const depthRect = $depthArea.rect();
      const left = depthRect.right - rect.left;

      const rate = (e.clientY - rect.top) / (rect.bottom - rect.top);

      this.setState(
        {
          rate,
        },
        false
      );

      let top = rect.top;

      if (0.33 < rate && rate < 0.66) {
        this.$el.removeClass("line");
        this.$el.addClass("area");

        Dom.create(this.refs.$dragArea).css({
          top: `${rect.top - this.state.rect.top}px`,
          left: `${left}px`,
          width: `${rect.width - left}px`,
          height: `${rect.height}px`,
        });
      } else {
        this.$el.removeClass("area");
        this.$el.addClass("line");
        if (rate > 0.66) {
          top = rect.bottom;
        }

        Dom.create(this.refs.$dragline).css({
          top: `${top - this.state.rect.top}px`,
          left: `${left}px`,
        });
      }
    }, []);

    const onDragLeave = useCallback(() => {
      // console.log("drag leave", e);
    }, []);

    const onDrop = useCallback(
      (e) => {
        e.preventDefault();
        this.setState(
          {
            isInDraggable: false,
            endId: Dom.create(e.target)
              .closest("elf--treeview-item")
              .attr("key"),
          },
          false
        );

        // 위치가 같으면 drop 동작 하지 않는다.
        if (this.state.startId === this.state.endId) {
          return;
        }

        onDropNode({
          startId: this.state.startId,
          endId: this.state.endId,
          rate: this.state.rate,
          targetPosition: this.targetPosition,
        });
      },
      [onDropNode]
    );

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
        <div class="drag-inner-area" ref="$dragArea"></div>
      </div>
    );
  }

  get targetPosition() {
    if (this.state.rate < 0.33) {
      return "top";
    } else if (this.state.rate < 0.66) {
      return "middle";
    } else {
      return "bottom";
    }
  }
}

registerComponent("treeview", TreeView);
registerComponent("tree-view", TreeView);
registerComponent("TreeView", TreeView);
