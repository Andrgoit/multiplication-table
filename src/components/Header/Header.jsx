import Nav from "../Nav/Nav";
import style from "./Header.module.css";
import { navItems } from "../../data";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Nav navItems={navItems} />
      </div>
    </header>
  );
}
