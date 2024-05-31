import { Smile } from "lucide-react";
import { Button } from "../../../components/ui/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const AdviceFyzio = () => {
  return (
    <div className="flex flex-col gap-10">
      <p>
        <span>Super, Váš hlad je </span>
        <span className="text-light-green font-bold">fyziologický</span>
        <span>, najedzte sa.</span>
      </p>
      <div className="flex flex-row justify-center">
        <Smile color="#A5DD9B" className="w-10 h-10" />
      </div>
    </div>
  );
};

const AdviceEmot = () => {
  return (
    <p>
      <span>Váš hlad je </span>
      <span className="text-light-red font-bold">emočný</span>
      <span>, skúste:</span>
    </p>
  );
};

const AdviceEmotList = ({ area }) => {
  return (
    <ul>
      {area.adviceEmot.points.map((step, index) => (
        <li className="list-disc text-left" key={index}>
          {step}
        </li>
      ))}
    </ul>
  );
};

AdviceEmotList.propTypes = {
  area: PropTypes.any,
};

const AdviceEmotComb = () => {
  return (
    <div>
      <p>
        Ak ste pred hodinou jedli niečo malé, teraz je čas na kvalitné hlavné
        jedlo (250/300g).
      </p>
      <p>
        <span>
          Ak ste pred hodinou obedovali alebo večerali, tento Váš hlad je{" "}
        </span>
        <span className="text-light-red font-bold">emočný</span>
        <span>, skúste:</span>
      </p>
    </div>
  );
};

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
ButtonClose.propTypes = {
  onClick: PropTypes.func,
};

const AdviceCard = ({ AdviceText, children, AdviceList, area }) => {
  return (
    <div className="cursor-pointer relative flex w-full flex-row justify-center items-center bg-white my-5 rounded-xl p-5">
      <div className="absolute right-2 top-2">{children}</div>
      <div className="p-5">
        <div className="text-left font-bold">
          <AdviceText />
        </div>
        {AdviceList && area && <AdviceList area={area} />}
      </div>
    </div>
  );
};

AdviceCard.propTypes = {
  AdviceText: PropTypes.node.isRequired,
  AdviceList: PropTypes.node,
  children: PropTypes.any,
  area: PropTypes.any,
};

export const Advice = ({ type, area, setResponseType, question }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setResponseType(null);
  };

  if (!isVisible) return null;

  return (
    <div className="flex w-full flex-row items-stretch">
      {type === "respFyzio" ? (
        <AdviceCard AdviceText={AdviceFyzio}>
          <ButtonClose onClick={handleClick} />
        </AdviceCard>
      ) : (
        <AdviceCard
          AdviceText={
            question === "Kedy ste naposledy jedli?"
              ? AdviceEmotComb
              : AdviceEmot
          }
          AdviceList={AdviceEmotList}
          area={area}
        >
          <ButtonClose onClick={handleClick} />
        </AdviceCard>
      )}
    </div>
  );
};

Advice.propTypes = {
  type: PropTypes.string,
  area: PropTypes.object,
  setResponseType: PropTypes.func,
  question: PropTypes.string,
};
