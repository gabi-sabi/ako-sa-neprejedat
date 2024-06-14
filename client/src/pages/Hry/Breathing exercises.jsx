import React, { useState, useEffect } from 'react';

export const BreathingExercisesPage = () => {
  const [number, setNumber] = useState(1);
  const [isExpanding, setIsExpanding] = useState(true);
  const [size, setSize] = useState(200);

  const Bubble = ({}) => {};

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((previousNumber) => {
        if (isExpanding) {
          if (previousNumber < 5) {
            setSize((previousSize) => previousSize + 40);
            return previousNumber + 1;
          } else {
            setIsExpanding(false);
            return previousNumber;
          }
        } else {
          if (previousNumber > 1) {
            setSize((previousSize) => previousSize - 40);
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

  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: '#A5DD9B',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    transition: 'width 1s, height 1s',
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center relative">
      <p className="absolute top-6 text-lg color-green-900">
        Vykonajte toto jednoduché cvičenie dýchania:
        <br />
        Sledujte objekt, ako sa zväčšuje a zmenšuje. Keď sa objekt zväčšuje,
        dýchnite pomaly a hlboko. <br />
        Keď sa objekt zmenšuje, vydychujte pomaly a úplne.
        <br /> Opakujte tento cyklus sústredene a pokojne.
      </p>
      <div style={circleStyle}>{number}</div>

      <div className="w-40 h-40 rounded-full bg-light-orange opacity-80 shadow-2xl absolute inset-40 "></div>
      <div className="w-80 h-80 rounded-full bg-dark-blue opacity-80 shadow-2xl absolute right-20 bottom-20"></div>
      <div className="w-60 h-60 rounded-full bg-light-yellow opacity-80 shadow-2xl absolute left-80  bottom-20"></div>
      <div className="w-60 h-60 rounded-full bg-light-red opacity-80 shadow-2xl absolute right-80  top-20"></div>
    </div>
  );
};
