import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import styles from "./SettingsLearningPage.module.css";

export default function SettingsLearningPage({ selecedNumber }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const { t } = useTranslation();

  const options = [
    { value: "1", label: `${t("learningPage.settings.column")} 1` },
    { value: "2", label: `${t("learningPage.settings.column")} 2` },
    { value: "4", label: `${t("learningPage.settings.column")} 4` },
    { value: "3", label: `${t("learningPage.settings.column")} 3` },
    { value: "5", label: `${t("learningPage.settings.column")} 5` },
    { value: "6", label: `${t("learningPage.settings.column")} 6` },
    { value: "7", label: `${t("learningPage.settings.column")} 7` },
    { value: "8", label: `${t("learningPage.settings.column")} 8` },
    { value: "9", label: `${t("learningPage.settings.column")} 9` },
    { value: "10", label: `${t("learningPage.settings.column")} 10` },
  ];

  const elements = options.map(({ value, label }) => (
    <li key={value}>
      <button
        onClick={() => setSelectedOption(value)}
        className={styles.button}
      >
        {label}
      </button>
    </li>
  ));

  useEffect(() => {
    selecedNumber(selectedOption);
  }, [selectedOption]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h2 className={styles.title}>{t("settings")}:</h2>
      <p className={styles.text}>{t("learningPage.settings.title")}:</p>

      <ul className={styles.list}>{elements}</ul>
    </motion.div>
  );
}
