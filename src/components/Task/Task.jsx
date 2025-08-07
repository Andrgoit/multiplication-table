import { useEffect, useState } from "react";

export default function Task({ test = {}, wrongChoice, correctChoice }) {
  const { task, correctAnswer } = test;
  const [randomeAnswers, setrandomeAnswers] = useState([]);

  const createRandomAnswer = () => {
    const answers = new Set();
    answers.add(correctAnswer);
    const currentNumber = Number(task.split("x")[0]);
    // console.log("currentNumber", currentNumber);
    setrandomeAnswers([]);

    while (answers.size < 5) {
      const random = Math.ceil(Math.random() * (10 - 1) + 1);
      const number = currentNumber * random;
      answers.add(number);
    }
    const shuffledAnswers = Array.from(answers).sort(() => Math.random() - 0.5);
    setrandomeAnswers(shuffledAnswers);
  };

  useEffect(() => {
    if (Object.keys(test).length > 0) {
      createRandomAnswer();
    }
  }, [correctAnswer, test]);

  const elements = randomeAnswers.map((btn) => (
    <li key={btn}>
      <button onClick={() => choiceHandler(btn)}>{btn}</button>
    </li>
  ));

  const choiceHandler = (number) => {
    if (number == correctAnswer) {
      correctChoice();
    } else {
      wrongChoice();
    }
  };

  // console.log("randomeAnswers", randomeAnswers);

  return (
    <div>
      {task}
      <div>
        <ul>{elements}</ul>
      </div>
    </div>
  );
}
