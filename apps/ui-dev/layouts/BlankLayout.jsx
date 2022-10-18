import { View } from "@elf-framework/ui";

import { useTheme } from "../hooks/useTheme";
import "./BlankLayout.scss";

export function BlankLayout(props) {
  const { content, maxWidth = 1200 } = props;

  useTheme();

  return (
    <div class="blank-layout">
      <View class="layout-content">
        <div style={{ margin: "0px auto", maxWidth }} class="markdown-body">
          {content}
        </div>
      </View>
    </div>
  );
}
