import { useEffect, useState } from "react";
import { SettingsTestPage, Testing } from "../../components";

import {
  one,
  two,
  tree,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
} from "../../data";

const numbersObject = {
  1: one,
  2: two,
  3: tree,
  4: four,
  5: five,
  6: six,
  7: seven,
  8: eight,
  9: nine,
  10: ten,
};

export default function TestPage() {
  const [settings, setSettings] = useState([]);
  const [table, setTable] = useState([]);
  const maxRandomNumber = table.length;

  const concatArrays = (numbers) => {
    let newArray = [];
    console.log("newArray", newArray);
    for (const number of numbers) {
      newArray = [...newArray, ...numbersObject[number]];
    }
    setTable(newArray);
  };

  useEffect(() => {
    if (settings.length > 0) {
      concatArrays(settings);
    }
  }, [settings]);

  const settingsHandler = (settings) => {
    setSettings(settings);
  };
  // console.log("table", table);
  // console.log("maxRandomNumber", maxRandomNumber);
  // console.log("settings", settings);

  return (
    <div className="container">
      {settings.length < 1 ? (
        <SettingsTestPage settingsHandler={settingsHandler} />
      ) : (
        <Testing numbers={table} maxRandomNumber={maxRandomNumber} />
      )}
    </div>
  );
}
