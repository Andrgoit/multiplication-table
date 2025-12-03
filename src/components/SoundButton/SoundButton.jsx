import { GoUnmute, GoMute } from "react-icons/go";
import { useContext } from "react";
import { SoundContext } from "@/contexts/sound/SoundProvider";

import styles from "./SoundButton.module.css";

export default function SoundButton() {
  const { isSoundOn, soundToggler } = useContext(SoundContext);

  return (
    <div onClick={soundToggler} className={styles.container}>
      {isSoundOn ? (
        <GoUnmute size={26} color="#00da00" />
      ) : (
        <GoMute size={26} />
      )}
    </div>
  );
}
