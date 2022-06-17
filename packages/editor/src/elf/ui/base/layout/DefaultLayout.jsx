import { POINTERSTART, BIND, isNotUndefined, classnames } from "@elf-framework/sapa";

import "./DefaultLayout.scss";

import { END, MOVE } from "apps/blankeditor/types/event";
import { EditorElement } from "elf/editor/ui/common/EditorElement";
import { Length } from "elf/editor/unit/Length";

const DefaultLayoutDirection = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
  BODY: "body",
  INNER: "inner",
  OUTER: "outer",
};

export class DefaultLayoutItem extends EditorElement {
  get size() {
    return this.props.size;
  }
}

export class DefaultLayout extends EditorElement {
  getLayoutElements() {
    return this.refs;
  }

  initState() {
    return {
      showLeftPanel: isNotUndefined(this.props.showLeftPanel)
        ? Boolean(this.props.showLeftPanel)
        : true,
      showRightPanel: isNotUndefined(this.props.showRightPanel)
        ? Boolean(this.props.showRightPanel)
        : true,
      topSize: isNotUndefined(this.props.topSize)
        ? Number(this.props.topSize)
        : 48,
      leftSize: isNotUndefined(this.props.leftSize)
        ? Number(this.props.leftSize)
        : 340,
      rightSize: isNotUndefined(this.props.rightSize)
        ? Number(this.props.rightSize)
        : 280,
      bottomSize: this.props.bottomSize || 20,
      lastBottomSize: this.props.lastBottomSize || 150,
      minSize: isNotUndefined(this.props.minSize)
        ? Boolean(this.props.minSize)
        : 240,
      maxSize: isNotUndefined(this.props.maxSize)
        ? Boolean(this.props.maxSize)
        : 500,
    };
  }

  getDirection(direction) {
    return this.getChildContent((it) => it.props.type === direction);
  }

  template() {
    const top = this.getDirection(DefaultLayoutDirection.TOP);
    const left = this.getDirection(DefaultLayoutDirection.LEFT);
    const right = this.getDirection(DefaultLayoutDirection.RIGHT);
    const bottom = this.getDirection(DefaultLayoutDirection.BOTTOM);
    const body = this.getDirection(DefaultLayoutDirection.BODY);
    const inner = this.getDirection(DefaultLayoutDirection.INNER);
    const outer = this.getDirection(DefaultLayoutDirection.OUTER);

    let leftWidth = this.state.leftSize;

    if (!this.state.showLeftPanel) {
      leftWidth = 0;
    }
    let rightWidth = this.state.rightSize;
    if (!this.state.showRightPanel) {
      rightWidth = 0;
    }

    return (
      <div class="elf--default-layout-container">
        <div class={`elf--default-layout`}>
          {top ? (
            <div class="layout-top" ref="$topPanel">
              {top}
            </div>
          ) : undefined}
          <div class="layout-middle" ref="$middle">
            {left ? (
              <div
                class="layout-left"
                style={{
                  width: leftWidth,
                }}
                ref="$leftPanel"
              >
                {left}
              </div>
            ) : undefined}
            <div class="layout-body" ref="$bodyPanel">
              {body}
            </div>
            {right ? (
              <div
                class={classnames("layout-right", {
                  closed: !this.state.showRightPanel,
                })}
                style={{
                  width: rightWidth,
                }}
                ref="$rightPanel"
              >
                {right}
              </div>
            ) : undefined}
            <div
              class="splitter"
              ref="$splitter"
              style={{
                left: leftWidth,
              }}
            ></div>
          </div>
          {bottom ? (
            <div class="layout-bottom" ref="$bottomPanel">
              {bottom}
            </div>
          ) : undefined}
          {inner}
        </div>
        {outer}
      </div>
    );
  }

  setOptions(obj = {}) {
    this.setState(obj);
  }

  [POINTERSTART("$splitter") +
    MOVE("moveSplitter") +
    END("moveEndSplitter")]() {
    this.leftSize = this.state.leftSize;
    this.refs.$splitter.addClass("selected");
  }

  moveSplitter(dx) {
    this.setState({
      leftSize: Math.max(
        Math.min(this.leftSize + Math.floor(dx), this.state.maxSize),
        this.state.minSize
      ),
    });
  }

  moveEndSplitter() {
    this.refs.$splitter.removeClass("selected");
  }
}
