import { VideoBlock } from "@/components";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className={styles.title}>
        Добро пожаловать на сайт, посвященный таблице умножения!
      </h1>
      <p className={styles.text}>
        Изучение таблицы умножения - это важный этап в обучении ребенка. Перед
        тем, как приступить к изучению, посмотрите видеоролики с рекомендациями.
        Возможо они помогут Вам упростить процесс изучения таблицы умножения.
      </p>
      <VideoBlock />
    </div>
  );
}
