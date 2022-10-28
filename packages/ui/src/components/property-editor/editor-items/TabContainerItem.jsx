import { Tab, TabItem } from "../../tab";

export function TabContainerItem({ item, root }) {
  const { style, stripType, activeKey, fitted, compact } = item;
  return (
    <Tab
      style={style}
      compact={compact}
      activeKey={activeKey}
      fitted={fitted}
      stripType={stripType}
    >
      {item.items.map((it) => {
        return (
          <TabItem key={it.key} title={it.label}>
            {it.items.map((it, index) => {
              return root.makeInspectorItem(it, index);
            })}
          </TabItem>
        );
      })}
    </Tab>
  );
}
