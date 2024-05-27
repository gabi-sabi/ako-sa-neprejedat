import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const Advice = ({ type, area }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex w-full flex-row items-stretch">
      {isVisible && (
        <div className="flex w-full flex-row items-stretch">
          {type === "respFyzio" ? (
            <button className="cursor-pointer relative flex w-full flex-row justify-center items-center bg-white my-5 rounded-xl p-5">
              {area.adviceFyzio}
              <div className="absolute top-2 right-2">
                <Button
                  variant="outline"
                  size="h-10 w-10"
                  className="flex"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </button>
          ) : (
            <button className="cursor-pointer relative flex w-full flex-row justify-center items-center bg-white my-5 rounded-xl p-5">
              <ul>
                {area.adviceEmot.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
              <div className="absolute top-2 right-2">
                <Button
                  variant="outline"
                  size="h-10 w-10"
                  className="flex"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

/* 
<ul>
  {area.adviceEmot.map((step, index) => (
    <li key={index}>{step}</li>
  ))}
</ul>
  */
