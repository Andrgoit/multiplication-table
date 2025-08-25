import { useEffect, useState } from "react";
import Select from "react-select";

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

  useEffect(() => {
    selecedNumber(selectedOption);
  }, [selectedOption]);
  return (
    <div>
      <h2>Настройки:</h2>
      <p>Выберите столбец, который хотите учить.</p>
      <Select
        options={options}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder="Выберите столбец..."
      />
    </div>
  );
}
