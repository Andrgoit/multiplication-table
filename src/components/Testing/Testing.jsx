import { useEffect, useState } from "react";
import { Task } from "/src/components";

import style from "./Testing.module.css";

export default function Testing({ numbers, maxRandomNumber }) {
  const [testsCount, setTestsCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const percentCorrectAnswers = Math.ceil(
    (correctAnswerCount / testsCount) * 100
  );

  const randomeIdx = () => {
    const minRandomNumber = 1;
    return Math.ceil(
      Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber
    );
  };

  const test = numbers[randomeIdx() - 1];
  // console.log("numbers", numbers);

  console.log("randomeIdx()", randomeIdx());
  // console.log("test", test);

  const correctChoice = () => {
    setTestsCount((prev) => prev + 1);
    setCorrectAnswerCount((prev) => prev + 1);
  };

  const wrongChoice = () => {
    setTestsCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <div>
          <h2>Статистика:</h2>
          <p>Количество вопросов:{testsCount}</p>
          <p>Количество правильных ответов:{correctAnswerCount}</p>
          <p>
            Процент правильных ответов:
            {percentCorrectAnswers ? percentCorrectAnswers : 0}
          </p>
        </div>
        <div>
          <h2>Выберите правильный ответ</h2>
          <Task
            test={test}
            correctChoice={correctChoice}
            wrongChoice={wrongChoice}
          />
        </div>
      </div>
    </div>
  );
}
