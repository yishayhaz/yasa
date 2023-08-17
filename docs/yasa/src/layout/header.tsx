import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { IconButton } from "@yasa/button";
import { FiSun, FiMoon } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

export function Header() {
  const location = useLocation();

  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  const switchTheme = (theme: "light" | "dark") => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") as string;

    if (["light", "dark"].includes(theme)) {
      setTheme(theme as "light" | "dark");
    }
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Yasa</Link>
      </div>
      <div className="flex-1">
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
          onClick={() => switchTheme(theme === "light" ? "dark" : "light")}
          size="sm"
        >
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </IconButton>
      </div>
    </header>
  );
}
