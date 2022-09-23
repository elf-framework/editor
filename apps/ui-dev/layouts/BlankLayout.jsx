import { View } from "@elf-framework/ui";

import "./BlankLayout.scss";

export function BlankLayout(props) {
  const { content, width, maxWidth = 1200 } = props;

  return (
    <div class="blank-layout">
      <View class="layout-content">
        <div
          style={{ margin: "0 auto", width, maxWidth }}
          class="markdown-body"
        >
          {content}
        </div>
      </View>
    </div>
  );
}
