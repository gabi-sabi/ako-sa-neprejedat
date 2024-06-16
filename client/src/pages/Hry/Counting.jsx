import { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';

export const CountingPage = () => {
  const [firstNumber, setFirstNumber] = useState(() =>
    Math.round(Math.random() * 20),
  );
  const [secondNumber, setSecondNumber] = useState(() =>
    Math.round(Math.random() * 20),
  );
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const generateNumbers = () => {
    setFirstNumber(Math.round(Math.random() * 20));
    setSecondNumber(Math.round(Math.random() * 20));
    setUserAnswer('');
  };

  const checkResult = (e) => {
    e.preventDefault();
    const userAnswerNum = Number(userAnswer);
    if (userAnswerNum === firstNumber + secondNumber) {
      setMessage('Spravne');
      setTimeout(() => {
        generateNumbers();
        setMessage('');
      }, 2000);
    } else {
      setMessage('Zkus to jeste jednou');
      setUserAnswer('');
    }
  };

  const messageClasses = cva(
    'text-2l font-bold text-center fixed bottom-40 lg:text-8xl md:text-lg sm:text:lg',
    {
      variants: {
        message: {
          Spravne: 'text-light-green',
          'Zkus to jeste jednou': 'text-light-red',
        },
      },
    },
  );

  return (
    <div className="bg-white flex flex-col justify-center items-center  ">
      <form className="flex flex-col items-center" onSubmit={checkResult}>
        <label className="text-green-900 lg:text-8xl md:text-lg sm:text-lg">
          {firstNumber}+{secondNumber}=
          <input
            type="number"
            className="bg-light-green bg-opacity-25 rounded w-40 outline-none"
            value={userAnswer}
            onChange={(event) => {
              setUserAnswer(event.target.value);
            }}
          ></input>
        </label>
        <button className="text-base font-bold text-green-900 m-12 bg-light-orange p-2 ">
          zkontroluj
        </button>
      </form>
      <p className={messageClasses({ message })}>{message}</p>
    </div>
  );
};
