import { SUBSCRIBE, CONFIG } from "@elf/sapa";

import BlankBodyPanel from "./area/BlankBodyPanel";
import BlankInspector from "./area/BlankInspector";
import BlankLayerTab from "./area/BlankLayerTab";
import BlankToolBar from "./area/tool-bar/BlankToolBar";
import "./layout.scss";
import blankEditorPlugins from "./plugins/blank-editor-plugins";

import { PopupManager } from "./view-manager/PopupManager";
import { KeyboardManager } from "./view-manager/KeyboardManager";
import { ContextMenuManager } from "./view-manager/ContextMenuManager";
import { DefaultLayout, DefaultLayoutItem } from "elf/ui/base/layout/DefaultLayout";
import { BaseLayout } from "./layout/BaseLayout";

export class BlankEditor extends BaseLayout {
  afterRender() {
    super.afterRender();

    this.$config.init("editor.layout.elements", this.refs);
  }

  /**
   *
   * @protected
   * @returns {function[]}
   */
  getPlugins() {
    return blankEditorPlugins;
  }

  initState() {
    return {
      leftSize: 340,
    };
  }

  getTopPanel() {
    return (
      <DefaultLayoutItem type="top">
        <BlankToolBar />
      </DefaultLayoutItem>
    );
  }

  getLeftPanel() {
    return (
      <DefaultLayoutItem type="left" resizable={true}>
        <BlankLayerTab />
      </DefaultLayoutItem>
    );
  }

  getRightPanel() {
    return (
      <DefaultLayoutItem type="right">
        <BlankInspector />
      </DefaultLayoutItem>
    );
  }

  getBodyPanel() {
    return (
      <DefaultLayoutItem type="body">
        <BlankBodyPanel />
      </DefaultLayoutItem>
    );
  }

  getInnerPanel() {
    return (
      <DefaultLayoutItem type="inner">
        <KeyboardManager />
      </DefaultLayoutItem>
    );
  }

  getOuterPanel() {
    return (
      <DefaultLayoutItem type="outer">
        <PopupManager />
        <ContextMenuManager />
      </DefaultLayoutItem>
    );
  }

  template() {
    return (
      <div class="elf-editor">
        <DefaultLayout
          showLeftPanel={this.$config.get("show.left.panel")}
          showRightPanel={this.$config.get("show.right.panel")}
          leftSize={340}
          rightSize={280}
          ref="$layout"
        >
          {this.getTopPanel()}
          {this.getLeftPanel()}
          {this.getRightPanel()}
          {this.getBodyPanel()}
          {this.getInnerPanel()}
          {this.getOuterPanel()}
        </DefaultLayout>
      </div>
    );
  }

  [CONFIG("show.left.panel")]() {
    this.children.$layout.setOptions({
      showLeftPanel: this.$config.get("show.left.panel"),
    });
  }

  [CONFIG("show.right.panel")]() {
    this.children.$layout.setOptions({
      showRightPanel: this.$config.get("show.right.panel"),
    });
  }

  refresh() {
    super.refresh();

    this.emit("resizeEditor");
  }
}
