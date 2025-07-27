import { NavLink } from "react-router";
import style from "./Nav.module.css";

export default function Nav({ navItems = [] }) {
  const elements = navItems.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink
        to={href}
        className={({ isActive }) => (isActive ? style.active : style.navLink)}
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={style.navList}>{elements}</ul>
    </nav>
  );
}
