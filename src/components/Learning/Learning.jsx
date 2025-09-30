import styles from "./Learning.module.css";

export default function Learning({ selectedTable, back }) {
  const elements = selectedTable.map(({ id, task, correctAnswer }) => (
    <li key={id} className={styles.item}>
      <span>{task} =</span>
      <span>{correctAnswer}</span>
    </li>
  ));

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{elements}</ul>
      <button onClick={back} className={styles.button}>
        Назад
      </button>
    </div>
  );
}
