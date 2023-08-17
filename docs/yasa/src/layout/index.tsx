import { Outlet } from "react-router-dom";
import { Header } from "./header";
import styles from "./style.module.scss";
import { Sidebar } from "./sidebar";

export function Layout() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
