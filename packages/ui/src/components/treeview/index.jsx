import {
  classnames,
  Dom,
  UIElement,
  useCallback,
  useEffect,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Checkbox } from "../checkbox";
import { InputEditor } from "../input-editor";
import { tooltip } from "../tooltip";
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

const tooltipMap = new WeakMap();

const isEllipsisActive = (el) => {
  return el.offsetWidth < el.scrollWidth;
};

function displayTooltip(label, target) {
  const $label = Dom.create(target).$(".label");

  if (isEllipsisActive($label.el)) {
    const labelRect = $label.rect();
    const { left, top, width, height, right, bottom } = labelRect;
    const $tooltip = tooltip({
      message: label,
      placement: "top",
      style: {
        left,
        top,
        width,
        height,
        right,
        bottom,
      },
    });

    tooltipMap.set(target, $tooltip);
  }
}

function hideTooltip(target) {
  const $tooltip = tooltipMap.get(target);
  if ($tooltip) {
    $tooltip.close();
    $tooltip.remove();
    tooltipMap.delete(target);
  }
}

function itemRenderer(
  item,
  top,
  renderIndex,
  {
    onSelect,
    onDoubleClick,
    selectionStyle,
    editable,
    onEditStart,
    onEditCancel,
    onEdit,
    onEditEnd,
    variant,
    renderActions,
    renderArrow,
    renderLabel,
    renderLoading,
    onToggle,
    renderContext,
    draggable,
    showTooltip,
  }
) {
  const { data, depth } = item;

  const arrow = renderArrow?.(item);
  const contextView = renderContext?.(item);
  const actions = renderActions?.(item);
  const label = renderLabel?.(item) || data.title;
  const loadingText = renderLoading?.(item) || "Loading....";

  return (
    <div
      class={classnames("elf--treeview-item", {
        selected: data.selected,
        [variant]: true,
        loading: data.loading,
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
          <Checkbox
            {...{
              checked: data.selected ? "checked" : undefined,
            }}
            onClick={(e) => onSelect(item, "checkbox", e)}
          />
        </div>
      ) : undefined}
      <div class="depth-area"></div>
      {data.children ? (
        <div
          class="collapse-area"
          onClick={(e) => {
            onToggle(item, e);
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
      {data?.loading ? (
        <div class="loading-area">{loadingText}</div>
      ) : item.edit ? (
        <label class="label-area">
          <InputEditor
            type="text"
            value={item.data.title}
            onFocusOut={(e) => {
              onEditCancel(item, e);
            }}
            onKeyUp={(e) => {
              if (editable) {
                if (e.key === "Enter") {
                  // refer to https://mygumi.tistory.com/321
                  e.target.blur();
                  // FIXME : 데이타는 어떤게 들어올지 알 수 없다.
                  // 하지만 여기서는 title 밖에 처리하지 않는다.
                  item.data.title = e.target.value;
                  onEditEnd(item, e);
                  return;
                } else if (e.key === "Escape") {
                  onEditCancel(item, e);
                  return;
                }
                onEdit(item, e.target.value);
              }
            }}
          />
        </label>
      ) : (
        <label
          class="label-area"
          onDblClick={(e) => {
            if (editable) {
              if (!item.edit) {
                // 현재가 edit 일 때
                onEditStart(item, e);

                // label 의 text 를 수정 할 수 있도록 해야한다.
                // 방법을 생각해보자.
                // 1. label 내에 input 을 넣는다.
                // 2. label 을 content editable 로 바꾼다.
              }
            }

            onDoubleClick(item, e);
          }}
          onClick={(e) => onSelect(item, "highlight", e)}
          onMouseEnter={(e) => {
            if (label) {
              showTooltip && displayTooltip(label, e.target);
            }
          }}
          onMouseLeave={(e) => {
            showTooltip && hideTooltip(e.target);
          }}
        >
          <div class="label">{label}</div>
        </label>
      )}

      {actions ? <div class="actions-area">{actions}</div> : undefined}
      <div class="tail-area"></div>
    </div>
  );
}

function treeToList(items = [], depth = 0, command = { index: 0 }) {
  const result = [];

  items.forEach((it) => {
    result.push({
      data: it,
      depth,
      edit: it.id === command.editId,
      editing: it.id === command.editingId,
      index: command.index,
    });
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
      editId: this.state.editId,
      editingId: this.state.editingId,
      up() {
        this.index += 1;
      },
    });
  }

  template() {
    const {
      style,
      variant = "default",
      itemHeight = 32,
      overscanRowCount = 30,
      renderContext,
      selectionStyle = "highlight",
      showTooltip = false,
      renderActions,
      renderArrow,
      renderLoading,
      draggable = false,
      onClickNode,
      onDoubleClickNode,
      onToggleNode,
      onDropNode,
      onEditStart,
      onEdit,
      onEditEnd,
      onEditCancel,
      editable,
      items: originalItems,
    } = this.props;
    const items = this.updateItems(originalItems);

    const localClass = "elf--treeview";

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const itemRendererProps = {
      onDoubleClick: useCallback(
        (item, e) => {
          onDoubleClickNode?.(item, e);
        },
        [onDoubleClickNode]
      ),
      onSelect: useCallback(
        (item, style, e) => {
          // highlight 모드 일 때는 item 전체를 클릭하고 선택
          // checkbox 모드 일 때는 checkbox 영역을 클릭하고 선택
          if (style === selectionStyle) {
            onClickNode?.(item, e);
          }
        },
        [onClickNode]
      ),
      onToggle: useCallback(
        (item, e) => {
          onToggleNode?.(item, e);
        },
        [onToggleNode]
      ),
      onEdit: useCallback(
        (item, value) => {
          if (this.state.editingId !== item.data.id) {
            this.state.editingId = item.data.id;
          }

          onEdit?.(item, value);
        },
        [onEdit]
      ),
      onEditStart: useCallback(
        (item, e) => {
          this.state.editId = item.data.id;
          this.state.target = e.target;
          this.refresh();
          onEditStart?.(item, e);
        },
        [onEditStart]
      ),
      onEditEnd: useCallback(
        (item, e) => {
          this.state.editId = "";
          this.state.editingId = "";
          this.state.target = null;
          this.refresh();
          onEditEnd?.(item, e);
        },
        [onEditEnd]
      ),
      onEditCancel: useCallback(
        (item, e) => {
          this.state.editId = "";
          this.state.editingId = "";
          this.state.target = null;
          this.refresh();
          onEditCancel?.(item, e);
        },
        [onEditCancel]
      ),
      editable,
      variant,
      draggable,
      showTooltip,
      renderContext,
      selectionStyle,
      renderActions,
      renderArrow,
      renderLoading,
    };

    const onDrag = useCallback(() => {
      // console.log("drag", e.target);
    }, []);

    const onDragStart = useCallback((e) => {
      const $item = Dom.create(e.target).closest("elf--treeview-item");

      const ghost = this.setGhost($item, e);

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

        onDropNode(
          {
            startId: this.state.startId,
            endId: this.state.endId,
            rate: this.state.rate,
            targetPosition: this.targetPosition,
          },
          e
        );
      },
      [onDropNode]
    );

    useEffect(() => {
      if (this.state.editId) {
        setTimeout(() => {
          const $input = Dom.create(this.state.target).$("input");

          if ($input) {
            $input.focus();
            $input.select();
          }
        }, 10);
      }
    }, [this.state.editId, this.state.editingId]);

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

  setGhost($item, e) {
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
    // const ghostTop = e.clientY - itemRect.top;

    document.body.appendChild(ghost);

    e.dataTransfer.setDragImage(ghost, ghostLeft, -10);

    return ghost;
  }
}

registerComponent("treeview", TreeView);
registerComponent("tree-view", TreeView);
registerComponent("TreeView", TreeView);
