import { View } from "@elf-framework/ui";

import { useEditor } from "./editor/Editor";

export function InjectView({
  views = [],
  groups = [],
  as = "div",
  style = {},
}) {
  const editor = useEditor();

  // views, groups 에 있던 컴포넌트를 하나의 배열로 변환
  const list = [
    ...views.map((it) => {
      return editor.getUI(it);
    }),
    ...groups.map((it) => {
      return editor.getGroupUI(it);
    }),
  ]
    .flat(Infinity)
    .filter(Boolean);

  return (
    <View as={as} style={style}>
      {list}
    </View>
  );
}
