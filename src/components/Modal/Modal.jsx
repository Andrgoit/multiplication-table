import { createPortal } from "react-dom";
import { motion, spring } from "motion/react";
import styles from "@/components/Modal/Modal.module.css";

export default function Modal({ children, closeModal }) {
  const root = document.getElementById("modal");

  const clickHandler = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={(e) => clickHandler(e)}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3, type: spring }}
        className={styles.content}
      >
        {children}
      </motion.div>
    </div>,
    root
  );
}
