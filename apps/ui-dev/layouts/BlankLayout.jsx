import { View } from "@elf-framework/ui";

import "./Layout.scss";

export function BlankLayout(props) {
  const { content, width, maxWidth = 900 } = props;

  return (
    <div class="default-layout">
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
