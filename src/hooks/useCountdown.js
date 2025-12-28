import { useState, useEffect } from 'react';

export const useCountdown = (targetDate) => {
  // Calculate how many ms are left right now
  const calculateTimeLeft = () => {
    const difference = targetDate - Date.now();
    return difference > 0 ? Math.floor(difference / 1000) : 0;
  };

  const [secondsLeft, setSecondsLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setSecondsLeft(timeLeft);

      if (timeLeft <= 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return {
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor((secondsLeft % 86400) / 3600),
    minutes: Math.floor((secondsLeft % 3600) / 60),
    seconds: secondsLeft % 60,
    isEnded: secondsLeft <= 0
  };
};