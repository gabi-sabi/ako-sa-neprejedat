import { data } from "../assets/data";
import { useState } from "react";
import { Question } from "./Question";

export const QuestionList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex-col justify-center items-center w-full text-center md:w-1/2">
      {data.map((area) => (
        <Question
          key={area.id}
          area={area}
          selected={area.id === selectedId}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
};
