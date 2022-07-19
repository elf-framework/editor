import {
  UIElement,
  SCROLL,
  IF,
  FRAME,
  SUBSCRIBE_SELF,
  DEBOUNCE,
  classnames,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--virtual-scroll", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
});

export class VirtualScroll extends UIElement {
  initState() {
    return {
      scrollHeight: 32,
    };
  }

  template() {
    const { style = {}, itemHeight = 32, items = [] } = this.props;
    const totalCount = items.length;

    const styleObject = {
      class: classnames("elf--virtual-scroll", this.props.class),
      style: {
        ...propertyMap(style, cssProperties),
        "--elf--virtual-scroll-item-width": this.state.width
          ? `${this.state.width}px`
          : "100%",
        "--elf--virtual-scroll-item-height": `${itemHeight}px`,
        "--elf--virtual-scroll-item-count": totalCount,
        "--elf--virtual-scroll-panel-height": `${totalCount * itemHeight}px`,
      },
    };

    return (
      <div {...styleObject}>
        <div class="elf--virtual-scroll-panel">
          <div
            class="elf--virtual-scroll-content-area"
            data-scrolling={this.state.scrolling ? "true" : "false"}
          >
            {this.makeItemView()}
          </div>
        </div>
      </div>
    );
  }

  refreshSize() {
    const rect = this.$el?.offsetRect();

    if (rect) {
      this.setState(
        {
          width: rect.width,
          height: rect.height,
        },
        false
      );
    }
  }

  onMounted() {
    window.setTimeout(() => {
      const rect = this.$el.offsetRect();
      this.setState({
        width: rect.width,
        height: rect.height,
      });
    }, 20);
  }

  filterItems(items, startIndex, endIndex) {
    return items.filter((it, index) => {
      return index >= startIndex && index <= endIndex;
    });
  }

  makeItemView() {
    const { itemHeight, items, overscanRowCount = 10 } = this.props;
    const { width, height, isRenderingItems } = this.state;

    if (!isRenderingItems) {
      if (!width) return [];

      const scrollHeight = items.length * itemHeight;
      const itemCount = Math.floor(height / itemHeight);
      const totalCount = items.length;

      this.setState(
        {
          scrollHeight,
          itemCount,
        },
        false
      );

      const startIndex = Math.max(
        Math.floor((this.state.scrollTop || 0) / 32) - overscanRowCount,
        0
      );
      const endIndex = Math.min(
        Math.floor(startIndex + itemCount + 2 * overscanRowCount),
        totalCount - 1
      );

      this.state.renderItems = this.filterItems(items, startIndex, endIndex);
    }

    return this.state.renderItems.map((item, index) => {
      return this.props.itemRenderer?.(
        item,
        item.index * itemHeight,
        index,
        items,
        this
      );
    });
  }

  checkScrollTop() {
    const { scrollTop, height, scrollHeight } = this.state;
    this.setState(
      {
        scrollTop: this.$el.scrollTop,
      },
      false
    );

    // 스크롤이 끝까지 도달했는지 확인
    if (scrollTop > scrollHeight - height) {
      this.setState({
        scrolling: false,
      });
      return false;
    }

    return true;
  }

  [SCROLL("$el") + IF("checkScrollTop")]() {
    this.trigger("reloadItems");
  }

  [SUBSCRIBE_SELF("checkScrolling") + DEBOUNCE(100)]() {
    this.setState({
      scrolling: false,
    });
  }

  [SUBSCRIBE_SELF("reloadItems") + FRAME]() {
    this.setState({
      scrolling: true,
    });

    this.trigger("checkScrolling");
  }

  refresh() {
    this.setState(
      {
        isRenderingItems: false,
      },
      false
    );

    this.render();
  }

  refreshItems() {
    this.setState(
      {
        isRenderingItems: true,
      },
      false
    );

    this.render();
  }

  scrollIntoView(index) {
    const { itemHeight } = this.props;
    const scrollTop = index * itemHeight;

    this.$el.scrollTop = scrollTop;

    this.setState(
      {
        scrollTop: this.$el.scrollTop,
      },
      false
    );

    this.refreshItems();
  }
}