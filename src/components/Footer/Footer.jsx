import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={styles.footer}
    >
      <a
        href="https://github.com/Andrgoit/multiplication-table"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={26} />
      </a>
    </motion.footer>
  );
}
