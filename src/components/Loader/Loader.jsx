import { ThreeDots } from "react-loader-spinner";
import styles from "@/components/Loader/Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#de06fa"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
