import { useState } from "react";
import { SettingsLearningPage, Learning } from "@/components";
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
} from "@/data";

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

export default function LearningPage() {
  const [selectedTable, setSelectedTable] = useState([]);

  const selecedNumberHandler = (obj) => {
    if (obj) {
      setSelectedTable(numbersObject[obj]);
    }
    return;
  };

  const backButtonHandler = () => {
    setSelectedTable([]);
  };

  return (
    <div className="container">
      {!selectedTable.length > 0 ? (
        <SettingsLearningPage selecedNumber={selecedNumberHandler} />
      ) : (
        <Learning selectedTable={selectedTable} back={backButtonHandler} />
      )}
    </div>
  );
}
