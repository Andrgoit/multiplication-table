import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import styles from "./Learning.module.css";

export default function Learning({ selectedTable, back }) {
  const { t } = useTranslation();
  const elements = selectedTable.map(({ id, task, correctAnswer }) => (
    <li key={id} className={styles.item}>
      <span>{task} =</span>
      <span>{correctAnswer}</span>
    </li>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <ul className={styles.list}>{elements}</ul>
      <button onClick={back} className={styles.button}>
        {t("back")}
      </button>
    </motion.div>
  );
}
