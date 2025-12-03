import logo from "@/assets/icons/logo/logo.png";
import styles from "@/components/Logo/Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo icon" width="100%" height="100%" />
    </div>
  );
}
