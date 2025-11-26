import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <h2 className={styles.title}>Настройки:</h2>
      <p className={styles.text}>Выберите необходимые столбцы таблицы:</p>

      <form onSubmit={submitHandler} className={styles.form}>
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
              <span>на 1</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("2")}
                name="number"
                value={2}
                onChange={checkboxHandler}
              />
              <span>на 2</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("3")}
                name="number"
                value={3}
                onChange={checkboxHandler}
              />
              <span>на 3</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("4")}
                name="number"
                value={4}
                onChange={checkboxHandler}
              />
              <span>на 4</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("5")}
                name="number"
                value={5}
                onChange={checkboxHandler}
              />
              <span>на 5</span>
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
              <span>на 6</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("7")}
                name="number"
                value={7}
                onChange={checkboxHandler}
              />
              <span>на 7</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("8")}
                name="number"
                value={8}
                onChange={checkboxHandler}
              />
              <span>на 8</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("9")}
                name="number"
                value={9}
                onChange={checkboxHandler}
              />
              <span>на 9</span>
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkedNumbers.includes("10")}
                name="number"
                value={10}
                onChange={checkboxHandler}
              />
              <span>на 10</span>
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
          <span>{isAllChacked ? "Снять все" : "Выбрать все"}</span>
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
    </motion.div>
  );
}
