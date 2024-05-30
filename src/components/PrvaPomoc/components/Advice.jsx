import { Smile } from "lucide-react";
import { Button } from "../../ui/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const ButtonClose = ({ onClick }) => {
  return (
    <Button
      variant="outline"
      className="flex text-black font-bold bg-grey-700 h-10 w-15"
      onClick={onClick}
    >
      X
    </Button>
  );
};

const AdviceCard = ({ text, children }) => {
  return (
    <div className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl p-5">
      <div className="p-4">{text}</div>
      <div className="relative grid grid-cols-1 gap-6">{children}</div>
    </div>
  );
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
            <AdviceCard text={area.adviceFyzio}>
              {
                <>
                  <Smile color="#A5DD9B" className="w-10 h-10" />
                  <ButtonClose onClick={handleClick} />
                </>
              }
            </AdviceCard>
          ) : (
            <AdviceCard
              text={
                <>
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
                </>
              }
            >
              <ButtonClose onClick={handleClick} />
            </AdviceCard>
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

ButtonClose.propTypes = {
  onClick: PropTypes.any,
};

AdviceCard.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
  handleClick: PropTypes.any,
};
