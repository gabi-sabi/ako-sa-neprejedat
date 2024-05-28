import { X } from "lucide-react";
import { Smile } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PropTypes from "prop-types";

export const Advice = ({ type, area, setResponseType }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex w-full flex-row items-stretch">
      {isVisible && (
        <div className="flex w-full flex-row items-stretch">
          {type === "respFyzio" ? (
            <button className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl p-5">
              {area.adviceFyzio}
              <div className="absolute top-2 right-2">
                <Button
                  variant="outline"
                  size="h-10 w-10"
                  className="flex"
                  onClick={() => {
                    setIsVisible(!isVisible)
                    setResponseType(null)
                  }}    
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="py-5"><Smile color="#A5DD9B" className="w-10 h-10"/></div>
            </button>
            
          ) : (
            <button className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl px-10 py-5">
              <ul>
                {area.adviceEmot.title.map((step, index) => (
                  <li className="text-left" key={index}>{step}</li>
                ))}
              </ul>
              <ul>
                {area.adviceEmot.points.map((step, index) => (
                  <li className="list-disc text-left" key={index}>{step}</li>
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

Advice.propTypes = {
  type: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  setResponseType: PropTypes.bool.isRequired,
};

