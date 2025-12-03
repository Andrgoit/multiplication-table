import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Nav, ButtonsBlock, Logo, SettingsButton } from "@/components";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();

  const navItems = [
    { id: 1, label: t("nav.home"), href: "/" },
    { id: 2, label: t("nav.learning"), href: "learning" },
    { id: 3, label: t("nav.testing"), href: "testing" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={styles.header}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <Nav navItems={navItems} />
          <SettingsButton />
          <div className={styles.btnwrapper}>
            <ButtonsBlock />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
