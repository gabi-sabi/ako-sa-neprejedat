import React, { useState, useEffect } from 'react';

export const BreathingExercisesPage = () => {
  const [number, setNumber] = useState(1);
  const [isExpanding, setIsExpanding] = useState(true);
  const [size, setSize] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((previousNumber) => {
        if (isExpanding) {
          if (previousNumber < 5) {
            setSize((previousSize) => previousSize + 8);
            return previousNumber + 1;
          } else {
            setIsExpanding(false);
            return previousNumber;
          }
        } else {
          if (previousNumber > 1) {
            setSize((previousSize) => previousSize - 8);
            return previousNumber - 1;
          } else {
            setIsExpanding(true);
            return previousNumber;
          }
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExpanding]);

  return (
    <div className="bg-white flex justify-center items-center relative">
      <div
        className={`w-${size} h-${size} rounded-full bg-light-green flex items-center justify-center text-4xl text-white shadow-2xl transition-all duration-1000`}
      >
        {number}
      </div>

      <div className="w-40 h-40 rounded-full bg-light-orange opacity-80 shadow-2xl absolute inset-40 "></div>
    </div>
  );
};
