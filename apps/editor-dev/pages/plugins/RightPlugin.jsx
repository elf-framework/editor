import { RightTab } from "./right-panels/RightTab";

export function RightPlugin(editor) {
  editor.registerGroupUI("right-panel", {
    tabs: <RightTab />,
  });
}
