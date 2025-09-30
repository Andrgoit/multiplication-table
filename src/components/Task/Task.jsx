import { useEffect, useState } from "react";
import styles from "./Task.module.css";

export default function Task({ test = {}, wrongChoice, correctChoice }) {
  const { task, correctAnswer } = test;
  const [randomeAnswers, setrandomeAnswers] = useState([]);

  const createRandomAnswer = () => {
    const answers = new Set();
    answers.add(correctAnswer);
    const currentNumber = Number(task.split("x")[0]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [correctAnswer, test]);

  const choiceHandler = (number) => {
    if (number === correctAnswer) {
      correctChoice();
    } else {
      wrongChoice();
    }
  };
  const elements = randomeAnswers.map((btn) => (
    <li key={btn}>
      <button
        onClick={() => {
          choiceHandler(btn);
        }}
        className={styles.answerButton}
      >
        {btn}
      </button>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.task}>
        <span>{task}</span>=<span className={styles.answerFeeld}>?</span>
      </div>
      <div>
        <ul className={styles.list}>{elements}</ul>
      </div>
    </div>
  );
}
