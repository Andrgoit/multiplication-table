import { useEffect, useState } from "react";
// import SoundContext from "./context";
import { createContext } from "react";
import { toast } from "react-toastify";

export const SoundContext = createContext();

export default function SoundProvider({ children }) {
  const [isSoundOn, setIsSoundOn] = useState(true);

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

  return (
    <SoundContext.Provider value={{ isSoundOn, soundToggler }}>
      {children}
    </SoundContext.Provider>
  );
}
