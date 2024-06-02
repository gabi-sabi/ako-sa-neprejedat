import { data } from "../assets/data";
import { useState } from "react";
import { Question } from "./Question";

export const QuestionList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex-col justify-center items-center w-1/2 text-center">
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
