

import { useState, useEffect } from 'react';

export const useCountdown = (initialSeconds) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  useEffect(() => setSecondsLeft(initialSeconds), [initialSeconds]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const interval = setInterval(() => setSecondsLeft(s => s - 1), 1000);
    return () => clearInterval(interval);
  }, [secondsLeft]);

  return {
    days: Math.floor(secondsLeft / 86400),
    hours: Math.floor((secondsLeft % 86400) / 3600),
    minutes: Math.floor((secondsLeft % 3600) / 60),
    seconds: secondsLeft % 60
  };
};