import { LeftTab } from "./left-panels/LeftTab";

export function LeftPlugin(editor) {
  editor.registerGroupUI("left-panel", {
    tabs: <LeftTab />,
  });
}
