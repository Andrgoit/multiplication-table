import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "./SoundButton.module.css";

export default function SoundButton() {
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const soundSetting = localStorage.getItem("notification-sound");
    try {
      if (soundSetting) {
        setIsSoundOn(soundSetting);
      } else {
        localStorage.setItem("notification-sound", false);
      }
    } catch (error) {
      console.log("Sound settings is not found!");
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notification-sound", isSoundOn);
  }, [isSoundOn]);

  const soundToggler = () => {
    setIsSoundOn((prev) => !prev);
    toast.info(`Звуковые эффекты - ${isSoundOn ? "выключены" : "включены"}`);
  };

  return (
    <div onClick={soundToggler} className={styles.container}>
      {isSoundOn ? <Volume2 /> : <VolumeX />}
    </div>
  );
}
