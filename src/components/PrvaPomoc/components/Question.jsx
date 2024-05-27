import React from "react";
import { Advice } from "./Advice";
import { useState } from "react";

export const Question = ({ area, selected, onSelect }) => {
  const [responseType, setResponseType] = useState(null);
  return (
    <div
      className="h-full flex-col justify-center items-center gap-10"
      onClick={() => onSelect(area.id)}
    >
      <h2 className="font-bold text-2xl m-5">{area.question}</h2>
      <div className="flex flex-1 flex-col justify-center items-stretch">
        <div className="grid grid-cols-2 justify-items-stretch align-items-stretch text-xl gap-5">
          <button
            className={`cursor-pointer flex flex-1 flex-row justify-center items-center rounded-xl w-full h-full p-4 ${
              selected ? "bg-light-green" : "bg-white"
            }`}
            onClick={() => setResponseType("respFyzio")}
          >
            {area.respFyzio}
          </button>
          <button
            className={`cursor-pointer flex flex-1 flex-row justify-center items-center rounded-xl w-full h-full p-4 ${
              selected ? "bg-light-red" : "bg-white"
            }`}
            onClick={() => setResponseType("respEmot")}
          >
            {area.respEmot}
          </button>
        </div>
        <div className="flex w-full flex-row items-stretch">
          {responseType && <Advice type={responseType} area={area} />}
        </div>
      </div>
    </div>
  );
};
