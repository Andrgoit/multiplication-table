import { useState } from "react";
import { GoGear } from "react-icons/go";
import { ButtonsBlock, Modal } from "@/components";
import styles from "@/components/SettingsButton/SettingsButton.module.css";

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);

  const closeHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.button}>
      <GoGear size={26} onClick={closeHandler} />
      {isOpen ? (
        <Modal closeModal={closeHandler}>
          <div className={styles.list}>
            <ButtonsBlock />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
