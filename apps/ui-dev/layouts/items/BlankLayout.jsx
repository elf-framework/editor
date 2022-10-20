import { isFunction } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";

import "./BlankLayout.scss";

import { useTheme } from "~/hooks/useTheme";

export function BlankLayout(props) {
  const { content, maxWidth = 1200 } = props;

  useTheme();

  return (
    <div class="blank-layout">
      <View class="layout-content">
        <div style={{ margin: "0px auto", maxWidth }} class="markdown-body">
          {content.map((it) => {
            return isFunction(it) ? it([]) : it;
          })}
        </div>
      </View>
    </div>
  );
}
