const BASE_URL = "/pages/design-system/";

const GETTING_STARTED_URL = BASE_URL + "getting-started/";
const FOUNDATION_URL = BASE_URL + "foundation/";
const COMPONENTS_URL = BASE_URL + "components/";

export default [
  { link: GETTING_STARTED_URL, title: "Getting Started", category: "_" },
  "Foundation",
  { link: FOUNDATION_URL + "color/", title: "Color", category: "Foundation" },
  { link: FOUNDATION_URL + "states/", title: "States", category: "Foundation" },
  {
    link: FOUNDATION_URL + "icongraphy/",
    title: "Icongraphy",
    category: "Foundation",
  },
  {
    link: FOUNDATION_URL + "typography/",
    title: "Typography",
    category: "Foundation",
  },
  {
    link: FOUNDATION_URL + "spacing/",
    title: "Spacing",
    category: "Foundation",
  },
  { link: FOUNDATION_URL + "layout/", title: "Layout", category: "Foundation" },
  "Components",
  {
    title: "Actions",
    items: [
      {
        link: COMPONENTS_URL + "actions/toolbar/",
        title: "Toolbar",
      },
      {
        link: COMPONENTS_URL + "actions/actiongroup/",
        title: "Action Group",
      },
      {
        link: COMPONENTS_URL + "actions/menu/",
        title: "Menu",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "containers/",
    title: "Containers",
    items: [
      {
        link: COMPONENTS_URL + "containers/divider/",
        title: "Divider",
      },
      {
        link: COMPONENTS_URL + "containers/popover/",
        title: "Popover",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "feedback/",
    title: "Feed Backs",
    items: [
      {
        link: COMPONENTS_URL + "feedback/alert/",
        title: "Alert",
      },
      {
        link: COMPONENTS_URL + "feedback/notification/",
        title: "Notification",
      },
      {
        link: COMPONENTS_URL + "feedback/dialog/",
        title: "Dialog",
      },
      {
        link: COMPONENTS_URL + "feedback/contextual-help/",
        title: "Contextual Help",
      },
      {
        link: COMPONENTS_URL + "feedback/toast/",
        title: "Toast",
      },
      {
        link: COMPONENTS_URL + "feedback/tooltip/",
        title: "Tooltip",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "inputs/",
    title: "Inputs",
    items: [
      {
        link: COMPONENTS_URL + "inputs/checkbox/",
        title: "Checkbox",
      },
      {
        link: COMPONENTS_URL + "inputs/checkbox-group/",
        title: "Checkbox Group",
      },
      {
        link: COMPONENTS_URL + "inputs/colorarea/",
        title: "Color Area",
      },
      {
        link: COMPONENTS_URL + "inputs/field/",
        title: "Field Label",
      },
      {
        link: COMPONENTS_URL + "inputs/help-text/",
        title: "Help text",
      },
      {
        link: COMPONENTS_URL + "inputs/option-menu/",
        title: "Option Menu",
      },
      { link: COMPONENTS_URL + "inputs/radio/", title: "Radio" },
      {
        link: COMPONENTS_URL + "inputs/slider/",
        title: "Slider ",
      },
      {
        link: COMPONENTS_URL + "inputs/switch/",
        title: "Switch",
      },
      {
        link: COMPONENTS_URL + "inputs/textarea/",
        title: "Text area",
      },
      {
        link: COMPONENTS_URL + "inputs/textfield/",
        title: "Text field",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "navigations/",
    title: "Navigations",
    items: [
      {
        link: COMPONENTS_URL + "navigations/breadcrumbs/",
        title: "Breadcrumbs",
      },
      {
        link: COMPONENTS_URL + "navigations/avatar/",
        title: "Avatar",
      },
      {
        link: COMPONENTS_URL + "navigations/sidebar/",
        title: "Sidebar * ",
      },
      {
        link: COMPONENTS_URL + "navigations/tabs/",
        title: "Tabs",
      },
      {
        link: COMPONENTS_URL + "navigations/tag/",
        title: "Tag",
      },
      {
        link: COMPONENTS_URL + "navigations/treeview/",
        title: "Tree view",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "status/",
    title: "Status",
    items: [
      { link: COMPONENTS_URL + "status/animation/", title: "Animation" },
      { link: COMPONENTS_URL + "status/ghost/", title: "Ghost" },
      { link: COMPONENTS_URL + "status/blank/", title: "Blank" },
      { link: COMPONENTS_URL + "status/badge/", title: "Badge " },
      {
        link: COMPONENTS_URL + "status/progressbar/",
        title: "Progress Bar",
      },
      {
        link: COMPONENTS_URL + "status/progress-circle/",
        title: "Progress Circle",
      },
      {
        link: COMPONENTS_URL + "status/status-light/",
        title: "Status light * ",
      },
    ],
    category: "Components",
  },
  {
    link: COMPONENTS_URL + "patterns/",
    title: "Pattern",
    items: [
      { link: COMPONENTS_URL + "patterns/card/", title: "Card" },
      {
        link: COMPONENTS_URL + "patterns/form-errors/",
        title: "Form errors *",
      },
      {
        link: COMPONENTS_URL + "patterns/table/",
        title: "Table",
      },
    ],
    category: "Components",
  },
];
