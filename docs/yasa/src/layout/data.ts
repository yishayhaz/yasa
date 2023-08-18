export type NavLink = { title: React.ReactNode; path: string };

export const GETTING_STARTED: NavLink[] = [
  {
    title: "Overview 🔍",
    path: "/docs/getting-started/overview",
  },
  {
    title: "Installation",
    path: "/docs/getting-started/installation",
  },
  {
    title: "Setup",
    path: "/docs/getting-started/setup",
  },
];

export const GENERAL: NavLink[] = [
  {
    title: "Overview 🔍",
    path: "/docs/general/overview",
  },
  {
    title: "Breakpoints",
    path: "/docs/general/breakpoints",
  },
  {
    title: "Colors",
    path: "/docs/general/colors",
  },
  {
    title: "Layout",
    path: "/docs/general/layout",
  },
  {
    title: "Spacing",
    path: "/docs/general/spacing",
  },
  {
    title: "Typography",
    path: "/docs/general/typography",
  },
];

export const COMPONENTS: NavLink[] = [
  {
    title: "Overview 🔍",
    path: "/docs/components/overview",
  },
  {
    title: "Alert",
    path: "/docs/components/alert",
  },
  {
    title: "Badge",
    path: "/docs/components/badge",
  },
  {
    title: "Button",
    path: "/docs/components/button",
  },
  {
    title: "Fields",
    path: "/docs/components/fields",
  },
  {
    title: "Radio & Checkbox",
    path: "/docs/components/radio-and-checkbox",
  },
  {
    title: "Popup & Dialog",
    path: "/docs/components/popup-and-dialog",
  },
  {
    title: "Table & Pagination",
    path: "/docs/components/table-and-pagination",
  },
];

export const COOL: NavLink[] = [
  {
    title: "Overview 🔍",
    path: "/docs/cool/overview",
  },
  {
    title: "Form",
    path: "/docs/cool/form",
  },
  {
    title: "Filters",
    path: "/docs/cool/filters",
  },
  {
    title: "Pagination",
    path: "/docs/cool/pagination",
  },
  {
    title: "API Hooks",
    path: "/docs/cool/api-hooks",
  },
];

export const LINKS = [
  {
    title: "Getting Started",
    links: GETTING_STARTED,
  },
  {
    title: "General",
    links: GENERAL,
  },
  {
    title: "Components",
    links: COMPONENTS,
  },
  {
    title: "Cool",
    links: COOL,
  },
];

export const ALL_LINKS = [
  ...GETTING_STARTED,
  ...GENERAL,
  ...COMPONENTS,
  ...COOL,
];
