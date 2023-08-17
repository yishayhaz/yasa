import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

type Link = { title: React.ReactNode; path: string };

const GETTING_STARTED: Link[] = [
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

const GENERAL: Link[] = [
  {
    title: "Overview 🔍",
    path: "/docs/general/overview",
  },
  {
    title: "Colors",
    path: "/docs/general/colors",
  },
  {
    title: "Typography",
    path: "/docs/general/typography",
  },
  {
    title: "Spacing",
    path: "/docs/general/spacing",
  },
  {
    title: "Layout",
    path: "/docs/general/layout",
  },
  {
    title: "Breakpoints",
    path: "/docs/general/breakpoints",
  },
];

const COMPONENTS: Link[] = [
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
];

const COOL: Link[] = [
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
];

export const MenuPart = ({
  title,
  links,
}: {
  title: string;
  links: Link[];
}) => {
  const location = useLocation();
  return (
    <>
      <h2 className="fs-normal">{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              aria-current={
                location.pathname === link.path ? "page" : undefined
              }
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <MenuPart title="Getting Started" links={GETTING_STARTED} />
      <MenuPart title="General" links={GENERAL} />
      <MenuPart title="Components" links={COMPONENTS} />
      <MenuPart title="Cool" links={COOL} />
    </nav>
  );
}
