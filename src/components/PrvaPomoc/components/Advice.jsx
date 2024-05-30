import { Smile } from "lucide-react";
import { Button } from "../../ui/Button";
import { useState } from "react";
import PropTypes from "prop-types";

const adviceFyzio = (
  <p>
    Super, Váš hlad je
    <span className="text-light-green font-bold">fyziologický</span>, najedzte
    sa.
  </p>
);

const adviceEmot = (
  <p>
    Váš hlad je <span className="text-light-red font-bold">emočný</span>,
    skúste:
  </p>
);

const adviceEmotList = (
  <ul>
    {area.adviceEmot.points.map((step, index) => (
       <li className="list-disc text-left" key={index}>
         {step}
            </li>
    ))}
  </ul>
);

const adviceEmotComb = (
  <div>
  <p>
    Ak ste pred hodinou jedli niečo malé, teraz je čas na kvalitné hlavné jedlo (250/300g).</p>
	<p>Ak ste pred hodinou obedovali alebo večerali, tento Váš hlad je
 <span className="text-light-red font-bold">emočný</span>,
    skúste:
  </p>
  </div>
);

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

const AdviceCard = ({ text, children, list }) => {
  return (
    <div className="cursor-pointer relative flex w-full flex-col justify-center items-center bg-white my-5 rounded-xl p-5">
      <div className="p-4">
        <div className="text-left font-bold">{text}</div>
        {list}
      </div>
      <div className="relative grid grid-cols-1 gap-6">{children}</div>
    </div>
  );
};

AdviceCard.propTypes = {
  text: PropTypes.string,
  list: PropTypes.string,
  children: PropTypes.any,
  handleClick: PropTypes.func,
};

export const Advice = ({ type, area, setResponseType, question }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
    setResponseType(null);
  };

  return (
  <div className="flex w-full flex-row items-stretch">
      {isVisible && (
         <div className="flex w-full flex-row items-stretch">
         {type === "respFyzio" ? (
           <AdviceCard text={adviceFyzio}>
             {
               <>
                 <Smile color="#A5DD9B" className="w-10 h-10" />
                 <ButtonClose onClick={handleClick} />
               </>
             }
           </AdviceCard>
         ) : (
          <AdviceCard
            text={question === "Kedy ste naposledy jedli?" ? adviceEmotComb : adviceEmot}
            list={adviceEmotList}
          >
             <ButtonClose onClick={handleClick} /> 
           </AdviceCard>
          )
        };
      );
    </div>
  )
};

Advice.propTypes = {
  type: PropTypes.string,
  area: PropTypes.string,
  setResponseType: PropTypes.bool,
};




