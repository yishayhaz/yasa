import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

import { LINKS, NavLink } from "./data";

export const MenuPart = ({
  title,
  links,
}: {
  title: string;
  links: NavLink[];
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

export type SidebarProps = {
  ariaExpanded?: boolean;
};

export function Sidebar({ ariaExpanded }: SidebarProps) {
  return (
    <nav className={styles.sidebar} aria-expanded={ariaExpanded}>
      {LINKS.map((link) => (
        <MenuPart key={link.title} {...link} />
      ))}
    </nav>
  );
}
