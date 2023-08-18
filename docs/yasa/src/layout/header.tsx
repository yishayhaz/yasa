import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { IconButton } from "@yasa/button";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../providers/theme";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export type HeaderProps = {
  menuExpanded: boolean;
  setMenuExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ setMenuExpanded, menuExpanded }: HeaderProps) {
  const location = useLocation();
  const theme = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Yasa</Link>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link
              to="/docs"
              aria-current={
                location.pathname.startsWith("/docs") ? "page" : undefined
              }
            >
              Docs
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.actions}>
        <span>v0.0.0</span>
        <IconButton
          link={{
            Component: Link,
            target: "_blank",
            extraProps: {
              to: "https://github.com/yishayhaz/yasa",
            },
          }}
          label="github"
          size="sm"
          variant="link"
        >
          <BsGithub />
        </IconButton>
        <IconButton
          variant="link"
          label="theme"
          onClick={() =>
            theme.setTheme(theme.theme === "light" ? "dark" : "light")
          }
          size="sm"
        >
          {theme.theme === "light" ? <FiMoon /> : <FiSun />}
        </IconButton>
        <IconButton
          label="menu"
          size="sm"
          variant="link"
          onClick={() => setMenuExpanded((p) => !p)}
        >
          {menuExpanded ? <IoMdClose /> : <CgMenuRight />}
        </IconButton>
      </div>
    </header>
  );
}
