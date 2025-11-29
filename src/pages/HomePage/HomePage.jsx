import { motion } from "motion/react";
import { VideoBlock } from "@/components";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <h1 className={styles.title}>{t("homePage.title")}</h1>
      <p className={styles.text}>{t("homePage.text")}</p>
      <VideoBlock />
    </motion.div>
  );
}
