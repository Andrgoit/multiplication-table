import { VideoBlock } from "@/components";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className={styles.title}>
        Добро пожаловать на сайт, посвященный "Таблице умножения"!
      </h1>
      <p className={styles.text}>
        Изучение "Таблицы умножения" - это важный этап в обучении ребенка. Перед
        тем, как приступить к изучению, посмотрите видеоролики с рекомендациями.
        Возможо они помогут Вам упростить процесс изучения "Таблицы умножения".
      </p>
      <VideoBlock />
    </div>
  );
}
