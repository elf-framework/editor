export default [
  "Introduction",
  {
    link: "/pages/introduction/core/",
    title: "Core Concept",
  },
  {
    link: "/pages/introduction/getting-started/",
    title: "Getting Started",
  },
  {
    link: "/pages/introduction/install/",
    title: "Install",
    items: [
      {
        link: "/pages/introduction/install/vite/",
        title: "Vite",
      },
      {
        link: "/pages/introduction/install/webpack/",
        title: "! webpack",
        disabled: true,
      },
      {
        link: "/pages/introduction/install/create-sapa-app/",
        title: "! create-sapa-app",
        disabled: true,
      },
    ],
  },
  {
    link: "/pages/introduction/develop/",
    title: "Development",
  },
  {
    link: "/pages/introduction/contribute/",
    title: "Contribute",
  },
];
