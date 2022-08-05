import { Flex, Grid, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

const pages = [
  { link: "/pages/router.html", title: "1. Router" },
  { link: "/pages/typography.html", title: "2. Typography" },
  { link: "/pages/typography-2.html", title: "3. Typography 2" },
  { link: "/pages/icons.html", title: "4. Icons" },
  { link: "/pages/button.html", title: "5. Button" },
  { link: "/pages/button-group.html", title: "5-1. ButtonGroup" },
  { link: "/pages/icon-button.html", title: "6. Icon Button" },
  { link: "/pages/radio.html", title: "7. Radio" },
  { link: "/pages/checkbox.html", title: "8. Checkbox" },
  { link: "/pages/menu.html", title: "9. Menu" },
  { link: "/pages/context-menu.html", title: "10. Context Menu" },
  { link: "/pages/option-menu.html", title: "11. Option Menu" },
  { link: "/pages/dialog.html", title: "12. Dialog" },
  { link: "/pages/toolbar.html", title: "13. Toolbar" },
  { link: "/pages/tools.html", title: "14. Tools" },
  { link: "/pages/notification.html", title: "15. Notification" },
  { link: "/pages/visual-bell.html", title: "16. Visual Bell" },
  {
    link: "/pages/visual-bell-target.html",
    title: "16-1. Visual Bell with Target",
  },
  { link: "/pages/tooltip.html", title: "17. Tooltip" },
  { link: "/pages/panel.html", title: "18. Panel" },
  { link: "/pages/input-editor.html", title: "19. Input Editor" },
  { link: "/pages/input-paint.html", title: "20. Input Paint" },
  { link: "/pages/color-mixer.html", title: "21. Color Mixer" },
  { link: "/pages/color-grid.html", title: "22. Color Grid" },
  { link: "/pages/virtual-scroll.html", title: "23. Virtual Scroll" },
  { link: "/pages/flex.html", title: "24. Flex Layout" },
  { link: "/pages/grid.html", title: "25. Grid Layout" },
  { link: "/pages/option-strip.html", title: "26. Option Strip" },
  { link: "/pages/view.html", title: "27. View(pure element tag)" },
  { link: "/pages/tabs.html", title: "28. Tabs" },
  { link: "/pages/data-editor.html", title: "29. Data Editor" },
  { link: "/pages/global-state.html", title: "30. Global State" },
  { link: "/pages/panzoom.html", title: "31. PanZoom" },
  { link: "/pages/event-panel.html", title: "32. EventPanel" },
  { link: "/pages/to-html.html", title: "33. To Html " },
  { link: "/pages/app-layout.html", title: "34. Layout - AppLayout " },
];

function PageMenu() {
  return (
    <View>
      {pages.map((page) => {
        return (
          <View>
            <a href={page.link}>{page.title}</a>
          </View>
        );
      })}
    </View>
  );
}

export function Layout(props) {
  const { content } = props;

  console.log(content);

  return (
    <Grid
      columns={["300px", "1fr"]}
      rows={["50px", "1fr"]}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRight: "1px solid #ececec",
          borderBottom: "1px solid #ececec",
        }}
      >
        Elf (easylogic framework)
      </Flex>
      <View
        style={{
          borderBottom: "1px solid #ececec",
        }}
      >
        Menus
      </View>
      <View
        padding="10px"
        style={{
          borderRight: "1px solid #ececec",
        }}
      >
        <h1>Introduce3</h1>
        <h1>Design System</h1>
        <h1>UI Component</h1>
        <PageMenu />
      </View>
      <View padding="10px">{content}</View>
    </Grid>
  );
}
