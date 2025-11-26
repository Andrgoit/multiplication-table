import { motion } from "motion/react";
import { Nav, SoundButton, ChangeLangBtn } from "@/components";
import styles from "./Header.module.css";
import { navItems } from "@/data";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={styles.header}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <Nav navItems={navItems} />
          <div className={styles.btnwrapper}>
            <SoundButton />
            <ChangeLangBtn />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
