import { useEffect, useState } from "react";

import styles from "./SettingsLearningPage.module.css";

const options = [
  { value: "1", label: "столбец на 1" },
  { value: "2", label: "столбец на 2" },
  { value: "3", label: "столбец на 3" },
  { value: "4", label: "столбец на 4" },
  { value: "5", label: "столбец на 5" },
  { value: "6", label: "столбец на 6" },
  { value: "7", label: "столбец на 7" },
  { value: "8", label: "столбец на 8" },
  { value: "9", label: "столбец на 9" },
  { value: "10", label: "столбец на 10" },
];

export default function SettingsLearningPage({ selecedNumber }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const elements = options.map(({ value, label }) => (
    <li key={value}>
      <button
        onClick={() => setSelectedOption(value)}
        className={styles.button}
      >
        {label}
      </button>
    </li>
  ));

  useEffect(() => {
    selecedNumber(selectedOption);
  }, [selectedOption]);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Настройки:</h2>
      <p>Выберите столбец, который хотите учить:</p>

      <ul className={styles.list}>{elements}</ul>
    </div>
  );
}
