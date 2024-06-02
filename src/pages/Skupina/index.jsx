import { FormRegister } from "../../components/FormRegister";
import { FormAbout } from "../../components/FormAbout";
import profilemockup2 from "../../assets/profilemockup2.jpg";

export const SkupinaPage = () => {
  return (
    <div className="flex flex-row gap-8 max-w-6xl mx-auto p-4 md:p-8 items-stretch">
      <FormAbout photo={profilemockup2} />
      <FormRegister
        title="Podporná skupina"
        text="V našej online podpornej skupine nájdeš podporu, povzbudenie a praktické nástroje a zvládnutie záchvatov prejedania. Stretávame sa každý pondelok a čtvrtok od 19:00 do 20:00 na Meetu. Cena vstupného je 10€. Link k pripojeniu posielame na e-mail po obdržaní platby."
        timeSlot1="19:00"
        buttonText="Rezervovať"
      />
    </div>
  );
};
