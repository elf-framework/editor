import { Flex, Grid, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

const pages = [
  "Introduction",
  {
    link: "/pages/introduction/getting-started.html",
    title: "Getting Started",
  },
  "Install",
  "Design System",
  { link: "/pages/design-system/color.html", title: "Color" },
  { link: "/pages/design-system/typography.html", title: "Typography" },
  { link: "/pages/design-system/spacing.html", title: "Spacing" },
  { link: "/pages/design-system/grid.html", title: "Grid" },
  "UI Component",

  { link: "/pages/ui-component/router.html", title: "1. Router" },
  { link: "/pages/ui-component/typography.html", title: "2. Typography" },
  { link: "/pages/ui-component/typography-2.html", title: "3. Typography 2" },
  { link: "/pages/ui-component/icons.html", title: "4. Icons" },
  { link: "/pages/ui-component/button.html", title: "5. Button" },
  { link: "/pages/ui-component/button-group.html", title: "5-1. ButtonGroup" },
  { link: "/pages/ui-component/icon-button.html", title: "6. Icon Button" },
  { link: "/pages/ui-component/radio.html", title: "7. Radio" },
  { link: "/pages/ui-component/checkbox.html", title: "8. Checkbox" },
  { link: "/pages/ui-component/menu.html", title: "9. Menu" },
  { link: "/pages/ui-component/context-menu.html", title: "10. Context Menu" },
  { link: "/pages/ui-component/option-menu.html", title: "11. Option Menu" },
  { link: "/pages/ui-component/dialog.html", title: "12. Dialog" },
  { link: "/pages/ui-component/toolbar.html", title: "13. Toolbar" },
  { link: "/pages/ui-component/tools.html", title: "14. Tools" },
  { link: "/pages/ui-component/notification.html", title: "15. Notification" },
  { link: "/pages/ui-component/visual-bell.html", title: "16. Visual Bell" },
  {
    link: "/pages/ui-component/visual-bell-target.html",
    title: "16-1. Visual Bell with Target",
  },
  { link: "/pages/ui-component/tooltip.html", title: "17. Tooltip" },
  { link: "/pages/ui-component/panel.html", title: "18. Panel" },
  { link: "/pages/ui-component/input-editor.html", title: "19. Input Editor" },
  { link: "/pages/ui-component/input-paint.html", title: "20. Input Paint" },
  { link: "/pages/ui-component/color-mixer.html", title: "21. Color Mixer" },
  { link: "/pages/ui-component/color-grid.html", title: "22. Color Grid" },
  {
    link: "/pages/ui-component/virtual-scroll.html",
    title: "23. Virtual Scroll",
  },
  { link: "/pages/ui-component/flex.html", title: "24. Flex Layout" },
  { link: "/pages/ui-component/grid.html", title: "25. Grid Layout" },
  { link: "/pages/ui-component/option-strip.html", title: "26. Option Strip" },
  {
    link: "/pages/ui-component/view.html",
    title: "27. View(pure element tag)",
  },
  { link: "/pages/ui-component/tabs.html", title: "28. Tabs" },
  { link: "/pages/ui-component/data-editor.html", title: "29. Data Editor" },
  { link: "/pages/ui-component/global-state.html", title: "30. Global State" },
  { link: "/pages/ui-component/panzoom.html", title: "31. PanZoom" },
  { link: "/pages/ui-component/event-panel.html", title: "32. EventPanel" },
  { link: "/pages/ui-component/to-html.html", title: "33. To Html " },
  {
    link: "/pages/ui-component/app-layout.html",
    title: "34. Layout - AppLayout ",
  },
];

function PageMenu() {
  return (
    <View>
      {pages.map((page) => {
        if (typeof page === "string") {
          return <h1>{page}</h1>;
        } else {
          return (
            <View>
              <a href={page.link}>{page.title}</a>
            </View>
          );
        }
      })}
    </View>
  );
}

export function Layout(props) {
  const { content } = props;

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
        <PageMenu />
      </View>
      <View>
        <div style={{ margin: "0 auto", maxWidth: 900 }}>{content}</div>
      </View>
    </Grid>
  );
}
