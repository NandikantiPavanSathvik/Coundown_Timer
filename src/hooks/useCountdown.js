

// import { useState, useEffect } from 'react';

// export const useCountdown = (initialSeconds) => {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
//   useEffect(() => setSecondsLeft(initialSeconds), [initialSeconds]);

//   useEffect(() => {
//     if (secondsLeft <= 0) return;
//     const interval = setInterval(() => setSecondsLeft(s => s - 1), 1000);
//     return () => clearInterval(interval);
//   }, [secondsLeft]);

//   return {
//     days: Math.floor(secondsLeft / 86400),
//     hours: Math.floor((secondsLeft % 86400) / 3600),
//     minutes: Math.floor((secondsLeft % 3600) / 60),
//     seconds: secondsLeft % 60
//   };
// };


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