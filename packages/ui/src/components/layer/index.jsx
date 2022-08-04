import { UIElement } from "@elf-framework/sapa";

export class Layer extends UIElement {
  template() {
    const {
      top,
      id,
      topLevel,
      group,
      selected,
      icon,
      content,
      lock,
      visible,
      lockIcon,
      lockOpenIcon,
      visibleIcon,
      isComponent = false,
      number = 10,
      onClick,
      onDoubleClick,
      onContextMenu,
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
    } = this.props;

    return (
      <div
        class="elf--virtual-scroll-item elf--layer"
        style={{
          "--elf--virtual-scroll-item-top": `${top}px`,
        }}
        data-id={id}
        data-number={number}
      >
        <div
          class="container"
          data-top-level={topLevel ? "true" : undefined}
          data-hidden={!visible ? "true" : undefined}
          data-component={isComponent ? "true" : undefined}
          data-selected={selected ? "true" : undefined}
        >
          <div class="group">{group}</div>
          {icon && <div class="icon">{icon}</div>}
          <div
            class="text"
            ref="$text"
            {...{
              onClick,
              onDoubleClick,
              onContextMenu,
              onMouseDown,
              onMouseUp,
              onMouseMove,
              onMouseEnter,
              onMouseLeave,
            }}
          >
            {content}
          </div>
          <div class="tools">
            <div class="lock">{lock ? lockIcon : lockOpenIcon}</div>
            <div class="visible">{visibleIcon}</div>
          </div>
        </div>
      </div>
    );
  }
}
