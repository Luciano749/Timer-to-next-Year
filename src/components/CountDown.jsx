import { useState, useEffect } from "react";

import styles from "./CountDown.module.css";

const CountDown = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`01/01/${year + 1}`) - new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  //   ---
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    });
  });

  return (
    <div className={styles.timerToNewYear}>
      <h1 className={styles.days}>
        {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
      </h1>
      <h1 className={styles.hours}>
        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
      </h1>
      <h1 className={styles.minutes}>
        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
      </h1>
      <h1 className={styles.seconds}>
        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
      </h1>
      {/* ------------ */}
    </div>
  );
};

export default CountDown;
