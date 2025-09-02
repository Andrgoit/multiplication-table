import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { useContext } from "react";
import soundContext from "@/contexts/sound/context";

import styles from "./SoundButton.module.css";

export default function SoundButton() {
  const { isSoundOn, soundToggler } = useContext(soundContext);

  return (
    <div onClick={soundToggler} className={styles.container}>
      {isSoundOn ? <BiVolumeFull size={26} /> : <BiVolumeMute size={26} />}
    </div>
  );
}
