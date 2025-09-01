import { useState } from "react";
import styles from "./SettingsTestPage.module.css";

export default function SettingsTestPage({ settingsHandler }) {
  const [checkedNumbers, setCheckedNumbers] = useState([]);
  const [isAllChacked, setIsAllChacked] = useState(false);
  const allCheckedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const isDisabled = checkedNumbers.length < 1;

  const allCheckboxHandler = () => {
    if (!isAllChacked) {
      setIsAllChacked(true);
      setCheckedNumbers([]);
      return setCheckedNumbers([...allCheckedNumbers]);
    } else {
      setCheckedNumbers([]);
      setIsAllChacked(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    settingsHandler(checkedNumbers);
  };

  const checkboxHandler = (event) => {
    const { value } = event.target;

    if (!checkedNumbers.includes(value)) {
      return setCheckedNumbers((prev) => [...prev, value]);
    } else {
      const idx = checkedNumbers.indexOf(value);
      const newArray = checkedNumbers.filter((_, index) => index != idx);
      return setCheckedNumbers(newArray);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Настройки:</h2>
      <p className={styles.text}>Выберите необходимые столбцы таблицы:</p>

      <form action="" onSubmit={submitHandler} className={styles.form}>
        <div>
          <div className={styles.column}>
            <label>
              <input
                type="checkbox"
                value={1}
                checked={checkedNumbers.includes("1")}
                name="number"
                onChange={checkboxHandler}
              />
              на 1
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("2")}
                name="number"
                value={2}
                onChange={checkboxHandler}
              />
              на 2
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("3")}
                name="number"
                value={3}
                onChange={checkboxHandler}
              />
              на 3
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("4")}
                name="number"
                value={4}
                onChange={checkboxHandler}
              />
              на 4
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("5")}
                name="number"
                value={5}
                onChange={checkboxHandler}
              />
              на 5
            </label>
          </div>
          <div className={styles.column}>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("6")}
                name="number"
                value={6}
                onChange={checkboxHandler}
              />
              на 6
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("7")}
                name="number"
                value={7}
                onChange={checkboxHandler}
              />
              на 7
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("8")}
                name="number"
                value={8}
                onChange={checkboxHandler}
              />
              на 8
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("9")}
                name="number"
                value={9}
                onChange={checkboxHandler}
              />
              на 9
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("10")}
                name="number"
                value={10}
                onChange={checkboxHandler}
              />
              на 10
            </label>
          </div>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isAllChacked}
            name="number"
            value="all"
            onChange={allCheckboxHandler}
          />
          {isAllChacked ? "Снять все" : "Выбрать все"}
        </label>

        <button
          type="submit"
          disabled={isDisabled}
          style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
          className={styles.button}
        >
          Начать
        </button>
      </form>
    </div>
  );
}
