import { useState } from "react";
import { GoGear } from "react-icons/go";
import { ButtonsBlock } from "@/components";
import styles from "@/components/SettingsButton/SettingsButton.module.css";

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.button}>
      <GoGear size={26} onClick={() => setIsOpen(!isOpen)} />
      {isOpen ? (
        <div className={styles.list}>
          <ButtonsBlock />
        </div>
      ) : null}
    </div>
  );
}
