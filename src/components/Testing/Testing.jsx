import { motion } from "motion/react";
import { useState } from "react";
import { Task } from "@/components";
import { toast } from "react-toastify";

import { useContext } from "react";
import soundContext from "@/contexts/sound/context";

import useSound from "use-sound";

import correct from "@/assets/audio/correct1.mp3";
import wrong from "@/assets/audio/wrong1.mp3";

import styles from "./Testing.module.css";

export default function Testing({ numbers, maxRandomNumber, back }) {
  const [testsCount, setTestsCount] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const { isSoundOn } = useContext(soundContext);

  const percentCorrectAnswers = Math.ceil(
    (correctAnswerCount / testsCount) * 100
  );

  const [playCorrect] = useSound(correct);
  const [playWrong] = useSound(wrong);

  const randomeIdx = () => {
    const minRandomNumber = 1;
    return Math.ceil(
      Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber
    );
  };

  const test = numbers[randomeIdx() - 1];

  const correctChoice = () => {
    if (isSoundOn) {
      playCorrect();
    }
    setTestsCount((prev) => prev + 1);
    setCorrectAnswerCount((prev) => prev + 1);
    toast.success("Правильно! Молодец!");
  };

  const wrongChoice = () => {
    if (isSoundOn) {
      playWrong();
    }

    setTestsCount((prev) => prev + 1);
    toast.error("Ошибся! :(");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.wrapper}
    >
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Статистика:</h2>
        <p>Количество вопросов:{testsCount}</p>
        <p>Количество правильных ответов:{correctAnswerCount}</p>
        <p>
          Процент правильных ответов:
          {percentCorrectAnswers ? percentCorrectAnswers : 0}%
        </p>
      </div>
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Выберите правильный ответ</h2>
        <Task
          test={test}
          correctChoice={correctChoice}
          wrongChoice={wrongChoice}
        />
      </div>
      <button onClick={back} className={styles.button}>
        Назад
      </button>
    </motion.div>
  );
}
