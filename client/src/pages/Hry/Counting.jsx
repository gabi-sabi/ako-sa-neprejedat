import { useEffect, useState } from 'react';

export const CountingPage = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const generateNumbers = () => {
    setFirstNumber(Math.round(Math.random() * 20));
    setSecondNumber(Math.round(Math.random() * 20));
    setUserAnswer('');
  };

  useEffect(() => {
    generateNumbers();
  }, []);
  console.log(firstNumber, secondNumber);

  const checkResult = (e) => {
    e.preventDefault();
    const userAnswerNum = Number(userAnswer);
    if (userAnswerNum === firstNumber + secondNumber) {
      setMessage('spravne');
      setTimeout(() => {
        generateNumbers();
        setMessage('');
      }, 2000);
    } else {
      setMessage('Zkus to jeste jednou');
      setUserAnswer('');
    }
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center text-8xl ">
      <form className="flex flex-col items-center" onSubmit={checkResult}>
        <label className="text-green-900">
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
        <button className="text-base font-bold text-green-900 m-12 bg-light-orange p-2 m-12">
          zkontroluj
        </button>
      </form>
      <p
        className={`text-2l font-bold text-center fixed bottom-40
           ${
             message === 'spravne'
               ? 'text-light-green'
               : message === 'Zkus to jeste jednou'
                 ? 'text-light-red'
                 : ''
           }`}
      >
        {message}
      </p>
    </div>
  );
};
