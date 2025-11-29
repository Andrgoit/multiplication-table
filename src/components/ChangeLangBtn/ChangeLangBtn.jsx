import { useEffect, useState } from "react";
import { motion, spring, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import langIcons from "@/data/langIcons";
import getLangIcons from "@/utils/getLangIcon";
import styles from "@/components/ChangeLangBtn/ChangeLangBtn.module.css";

export default function ChangeLangBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const [lng, setLng] = useState(() => i18n.language);
  const icon = getLangIcons(lng);

  const filteredIcons = langIcons.filter((item) => item.lang !== lng);

  const changeLanguageHandler = (lang) => {
    setIsOpen(false);
    setLng(lang);
    i18n.changeLanguage(lang);
  };

  const elements = filteredIcons.map(({ id, lang, icon }) => (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.3, type: spring }}
      key={id}
      className={styles.item}
      onClick={() => {
        changeLanguageHandler(lang);
      }}
    >
      <img src={icon} alt={`${lang} icon`} className={styles.icon} />
    </motion.li>
  ));
  return (
    <>
      <div className={styles.wrapper}>
        <img src={icon} alt="icon" onClick={() => setIsOpen(!isOpen)} />
        <AnimatePresence>
          {isOpen && <ul className={styles.list}>{elements}</ul>}
        </AnimatePresence>
      </div>
    </>
  );
}
