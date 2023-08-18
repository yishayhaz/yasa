import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./header";
import styles from "./style.module.scss";
import { Sidebar } from "./sidebar";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useEffect, useMemo } from "react";
import { ALL_LINKS } from "./data";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const prvAndNext = useMemo(() => {
    const idx = ALL_LINKS.findIndex((link) => link.path === location.pathname);

    return {
      prev: ALL_LINKS[idx - 1],
      next: ALL_LINKS[idx + 1],
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/docs") {
      navigate("/docs/getting-started/overview");
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Sidebar />
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
