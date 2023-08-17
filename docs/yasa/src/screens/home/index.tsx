import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export function HomeScreen() {
  return (
    <>
      <div className={styles.container}>
        <h1>
          Welcome to Yasa!
          <br />
          You look great today.
        </h1>
        <p>Yasa is a design system built for react, with Sass and ❤️.</p>
        <div>
          <Link to="/docs">Docs</Link>
          <Link to="https://github.com/yishayhaz/yasa">GitHub</Link>
        </div>
      </div>
    </>
  );
}
