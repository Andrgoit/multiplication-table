import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Andrgoit/multiplication-table"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={26} />
      </a>
    </footer>
  );
}
