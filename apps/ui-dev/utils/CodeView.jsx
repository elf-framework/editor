import { Tab, TabItem } from "@elf-framework/ui";

export function CodeView({ content }) {
  return (
    <div class="codeview" style={{ marginTop: 10 }}>
      <Tab size="extra-large" activeKey={0} showIndicator>
        {content.map((it, index) => {
          const { title, content: childContent } = it.props;
          return (
            <TabItem title={title} key={index}>
              {childContent}
            </TabItem>
          );
        })}
      </Tab>
    </div>
  );
}

export function CodeViewItem({ content }) {
  return <div class="codeview-item">{content}</div>;
}