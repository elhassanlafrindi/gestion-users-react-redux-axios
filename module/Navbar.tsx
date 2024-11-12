import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className={styles.main}>
      <li>
        <NavLink to="/">dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/List">list</NavLink>
      </li>
      <li>
        <NavLink to="/add">add</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
