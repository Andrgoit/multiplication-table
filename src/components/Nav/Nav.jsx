import { NavLink } from "react-router";
import styles from "./Nav.module.css";

export default function Nav({ navItems = [] }) {
  const elements = navItems.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={styles.navList}>{elements}</ul>
    </nav>
  );
}
