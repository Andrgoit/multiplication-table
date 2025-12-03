import { SoundButton, ChangeLangBtn, ThemeButton } from "@/components";

import styles from "@/components/ButtonsBlock/ButtonsBlock.module.css";

export default function ButtonsBlock() {
  return (
    <div className={styles.wrapper}>
      <SoundButton />
      <ThemeButton />
      <ChangeLangBtn />
    </div>
  );
}
