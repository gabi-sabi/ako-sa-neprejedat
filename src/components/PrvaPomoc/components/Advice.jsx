import { Smile } from "lucide-react";
import { Button } from "../../ui/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const ButtonClose = ({ onClick }) => {
  <Button variant="outline" className="flex h-10 w-10" onClick={onClick}>
    X
  </Button>;
};

export const Advice = ({ type, area, setResponseType }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible), setResponseType(null);
  };

  return (
    <div className="flex w-full flex-row items-stretch">
      {isVisible && (
        <div className="flex w-full flex-row items-stretch">
          {type === "respFyzio" ? (
            <button className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl p-5">
              {area.adviceFyzio}
              <div className="absolute top-2 right-2">
                <ButtonClose onClick={handleClick} />
              </div>
              <div className="py-5">
                <Smile color="#A5DD9B" className="w-10 h-10" />
              </div>
            </button>
          ) : (
            <button className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl px-10 py-5">
              <ul>
                {area.adviceEmot.title.map((step, index) => (
                  <li className="text-left" key={index}>
                    {step}
                  </li>
                ))}
              </ul>
              <ul>
                {area.adviceEmot.points.map((step, index) => (
                  <li className="list-disc text-left" key={index}>
                    {step}
                  </li>
                ))}
              </ul>
              <div className="absolute top-2 right-2">
                <ButtonClose onClick={handleClick} />
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
