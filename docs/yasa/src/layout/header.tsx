import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

export function Header() {
  const location = useLocation();

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
      <div>
        <Link to="https://github.com/yishayhaz/yasa" target="_blank">
          GitHub
        </Link>
      </div>
    </header>
  );
}
