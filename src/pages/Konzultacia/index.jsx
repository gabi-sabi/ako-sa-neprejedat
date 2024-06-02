import { FormRegister } from "../../components/FormRegister";
import { FormAbout } from "../../components/FormAbout";
import profilemockup from "../../assets/profilemockup.jpg";

export const KonzultaciaPage = () => {
  return (
    <div className="flex flex-row gap-8 max-w-6xl mx-auto p-4 md:p-8 items-stretch">
      <FormAbout photo={profilemockup} />
      <FormRegister
        title="Objednajte sa na konzultáciu"
        text="Z online konzultácie odchádzate s odpoveďami na všetky svoje otázky.
      Vytvorím vám jedálniček na mieru a pošlem do 30 minút po ukončení
      konzultácie e-mailom. Za pol hodiny zaplatíte 40€ (prosím poukázať
      vopred na účet najneskôr 24 hodín pred každou konzultáciou)."
        timeSlot1="11:00"
        timeSlot2="17:00"
        buttonText="Objednať sa"
      />
    </div>
  );
};
