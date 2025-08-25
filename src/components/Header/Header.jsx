import { Nav, SoundButton } from "@/components";
import styles from "./Header.module.css";
import { navItems } from "@/data";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Nav navItems={navItems} />
        <SoundButton />
      </div>
    </header>
  );
}
