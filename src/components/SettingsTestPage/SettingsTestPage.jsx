import { useState } from "react";
import styles from "./SettingsTestPage.module.css";

export default function SettingsTestPage({ settingsHandler }) {
  const [checkedNumbers, setCheckedNumbers] = useState([]);
  const [isAllChacked, setIsAllChacked] = useState(false);
  const allCheckedNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
    <div>
      <div>
        <h2 className={styles.title}>Настройки</h2>
        <p>Выберите необходимые столбцы таблицы:</p>
      </div>
      <form action="" onSubmit={submitHandler}>
        <label>
          x1
          <input
            type="checkbox"
            value={1}
            checked={checkedNumbers.includes("1")}
            name="number"
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x2
          <input
            type="checkbox"
            checked={checkedNumbers.includes("2")}
            name="number"
            value={2}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x3
          <input
            type="checkbox"
            checked={checkedNumbers.includes("3")}
            name="number"
            value={3}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x4
          <input
            type="checkbox"
            checked={checkedNumbers.includes("4")}
            name="number"
            value={4}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x5
          <input
            type="checkbox"
            checked={checkedNumbers.includes("5")}
            name="number"
            value={5}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x6
          <input
            type="checkbox"
            checked={checkedNumbers.includes("6")}
            name="number"
            value={6}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x7
          <input
            type="checkbox"
            checked={checkedNumbers.includes("7")}
            name="number"
            value={7}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x8
          <input
            type="checkbox"
            checked={checkedNumbers.includes("8")}
            name="number"
            value={8}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x9
          <input
            type="checkbox"
            checked={checkedNumbers.includes("9")}
            name="number"
            value={9}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          x10
          <input
            type="checkbox"
            checked={checkedNumbers.includes("10")}
            name="number"
            value={10}
            onChange={checkboxHandler}
          />
        </label>
        <label>
          {isAllChacked ? "Снять все" : "Выбрать все"}
          <input
            type="checkbox"
            checked={isAllChacked}
            name="number"
            value="all"
            onChange={allCheckboxHandler}
          />
        </label>
        <div>
          <button type="submit" disabled={checkedNumbers.length < 1}>
            Начать
          </button>
        </div>
      </form>
    </div>
  );
}
