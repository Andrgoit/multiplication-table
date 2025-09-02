import { useEffect, useState } from "react";
import SoundContext from "./context";
import { toast } from "react-toastify";

export default function Provider({ children }) {
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const soundSetting = localStorage.getItem("notification-sound");
    try {
      if (soundSetting) {
        setIsSoundOn(JSON.parse(soundSetting));
      } else {
        localStorage.setItem("notification-sound", JSON.stringify(false));
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
    setIsSoundOn((prev) => {
      const newValue = !prev;
      toast.info(`Звуковые эффекты - ${!newValue ? "выключены" : "включены"}`);
      return newValue;
    });
  };

  const soundProviderValue = {
    isSoundOn,
    soundToggler,
  };
  return (
    <SoundContext.Provider value={soundProviderValue}>
      {children}
    </SoundContext.Provider>
  );
}
