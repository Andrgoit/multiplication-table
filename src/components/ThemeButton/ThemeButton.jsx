import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme/ThemeProvider";
import { GoSun, GoMoon } from "react-icons/go";

import styles from "@/components/ThemeButton/ThemeButton.module.css";

export default function ThemeButton() {
  const { theme, themeToggler } = useContext(ThemeContext);
  return (
    <div className={styles.buttonwrapper} onClick={themeToggler}>
      {theme === "light" ? <GoSun size={26} /> : <GoMoon size={26} />}
    </div>
  );
}
