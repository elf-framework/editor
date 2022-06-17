import { SUBSCRIBE, CONFIG } from "@elf-framework/sapa";

import BlankBodyPanel from "./area/BlankBodyPanel";
import BlankInspector from "./area/BlankInspector";
import BlankLayerTab from "./area/BlankLayerTab";
import BlankToolBar from "./area/tool-bar/BlankToolBar";
import "./layout.scss";
import { BaseLayout } from "./layout/BaseLayout";
import blankEditorPlugins from "./plugins/blank-editor-plugins";
import { ContextMenuManager } from "./view-manager/ContextMenuManager";
import { KeyboardManager } from "./view-manager/KeyboardManager";
import { PopupManager } from "./view-manager/PopupManager";

import {
  DefaultLayout,
  DefaultLayoutItem,
} from "elf/ui/base/layout/DefaultLayout";

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
        <BlankToolBar ref="$blankToolbar" />
      </DefaultLayoutItem>
    );
  }

  getLeftPanel() {
    return (
      <DefaultLayoutItem type="left" resizable={true}>
        <BlankLayerTab ref="$blankLayerTab" />
      </DefaultLayoutItem>
    );
  }

  getRightPanel() {
    return (
      <DefaultLayoutItem type="right">
        <BlankInspector ref="$blankInspector" />
      </DefaultLayoutItem>
    );
  }

  getBodyPanel() {
    return (
      <DefaultLayoutItem type="body">
        <BlankBodyPanel ref="$blankBodyPanel" />
      </DefaultLayoutItem>
    );
  }

  getInnerPanel() {
    return (
      <DefaultLayoutItem type="inner">
        <KeyboardManager ref="$keyboardManager" />
      </DefaultLayoutItem>
    );
  }

  getOuterPanel() {
    return (
      <DefaultLayoutItem type="outer">
        <PopupManager ref="$popupManager" />
        <ContextMenuManager ref="$contextManager" />
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
