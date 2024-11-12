import { Outlet } from "react-router";
import styles from "./layoutStyle.module.css";
import Navbar from "./Navbar";
function Layouts() {
  return (
    <>
      <article className={styles.header}>
        <header>
          <h1>welcome !</h1>
        </header>
      </article>
      <section className={styles.content_section}>
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}

export default Layouts;
