import { Link, Outlet, useLocation } from "react-router-dom";
import { Header } from "./header";
import styles from "./style.module.scss";
import { Sidebar } from "./sidebar";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useEffect, useMemo, useState } from "react";
import { ALL_LINKS } from "./data";

export function Layout() {
  const location = useLocation();

  const [menuExpanded, setMenuExpanded] = useState(false);

  const prvAndNext = useMemo(() => {
    const idx = ALL_LINKS.findIndex((link) => link.path === location.pathname);

    return {
      prev: ALL_LINKS[idx - 1],
      next: ALL_LINKS[idx + 1],
    };
  }, [location.pathname]);

  useEffect(() => {
    setMenuExpanded(false);
  }, [location.pathname]);

  return (
    <>
      <Header setMenuExpanded={setMenuExpanded} menuExpanded={menuExpanded} />
      <div className={styles.content}>
        <Sidebar ariaExpanded={menuExpanded} />
        <main className={styles.main}>
          <Outlet />
          <footer>
            {prvAndNext.prev ? (
              <Link to={prvAndNext.prev.path} aria-label="prev">
                <span>Previous</span>
                <b>
                  <TbPlayerTrackPrevFilled />
                  {prvAndNext.prev.title}
                </b>
              </Link>
            ) : (
              <div></div> // for layout
            )}
            {prvAndNext.next && (
              <Link to={prvAndNext.next.path} aria-label="next">
                <span>Next</span>
                <b>
                  {prvAndNext.next.title}
                  <TbPlayerTrackPrevFilled />
                </b>
              </Link>
            )}
          </footer>
        </main>
      </div>
    </>
  );
}
