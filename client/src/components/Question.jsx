import { Advice } from "./Advice";
import { useState } from "react";
import PropTypes from "prop-types";

export const Question = ({ area, onSelect }) => {
  const [responseType, setResponseType] = useState(null);
  return (
    <div
      className="h-full flex-col justify-center items-center gap-10"
      onClick={() => onSelect(area.id)}
    >
      <h2 className="font-bold text-xl m-5 md:text-2xl">{area.question}</h2>
      <div className="flex flex-1 flex-col justify-center items-stretch">
        <div className="grid grid-cols-2 justify-items-stretch align-items-stretch text-base gap-5 md:text-xl">
          <button
            className={`cursor-pointer flex flex-1 flex-row justify-center items-center rounded-xl w-full p-4 ${
              responseType === "respFyzio" ? "bg-light-green" : "bg-white"
            }`}
            onClick={() => setResponseType("respFyzio")}
          >
            {area.respFyzio}
          </button>
          <button
            className={`cursor-pointer flex flex-1 flex-row justify-center items-center rounded-xl w-full p-4 ${
              responseType === "respEmot" ? "bg-light-red" : "bg-white"
            }`}
            onClick={() => setResponseType("respEmot")}
          >
            {area.respEmot}
          </button>
        </div>
        <div className="flex w-full flex-row items-stretch">
          {responseType && (
            <Advice
              type={responseType}
              area={area}
              setResponseType={setResponseType}
              question={area.question}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  area: PropTypes.any,
  onSelect: PropTypes.any,
  type: PropTypes.any,
  setResponseType: PropTypes.any,
};
